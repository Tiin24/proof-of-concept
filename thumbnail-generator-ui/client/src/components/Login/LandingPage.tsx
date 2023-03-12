import ButtonLogin from "./ButtonLogin";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Imag1, Imag2, Imag3 } from "./StyledLanding";

export default function LandingPage() {
  return (
    <Box
      sx={{
        backgroundColor: "#fafaff",
        marginTop: 8,
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Grid item xs={12} md={6} xl={6}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
            height="100%"
            flexDirection="column"
          >
            <Typography variant="h2" letterSpacing={-0.6}>
              Create your icon in the easiest way
            </Typography>
            <Typography variant="h6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
              iusto modi quidem obcaecati vel maiores odio! Explicabo minima
              officiis quae quo dicta molestiae voluptatem iusto, magnam ullam
              libero aliquam deleniti?
            </Typography>
            <Link to={""}>
              <ButtonLogin />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} xl={6}>
          <Box display="flex" height="100%">
            <div>
              <Imag1
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                alt=""
              />
            </div>
            <div>
              <Imag3 src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
              <div>
                <Imag2 src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
              </div>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
