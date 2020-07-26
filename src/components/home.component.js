import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Exercise Tracker</h1>
        <p>
          This exercise track follows the MongoDB tutorial found{" "}
          <a href="https://www.mongodb.com/blog/post/building-an-exercise-tracker-mern-tutorial">
            here
          </a>
          .
        </p>
      </div>
    );
  }
}
