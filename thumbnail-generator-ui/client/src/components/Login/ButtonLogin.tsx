import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';

export default function ButtonLogin() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const handleLogin = () => {
    loginWithRedirect();
  };

  if (isAuthenticated) {
    navigate("/editor");
  }

  return (
    <div>
      <Button onClick={handleLogin} size="large" variant="outlined">
        <Typography>Get Started </Typography>
        <KeyboardTabIcon />
      </Button>
    </div>
  );
}
