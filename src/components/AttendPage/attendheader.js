import React from "react";
import SpeakerImg from "../../images/speakerimg.jpg";
const AttendHeader = () => (
  <div className="attendContainer">
    <div className="row">
      <div className="col-12 col-md-6 attend-img">
        <img src={SpeakerImg} alt="oops" />
      </div>
      <div className="col-12 col-md-6 attend-text ">
        <h1>Hacker Registration is Open</h1>
        <p>
          Let’s admit, 2020 has been a YEAR. We have faced many social,
          emotional, and environmental challenges this year and it’s time we
          start writing our future to ignite change!
          <br />
          <br /> Whether you attend TechTogether Boston to build a project,
          network, or attend workshops, we want you to attend! Register Now!
        </p>

        <br />
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
        {/* <form
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
        </form> */}
      </div>
    </div>

    <br />
    <br />
  </div>

  // <div className="attendContainer">
  //   <h1 style={{ fontWeight: "bold" }}>Hacker Registration is Open</h1>

  //   <div className="register-button">
  //     <a
  //       type="button"
  //       target="_blank"
  //       href="https://techtogetherboston.eventbrite.com/"
  //     >
  //       REGISTER
  //     </a>
  //   </div>
  //   <br />
  //   <br />
  //   <br />
  //   <form
  //     class="form"
  //     action="https://shehacks.us17.list-manage.com/subscribe/post?u=34946c2c134f07563cac527a4&amp;id=d441aab50c"
  //     method="post"
  //     id="subscribe-form"
  //     name="subscribe-form"
  //     target="_blank"
  //     novalidate
  //   >
  //     <input
  //       type="email"
  //       name="EMAIL"
  //       className="attend-email"
  //       size="50"
  //       placeholder="include me in event specific emails"
  //     />
  //     <br />
  //     <input type="submit" value="SUBSCRIBE" className="attend-button" />
  //   </form>
  //   {/* <div className="image-container ">
  //     <img
  //       className="dfm_attend"
  //       src={DFM}
  //       alt="dear future me pic is broken! "
  //       // style={{ border: "10px solid red" }}
  //       align="right"
  //     />{" "}
  //   </div> */}
  // </div>
);
export default AttendHeader;
