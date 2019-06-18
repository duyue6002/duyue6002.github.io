import React, { Fragment } from "react";

import Github from "../images/github.svg";
import Webpack from "../images/webpack.svg";
import LeetCode from '../images/leetcode.svg'

import "./Blog.less";

class Blog extends React.PureComponent {
  render() {
    return (
      <div className="blog">
        <h3>Blog & Notes</h3>
        <div id="icons">
          <div className="col-3 notes">
            <a href="https://github.com/duyue6002/Blog">
              <Github />
            </a>
            <p>博客文章</p>
          </div>
          <div className="col-3 notes">
            <a href="https://duyue6002.github.io/webpack-practice/#/">
              <Webpack />
            </a>
            <p>学习 Webpack</p>
          </div>
          <div className="col-3 notes">
            <a href="https://duyue6002.github.io/leetcode-solutions/#/">
              <LeetCode />
            </a>
            <p>数据结构与算法</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
