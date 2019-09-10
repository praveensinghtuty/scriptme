import React, { Component } from "react";
import "../css/imageFrameComponent.css";
import images from "../data/images";
import icon from "../icons/zoom_in_50.png";
class ImageFrame extends Component {
  state = {};
  hoverImage = event => {
    event.currentTarget.getElementsByClassName("hover")[0].style.display =
      "block";
  };
  hoverOutImage = event => {
    event.currentTarget.getElementsByClassName("hover")[0].style.display =
      "none";
  };

  displayImage = event => {
    event.currentTarget.getElementsByClassName("hover")[0].style.display =
      "none";
  };

  render() {
    return images.map((image, index) => {
      return (
        <div
          className="frame-border"
          key={"parent" + index}
          onMouseOver={e => this.hoverImage(e)}
          onMouseOut={e => this.hoverOutImage(e)}
        >
          <img key={"img" + index} src={image.url} alt={image.text}></img>
          <div
            key={"hover" + index}
            id={"hover" + index}
            className="hover"
            onClick={e => this.displayImage(e)}
          >
            <img key={"icon" + index} src={icon} alt="hover icon"></img>
          </div>
          <div className="frame-text" key={"text" + index}>
            {image.text}
          </div>
        </div>
      );
    });
  }
}

export default ImageFrame;
