import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = e.currentTarget.getAttribute("alt");
    if (url) {
      window.open(url, "_blank");
    }
  };
  return (
    <div style={{ margin: "auto" }}>
      <div className="section">
        <img
          src="github-mark.png"
          className="contact-img"
          alt="https://github.com/sxxxp"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default Contact;
