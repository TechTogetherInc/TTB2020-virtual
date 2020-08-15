import React from "react";
import photo1 from "../../images/testimonial-pics/Melissa_Lin_Operations.jpg";
import photo2 from "../../images/testimonial-pics/Sarina_director.jpg";
import photo3 from "../../images/testimonial-pics/hacker_picture.jpg";

const Testimonials = () => (
  <div>
    <h1>Testimonials through the years</h1>
    <div className="bar-sm"></div>
    <div className="row">
      <div className="col-12 col-md-4 testimonial">
        <img
          alt="testimonial-pic"
          className="img-fluid mb testimonial-pic"
          src={photo1}
        />
        <br />
        <br />
        <div className="testimonial-head">
          <h3 className="testimonial-name">Melissa Lin</h3>
          <p className="testimonial-position">Organizer</p>
        </div>

        <p className="testimonial-text">
          Being a TTB organizer was a great experience for me! I liked that I
          could help empower underepresented groups in tech and meet and
          collaborate with amazing people in the process.
        </p>
        <p className="testimonial-text">
          The most rewarding for me is definitely seeing the weekend of the
          hackathon come together. We spend months of work on this event so it
          really is gratituding to see how all that work culminates into one
          weekend. Getting to talk to all the external people involved and
          knowing how the event made an impact is worth all the long nights and
          meetings worth it.
        </p>
      </div>
      <div className="col-12 col-md-4 testimonial">
        <img
          alt="testimonial-pic"
          className="img-fluid mb testimonial-pic"
          src={photo2}
        />
        <br />
        <br />
        <div className="testimonial-head">
          <h3 className="testimonial-name">Sarina Simon</h3>
          <p className="testimonial-position">Director</p>
        </div>

        <p className="testimonial-text">
          I love being a TTB organizer. It is an amazing experience and I love
          working with such dedicated women.
        </p>
        <p className="testimonial-text">
          The most rewarding part is at the event talking to the hackers. Being
          a TTB organizer, we join the team because our personal values align
          with the TTB mission. Talking to hackers, I noticed that they also
          have similar values and it's great to see that for 36 hours women and
          femme non-binary from around the country come together and empower
          each other.
        </p>
      </div>
      <div className="col-12 col-md-4 testimonial">
        <img
          alt="testimonial-pic"
          className="img-fluid mb testimonial-pic"
          src={photo3}
        />
        <br />
        <br />
        <div className="testimonial-head">
          <h3 className="testimonial-name">Hana</h3>
          <p className="testimonial-position">Hacker</p>
        </div>

        <p className="testimonial-text">
          TechTogether was my 4th hackathon and my favorite hackathon!
        </p>
        <p className="testimonial-text">
          I wouldn't have been able to attend the event if it weren't for the
          free bussing! Once I arrived, the entire stadium was filled with super
          supportive mentors who helped us with out project. TechTogether was
          unlike any hackathon I had ever been to because of how comfortable I
          felt there. So comfortable that we decided to branch out and use
          hardware for the first time to learn something new!
        </p>
        <p className="testimonial-text">
          My favorite memory meeting tech professionals who helped us with out
          project and connecting with them to learn more about the growing
          industry.
        </p>
      </div>
    </div>
  </div>
);
export default Testimonials;
