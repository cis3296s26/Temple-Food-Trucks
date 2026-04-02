export function PageMain({children}) {
  return (
    <>
    <div className="pt-18 relative flex min-h-screen h-max pb-12 justify-center bg-linear-to-br from-gray-400 via-60%-600 to-blue-300 px-4" >
        <div className="w-full max-w-3/4 rounded-2xl h-fit border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            {children}
        </div>
    </div>
    </>
  );
}