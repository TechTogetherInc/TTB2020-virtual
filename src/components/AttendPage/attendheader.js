import React from "react";

const AttendHeader = () => (
  <div className="attend">
    <h1>Coming Soon</h1>
    <br/>
    <form class="form"
      action="https://shehacks.us17.list-manage.com/subscribe/post?u=34946c2c134f07563cac527a4&amp;id=d441aab50c"
      method="post" id="subscribe-form" name="subscribe-form" target="_blank" novalidate>
      <input type="email" name="EMAIL" className="attend-email" size="50" placeholder="Notify me when applications open" />
      <br/>
      <input type="submit" value="Subscribe" className="attend-button"/>
    </form>

  </div>
);
export default AttendHeader;
