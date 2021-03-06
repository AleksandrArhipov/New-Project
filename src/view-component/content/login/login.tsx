import * as React from "react";
import "./login.css";
import { Redirect, NavLink } from "react-router-dom";
import Components from "../../../components/components";
import { login } from "../../../service/requests";
import { saveStatus } from "../../../service/saveUserData";

type LoginProps = {
  isAuthorized: boolean;
  logIn: Function;
};

const Login: React.FC<LoginProps> = ({ isAuthorized, logIn }) => {
  const [user, getUserData] = React.useState({ username: "", password: "" });
  const [responseMessage, setResponseMessage] = React.useState("");
  const [showMessage, toggleShow] = React.useState(false);

  const onLogin = () => {
    login(user)
      .then((response) => {
        saveStatus(
          true,
          response.data.token,
          response.data.profile.id,
          response.data.username
        );
        logIn(true);
      })
      .catch((err) => {
        setResponseMessage(
          err.response.data.title || err.response.data.message
        );
        toggleShow(true);
      });
  };

  if (isAuthorized) return <Redirect to="/profile" />;

  return (
    <div className="login">
      {showMessage && (
        <Components.ResponseMessage
          text={responseMessage}
          closeWindow={() => toggleShow(false)}
        />
      )}
      <div className="formBox">
        <h2>Login</h2>
        <Components.Input
          text={"Username"}
          onChange={(p: string) => {
            getUserData({ ...user, username: p });
          }}
          value={user.username}
          type="text"
        />
        <Components.Input
          type="password"
          text={"Password"}
          onChange={(p: string) => {
            getUserData({ ...user, password: p });
          }}
          value={user.password}
        />
        <Components.Button text="Log in" onClick={onLogin} />
      </div>
      <NavLink className="toReg" to="/registration">
        To registration
      </NavLink>
    </div>
  );
};

export default Login;
