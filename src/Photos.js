import React from "react";

export default function Photos(props) {
  console.log(props.photos);

  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row">
          <div className="col-4">
            {props.photos.map(function (photo, index) {
              return (
                <a href={photo.src.original} rel="noreferrer" target="_blank">
                  <img
                    src={photo.src.landscape}
                    key={index}
                    className="img-fluid"
                    alt={photo.alt}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
