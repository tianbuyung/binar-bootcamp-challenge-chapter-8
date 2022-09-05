import { Container } from "@mui/material";
import { useState } from "react";
import TabsMenu from "./components/TabsMenu";

const App = () => {
  const playerList = [
    {
      id: 1,
      username: "PussySlayer613",
      email: "pussy.slay3r@gmail.com",
      password: "youknownothing",
      experience: 600000,
      lvl: 600,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      username: "HardcoreLevellingWarrior",
      email: "hclw@gmail.com",
      password: "youknownothing",
      experience: 666000,
      lvl: 666,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  const [players, setPlayer] = useState(playerList);

  localStorage.setItem("players", JSON.stringify(players));

  return (
    <Container>
      <TabsMenu payload={{ players, setPlayer }}></TabsMenu>
    </Container>
  );
};

export default App;
