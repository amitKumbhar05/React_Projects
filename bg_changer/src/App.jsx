import { useState } from "react"

function App() {
  const [color,setColor] = useState("pink")

  return (
   <div className="h-screen w-screen flex flex-wrap " style={{backgroundColor:color}}>
    <div className="flex fixed flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center shadow-xl gap-3  bg-white px-3 py-2 rounded-2xl">
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white font-bold" style={{backgroundColor:"red"}} 
          onClick={()=>setColor("red")}>red</button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white font-bold" style={{backgroundColor:"blue"}} 
          onClick={()=>setColor("blue")}>blue</button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white font-bold" style={{backgroundColor:"yellow"}} 
          onClick={()=>setColor("yellow")}>yellow</button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white font-bold" style={{backgroundColor:"purple"}} 
          onClick={()=>setColor("purple")}>purple</button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white font-bold" style={{backgroundColor:"black"}} 
          onClick={()=>setColor("black")}>black</button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white font-bold" style={{backgroundColor:"green"}} 
          onClick={()=>setColor("green")}>green</button>
        </div>
    </div>
   </div>
  )
}

export default App
