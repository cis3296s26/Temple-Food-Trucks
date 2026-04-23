"use client";

import { useState } from "react";
import { Typefoodbutton } from "./Typefoodbutton";
import TruckAnimation from "./TruckAnimation";
import MiniPopUpInfo from "./MiniPopUpInfo";

export default function SignUpInfoDesign() {
  const [typefood, settypefood] = useState("");
  const [foodlist, setfoodlist] = useState([]);
  const [primage, setprimage] = useState(null);
  const [allimg, setallimg] = useState([null]);

  function addFood() {
    if (typefood.trim() === "") return;
    setfoodlist([
      ...foodlist,
      { name: typefood, color1: randomColor(), color2: randomColor() },
    ]);
    settypefood("");
  }

  function removeFood(index) {
    setfoodlist(foodlist.filter((_, i) => i !== index));
  }

  function randomColor() {
    const colors = ["#40E0D0", "#00FFFF", "#00BFFF", "#7DF9FF", "#0070BB"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function importpriImg(e) {
    const file = e.target.files[0];
    if (!file) return;
    setprimage(URL.createObjectURL(file));
  }

  function handleAdditionalImage(index, file) {
    const newImgs = [...allimg];
    newImgs[index] = URL.createObjectURL(file);
    setallimg(newImgs);
  }

  function addImageField() {
    setallimg([...allimg, null]);
  }

  return (
    <div className="flex justify-center p-6 min-h-screen">
      <div className="relative w-full px-25 max-w-8/12 bg-linear-to-b border-2 from-white/50 to-black/50 rounded-3xl shadow-xl/30 shadow-black pt-8 pb-12">
        <h1 className="text-4xl font-bold text-center mb-6">
          Food Truck Registration
        </h1>

        <TruckAnimation className="animate-truck2 opacity-100" />
        {/* <MiniPopUpInfo className="relative z-10"></MiniPopUpInfo> */}

        <form className="space-y-8 -mt-65">
          {/* General */}
          <Section title="Truck Information" color="bg-blue-500">
            <input name="name" type="text" placeholder="Truck Name" />
            <input name="phoneNumber" type="text" placeholder="Phone Number" />
            <textarea
              name="description"
              placeholder="Description"
              className="input h-32 resize-none"
            />
          </Section>

          {/* Dietary */}
          <Section title="Dietary Restrictions" color="bg-green-400">
            <div className="flex gap-2">
              <input
                name="dietaryRestrictions"
                value={typefood}
                onChange={(e) => settypefood(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addFood()}
                placeholder="Ex: Vegan"
                className="input flex-1"
              />
              <Typefoodbutton onClick={addFood}>Add</Typefoodbutton>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              {foodlist.map((f, i) => (
                <span
                  key={i}
                  style={{
                    background: `linear-gradient(${f.color1}, ${f.color2})`,
                  }}
                  className="px-4 py-2 rounded-xl text-white relative group"
                >
                  {f.name}
                  <button
                    onClick={() => removeFood(i)}
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 font-black cursor-pointer text-red-500 text-4xl"
                  >
                    X
                  </button>
                </span>
              ))}
            </div>
          </Section>

          {/* Price */}
          <Section title="Price Range" color="bg-orange-400">
            <div className="flex gap-4">
              <input
                name="minPrice"
                type="number"
                placeholder="Min"
                className="input w-24"
              />
              <span className="flex items-center">to</span>
              <input
                name="maxPrice"
                type="number"
                placeholder="Max"
                className="input w-24"
              />
            </div>
          </Section>

          {/* Time */}
          <Section title="Working Hours" color="bg-red-400">
            <div className="flex gap-4">
              <input
                name="openingTime"
                type="time"
                placeholder="Opening Time"
                className="input w-24"
              />
              <span className="flex items-center">to</span>
              <input
                name="closingTime"
                type="time"
                placeholder="Closing Time"
                className="input w-24"
              />
            </div>
          </Section>

          {/* Location */}
          <Section title="Location" color="bg-teal-400">
            <input
              name="location"
              type="text"
              placeholder="Location"
              className="input w-24"
            />
          </Section>

          {/* Primary Image */}
          <Section title="Primary Image" color="bg-amber-400">
            <input
              name="image"
              type="file"
              accept="image/*"
              onChange={importpriImg}
            />
            {primage && (
              <img src={primage} className="mt-3 rounded-xl max-h-60" />
            )}
          </Section>

          {/* Additional Images */}
          <Section title="Additional Images" color="bg-violet-400">
            {allimg.map((img, index) => (
              <div key={index} className="flex flex-col gap-2">
                <input
                  name="maxPrice"
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleAdditionalImage(index, e.target.files[0])
                  }
                />
                {img && (
                  <img src={img} className="rounded-xl max-h-40 border" />
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={addImageField}
              className="mt-3 px-4 py-2 bg-black text-white rounded-xl hover:scale-105 transition"
            >
              + Add Another Image
            </button>
          </Section>

          {/* Submit */}
          <button className="w-full py-3 text-xl font-bold bg-black text-white rounded-xl hover:scale-105 border transition">
            Register
          </button>
        </form>
      </div>

      <style jsx>{`
        input,
        textarea {
          background: white;
          padding: 10px;
          border-radius: 20px;
          width: 100%;
          outline: none;
        }

        input[type="file"]::file-selector-button {
          border: 2px solid #000;
          padding: 5px 10px;
          border-radius: 15px;
          background-color: #fff;
          transition: 0.3s;
          cursor: pointer;
          margin-right: 25px;
        }
      `}</style>
    </div>
  );
}

function Section({ title, children, color }) {
  return (
    <div className={`${color} p-6 bg-opacity rounded-2xl shadow-lg/30`}>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}
