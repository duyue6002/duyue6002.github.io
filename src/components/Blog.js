import React, { Fragment } from "react";

import Github from "../images/github.svg";

import "./Blog.less";

class Blog extends React.PureComponent {
  render() {
    return (
      <div className="blog">
        <h3>博客 & 笔记</h3>
        <div id="icons">
          <div className="col-3 notes">
            <a href="#">
              <Github />
            </a>
            <p>博客文章</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
