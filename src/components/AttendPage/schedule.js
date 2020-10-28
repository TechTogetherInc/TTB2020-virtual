import React from "react";
import schedule from "../../data/schedule.json"

const Schedule = () => {
    return (
        <div className="schedule">
            <h1>Schedule</h1>
            {schedule.map(day => 
                <Day key={day["date"]} date={day["date"]} events={day["events"]} />
            )}
        </div>
    )
}

const Day = ({date, events, color}) => {
    return (
    <div className="day">
        <div>{date}</div>
        <table>
            <tbody>
                {events.map((event, index) => (
                    <tr key={index}>
                        <td className="time">{event.time}</td>
                        <td className="name">{event.name}</td>
                        <td className="location">{event.location}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}

export default Schedule;