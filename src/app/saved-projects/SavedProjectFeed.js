import React, { Component } from "react";
import PropTypes from "prop-types";
import SavedProject from "./SavedProject";

class SavedProjectFeed extends Component {
  render() {
    const { savedProjects } = this.props;

    return savedProjects.map((savedProject) => (
      <SavedProject key={savedProject.id} savedProject={savedProject} />
    ));
  }
}

SavedProjectFeed.propTypes = {
  savedProjects: PropTypes.object.isRequired,
};
export default SavedProjectFeed;
