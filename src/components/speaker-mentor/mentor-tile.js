import React from "react";

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';

import Image from "./image"

import MentorsData from "../../data/mentors.json";

const filterCategories = [
    "All", 
    "Adobe Photoshop", "Alexa",
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
    "Web Developer"];

const Mentor = (props) => (
    <div class="card card-width">
        <div className="card-img-div">
            <div className="card-img-top" >
                <Image alt="headshot" filename={props.photo} />
            </div>
        </div>
        <div class="card-body">
            <h5 class="card-title">{props.name} ({props.pronouns})</h5>
            <h6 class="card-title">{props.majorProfession} | {props.universityWorkplace}</h6>
            <div className="card-skills">
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={<Tooltip id="button-tooltip-2"><p>{props.skills.reduce((result, item) => { return `${result}${item}, ` }, "")}</p></Tooltip>}
                >
                    <p class="card-text card-ellipsis">
                        {
                            props.skills.reduce((result, item) => {
                                return `${result}${item}, `
                            }, "")
                        }
                    </p>
                </OverlayTrigger>
            </div>
        </div>
    </div >
);

class MentorTiles extends React.Component {
    constructor(props) {
        super(props);
        this.filterList = this.filterList.bind(this);
        this.state = {
            initialItems: MentorsData,
            items: [],
            dropdownValue: ""
        }
    }

    filterList(event) {
        var updatedList = this.state.initialItems;
        var filter =event;
        if(filter === "All") {
            this.setState({ items: MentorsData, dropdownValue: "Skills" });
            return;
        }

        updatedList = updatedList.filter(function (item) {
            return item.skills.indexOf(filter) !== -1;
        });
        this.setState({ items: updatedList, dropdownValue: filter });
    }

    componentWillMount() {
        this.setState({ items: this.state.initialItems })
    }

    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-sm-6">
                        <h1 className="mentor-head">TTB 2020 mentors</h1>
                        <p className="mentor-head">To view who's online, check out our Discord !</p>
                    </div>
                    <div class="col-sm-6" className="contact-mentor">
                        <div className="register-button">
                            <a
                                type="button"
                                target="_blank"
                            // href="https://techtogetherboston.eventbrite.com/"
                            >
                                Contact A Mentor
                    </a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                    </div>
                    <div class="col-sm-6" className="filter-mentor">
                        <DropdownButton className="filter-dropdown"
                            title={this.state.dropdownValue === "" ? 'Skills ' : this.state.dropdownValue}
                            onSelect={this.filterList.bind(this)}
                        >
                            {filterCategories.map((filter) => (
                                <Dropdown.Item key={filter} eventKey={filter}>{filter}</Dropdown.Item>
                            ))}
                        </DropdownButton>
                    </div>
                </div>
                <div className="mentor-container row">
                    {this.state.items.map((mentor) => (
                        <div className="mentor" key={mentor.name}>
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


        )
    }
}

// const MentorTiles = () => (
//     <div>
//         <div class="row">
//             <div class="col-sm-6">
//                 <h1 className="mentor-head">TTB 2020 mentors</h1>
//                 <p className="mentor-head">To view who's online, check out our Discord !</p>
//             </div>
//             <div class="col-sm-6" className="contact-mentor">
//                 <div className="register-button">
//                     <a
//                         type="button"
//                         target="_blank"
//                     // href="https://techtogetherboston.eventbrite.com/"
//                     >
//                         Contact A Mentor
//                     </a>
//                 </div>
//             </div>
//         </div>
//         <div class="row">
//             <div class="col-sm-6">
//             </div>
//             <div class="col-sm-6" className="filter-mentor">

//             </div>
//         </div>
//         <div className="mentor-container row">
//             {MentorsData.map((mentor) => (
//                 <div className="mentor" key={mentor.name}>
//                     <Mentor
//                         name={mentor.name}
//                         photo={mentor.photo}
//                         pronouns={mentor.pronouns}
//                         universityWorkplace={mentor.universityWorkplace}
//                         majorProfession={mentor.majorProfession}
//                         skills={mentor.skills}
//                     />
//                 </div>
//             ))}
//         </div>
//     </div>
// );

export default MentorTiles;
