import React, { useState } from "react";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Dropdown from "react-bootstrap/Dropdown";
import FormControl from "react-bootstrap/FormControl";

import Image from "./image";

import MentorsData from "../../data/mentors.json";

const filterCategories = [
  "All",
  "Adobe Photoshop",
  "Alexa",
  "Android",
  "App Developer",
  "Arduino",
  "Artificial Intelligence",
  "Audio Design",
  "AWS",
  "Back End",
  "Bio-Engineering",
  "Biology",
  "Bootstrap",
  "Business Design",
  "C/C++/C#",
  "Circuit Design",
  "Copyright Law",
  "Cryptography/Blockchain",
  "Data Analysis",
  "Data Visualization",
  "Drones",
  "Front End",
  "Game Design",
  "Genetics",
  "Github",
  "GPS",
  "Graphic Design",
  "Hardware",
  "HTML/CSS",
  "Image Recognition",
  "Internet of Things",
  "Java",
  "JavaScript",
  "Machine Learning",
  "Matlab",
  "Medical",
  "Microbiology",
  "Project Management",
  "Python",
  "Quantum Computing",
  "R",
  "Raspberry Pi",
  "Raspbian",
  "Robotics",
  "Ruby",
  "Security",
  "Shell Scripting",
  "SQL",
  "Statistics",
  "UI/UX",
  "Videography",
  "Virtual/Augmented Reality",
  "Visual Studio",
  "Web Developer",
];

const Mentor = (props) => (
  <div class="card card-width">
    <div className="card-img-div">
      <div className="card-img-top">
        <Image alt="headshot" filename={props.photo} />
      </div>
    </div>
    <div class="card-body">
      <h5 class="card-title">
        {props.name} ({props.pronouns})
      </h5>
      <h6 class="card-title">
        {props.majorProfession} | {props.universityWorkplace}
      </h6>
      <div className="card-skills">
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={
            <Tooltip id="button-tooltip-2">
              <p>
                {props.skills.reduce((result, item) => {
                  return `${result}${item}, `;
                }, "")}
              </p>
            </Tooltip>
          }
        >
          <p class="card-text card-ellipsis">
            {props.skills.reduce((result, item) => {
              return `${result}${item}, `;
            }, "")}
          </p>
        </OverlayTrigger>
      </div>
    </div>
  </div>
);

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value ||
              child.props.children.startsWith(value) ||
              child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

class MentorTiles extends React.Component {
  constructor(props) {
    super(props);
    this.filterList = this.filterList.bind(this);
    this.state = {
      initialItems: MentorsData,
      items: [],
      dropdownValue: "",
    };
  }

  filterList(event) {
    var updatedList = this.state.initialItems;
    var filter = event;
    if (filter === "All") {
      this.setState({ items: MentorsData, dropdownValue: "Filter by Skills" });
      return;
    }

    updatedList = updatedList.filter(function (item) {
      return item.skills.indexOf(filter) !== -1;
    });
    this.setState({ items: updatedList, dropdownValue: filter });
  }

  componentWillMount() {
    this.setState({ items: this.state.initialItems });
  }

  render() {
    return (
      <div>
        <div class="row">
          <div class="col-sm-6">
            <h1 className="mentor-head">TTB 2020 Mentors</h1>
            <p className="mentor-head">
              To view who's online, check out our Discord !
            </p>
          </div>
          <div class="col-sm-6" className="contact-mentor">
            <div className="register-button">
              <a
                type="button"
                target="_blank"
                href="https://techtogether.typeform.com/to/HV9R6aKi"
              >
                Contact A Mentor
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6"></div>
          <div class="col-sm-6" className="filter-mentor">
            <Dropdown>
              <Dropdown.Toggle
                as={CustomToggle}
                id="dropdown-custom-components"
              >
                {this.state.dropdownValue === ""
                  ? "Filter by Skills"
                  : this.state.dropdownValue}
              </Dropdown.Toggle>
              <Dropdown.Menu
                as={CustomMenu}
                onSelect={this.filterList.bind(this)}
              >
                {filterCategories.map((filter) => (
                  <Dropdown.Item
                    key={filter}
                    eventKey={filter}
                    onSelect={this.filterList.bind(this)}
                  >
                    {filter}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <div
          className="mentor-container row"
          style={{
            display: "block",
            textAlign: "center",
          }}
        >
          {this.state.items.map((mentor) => (
            <div
              className="mentor"
              key={mentor.name}
              style={{ display: "inline-block" }}
            >
              <Mentor
                name={mentor.name}
                photo={mentor.photo}
                pronouns={mentor.pronouns}
                universityWorkplace={mentor.universityWorkplace}
                majorProfession={mentor.majorProfession}
                skills={mentor.skills}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MentorTiles;
