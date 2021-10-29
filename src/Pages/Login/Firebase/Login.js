import React from "react";
import { Button, Container } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../context/useAuth";

import "./Login.css";

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";

  const { handleGoogleLogin, setIsLoading } = useAuth();

  const handleGoogleSignIn = () => {
    handleGoogleLogin()
      .then((result) => {
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <Container>
      <div className="row">
        <div className="col-md-5 mx-auto">
          <div className="google-login">
            <img src="http://www.androidpolice.com/wp-content/themes/ap2/ap_resize/ap_resize.php?src=http%3A%2F%2Fwww.androidpolice.com%2Fwp-content%2Fuploads%2F2015%2F10%2Fnexus2cee_Search-Thumb-150x150.png&w=150&h=150&zc=3" />

            <Button onClick={handleGoogleSignIn} variant="warning">
              Login With Google
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
