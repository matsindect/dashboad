import React, { Component } from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSavedSpecifiers } from "../../actions/savedSpecifiersActions";
import Spinner from "../shared/Spinner";
import SavedSpecifierFeed from "./SavedSpecifierFeed";

class SavedProjectContainer extends Component {
  componentDidMount() {
    this.props.getSavedSpecifiers();
  }
  render() {
    const { savedSpecifiers, loading } = this.props.savedSpecifier;

    let savedContent;
    if (savedSpecifiers === null || loading) {
      savedContent = <Spinner />;
    } else {
      savedContent = <SavedSpecifierFeed savedSpecifiers={savedSpecifiers} />;
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

SavedProjectContainer.propTypes = {
  getSavedSpecifiers: PropTypes.func.isRequired,
  savedSpecifier: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  savedSpecifier: state.savedSpecifiers,
});
export default connect(mapStateToProps, { getSavedSpecifiers })(
  SavedProjectContainer
);
