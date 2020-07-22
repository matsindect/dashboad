import React, { Component } from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSavedProjects } from "../../actions/savedProjectsActions";
import Spinner from "../shared/Spinner";

import SavedProjectFeed from "./SavedProjectFeed";

class Buttons extends Component {
  componentDidMount() {
    this.props.getSavedProjects();
  }
  render() {
    const { savedProjects, loading } = this.props.savedProject;
    let savedContent;
    if (savedProjects === null || loading) {
      savedContent = <Spinner />;
    } else {
      savedContent = <SavedProjectFeed savedProjects={savedProjects} />;
    }
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">Buttons</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="!#" onClick={(event) => event.preventDefault()}>
                  UI Elements
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Buttons
              </li>
            </ol>
          </nav>
        </div>
        {savedContent}
      </div>
    );
  }
}

Buttons.propTypes = {
  getSavedProjects: PropTypes.func.isRequired,
  savedProject: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  savedProject: state.savedProjects,
});
export default connect(mapStateToProps, { getSavedProjects })(Buttons);
