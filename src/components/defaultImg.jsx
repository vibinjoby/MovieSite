import React from "react";
import defaultImg from "../images/defaultImg.png";

export default function DefaultImg(props) {
  const { media_type, id } = props;
  return (
    <div
      style={{
        backgroundColor: "#C0C0C0",
        height: 130,
        width: 90,
        textAlign: "center",
        lineHeight: "120px",
        position: "relative"
      }}
    >
      <img
        src={defaultImg}
        alt="default pic"
        onClick={() => (window.location = `/content/${media_type}/${id}`)}
        style={{
          verticalAlign: "middle",
          width: "50px",
          height: "50px"
        }}
      />
    </div>
  );
}
