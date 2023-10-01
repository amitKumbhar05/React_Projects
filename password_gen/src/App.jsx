import { useCallback, useEffect, useRef, useState } from "react"


function App() {
  
  const [length,setLength] = useState(8)
  const [num,setNum] = useState(false)
  const [char,setChar] = useState(false)
  const [password,setPassword] = useState("")
  const pref = useRef()
  
  const passGenerator = useCallback(()=>{
    let pass =""
    let str =""

    str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLNMOPQRSTUVWXYZ"
    if(num)str+="1234567890"
    if(char)str+="~!@#$%^&*(){}[]"
    for (let i = 1; i <=length; i++) {
      let ch = Math.floor(Math.random() * str.length +1)
      pass+= str[ch];
      
    }
    setPassword(pass)
  },[length,num,char,setPassword])

  const copytoclipboard = useCallback(()=>{
    pref.current?.select();
    // pref.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)

  },[password])

  useEffect(()=>{
    passGenerator()
  },[length,char,num,setPassword])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500" >
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={pref}
        />
        <button
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copytoclipboard}
        >copy</button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range" className="cursor-pointer" min={6} max={100} value={length}
          onChange={(e)=>{
            setLength(e.target.value)
          }}/>
          <label htmlFor="">length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={num}
          id="numberInput"
          onChange={() => {
              setNum((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={char}
              id="characterInput"
              onChange={() => {
                  setChar((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
      </div>
    </div>
  )
}

export default App
