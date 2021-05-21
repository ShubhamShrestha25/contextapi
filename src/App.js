import React from "react";
import Navbar from "./components/Navbar";
import Todolist from "./components/Todolist";
import AuthContextProvider from "./context/AuthContext";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <AuthContextProvider>
          <ThemeContextProvider>
            <Navbar />
            <Todolist />
          </ThemeContextProvider>
        </AuthContextProvider>
      </div>
    </div>
  );
}

export default App;
