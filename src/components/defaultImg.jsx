import React from "react";
import defaultImg from "../images/defaultImg.png";

export default function DefaultImg(props) {
  const { media_type, id } = props;
  return (
    <div
      style={{
        backgroundColor: "#C0C0C0",
        height: 200,
        width: 140,
        paddingTop: 20,
        paddingLeft: 20
      }}
    >
      <img
        src={defaultImg}
        alt="default pic"
        onClick={() => (window.location = `/content/${media_type}/${id}`)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}
