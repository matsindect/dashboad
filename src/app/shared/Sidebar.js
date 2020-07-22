import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse } from "react-bootstrap";
// import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
// import { getUserProfile } from "../../actions/userProfileActions";
import { logoutUser } from "../../actions/authActions";

class Sidebar extends Component {
  state = {
    profile: null,
  };

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({ [menuState]: false });
    } else if (Object.keys(this.state).length === 0) {
      this.setState({ [menuState]: true });
    } else {
      Object.keys(this.state).forEach((i) => {
        this.setState({ [i]: false });
      });
      this.setState({ [menuState]: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }
  onRouteChanged() {
    document.querySelector("#sidebar").classList.remove("active");
    Object.keys(this.state).forEach((i) => {
      this.setState({ [i]: false });
    });

    const dropdownPaths = [
      { path: "/basic-ui", state: "accountManagement" },
      { path: "/basic-ui", state: "opportunityManagement" },
      { path: "/basic-ui", state: "basicUiMenuOpen" },
      { path: "/basic-ui", state: "analytics" },
      { path: "/form-elements", state: "formElementsMenuOpen" },
      { path: "/tables", state: "tablesMenuOpen" },
      { path: "/icons", state: "iconsMenuOpen" },
      { path: "/charts", state: "chartsMenuOpen" },
      { path: "/user-pages", state: "userPagesMenuOpen" },
    ];

    dropdownPaths.forEach((obj) => {
      if (this.isPathActive(obj.path)) {
        this.setState({ [obj.state]: true });
      }
    });
  }
  render() {
    const { profile, loading } = this.props.profile;
    let userProfile;
    let userAvatar;
    if (profile === null || loading) {
      userProfile = "Loading";
      userAvatar = <p>Q</p>;
    } else {
      userProfile = profile.meta.billing_company[0];
      userAvatar = profile.avatar_urls["96"];
    }
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
          <a className="sidebar-brand brand-logo" href="index.html">
            <img
              src={require("../../assets/wida_white_color.png")}
              alt="logo"
            />
          </a>
          <a className="sidebar-brand brand-logo-mini pt-3" href="index.html">
            <img
              src={require("../../assets/images/logo-mini.svg")}
              alt="logo"
            />
          </a>
        </div>
        <ul className="nav">
          <li className="nav-item nav-profile not-navigation-link">
            <div className="nav-link">
              <div className="nav-link user-switch-dropdown-toggler p-0 toggle-arrow-hide bg-transparent border-0 w-100">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="profile-image">
                    <img src={userAvatar} alt="profile" />
                  </div>
                  <div className="text-left ml-3">
                    <p className="profile-name">{userProfile}</p>
                    <small className="designation text-muted text-small">
                      Manager
                    </small>
                    <span className="status-indicator online"></span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            className={
              this.isPathActive("/dashboard") ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to="/dashboard">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/basic-ui") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.opportunityManagement
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("opportunityManagement")}
              data-toggle="collapse"
            >
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              <span className="menu-title">Opportunity Management</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.opportunityManagement}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/saved-projects")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/saved-projects"
                  >
                    Saved projects
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/saved-specifiers")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/saved-specifiers"
                  >
                    Saved specifiers
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/basic-ui/typography")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/basic-ui/typography"
                  >
                    Project map view
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/basic-ui/typography")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/basic-ui/typography"
                  >
                    Sent emails
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/basic-ui/typography")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/basic-ui/typography"
                  >
                    Sent pre-qualification
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/basic-ui") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.analytics ? "nav-link menu-expanded" : "nav-link"
              }
              onClick={() => this.toggleMenuState("analytics")}
              data-toggle="collapse"
            >
              <i className="mdi mdi-chart-line menu-icon"></i>
              <span className="menu-title">Analytics</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.analytics}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/basic-ui/buttons")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/basic-ui/buttons"
                  >
                    Project analytics
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/basic-ui/dropdowns")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/basic-ui/dropdowns"
                  >
                    Specifier analytics
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/basic-ui") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.accountManagement
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("accountManagement")}
              data-toggle="collapse"
            >
              <i className="mdi mdi-account menu-icon"></i>
              <span className="menu-title">Account Management</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.accountManagement}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/basic-ui/buttons")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/basic-ui/buttons"
                  >
                    Contact support
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/account-details")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/account-details"
                  >
                    Account details
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/basic-ui/typography")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/basic-ui/typography"
                  >
                    Subscription details
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/basic-ui/typography")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/basic-ui/typography"
                  >
                    Invoices
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/basic-ui/typography")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/basic-ui/typography"
                  >
                    Terms of use
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/form-elements")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link className="nav-link" to="/form-elements/basic-elements">
              <i className="mdi mdi-calendar-check menu-icon"></i>
              <span className="menu-title">Calender</span>
            </Link>
          </li>
          {/* <li
            className={
              this.isPathActive("/tables") ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to="/tables/basic-table">
              <i className="mdi mdi-table-large menu-icon"></i>
              <span className="menu-title">Tables</span>
            </Link>
          </li> */}
          <li
            className={
              this.isPathActive("/icons") ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to="/icons/font-awesome">
              <i className="mdi mdi-account-box-outline menu-icon"></i>
              <span className="menu-title">User manual</span>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/charts") ? "nav-item active" : "nav-item"
            }
          >
            <Link
              className="nav-link"
              onClick={this.onLogoutClick.bind(this)}
              to=""
            >
              <i className="mdi mdi-lock-outline menu-icon"></i>
              <span className="menu-title">Logout</span>
            </Link>
          </li>
          {/* <li
            className={
              this.isPathActive("/user-pages") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.userPagesMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("userPagesMenuOpen")}
              data-toggle="collapse"
            >
              <i className="mdi mdi-lock-outline menu-icon"></i>
              <span className="menu-title">User Pages</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.userPagesMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/user-pages/blank-page")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/user-pages/blank-page"
                  >
                    Blank Page
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/user-pages/login-1")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/user-pages/login-1"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/user-pages/register-1")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/user-pages/register-1"
                  >
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/user-pages/error-404")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/user-pages/error-404"
                  >
                    404
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/user-pages/error-500")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/user-pages/error-500"
                  >
                    500
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="http://www.bootstrapdash.com/demo/star-admin-free/react/documentation/documentation.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="mdi mdi-file-outline menu-icon"></i>
              <span className="menu-title">Documentation</span>
            </a>
          </li> */}
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector("body");
    document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
      el.addEventListener("mouseover", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});
export default connect(mapStateToProps, { logoutUser })(withRouter(Sidebar));
