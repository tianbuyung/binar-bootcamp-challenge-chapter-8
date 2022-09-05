import {
  Box,
  Button,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import "./CreatePlayer.css";

const styleCentered = {
  display: "flex",
  justifyContent: "center",
};

const LEVEL_BAR = 1000;

const CreatePlayer = (props) => {
  const { setPlayer } = props;

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    experience: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let { experience } = inputs;
    const players = JSON.parse(localStorage.getItem("players"));
    experience = experience ? experience : 0;
    const lvl = Math.floor(experience / LEVEL_BAR);
    const newPlayer = {
      ...inputs,
      id: players.length + 1,
      experience,
      lvl,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    players.push(newPlayer);
    localStorage.setItem("players", JSON.stringify(players));
    setPlayer(players);
  };

  return (
    <Container style={styleCentered}>
      <form
        style={{
          ...styleCentered,
          width: "50%",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit}
      >
        <Box
          sx={{ border: "0.0625rem solid grey" }}
          style={{
            ...styleCentered,
            flexDirection: "column",
            padding: "2.1875rem",
            borderRadius: "5%",
          }}
        >
          <Typography style={{ ...styleCentered, marginBottom: "1.25rem" }}>
            Form Create Player
          </Typography>
          <FormControl>
            <TextField
              required
              className="textFieldForm"
              id="username"
              label="Username"
              type="text"
              variant="standard"
              value={inputs.username}
              name="username"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <TextField
              required
              className="textFieldForm"
              id="email"
              label="Email"
              type="email"
              variant="standard"
              value={inputs.email}
              name="email"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <TextField
              required
              className="textFieldForm"
              id="password"
              label="Password"
              type="password"
              variant="standard"
              value={inputs.password}
              name="password"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <TextField
              className="textFieldForm"
              id="experience"
              label="Experience"
              type="number"
              variant="standard"
              value={inputs.experience}
              name="experience"
              onChange={handleChange}
            />
          </FormControl>
          <Container style={{ ...styleCentered, marginTop: "1.25rem" }}>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Container>
        </Box>
      </form>
    </Container>
  );
};

export default CreatePlayer;
