import { useState } from 'react'
import { Switch } from "@/components/ui/switch"
import './App.css'

function App() {
  const [hColor,setHColor]=useState<string>("black")
  const handleColor = ():void=> {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setHColor(`rgb(${r},${g},${b})`);
};
const [enabled, setEnabled] = useState<boolean>(false);
const [color,setColor]=useState<string>("white")
const [buttonColor,setBColor]=useState<string>("black")
  return (
    <>
    <div style={{backgroundColor:color, height: "100vh", width: "100%",}}>
    <h1 style={{color:hColor}}>Super Cool Color Changing Machine</h1>
    <button className='magical' onClick={handleColor} style={{color:color, backgroundColor:buttonColor}}>Click me to see MAGICAL THINGS</button>
    <br/>
    <Switch className='switch'checked={enabled} onCheckedChange={(value) => {
    setEnabled(value)
    if(value){
      setColor("black")
      setBColor("white")
    }
    else{
      setColor("white")
      setBColor("black")
    }
    }}/>
    </div>
    </>
  )
}

export default App
