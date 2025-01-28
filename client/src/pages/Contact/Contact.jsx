import React from "react";
import "./Contact.scss";

const contact = () => {
  return (
    <div className="Contact">
      <h1>Contact Page</h1>
      <form>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@example.com"
          required
        />{" "}
        <br />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name here"
          required
        />{" "}
        <br />
        <textarea
          name="body"
          id="body"
          placeholder="Tell us about yourself or let us know how we can help you"
          required
          style={{ resize: "none" }}
        ></textarea>
        <input type="submit" name="submit" id="submit" value="Submit" />
      </form>
    </div>
  );
};

export default contact;
