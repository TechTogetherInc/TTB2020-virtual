import React from "react";

const AttendHeader = () => (
  <div className="attendContainer">
    <h1>Hacker Registration is Open</h1>

    <div className="register-button">
      <a
        type="button"
        target="_blank"
        href="https://techtogetherboston.eventbrite.com/"
      >
        REGISTER
      </a>
    </div>
    <br />
    <br />
    <br />
    <form
      class="form"
      action="https://shehacks.us17.list-manage.com/subscribe/post?u=34946c2c134f07563cac527a4&amp;id=d441aab50c"
      method="post"
      id="subscribe-form"
      name="subscribe-form"
      target="_blank"
      novalidate
    >
      <input
        type="email"
        name="EMAIL"
        className="attend-email"
        size="50"
        placeholder="include me in event specific emails"
      />
      <br />
      <input type="submit" value="SUBSCRIBE" className="attend-button" />
    </form>
    {/* <div className="image-container ">
      <img
        className="dfm_attend"
        src={DFM}
        alt="dear future me pic is broken! "
        // style={{ border: "10px solid red" }}
        align="right"
      />{" "}
    </div> */}
  </div>
);
export default AttendHeader;
