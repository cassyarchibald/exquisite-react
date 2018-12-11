import React, { Component } from "react";
import "./PlayerSubmissionForm.css";
import PropTypes from "prop-types";

class PlayerSubmissionForm extends Component {
  // Might not need to be a class
  // Has a form
  // When submitted, create line of poem
  // Send that line back to game to be added to games state via callback
  constructor(props) {
    super(props);
    this.state = {
      // form fields here
      noun1: "",
      noun2: "",
      adjective1: "",
      adjective2: "",
      verb: "",
      adverb: ""
    };
  }

  onSubmitHandler = (event, fieldToGetValueFrom = "value") => {
    event.preventDefault();
    const updatedState = {};
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    console.log(fieldName);
    updatedState[fieldName] = fieldValue;
    // Send poem line to callback function in props
    const { noun1, noun2, adjective1, adjective2, verb, adverb } = this.state;
    // Build poem
    const newPoemLine = `The ${adjective1} ${noun1} ${adverb} ${verb} the ${adjective2} ${noun2}`;

    this.props.addPoemLineCallback(newPoemLine);
    // Clear form
    this.setState({
      noun1: "",
      noun2: "",
      adjective1: "",
      adjective2: "",
      verb: "",
      adverb: ""
    });
  };
  onInputChange = event => {
    const updatedState = {};
    const field = event.target.name;
    const value = event.target.value;
    updatedState[field] = value;
    this.setState(updatedState);
  };

  render() {
    return (
      <div className="PlayerSubmissionForm">
        <h3>
          Player Submission Form for Player #{`${this.props.playerNumber}`}
        </h3>

        <form
          className="PlayerSubmissionForm__form"
          onSubmit={this.onSubmitHandler}
        >
          <div className="PlayerSubmissionForm__poem-inputs">
            The
            <input
              name="adjective1"
              value={this.state.adjective1}
              placeholder="adjective"
              type="text"
              className="PlayerSubmissionForm__input--invalid"
              onChange={this.onInputChange}
            />
            <input
              name="noun1"
              value={this.state.noun1}
              placeholder="noun"
              type="text"
              className="PlayerSubmissionForm__input--invalid"
              onChange={this.onInputChange}
            />
            <input
              name="adverb"
              value={this.state.adverb}
              placeholder="adverb"
              type="text"
              className="PlayerSubmissionForm__input--invalid"
              onChange={this.onInputChange}
            />
            <input
              name="verb"
              value={this.state.verb}
              placeholder="verb"
              type="text"
              className="PlayerSubmissionForm__input--invalid"
              onChange={this.onInputChange}
            />
            the
            <input
              name="adjective2"
              value={this.state.adjective2}
              placeholder="adjective"
              type="text"
              className="PlayerSubmissionForm__input--invalid"
              onChange={this.onInputChange}
            />
            <input
              name="noun2"
              value={this.state.noun2}
              placeholder="noun"
              type="text"
              className="PlayerSubmissionForm__input--invalid"
              onChange={this.onInputChange}
            />
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input
              type="submit"
              value="Submit Line"
              className="PlayerSubmissionForm__submit-btn"
            />
          </div>
        </form>
      </div>
    );
  }
}

PlayerSubmissionForm.propTypes = {
  // prop types here
  addPoemLineCallback: PropTypes.func,
  playerNumber: PropTypes.number
};

export default PlayerSubmissionForm;
