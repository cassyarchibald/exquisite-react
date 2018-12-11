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
    console.log(updatedState);
    // Send poem line to callback function in props
    // const newPoemLine = {
    // field: this.state.field
    // }
    // this.props.addPoemLineCallback(newPoemLine)
  };
  onInputChange = event => {
    const updatedState = {};
    const field = event.target.name;
    const value = event.target.value;
    updatedState[field] = value;
    this.setState(updatedState);
    console.log(this.state);
  };

  render() {
    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{}</h3>

        <form
          className="PlayerSubmissionForm__form"
          onSubmit={this.onSubmitHandler}
        >
          <div className="PlayerSubmissionForm__poem-inputs">
            The
            {
              // Put your form inputs here... We've put in one below as an example
            }
            <input
              name="adjective1"
              placeholder="adjective"
              type="text"
              className="PlayerSubmissionForm__input--invalid"
              onChange={this.onInputChange}
            />
            <input
              name="noun1"
              placeholder="noun"
              type="text"
              className="PlayerSubmissionForm__input--invalid"
              onChange={this.onInputChange}
            />
            <input
              name="adverb"
              placeholder="adverb"
              type="text"
              className="PlayerSubmissionForm__input--invalid"
              onChange={this.onInputChange}
            />
            <input
              name="verb"
              placeholder="verb"
              type="text"
              className="PlayerSubmissionForm__input--invalid"
              onChange={this.onInputChange}
            />
            the
            <input
              name="adjective2"
              placeholder="adjective"
              type="text"
              className="PlayerSubmissionForm__input--invalid"
              onChange={this.onInputChange}
            />
            <input
              name="noun2"
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
  addPoemLineCallback: PropTypes.func
};

export default PlayerSubmissionForm;
