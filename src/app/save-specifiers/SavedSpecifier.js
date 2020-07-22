import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class SavedSpecifier extends Component {
  render() {
    const { savedSpecifier } = this.props;
    return (
      <div class="project-preview project-row">
        <div class="project-title project-column">
          <h5 v-if="specifiers.specifierdetails">
            {savedSpecifier.sp_type[0].name}
          </h5>
        </div>
        <div class="project-body project-column">
          <div class="project-details project-row">
            <div class="specifier-profile project-column">
              <Link to="vd" target="_blank">
                <h4>{savedSpecifier.title}</h4>
              </Link>
              <p>
                <span>Address: </span>
                {savedSpecifier.addresses}
              </p>
              <p>
                <span>City: </span>
                {savedSpecifier.city}
              </p>
              <p>
                <span>Country: </span>
                {savedSpecifier.country}
              </p>
            </div>
            <div class="specifier-image project-column">
              <img
                class="custom_media_image"
                src={savedSpecifier.logo}
                alt="im"
              />
            </div>
          </div>
          <div class="project-developer project-row">
            <div class="project-brief project-column">
              <h5>Brief Overview</h5>
              <span v-html="specifiers.excerpt.rendered"></span>
              <span class="align-right">
                <a
                  href={savedSpecifier.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View More Details{" "}
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
SavedSpecifier.propTypes = {
  savedSpecifier: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(SavedSpecifier);
