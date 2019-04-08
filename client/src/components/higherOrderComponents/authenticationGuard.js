import React, { Component } from "react";
import { connect } from "react-redux";

export default OriginalComponent => {
  class MixedComponent extends Component {
    checkAuth() {
      //check to see if the user is authenticated
      if (!this.props.isAuth && !this.props.jwtToken) {
        // user is not authenticated so decline access to resources
        this.props.history.push("/");
      }
    }

    componentDidMount() {
      this.checkAuth();
    }

    componentDidUpdate() {
      this.checkAuth();
    }

    //when user is logged in
    render() {
      return<OriginalComponent {...this.props}/>
    }
  }

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      jwtToken: state.auth.jwtToken
    };
  }

  return connect(mapStateToProps)(MixedComponent);
};

// Browse.render() <- component /Browse
