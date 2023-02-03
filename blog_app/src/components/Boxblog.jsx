import { Box } from "@mui/material";
import { CardHome } from "./CardHome";

export const Boxblog = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 1,
        borderColor: "red",
      }}
    >
      <CardHome />
      <CardHome />
      <CardHome />
      <CardHome />
    </Box>
  );
};
