import React, { useState } from 'react'
import QRCode from "react-qr-code";
export const Qr = () => {

    const [qrCode, setQrCode] = useState('')
    const [input, setInput] = useState('')

    function handleOnClick(){
        setQrCode(input)
    }

    return (
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
        <div>
            <h1>QR code genarator </h1>
            <div>
                <input onChange={(e) => setInput(e.target.value)} type='text' name='qr-code' placeholder='Enter the data'></input>
                <button disabled={input&&input.trim !==''? false:true}  onClick={handleOnClick}>Genarate</button>
            </div>
            <div style={{marginTop:'20px'}}>
                <QRCode id='qr-code' value={qrCode} size={400} bgColor='#ffffff' />
            </div>
        </div>
        </div>
    )
}
