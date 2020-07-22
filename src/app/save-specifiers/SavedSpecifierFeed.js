import React, { Component } from "react";
import PropTypes from "prop-types";
import SavedSpecifier from "./SavedSpecifier";

class SavedSpecifierFeed extends Component {
  render() {
    const { savedSpecifiers } = this.props;
    console.log(savedSpecifiers);
    return savedSpecifiers.map((savedSpecifier) => (
      <SavedSpecifier key={savedSpecifier.id} savedSpecifier={savedSpecifier} />
    ));
  }
}

SavedSpecifierFeed.propTypes = {
  savedSpecifiers: PropTypes.array.isRequired,
};
export default SavedSpecifierFeed;
