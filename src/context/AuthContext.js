import React, { createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends React.Component {
  state = {
    isLoggedIn: false,
  };

  changeAuthStatus = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };

  render() {
    return (
      <AuthContextProvider
        value={{ ...this.state, changeAuthStatus: this.changeAuthStatus }}
      >
        {this.props.children}
      </AuthContextProvider>
    );
  }
}

export default AuthContextProvider;
