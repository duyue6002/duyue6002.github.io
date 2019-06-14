import React, { Fragment } from "react";
import info from "../config/info";
import "./Profile.less";

import personal from "../images/personal.png";
import zigzags from "../images/zigzags.png";
import Github from "../images/github.svg";

class Profile extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <div className="left">
          <h1 className="name">{info.name}</h1>
          <div id="icons">
            <a href="https://github.com/duyue6002" target="_blank">
              <Github
                className="icon"
                width={50}
                height={50}
              />
            </a>
          </div>
          <img className="zig" src={zigzags} />
        </div>
      </Fragment>
    );
  }
}

export default Profile;
