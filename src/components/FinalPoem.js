import React from "react";
import "./FinalPoem.css";
import PropTypes from "prop-types";

const FinalPoem = props => {
  // Reveals entire poem
  // Pass poem lines from Game via props
  // Need method that updates what is returned ?
  const revealPoem = () => {
    const poem = props.poem;
    console.log(poem);
    //
  };
  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
      </section>

      <div className="FinalPoem__reveal-btn-container">
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
