import NavBar from "../Components/Navbar";
import SettingsBar from "../Components/SettingsBar";
import "./Test1.css";

const Test1 = () => {
  return (
    <div className="test-1">
      <div className="state">
        <div className="state-child" />
        <div className="college-end-date">College End Date</div>
        <input type="date" value="01/01/1990" className="state-child"></input>
      </div>
      <NavBar />
      <SettingsBar />
      <img className="profile1-icon" alt="" src="/profile1.svg" />
      <img
        className="unsplashc8ta0gwpbqg-icon"
        alt=""
        src="/unsplashc8ta0gwpbqg@2x.png"
      />
      <div className="edit-profile1">Edit profile</div>
      <div className="firstname">
        <div className="firstname-child" />
        <div className="first-name">First Name</div>{" "}
        <input
          type="text"
          placeholder="Mehrab"
          className="firstname-child"
        ></input>
      </div>
      <div className="city">
        <div className="firstname-child" />
        <div className="college-start-date">College Start Date</div>
        <input
          type="date"
          value="01/01/1990"
          className="firstname-child"
        ></input>
      </div>
      <div className="email">
        <div className="email-child" />
        <div className="resume">Email</div>
        <input
          type="text"
          placeholder=" Mehrabbozorgi.business@gmail.com"
          className="email-child"
        ></input>
        <img className="email-item" alt="" src="/group-8.svg" />
      </div>
      <div className="password">
        <div className="password-child" />
        <div className="resume">Resume</div>
        <div className="upload-file">Upload File</div>
      </div>
      <div className="address">
        <div className="password-child" />

        <div className="mobile-number">Mobile Number</div>
        <input
          type="text"
          placeholder="9876543210"
          className="password-child"
        ></input>
        <img className="address-item" alt="" src="/group-81.svg" />
      </div>
      <div className="address1">
        <div className="password-child" />
        <div className="mobile-number">Password</div>
        <input
          type="password"
          placeholder="abc123"
          className="password-child"
        ></input>
      </div>
      <div className="lastname">
        <div className="lastname-child" />
        <div className="last-name">Last Name</div>
        <input
          type="text"
          placeholder="Bozorgi"
          className="lastname-child"
        ></input>
      </div>
      <div className="rectangle-parent">
        <div className="group-child" />
        <div className="cancel">Cancel</div>
      </div>
      <div className="rectangle-group">
        <div className="group-item" />
        <div className="save">Save</div>
      </div>
      <img className="view-icon" alt="" src="/view.svg" />
      <img className="folder-fill-icon" alt="" src="/folder-fill.svg" />
    </div>
  );
};

export default Test1;
