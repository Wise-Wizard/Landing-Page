import React from "react";
function SettingsBar() {
  return (
    <div className="side-bar2">
      <b className="settings">settings</b>
      <img
        className="keyboard-arrow-left"
        alt=""
        src="/keyboard-arrow-left.svg"
      />
      <div className="edit-profile-parent">
        <b className="edit-profile">Edit profile</b>
        <img className="edit-icon" alt="" src="/edit.svg" />
      </div>
      <div className="notification-parent">
        <div className="notification">Notification</div>
        <img className="notifications-icon" alt="" src="/notifications.svg" />
      </div>
      <div className="lock-parent">
        <img className="notifications-icon" alt="" src="/lock.svg" />
        <div className="notification">Security</div>
      </div>
      <div className="settings-parent">
        <img className="notifications-icon" alt="" src="/settings.svg" />
        <div className="appearance">Appearance</div>
      </div>
      <div className="help-outline-parent">
        <img className="notifications-icon" alt="" src="/help-outline.svg" />
        <div className="notification">Help</div>
      </div>
      <div className="side-bar2-child" />
    </div>
  );
}
export default SettingsBar;
