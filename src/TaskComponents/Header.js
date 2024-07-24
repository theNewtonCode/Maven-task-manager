import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"

export default function Header(props) {
    let class_name_var_dark ="navbar navbar-expand-lg navbar-dark bg-dark";
    let class_name_var_light="navbar navbar-expand-lg navbar-light"; 
    let light_style_var={backgroundColor: "#e3f2fd"};

    const class_name = props.theme === "dark" ? class_name_var_dark: class_name_var_light;
    const style_type = props.theme === "dark" ? {}: light_style_var;
  return (

<nav className={class_name} style={style_type}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Maven</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/help">Help</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            QuickAccess
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

// setting prop datatype
Header.propTypes = {
theme : PropTypes.string
}

Header.defaultProps ={
    theme : "light"
}