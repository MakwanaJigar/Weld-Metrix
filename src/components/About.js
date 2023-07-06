import React from 'react'

export default function About(props) {
   



 let myapp={
        color:'white',
        backgroundColor:'blue'
    }
    let myapp1 = {
      color:'red',
  }
 let myapp2 = {
    color:'blue',

 }
  let myapp3 = {
  color:'green',
}
let myproject={
  backgroundColor : "gainsboro",
  color : "black",
  border : "solid black 2px",
  margin : "20px"
}
let p={
  color :"dodgerblue"
}
let h2={
  color : "red",
 
}
let upload={
  color : "red"
} 

  return (
    <>   
    <p>Hello World</p>

    <h1 classNameName='container' style={myapp}>About Us</h1>
    <div classNameName='container' style={myapp1}>
      
      <div classNameName="accordion accordion-flush" id="accordionFlushExample">
  <div classNameName="accordion-item">
    <h2 classNameName="accordion-header" id="flush-headingOne">
      <button classNameName="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" classNameName="accordion-collapse collapse"  style={myapp1} aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div classNameName="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> classNameName. This is the first item's accordion body.</div>
    </div>
  </div>
  <div classNameName="accordion-item"  style={myapp2}>
    <h2 classNameName="accordion-header" id="flush-headingTwo">
      <button classNameName="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" classNameName="accordion-collapse collapse"  style={myapp2} aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div classNameName="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> classNameName. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div classNameName="accordion-item" style={myapp3}>
    <h2 classNameName="accordion-header" id="flush-headingThree">
      <button classNameName="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" classNameName="accordion-collapse collapse"  style={myapp3} aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div classNameName="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> classNameName. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
        <div  classNameName='container'>
        <button classNameName="btn btn-primary my-3">Enable Dark Mode</button>
        </div>
    </div>
      
        </>
)
}

