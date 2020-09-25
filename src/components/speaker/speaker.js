import React from "react";

// import GetInvolvedImg from "../../images/get-involved.jpg";
const Speaker = () => (
  <div className="be-speaker">
    <div className="row">
      {/* <div className="col-12 col-md-6 speaker-img">
        <img src={GetInvolvedImg} alt="oops" />
      </div> */}
      <div className="col-12 col-md-4 be-speaker-text ">
        <h2 className="involved-title">Lead a Workshop</h2>
        <br />

        <p>
          Have a topic you're passionate about that you want to share with our
          community? TechTogether Boston needs your help providing technical,
          design, and career-focused workshops and talks at our event.
        </p>
        <br />
        <div className="speaker-button">
          <a type="button" href="https://techtogether.typeform.com/to/JMlZXU75">
            Sign Up
          </a>
        </div>
      </div>
      <div className="col-12 col-md-4 be-speaker-text ">
        <h2 className="involved-title">Apply to Speak</h2>
        <br />
        <p>
          Speak with our community about your experience in the tech field or
          your personal experience in creating change within the tracks. We
          accept speakers of all ages and experience levels!
        </p>
        <br />
        <div className="speaker-button">
          <a type="button" href="https://techtogether.typeform.com/to/pbAZS3I4">
            Sign Up
          </a>
        </div>
      </div>
      <div className="col-12 col-md-4 be-speaker-text ">
        <h2 className="involved-title">Sign up to Volunteer</h2>
        <br />
        <p>
          TechTogether Boston needs your help running a smooth event. Volunteers
          will help on different aspects of the event and coordinate with the
          organizing team to help hackers have a positive experience.
        </p>
        <br />
        <div className="speaker-button">
          <a type="button" href="https://techtogether.typeform.com/to/VswfUvuJ">
            Sign Up
          </a>
        </div>
      </div>
    </div>

    <br />
    <br />
  </div>

  //{" "}
  // </div>
);

export default Speaker;
