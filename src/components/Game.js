import React, { Component } from "react";
import "./Game.css";
import PlayerSubmissionForm from "./PlayerSubmissionForm";
import FinalPoem from "./FinalPoem";
import RecentSubmission from "./RecentSubmission";
import PropTypes from "prop-types";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Add lines of poem to this as they are submitted
      poemLines: [],
      revealFinalPoem: false
    };
  }

  showRecentSubmission = () => {
    if (this.state.poemLines.length > 0) {
      //return component
      return <RecentSubmission poem={this.state.poemLines} />;
    } else {
      return null;
    }
  };
  // Add poem line to poemLines
  addPoemLine = lineToAdd => {
    // Need to make poem

    this.state.poemLines.push(lineToAdd);
    this.setState({
      poemLines: this.state.poemLines
    });
  };

  revealPoem = () => {
    this.setState({
      revealFinalPoem: true
    });
    // hide other components
    console.log(this.state);
    // loop through poem to create paragraph tags under h3 of final poem
  };

  render() {
    const exampleFormat = FIELDS.map(field => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    return (
      <div className="Game">
        <h2>Game</h2>
        <p>
          Each player should take turns filling out and submitting the form
          below. Each turn should be done individually and <em>in secret!</em>{" "}
          Take inspiration from the revealed recent submission. When all players
          are finished, click the final button on the bottom to reveal the
          entire poem.
        </p>
        <p>Please follow the following format for your poetry submission:</p>
        <p className="Game__format-example">{exampleFormat}</p>
        {this.showRecentSubmission()}
        <PlayerSubmissionForm
          addPoemLineCallback={this.addPoemLine}
          playerNumber={this.state.poemLines.length + 1}
        />
        <FinalPoem
          poem={this.state.poemLines}
          revealPoemValue={this.state.revealFinalPoem}
          revealPoemCallback={this.revealPoem}
        />
      </div>
    );
  }
}

const FIELDS = [
  "The",
  {
    key: "adj1",
    placeholder: "adjective"
  },
  {
    key: "noun1",
    placeholder: "noun"
  },
  {
    key: "adv",
    placeholder: "adverb"
  },
  {
    key: "verb",
    placeholder: "verb"
  },
  "the",
  {
    key: "adj2",
    placeholder: "adjective"
  },
  {
    key: "noun2",
    placeholder: "noun"
  },
  "."
];

Game.propTypes = {
  // prop types here
};

export default Game;
