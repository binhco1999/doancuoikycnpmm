import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/authService";
import '../pages/profile.css';
import avaEmployee from '../assets/employee.jpg'


export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }


  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div className="container">
      {(this.state.userReady) ? 
      <div>
      <div className="container">
        <div className="card my-3 shadow-md p-3 mb-5 bg-white rounded">
          <div className="card-header" id="bordercard">
            <div className="row justify-content-between">
              <div className="col-md-6 text-dark">
                <h1><strong>{currentUser.username}</strong><b> Profile </b></h1>
              </div>
              <div className="d-flex flex-wrap justify-content-between align-items-center mr-4">     
                <button className="btn btn-style-1 btn-primary ml-auto" type="button" data-toast=""
                    data-toast-position="topRight" data-toast-type="success"
                    data-toast-icon="fe-icon-check-circle" data-toast-title="Success!"
                    data-toast-message="Your profile updated successfuly."><b>Update</b>
                </button>
                <button className="btn btn-style-1 btn-danger ml-2" type="button" data-toast=""
                    data-toast-position="topRight" data-toast-type="success"
                    data-toast-icon="fe-icon-check-circle"
                    data-toast-message="Your profile updated cancel."><b>Cancel</b>
                </button>
              </div>
            </div>
          </div>

          <div className="card-body">
            <div className="row ml-5 mr-5 mt-4">
              <div className="col-md-4 pb-5">
                <div className="border border-light">
                  <div className="author-card pb-3">
                    <div className="author-card-cover">
                      <a className="btn btn-style-1 btn-white btn-sm" href="#" data-toggle="tooltip" title=""
                        data-original-title="You currently have 290 Reward points to spend">
                        <i className="fa fa-award text-md"></i>&nbsp;290 points
                      </a>
                    </div>

                    <div className="author-card-profile">
                      <div className="author-card-avatar">
                      <img
                          src={avaEmployee} alt="admin" className="photo"
                      />                
                      </div>
                      <div className="author-card-details">
                        <h5 className="author-card-name mt-3 ml-2"><tt><big>Username current: {currentUser.username}</big></tt></h5>
                      </div>
                    </div>
                    <div className="wizard">
                      <nav className="list-group list-group-flush">
                          <div className="list-group-item active" href=" ">
                              <i className="fe-icon-user text-muted"></i>Profile Settings
                              <span className="badge badge-secondary fa-pull-right">5</span>
                          </div>
                      </nav>
                    </div>
                  </div> 
                </div>
              </div>

              <div className="col-md-8 pb-5">
                <form className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="account-fn"><b>Token: </b></label>
                      <input className="form-control" type="text" id="account-fn" 
                      value={currentUser.accessToken.substring(0, 20)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="account-fn"><b>ID: </b></label>
                      <input className="form-control" type="text" id="account-fn" 
                      value={currentUser.id}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="account-fn"><b>Email: </b></label>
                      <input className="form-control" type="text" id="account-fn" 
                      value={currentUser.email}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="account-fn"><b>Authorities: </b></label>
                      <strong>
                          <input className="form-control" type="text" id="account-fn" 
                          value={currentUser.roles}/>
                      </strong>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                        <label for="account-phone"><b>New password: </b></label>
                        <input className="form-control" type="text" id="account-phone" required=""/>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                        <label for="account-phone"><b>Confirm password: </b></label>
                        <input className="form-control" type="text" id="account-phone" required=""/>
                    </div>
                  </div>
                  
                  <div className="col-md-8 mt-3">
                    <form>
                        <div className="form-group">
                            <label for="exampleFormControlFile1"><tt><big>Let's choose avatar you want to change</big></tt></label>
                            <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                        </div>
                    </form>
                  </div>  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>: null}</div>
    );
  }
}