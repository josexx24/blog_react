import { NavbarHome } from "./components/NavbarHome";
import { Grid, Pagination } from "@mui/material";
import { Boxblog } from "./components/Boxblog";
import { maxWidth } from "@mui/system";

export const App = () => {
  return (
    <div
      style={{
        backgroundColor: "linear-gradient(blue,green)",
        width: "100%",
      }}
    >
      <Grid
        container
        maxWidth="100%"
        sx={{ background: "linear-gradient(blue,green)" }}
      >
        <Grid
          item
          xs={12}
          paddingBottom="10px"
          sx={{
            backgroundColor: "linear-gradient(blue,green)",
          }}
        >
          <NavbarHome />
        </Grid>
        <div style={{ padding: "10px 10px 10px 10px" }}>
          <Grid
            item
            xs={12}
            direction="column"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: 1,
              borderColor: "red",
              width: 1,
              height: 1,
              background: "linear-gradient(green,yellow)",
            }}
          >
            <Boxblog />
            <Boxblog />
          </Grid>
        </div>
      </Grid>
    </div>
  );
};
