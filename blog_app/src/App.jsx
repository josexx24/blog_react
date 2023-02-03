import { NavbarHome } from "./components/NavbarHome";
import { Grid } from "@mui/material";
import { Boxblog } from "./components/Boxblog";

export const App = () => {
  return (
    <>
      <Grid container direction="column" rowSpacing={12}>
        <Grid item xs={12} paddingBottom="100px">
          <NavbarHome />
        </Grid>
        <Grid
          item
          xs={12}
          direction="column"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: 1,
            m: 1,
            borderColor: "red",
            background: "linear-gradiente(blue,green)",
            width: 1,
            height: 1,
          }}
        >
          <Boxblog />
          <Boxblog />
          <Boxblog />
          <Boxblog />
        </Grid>
      </Grid>
    </>
  );
};
