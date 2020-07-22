import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { withRouter } from "react-router-dom";
// import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  updateUserProfile,
  getUserProfile,
} from "../../actions/userProfileActions";
import isEmpty from "../../utils/isEmpty";

class AccountDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      first_name: "",
      last_tname: "",
      company: "",
      phone: "",
      email: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.props.getUserProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      profile.data[0].username = !isEmpty(profile.data[0].username)
        ? profile.data[0].username
        : "";
      profile.data[0].firstname = !isEmpty(profile.data[0].firstname)
        ? profile.data[0].firstname
        : "";
      profile.data[0].lastname = !isEmpty(profile.data[0].lastname)
        ? profile.data[0].lastname
        : "";
      profile.data[0].email = !isEmpty(profile.data[0].email)
        ? profile.data[0].email
        : "";
      profile.meta.billing_company[0] = !isEmpty(
        profile.meta.billing_company[0]
      )
        ? profile.meta.billing_company[0]
        : "";
      profile.meta.billing_phone[0] = !isEmpty(profile.meta.billing_phone[0])
        ? profile.meta.billing_phone[0]
        : "";

      this.setState({
        username: profile.data[0].username,
        first_name: profile.data[0].firstname,
        last_tname: profile.data[0].lastname,
        company: profile.meta.billing_company[0],
        phone: profile.meta.billing_phone[0],
        email: profile.data[0].email,
      });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const profileData = {
      username: this.state.username,
      email: this.state.email,
      first_name: this.state.first_name,
      last_tname: this.state.last_tname,
      meta: {
        billing_company: [this.state.company],
        billing_phone: [this.state.phone],
      },
    };

    this.props.updateUserProfile(profileData);
  }
  render() {
    return (
      <div className="col-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Account Details</h4>
            <p className="card-description"> Basic form elements </p>
            <form className="forms-sample" onSubmit={this.onSubmit}>
              <Form.Group>
                <label htmlFor="exampleInputName1">Name</label>
                <Form.Control
                  type="text"
                  className="form-control"
                  id="exampleInputName1"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChange}
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="exampleInputEmail3">Email address</label>
                <Form.Control
                  type="email"
                  className="form-control"
                  id="exampleInputEmail3"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="exampleInputPassword4">First Name</label>
                <Form.Control
                  type="text"
                  className="form-control"
                  id="exampleInputPassword4"
                  name="first_name"
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </Form.Group>
              {/* <Form.Group>
                <label htmlFor="exampleSelectGender">Gender</label>
                <select className="form-control" id="exampleSelectGender">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </Form.Group> */}
              {/* <Form.Group>
                <label>File upload</label>
                <Form.Control
                  type="file"
                  name="img[]"
                  className="file-upload-default"
                />
                <div className="input-group col-xs-12">
                  <Form.Control
                    type="text"
                    className="form-control file-upload-info"
                    disabled
                    placeholder="Upload Image"
                  />
                  <span className="input-group-append">
                    <button
                      className="file-upload-browse btn btn-primary"
                      type="button"
                    >
                      Upload
                    </button>
                  </span>
                </div>
              </Form.Group> */}
              <Form.Group>
                <label htmlFor="exampleInputCity1">Phone</label>
                <Form.Control
                  type="text"
                  className="form-control"
                  id="exampleInputCity1"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.onChange}
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="exampleInputCity1">Company</label>
                <Form.Control
                  type="text"
                  className="form-control"
                  id="exampleInputCity2"
                  name="company"
                  value={this.state.company}
                  onChange={this.onChange}
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="exampleTextarea1">Textarea</label>
                <textarea
                  className="form-control"
                  id="exampleTextarea1"
                  rows="4"
                ></textarea>
              </Form.Group>
              <button type="submit" className="btn btn-primary mr-2">
                Submit
              </button>
              <button className="btn btn-light">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

AccountDetails.propTypes = {
  profile: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps, { updateUserProfile, getUserProfile })(
  withRouter(AccountDetails)
);
