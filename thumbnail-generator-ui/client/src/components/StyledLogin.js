import styled from "styled-components";
import { Button } from "@mui/material";

export const BackgroundLogin = styled.div`
  background-image: url("https://firebasestorage.googleapis.com/v0/b/lo-mio-1fc99.appspot.com/o/Mt.FujiJapan-sunset.png?alt=media&token=f9ef5420-495d-4fd0-a260-8a5b25dcfd3e");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonStyled = styled(Button)`
  color: #f44336 !important;
  &:hover {
    background-color: #f44336 !important;
    color: white !important;
  }
`;
