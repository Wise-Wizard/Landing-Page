import NavBar from "../Components/Navbar";
import SettingsBar from "../Components/SettingsBar";
import "./Test1.css";

const Test1 = () => {
  return (
    <div className="test-1">
      <div className="state">
        <div className="state-child" />
        <div className="college-end-date">College End Date</div>
        <div className="div">01/01/1990</div>
        <img
          className="keyboard-arrow-down"
          alt=""
          src="/keyboard-arrow-down.svg"
        />
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
        <input type="text" placeholder="Mehrab" className="mehrab"></input>
      </div>
      <div className="city">
        <div className="firstname-child" />
        <div className="college-start-date">College Start Date</div>
        <div className="div1">01/01/1990</div>
        <img
          className="keyboard-arrow-down1"
          alt=""
          src="/keyboard-arrow-down1.svg"
        />
      </div>
      <div className="email">
        <div className="email-child" />
        <div className="resume">Email</div>
        <div className="mehrabbozorgibusinessgmailc">
          Mehrabbozorgi.business@gmail.com
        </div>
        <img className="email-item" alt="" src="/group-8.svg" />
      </div>
      <div className="password">
        <div className="password-child" />
        <div className="resume">Resume</div>
        <div className="upload-file">Upload File</div>
      </div>
      <div className="address">
        <div className="password-child" />
        <img className="address-item" alt="" src="/group-81.svg" />
        <div className="mobile-number">Mobile Number</div>
        <div className="div2">9876543210</div>
      </div>
      <div className="address1">
        <div className="password-child" />
        <div className="mobile-number">Password</div>
        <div className="div2">abc123</div>
      </div>
      <div className="lastname">
        <div className="lastname-child" />
        <div className="last-name">Last Name</div>
        <div className="bozorgi">Bozorgi</div>
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
