import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  let colorStyle = {
    padding: "10px",
    border: "none",
    borderRadius: "100%",
    display:"inline-block",
    fontSize: "15px"
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container">
        <a className="navbar-brand">{props.mainName}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/textform">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className='colorPalets'>
          <button className='btn-danger mx-2' onClick={props.toggleMode} style={colorStyle}></button>
          <button className='btn-primary mx-2' onClick={props.toggleMode} style={colorStyle}></button>
          <button className='btn-secondary mx-2' onClick={props.toggleMode} style={colorStyle}></button>
        </div>
      </div>
    </nav>
  )
}
