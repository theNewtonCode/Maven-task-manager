import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export const Footer = (props) =>{

  const theme_color_major = props.theme ? "#212121": "#0a4275";

  return (
    <div >
      <section className="">
      <footer className="text-center text-white" style={{backgroundColor: theme_color_major}}>

        <div className="container p-4 pb-0">
          <section className="">
            <p className="d-flex justify-content-center align-items-center">
              <span className="me-3">Register for free</span>
              <button type="button" className="btn btn-outline-light btn-rounded">
                Sign up!
              </button>
            </p>
          </section>
        </div>
        <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
          © 2024 Copyright:
          <a className="text-white" href="/" style={{textDecoration:"None"}}> MavenTasks.com</a>
        </div>
      </footer>
    </section>
      
    </div>
  );
}

// Setting prop datatype
Footer.propTypes = {
  theme: PropTypes.string
}

Footer.defaultProps = {
  theme: "light"
}
