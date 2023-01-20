import React, { useState, useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";

import classes from "./GoogleLoginComponent.module.css";

const GoogleLoginComponent = (props) => {
  const [signedIn, setSignedIn] = useState(false);
  const [profile, setProfile] = useState([]);

  const clientId =
    "510666409059-2v0h3v9rqgn12fcfnnd7tjj0s1tbie3k.apps.googleusercontent.com";

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  }, []);

  const onSuccess = (res) => {
    setProfile(res.profileObj);
    setSignedIn(true);
    props.onsignInChange();
  };

  const onFailure = (err) => {
    console.log("failed", err);
  };

  const logOut = () => {
    setSignedIn(false);
    props.onsignInChange();
    setProfile(null);
  };

  return (
    <div>
      <div>
        {signedIn && (
          <div>
            <div className={classes.header_user}>
              <p className={classes.name}>{profile.name} </p>
              <GoogleLogout
                className={classes.logout_button}
                clientId={clientId}
                buttonText="Log out"
                onLogoutSuccess={logOut}
              />
            </div>
            <p className={classes.email}>{profile.email}</p>
          </div>
        )}
      </div>
      <div>
        {!signedIn && (
          <div className={classes.google_login}>
            <h2>Sign in to continue</h2>
            <GoogleLogin
              clientId={clientId}
              buttonText="Sign in using Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default GoogleLoginComponent;
