import { GoogleLogin } from "@react-oauth/google";
import { googleLogout } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import classes from "./GoogleLoginComponent.module.css";
import { uiActions } from "../../store/ui-slice";

const Google = (props) => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector((state) => state.ui.signedIn);

  const logoutHandler = () => {
    googleLogout();
    dispatch(uiActions.toggeSignIn());
  };

  return (
    <div>
      {!isSignedIn && (
        <div className={classes.login_button}>
          <div className={classes.sign_in}>
            <h2>Sign in to Continue...</h2>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
                dispatch(uiActions.toggeSignIn());
              }}
              onError={() => {
                console.log("Login Failed");
              }}
              useOneTap
            />
          </div>
        </div>
      )}
      {isSignedIn && (
        <button className={classes.logout_button} onClick={logoutHandler}>
          <img
            className={classes.google_logo}
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
            }
            alt="Google logo"
          />
          Logout
        </button>
      )}
    </div>
  );
};

export default Google;
