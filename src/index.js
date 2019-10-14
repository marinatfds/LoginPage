import React from "react";
import ReactDOM from "react-dom";

import Input from "./components/Input";
import Button from "./components/Button";
import "./styles.css";

function useFormState(initialInputValue) {
  const [username, setUsername] = React.useState(initialInputValue);
  const [password, setPassword] = React.useState(initialInputValue);

  const changeUsername = React.useCallback(
    function(event) {
      setUsername(event.target.value);
    },
    [setUsername]
  );

  const changePassword = React.useCallback(
    function(event) {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  const resetAll = React.useCallback(
    function() {
      setUsername("");
      setPassword("");
    },
    [setUsername, setPassword]
  );

  return { username, password, changePassword, changeUsername, resetAll };
}

function App() {
  const {
    username,
    password,
    changePassword,
    changeUsername,
    resetAll
  } = useFormState("oi");

  return (
    <div className="App">
      <h1>Login</h1>

      <form className="form">
        <Input type="text" value={username} onChange={changeUsername} />
        <Input type="password" value={password} onChange={changePassword} />

        <div className="buttons">
          <Button type="submit">Login</Button>
          <Button onClick={resetAll}>Reset</Button>
        </div>
      </form>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
