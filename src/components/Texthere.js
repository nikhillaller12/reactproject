import React,{ useState } from 'react'

export default function Texthere(props) {
    const handle1=()=>{
        setText(text.toUpperCase());
        props.showalert(" Converted to upperCase","success");
    }
    const handle3=()=>{
        setText(text.toLowerCase());
        props.showalert(" Converted to lowerCase","success");
    }
    const handle2= (event)=>{
        setText(event.target.value);
    }
    const [text,setText] = useState('Enter Text here');
    return (
        <>
        <h3 style={{color:props.mode==='light'?'black':'white'}}>{props.title}</h3>
        <div className="mb-3">
            <textarea className="form-control" style={{background:props.mode==='dark'?'grey':'white',color:props.mode==='light'?'black':'white'}} id="exampleFormControlTextarea1" onChange={handle2} value={text} rows="8"></textarea>
        </div>
        <div className="d-inline-flex">
        <button type="button" className="btn btn-dark" onClick={handle1}>Convert To Uppercase</button>
        <div className="ms-3">
        <button type="button" className="btn btn-dark" onClick={handle3}>Convert To Lowercase</button>
        </div>
        </div>
        </>
    );
}
