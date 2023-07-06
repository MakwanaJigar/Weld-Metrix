import React from 'react'
import { Link } from 'react-router-dom'

function User(props) {

  const navColor = {
    backgroundColor: "#05439f"
  }
  let input ={
    border:"1px solid black"
  }

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



<div className="container d-block w-75 min-vh-100 bg-body-tertiary py-5" >

<nav className="navbar bg-body-#e5e7eb">

<div className="container-fluid">
<h4 className="container ms-1"><b>{props.heading}</b></h4>
<form className="d-flex" role="search">
<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
<button className="btn btn-outline-dark bg-dark text-light" type="submit">Search</button>

</form>
<div className="btn-group" role="group" aria-label="Third group">
<button type="button" className="btn btn-dark">+</button>
</div>

</div>


</nav>


  <div>
   
    <div className="data my-5">

      <div className="board  bg-light">
        <table width="90%">
          <thead className="text-dark">
            <tr className="tr ">
              <td className="td">
                <p><b>ID</b></p>
              </td>
              <td className="td">
                <p><b>Name</b></p>
              </td>
              <td className="td">
                <p><b>Role</b></p>
              </td>
              <td className="td">
                <p><b>Joining Date</b></p>
              </td>
              <td className="td ">
                <p><b>Password</b></p>
              </td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>

  <div className="row g-3 p-3 w-75">
                    <div className="col" >
                        <label><b>ID</b></label>
                        <input type="number" className="form-control" placeholder="ID" aria-label="First name" style={input}  />
                    </div>
                    <div className="col">
                    <label><b>Name</b></label>
                        <input type="number" className="form-control" placeholder="Name" aria-label="Last name" style={input}  />
                    </div>
                </div>
                <div className="row g-3 p-3  w-75">
                    <div className="col">
                    <label><b>Role</b></label>
                    <select className="form-select" id="floatingSelectGrid">
                            <option value="Shield Gas">Welder</option>
                            <option value="Purging Gas">Supervisor</option>
                        </select>
                    </div>
                    <div className="col">
                    <label><b>Joining Date</b></label>
                        <input type="date" className="form-control" placeholder="Joining Date" aria-label="Last name" style={input} />
                    </div>
                </div>
                <div className="row g-3 p-3  w-50">
                    <div className="col">
                    <label><b>Password</b></label>
                        <input type="password" className="form-control" placeholder="Password" aria-label="First name" style={input}  />
                    </div>
                    <div>
                    <button className="container btn btn-primary my-3 px-0 w-25" type="button">Add</button>                    
                </div>
                    
                </div>

</div>
</div>  


      {/* <div className="nav d-flex bg-body-tertiary" id="nav">

          <nav className="bg-blue-900 pr-12 py-4 flex gap-14 flex-col px-3 w-20 min-vh-100" style={navColor}>

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
            <button className=" btn btn-primary" type="button" >Logout</button>
          </nav>



          <div className="container d-block my-3 w-30 bg-body-tertiary py-2" >

          <nav className="navbar bg-body-#e5e7eb m-3">
        <h3 className="container"><b>User</b></h3>
</nav>

<div className="btn-group position-relative l-5" role="group" aria-label="Third group">
    <button type="button" className="btn btn-dark my-3 m-4">+</button>
  </div>


          <div className="board bg-light mx-5 t-1">
          <table width="90%">
            <thead className="text-dark">
              <tr className="tr ">
                <td className="td">
                  <p><b>ID</b></p>
                </td>
                <td className="td">
                  <p><b>Name</b></p>
                </td>
                <td className="td">
                  <p><b>Role</b></p>
                </td>
                <td className="td">
                  <p><b>Joining Date</b></p>
                </td>
                <td className="td">
                  <p><b>Password</b></p>
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </div>     
      </div>    */}
  </>
      )
}

      export default User
