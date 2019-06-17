import React, { Fragment } from "react";
import info from "../config/info";
import "./Profile.less";

import personal from "../images/personal.png";
import timmy from "../images/timmy.png";
import zigzags from "../images/zigzags.png";

class Profile extends React.PureComponent {
  render() {
    return (
      <div className="profile">
        <div className="left">
          <h1 className="name">{info.name}</h1>
          <img className="zig" src={zigzags} />
        </div>
        <div className="right">
          <img className="personalImage" src={timmy} />
          <h2>{info.job}</h2>
        </div>
      </div>
    );
  }
}

export default Profile;
