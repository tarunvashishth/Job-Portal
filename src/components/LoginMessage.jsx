import { memo } from "react";
import cross from "../images/Icon metro-cross.svg";

function LoginMessage(props) {

  return (
    <div className="login-msg">
      <div className="login-top">
        <p className="login-header">Login</p>
        <img className="cross-login" src={cross} alt="cross" onClick={()=> props.closeLoginMsg(false)} />
      </div>
      <p className="login-footer">You have successfully looged in.</p>
    </div>
  );
}

export default memo(LoginMessage);
