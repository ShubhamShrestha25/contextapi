import React, { createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
  state = {
    isDarkTheme: true,
    lightTheme: {
      text: "#222",
      background: "#d8ddf1",
    },
    DarkTheme: {
      text: "#fff",
      background: "#5c5c5c",
    },
  };
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
