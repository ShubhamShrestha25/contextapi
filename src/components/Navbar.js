import React from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

class Navbar extends React.Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(authContext) => {
          return (
            <ThemeContext.Consumer>
              {(themeContext) => {
                const { isDarkTheme, darkTheme, lightTheme } = themeContext;
                const { isLoggedIn, changeAuthStatus } = authContext;
                const theme = isDarkTheme ? darkTheme : lightTheme;
                return (
                  <nav
                    style={{
                      background: theme.background,
                      color: theme.text,
                      height: "120px",
                    }}
                  >
                    <h2 style={{ textAlign: "center" }}>Shubham Academy</h2>
                    <p
                      onClick={changeAuthStatus}
                      style={{ textAlign: "center" }}
                    >
                      {isLoggedIn ? "logged in" : "logged out"}
                    </p>
                    <div className="ui three buttons">
                      <button className="ui button">Overview</button>
                      <button className="ui button">Contact</button>
                      <button className="ui button">Support</button>
                    </div>
                  </nav>
                );
              }}
            </ThemeContext.Consumer>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
