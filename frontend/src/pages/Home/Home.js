import { Container, Typography } from "@mui/material";
import PlayerTable from "./components/PlayerTable";

const Home = (props) => {
  const { players, setPlayer } = props;

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
      <PlayerTable players={players} setPlayer={setPlayer}></PlayerTable>
    </Container>
  );
};

export default Home;
