import React from "react";
import "./RecentSubmission.css";
import PropTypes from "prop-types";

const RecentSubmission = props => {
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p>{props.poem[props.poem.length - 1]}</p>
      <p className="RecentSubmission__submission">{}</p>
    </div>
  );
};

RecentSubmission.propTypes = {
  poem: PropTypes.array
};

export default RecentSubmission;
