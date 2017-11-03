import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="masthead bg-image">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>Blog App</h1>
                <span className="subheading">Blog created using JS, React and Bootstrap</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;