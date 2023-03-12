import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Toolbar,
} from "@mui/material";
import ButtonLogout from "../Login/ButtonLogout";

export default function NavBar() {
  return (
    <Box >
      <AppBar variant="elevation" color="inherit">
        <Toolbar>
          <Container>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <ButtonLogout />
              <Grid item>
                <Stack direction={"row"} spacing={2}>
                  <Button variant="outlined" color="primary" size="small" >
                    contact
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
