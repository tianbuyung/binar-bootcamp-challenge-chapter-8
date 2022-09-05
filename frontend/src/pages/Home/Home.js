import { Container } from "@mui/material";
import PlayerTable from "./components/PlayerTable";

const Home = (props) => {
  const { players } = props;

  return (
    <Container>
      <PlayerTable players={players}></PlayerTable>
    </Container>
  );
};

export default Home;
