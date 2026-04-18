"use client"

import { Truck } from "lucide-react"

export default function Background() {
  const rows = 15
  const cols = 15

  const grid = []

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const isImage = (r + c) % 2 === 0

      grid.push(
        <div
          key={`${r}-${c}`}
          className="flex items-center justify-center"
        >
          {isImage ? (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Temple_T_logo.svg/250px-Temple_T_logo.svg.png"
              alt=""
              className="w-10 h-10 object-contain opacity-30"
            />
          ) : (
            <Truck className="w-10 h-10 opacity-30" />
          )}
        </div>
      )
    }
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div
        className="grid w-full h-full"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`
        }}
      >
        {grid}
      </div>
    </div>
  )
}