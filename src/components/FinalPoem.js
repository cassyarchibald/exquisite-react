import React from "react";
import "./FinalPoem.css";
import PropTypes from "prop-types";
// https://reactjs.org/docs/conditional-rendering.html
// Reveals entire poem
// Pass poem lines from Game via props
// Need method that updates what is returned ?
const FinalPoem = props => {
  const poem = props.poem;
  const showForm = props.revealPoemValue;
  const showPoemLines = props.poem.map(line => {
    return <p>{line}</p>;
  });
  function poemToShow() {
    if (showForm) {
      return (
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          {showPoemLines}
        </section>
      );
    } else {
      return null;
    }
  }

  return (
    <div className="FinalPoem">
      <div className="FinalPoem__reveal-btn-container">
        {poemToShow()}
        <input
          type="button"
          value="We are finished: Reveal the Poem"
          className="FinalPoem__reveal-btn"
          onClick={props.revealPoemCallback}
        />
      </div>
    </div>
  );
};

FinalPoem.propTypes = {
  poem: PropTypes.array,
  revealPoemCallback: PropTypes.func
};

export default FinalPoem;
