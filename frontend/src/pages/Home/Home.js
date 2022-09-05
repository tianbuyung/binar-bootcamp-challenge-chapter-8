import { useState } from "react";
import {
  Container,
  Typography,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PlayerTable from "./components/PlayerTable";

const Home = (props) => {
  const { players, setPlayer } = props;
  const [query, setQuery] = useState("");
  const keys = ["username", "email", "experience", "lvl"];

  const Search = (players) => {
    return players.filter((item) =>
      keys.some((key) => item[key].toString().toLowerCase().includes(query))
    );
  };

  return (
    <Container>
      <Typography
        variant="h3"
        align="center"
        sx={{
          marginBottom: "1rem",
        }}
      >
        List of All Players
      </Typography>
      <Grid container justifyContent="center">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "50%",
            marginBottom: "2rem",
          }}
        >
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <InputBase
            sx={{ width: "100%" }}
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
        </Paper>
      </Grid>
      <PlayerTable
        players={Search(players)}
        setPlayer={setPlayer}
      ></PlayerTable>
    </Container>
  );
};

export default Home;
