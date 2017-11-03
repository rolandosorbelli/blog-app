import React, { Component } from 'react';

class Container extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="post-preview">
              <a href="#">
                <h2 className="post-title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </h2>
                <h3 className="post-subtitle">
                  In id lorem a quam pharetra semper
                </h3>
              </a>
              <p className="post-meta">Posted by
                <a href="#"> User1 </a>
              on September 24, 2017</p>
            </div>
            <hr />
            <div className="post-preview">
              <a href="#">
                <h2 className="post-title">
                  Maecenas justo turpis, ultricies non pulvinar vitae, suscipit a sem
                </h2>
              </a>
              <p className="post-meta">Posted by
                <a href="#"> User2 </a>
              on September 18, 2017</p>
            </div>
            <hr />
            <div className="post-preview">
              <a href="#">
                <h2 className="post-title">
                  Praesent feugiat est quis felis viverra dignissim. Sed ante diam, suscipit nec ex eget, convallis interdum nunc
                </h2>
                <h3 className="post-subtitle">
                  Curabitur at diam eget nisl sodales pharetra
                </h3>
              </a>
              <p className="post-meta">Posted by
                <a href="#"> User3 </a>
              on August 24, 2017</p>
            </div>
            <hr />
            <div className="post-preview">
              <a href="#">
                <h2 className="post-title">
                  Suspendisse at auctor risus. Vestibulum hendrerit sapien ut nisi dictum, sit amet congue elit facilisis
                </h2>
                <h3 className="post-subtitle">
                  Quisque tristique id mi vitae venenatis. Pellentesque fringilla neque dolor, eget aliquet ligula scelerisque non
                </h3>
              </a>
              <p className="post-meta">Posted by
                <a href="#"> User4 </a>
              on July 8, 2017</p>
            </div>
            <hr />
            <div className="clearfix">
              <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Container;