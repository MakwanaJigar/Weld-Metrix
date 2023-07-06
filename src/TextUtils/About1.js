import React, { useState } from 'react'

export default function About1() {
    
   const [myApp, setmyApp] = useState(
   {
        color:'#040f35',
        backgroundColor:'white'
    })
    const [btnText,setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = () =>{
        if(myApp.color === '#040f35'){
            setmyApp(
                {
                    color:'white',
                    backgroundColor:'#040f35',
                    border:'1px solid white'
                })
                setBtnText("Enable dark Mode");
         }
         else{
            setmyApp(
                {
                    color:'#040f35',
                    backgroundColor:'white'
                })
                setBtnText("Enable light Mode");
              }
           
    }
  
    return (
    <div className='container my-5' style={myApp}>
        <h2 className='my-3'>AboutUs</h2>
    
          <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed"  style={myApp} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" style={myApp} aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" >Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed"  style={myApp} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse"  style={myApp} aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" style={myApp} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" style={myApp} aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>      
</div>

<div  className='container my-3'>
<button className='btn btn-success m-3' onClick={toggleStyle}>{btnText}</button>
</div>
    </div>
    
)
}
