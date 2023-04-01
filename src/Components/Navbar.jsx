import React from "react";
function NavBar() {
  return (
    <div style={{ backgroundColor: "#4D85F1" }} className="side-bar1-icon">
      <img
        alt=""
        className="company-icon"
        src="/logo@0 1.svg"
        style={{ padding: "20px" }}
      />
      <div className="home-icons">
        <img
          alt=""
          src="/Home.svg"
          style={{ padding: "20px  30px", marginTop: "30px" }}
        />
        <img
          alt=""
          c
          src="/Notifications1.svg"
          style={{ padding: "20px 30px", marginTop: "25px" }}
        />
        <img
          alt=""
          src="/Calender.svg"
          style={{ padding: "20px 30px", marginTop: "5px" }}
        />
        <img
          alt=""
          src="/Show chart.svg"
          style={{ padding: "20px 30px", marginTop: "30px" }}
        />
        <img
          alt=""
          src="/Person.svg"
          style={{ padding: "20px 30px", marginTop: "25px" }}
        />
      </div>
      <div
        style={{
          backgroundColor: "#FF7008",
          height: "80px",
          width: "80px",
          borderRadius: "40px",
          marginLeft: "15px",
          marginTop: "250px",
        }}
      >
        <img
          alt=""
          className="company-icon"
          src="/Vector.svg"
          style={{ marginLeft: "2px", padding: "18px" }}
        />
      </div>
    </div>
  );
}
export default NavBar;
