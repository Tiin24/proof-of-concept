import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export default function ButtonLogout() {
  const { logout } = useAuth0();

  return (
    <div>
      <Link onClick={() => logout()} to={"/"}>
        <Typography  variant="h5" color={"black"}>Photography</Typography>
      </Link>
    </div>
  );
}
