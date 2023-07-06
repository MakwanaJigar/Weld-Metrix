import React, {useState} from 'react'


export default function TextForm(props) {
    
    // const textarea={
    //     border:"2px solid black"
    // }


    const [text, settext] = useState('');

// Convert to UpperCase 
    const handleUpClick = () => {
        console.log("Convert in UpperCase Text");
        let newText= text.toUpperCase();
        settext(newText);
    }
    const handleOnChange= (event) => {
        
        // console.log("on Change");
        settext(event.target.value);
    }
    // Convert To LowerCase

    const handleLoClick= () => {
        let newText= text.toLowerCase();
       console.log("Convert in LowerCase Text");
        settext(newText);
    }

    // Copy Test

    const handleCopy = () => {
        console.log("Copy to Clipboard");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    

// Clear Text 

    const handleClearClick = () => {
        let newText=("");
       console.log("Clear Text");
        settext(newText);
    }

   
  return (
    <>
        <div className="container" style={{color:props.mode==='dark'?'#ffffff':'#1d2a47'}}>
     <h2> {props.heading} </h2>
     {/*  style={{color:props.mode ==='white'?'black':'white'}} */}
<div className="mb-3">

  <textarea className="form-control" value = {text} style={{backgroundColor:props.mode==='light'?'#ffffff':'#1d2a47', color:props.mode==='light'?'#1d2a47':'#ffffff'} }  onChange={handleOnChange} id="myBox" rows="8"></textarea>
{/* style={{backgroundColor:props.mode==='white'?'#1d2a47':'light',color:props.mode==='white'?'#1d2a47':'light'}} */}
</div>

<div className='container d-block' >
<button className='btn btn-primary' onClick={handleUpClick}>Convert To UpperCase</button>
<button className='btn btn-success mx-2' onClick={handleLoClick}>Convert To LowerCase</button>
</div>

<div className='container d-block my-2'>
<button className='btn btn-warning mx-2' onClick={handleCopy}>Copy Text</button>
<button className='btn btn-danger mx-2' onClick={handleClearClick}>Clear Text</button>
</div>

    </div>

    <div className='container my-4' style={{color:props.mode==='dark'?'#ffffff':'#1d2a47'}}>
        <h1>Your Text Summary</h1>

        {/* text.split("").length is used for check how many words  & length is used for check length */}
        <p>{text.split(" ").length} words and {text.length} characters</p> 
        
        {/* 0.008 *  text.split(" ").length is used for check time to read written words */}
        <p>{0.008 * text.split(" ").length} Minutes to read</p>

        <h2 className='my-1'>Preview</h2>
        <p>{text}</p>

   
    </div>

    </>

  )
}


