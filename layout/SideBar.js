"use client";
import { Fragment, useState, useEffect, useContext } from "react";
import { UserContext } from "./NoxfolioLayout";


const SideBar = () => {
  const userData = useContext(UserContext);

  const toggleSidebar = () => {
    console.log("hi");
    document.querySelector("body").classList.remove("side-content-visible");
  };

  const iconSelector = (icon) => {
      switch (icon) {
        case "Instagram":
          return "fa-instagram"
          break;
        case "Twitter":
          return "fa-twitter"
          break;
        case "Facebook":
          return "fa-facebook-f"
          break;
        case "LinkedIn":
          return "fa-linkedin"
          break;
      
        default: "no-icon"
          break;
      }
  }
  return (
    <Fragment>
      {/*Form Back Drop*/}
      <div className="form-back-drop" onClick={() => toggleSidebar()} />
      {/* Hidden Sidebar */}
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div className="cross-icon" onClick={() => toggleSidebar()}>
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>Get Appointment</h4>
          </div>
          {/*Appointment Form*/}
          <div className="appointment-form">
            <form
              method="post"
              onSubmit={(e) => {
                e.preventDefault();
                toggleSidebar();
              }}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="text"
                  defaultValue=""
                  placeholder="Name"
                  required=""
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  defaultValue=""
                  placeholder="Email Address"
                  required=""
                />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" rows={5} defaultValue={""} />
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn">
                  Submit now
                </button>
              </div>
            </form>
          </div>
          {/*Social Icons*/}
          <div className="social-style-one">

          {userData &&
            userData.user.social_handles.map((account) => {
              return (
                <a href={account.url} key={account._id}>
                {/* <img src={account.image.url} alt="SocialMediaIcon.png"/> */}
              <i className={`fab ${iconSelector(account.platform)}`} />
                </a>
              );
            })}
          </div>
        </div>
      </section>
      {/*End Hidden Sidebar */}
    </Fragment>
  );
};
export default SideBar;
