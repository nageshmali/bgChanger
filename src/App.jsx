import { useState } from "react"

function App() {

  const [color,setcolor] = useState("white");

  const setRed = () => {
    setcolor("red");
  }

  const setBlue = () => {
    setcolor("blue");
  }

  const setGreen = () => {
    setcolor("green");
  }

  const setYellow = () => {
    setcolor("yellow");
  }

  const reset = () => {
    setcolor("white");
  }

  return (
    <>
      <div className={`h-[100vh] flex  bg-${color}-500 items-center justify-center`}>
        <div className="mainBox flex bg-white border-black border-2 rounded-md p-10 flex-col md:flex-row justify-center gap-10 text-xl font-medium">
          <button onClick={setRed} className="border-black border-2 bg-red-500 px-6 py-1">Red</button>
          <button onClick={setBlue} className="border-black border-2 bg-blue-500 px-6 py-1">Blue</button>
          <button onClick={setGreen} className="border-black border-2 bg-green-500 px-6 py-1">Green</button>
          <button onClick={setYellow} className="border-black border-2 bg-yellow-500 px-6 py-1">Yellow</button>
          <button onClick={reset} className="border-black border-2 bg-white px-6 py-1">Reset</button>
        </div>
      </div>
    </>
  )
}

export default App
