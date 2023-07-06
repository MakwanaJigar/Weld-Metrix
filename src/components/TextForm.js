// import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function TextForm(props) {


 const navColor={
    backgroundColor:"#05439f"  
  }
  let input ={
    border:"1px solid black"
  }

  // const [text, setText] = useState("User Data");
  return (
    <>
      <div className="nav d-flex bg-body-tertiary" id="nav">

        <nav className="bg-blue-900 pr-12 py-4 flex gap-14 flex-col px-3 flex items-center min-vh-100 position-fixed"  style={navColor}>

        <h4 className="text-light p-3"><b>Admin</b></h4>

        <Link className="nav-link text-light -hover " aria-current="page" to="/">
           Welder
          </Link>
          <Link className="nav-link  text-light" aria-current="page" to="/user">
           User
          </Link>
          <Link className="nav-link text-light" to="/profile" >
            Profile 
          </Link>
          <button className="container btn btn-primary my-2 px-5" type="button" >Logout</button>
        </nav>



        <div className="container d-block  w-75 min-vh-100 bg-body-tertiary py-5" >

        <nav className="navbar bg-body-#e5e7eb">
        <h4 className="container my-3"><b>{props.heading}</b></h4>
  <div className="container-fluid">
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-dark bg-dark text-light" type="submit">Search</button>
    </form>
    <div className="btn-group" role="group" aria-label="Third group">
    <button type="button" className="btn btn-dark">+</button>
  </div>
  </div>
  

</nav>


              <div className="board  bg-light">
                <table width="90%">
                  <thead className="text-dark">
                    <tr className="tr ">
                      <td className="td">
                        <p><b>Seem Name</b></p>
                      </td>
                      <td className="td">
                        <p><b>Process</b></p>
                      </td>
                      <td className="td">
                        <p><b>Voltage</b></p>
                      </td>
                      <td className="td">
                        <p><b>Current</b></p>
                      </td>
                      <td className="td ">
                        <p><b>Gas Flow</b></p>
                      </td>
                    </tr>
                  </thead>
                </table>
              </div>

              <div className="container d-block my-2 w-auto  bg-body-tertiary py-5" >

          <div className="container d-block my-0 w-15 bg-body-tertiary py-2" >
          <div className="col-md w-15">

         <nav className="navbar bg-body-#e5e7eb">
                    <h3 className='m-3'><b><u>{props.heading1}</u></b></h3>
        </nav>

                    <div className="form-floating w-25">
                        <select className="form-select" id="floatingSelectGrid">
                            <option value="Shield Gas">MIG</option>
                            <option value="Purging Gas">TIG</option>
                            <option value="Plasma Gas ">Plasma</option>
                        </select>
                       
                    </div>
                </div>
            
                <div className="row g-3 p-3">
                    <div className="col" >
                        <label><b>Voltage</b></label>
                        <input type="number" className="form-control" placeholder="Voltage" aria-label="First name" style={input}  />
                    </div>
                    <div className="col">
                    <label><b>Current</b></label>
                        <input type="number" className="form-control" placeholder="Current" aria-label="Last name" style={input}  />
                    </div>
                </div>
                <div className="row g-3 p-3">
                    <div className="col">
                    <label><b>Gas Flow</b></label>
                        <input type="number" className="form-control" placeholder="Gas Flow" aria-label="First name" style={input}  />
                    </div>
                    <div className="col">
                    <label><b>Preheat Temperature </b></label>
                        <input type="number" className="form-control" placeholder="Preheat Temperature " aria-label="Last name" style={input} />
                    </div>
                </div>
                <div className="row g-3 p-3">
                    <div className="col">
                    <label><b>Wire Feed Speed</b></label>
                        <input type="number" className="form-control" placeholder="Wire Feed Speed" aria-label="First name" style={input}  />
                    </div>
                    <div className="col">
                    <label><b>Wire Diameter</b></label>
                        <input type="number" className="form-control" placeholder="Wire Diameter" aria-label="Last name" style={input}  />
                    </div>
                </div>
                <div className="row g-3 p-3">
                <h4>Base Material 1</h4>

                    <div className="col">  
                    <label><b>Composition</b></label>
                        <input type="text" className="form-control" placeholder="Composition" aria-label="First name" style={input}  />
                    </div>
                    <div className="col">
                    <label><b>Thickness</b></label>
                        <input type="number" className="form-control" placeholder="Thickness" aria-label="Last name" style={input}  />
                    </div>
                </div>

               < div className="row g-3 p-3">
               <h4>Base Material 2</h4>
                   
                    <div className="col">     
                    <label><b>Composition</b></label>
                        <input type="text" className="form-control" placeholder="Composition" aria-label="First name" style={input}  />
                    </div>
                    <div className="col">
                    <label><b>Thickness</b></label>
                        <input type="number" className="form-control" placeholder="Thickness" aria-label="Last name" style={input}  />
                    </div>
                </div>

                < div className="row g-3 p-3">
                <div className="col">     
                    <label><b>Filler Material Composition</b></label>
                        <input type="text" className="form-control" placeholder="Filler Material Composition " aria-label="First name" style={input}  />
                    </div>
                    <div className="col ">
                    <label><b>Gas Material Composition</b></label>
                        <input type="text" className="form-control" placeholder=" Gas Material Composition" aria-label="Last name" style={input}  />
                    </div>
                    </div>
                    <button className="container btn btn-primary my-3 px-5 w-25" type="button">Submit</button>                    
                </div>
              </div>
              </div>
              </div>                  
          

    </>
  );
}
