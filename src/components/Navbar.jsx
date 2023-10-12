import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      display: { xs: "flex" },
      flexDirection: { xs: "column", md: "row" },
      top: 0,
      zIndex: { xs: 111 },
      justifyContent: { md: "space-between" },
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <p
        style={{
          color: "white",
          marginLeft: "10px",
          fontFamily: "Arial, sans-serif",
          fontWeight: 600,
          fontSize: "26px",
        }}
      >
        Youtube Clone
      </p>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
