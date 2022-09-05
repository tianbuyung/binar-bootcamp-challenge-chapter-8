import { Container } from "@mui/material";
import { useState } from "react";
import TabsMenu from "./components/TabsMenu";
import { levelCalc } from "./utils/levelCalculation";

const App = () => {
  const playerList = [
    {
      id: 1,
      username: "PussySlayer613",
      email: "pussy.slay3r@gmail.com",
      password: "youknownothing",
      experience: 633396,
      lvl: levelCalc(633396),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      username: "HardcoreLevellingWarrior",
      email: "hclw@gmail.com",
      password: "youknownothing",
      experience: 314949,
      lvl: levelCalc(314949),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      username: "ChyperThrunk",
      email: "chyper.thrunk@gmail.com",
      password: "youknownothing",
      experience: 105874,
      lvl: levelCalc(105874),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      username: "DexMachina",
      email: "dex.machina@gmail.com",
      password: "youknownothing",
      experience: 484299,
      lvl: levelCalc(484299),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 5,
      username: "GunFinder",
      email: "gun.finder@gmail.com",
      password: "youknownothing",
      experience: 819912,
      lvl: levelCalc(819912),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 6,
      username: "NinjaWarior",
      email: "ninja.warior@gmail.com",
      password: "youknownothing",
      experience: 437558,
      lvl: levelCalc(437558),
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
