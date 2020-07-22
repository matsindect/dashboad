import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class SavedProject extends Component {
  render() {
    const { savedProject } = this.props;
    console.log(savedProject);
    return (
      <div className="project-preview project-row">
        <div className="project-title project-column">
          <h5>{savedProject.type}</h5>
        </div>
        <div className="project-body project-column">
          <div className="project-details project-row">
            <div className="project-profile project-column">
              <Link to={savedProject.link} target="_blank">
                <h4>{savedProject.title}</h4>
              </Link>
              <p>
                <span>Location: </span>
                {savedProject.location}
              </p>
              <p>
                <span>Stage: </span>
                {savedProject.stage}
              </p>
              <p>
                <span>Budget: </span>
                {savedProject.budget}
              </p>
              <p>
                <span>Project Start Date: </span>
                {savedProject.startdate}
              </p>
              <p>
                <span>Estimated Completion date: </span>
                {savedProject.completedate}
              </p>
            </div>
            <div className="project-image project-column">
              <img
                className="custom_media_image"
                src={savedProject.preview}
                alt="ima"
              />
            </div>
          </div>
          <div className="project-developer project-row">
            <div className="developer-logo project-column">
              <img
                className="custom_media_image"
                src={savedProject.logo}
                alt="ima"
              />
            </div>
            <div className="project-brief project-column">
              <h5>Brief Overview</h5>
              <span>{savedProject.excerpt}</span>
              <span className="align-right">
                <Link to={savedProject.link} target="_blank">
                  View More Details{" "}
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SavedProject.propTypes = {
  savedProject: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(SavedProject);
