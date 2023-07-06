import React from "react"
import propTypes from 'prop-types'



export default function Navbar(props) {
  return (
<>
    <nav className="navbar navbar-expand-lg bg-light position-fixed w-100">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <img className="image bg-light p-1" src="https://th.bing.com/th/id/R.42d46bb7dd2202a0fcc64d956c468528?rik=mLK9qdzW0jetfA&riu=http%3a%2f%2fwww.keepsake.in%2fwp-content%2fuploads%2f2014%2f07%2fcropped-new_KEEPSAKE_LOGO.png&ehk=zs4ueHEs%2fDozcWFUsmIClvasRWFn%2b9ElSd3pGXYxNyM%3d&risl=&pid=ImgRaw&r=0" width="150px" height="50px"/>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-light" aria-current="page" href="/">
               <b> {props.add}</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/">
               <b>{props.data}</b> 
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

    </>

      

  );
}

Navbar.propTypes = {add : propTypes.string.isRequired,
                     data : propTypes.string.isRequired}

// Navbar.defaultProps={
//                     add :'Add-User',
//                     data :'Data-of-Welding'
// };