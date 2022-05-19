import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);

  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4">
                <a href={photo.src.original} rel="noreferrer" target="_blank">
                  <img
                    src={photo.src.landscape}
                    key={index}
                    className="img-fluid pic"
                    alt={photo.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
