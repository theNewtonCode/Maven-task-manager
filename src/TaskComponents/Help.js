import React from 'react';
import '../stylingFiles/Help.css';

export const Help = ({theme}) => {
  const theme_btn_class = theme ? "btn-submit btn-dark":'btn-submit';
  const theme_style = theme ? {  backgroundColor: "black",
    color: "#919191"}:{};
  return (
    <div className="help-container" style={theme_style}>
      <section className="how-it-works-section" style={theme_style}>
        <div className="how-it-works-text">
          <h2>How the Application Works</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eveniet pariatur, earum quisquam tenetur autem, quae, beatae eaque fugiat ullam corporis iure assumenda mollitia tempore veniam! Sequi harum eligendi nemo!</p>
        </div>
        <div className="how-it-works-image">
          <img src="/help_app.png" alt="How it works" />
        </div>
      </section>
      <section className="contact-section" style={theme_style}>
        <h2>Contact Us</h2>
        <div className='container' style={theme_style}>
        <form className="contact-form" style={theme_style}>
          <div className="form-group">
            <label htmlFor="contactName">Name</label>
            <input type="text" id="contactName" className="form-control" style={theme_style} placeholder="Your name" />
          </div>
          <div className="form-group">
            <label htmlFor="contactEmail">Email</label>
            <input type="email" id="contactEmail" className="form-control" style={theme_style} placeholder="Your email" />
          </div>
          <div className="form-group">
            <label htmlFor="contactMessage">Message</label>
            <textarea id="contactMessage" className="form-control" style={theme_style} placeholder="Your message"></textarea>
          </div>
          <button type="submit" className={theme_btn_class}>Send Message</button>
        </form>
        </div>
      </section>
      <section className="links-section">
        <h2>Useful Links</h2>
        <ul className="links-list">
        <li><a href="https://github.com/theNewtonCode">Visit GitHub Account</a></li>
          <li><a href="https://github.com/theNewtonCode/EatEasy-smart-mess">Project EatEasy</a></li>
          <li><a href="https://github.com/theNewtonCode/EnigmaScan">Project EnigmaScan</a></li>
          <li><a href="https://github.com/theNewtonCode/Attendify">Project Attendify</a></li>
        </ul>
      </section>
    </div>
  );
}
