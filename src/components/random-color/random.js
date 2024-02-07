import React, { useEffect } from 'react'
import { useState } from 'react';

const Random = () => {

    let [colorType ,setColorType] = useState('hex');
    
    const [color , setColor] = useState('#000000');
      
    function randomHex(length){
        return Math.floor(Math.random()*length);
    }


       function createRandomHexColor(){
         const hex = ['1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F']
         let hexColor = '#';

         for(let i =0 ;i<6;i++){ 
           hexColor +=hex[randomHex(hex.length)];
         }
         console.log(hexColor);
         setColor(hexColor)
        }

      function createRandomRgbColor(){

        const r = randomHex(256);
        const g = randomHex(256);
        const b = randomHex(256);

        setColor(`rgb(${r},${g},${b})`);
      }  

      useEffect(()=>{
      
        if(colorType = "rgb") createRandomRgbColor();
        
        else createRandomHexColor();
        
        
      },[colorType]);

  return (
    <div style={{
          width: "100vw",
        height: "100vh",
        background:color
    }}>
        <h1>Random Color Genarator</h1>

    <button onClick={()=>setColorType("hex")} >Create Hex Color</button>
    <button onClick={()=>setColorType("rgb")}>Create RGB Color</button>
    <button onClick={colorType ==='hex'?createRandomHexColor:createRandomRgbColor}>Genarate Color</button>

     <div>
        <h3>{colorType==='rgb' ? "RGB":"HEX"}</h3>
        <h1>{color}</h1>
     </div>

    </div>
  )
}

export default Random