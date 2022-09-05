import { useState } from "react";
import {
  Box,
  Typography,
  Modal,
  Button,
  Container,
  FormControl,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const style = {
  position: "absolute",
  top: "25%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "5%",
  boxShadow: 24,
  p: 4,
};

const styleCentered = {
  display: "flex",
  justifyContent: "center",
};

const LEVEL_BAR = 1000;

export default function UpdatePlayer(props) {
  const { player, setPlayer } = props;

  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState({
    id: player.id,
    username: player.username,
    email: player.email,
    password: player.password,
    experience: player.experience,
    createdAt: player.createdAt,
  });

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let { username, email, password, experience } = inputs;
    experience = experience ? experience : 0;
    const lvl = Math.floor(experience / LEVEL_BAR);
    const editPlayer = {
      ...inputs,
      username,
      email,
      password,
      experience,
      lvl,
      updatedAt: new Date(),
    };

    const players = JSON.parse(localStorage.getItem("players"));

    for (let i = 0; i < players.length; i++) {
      if (players[i].id === editPlayer.id) {
        players[i] = editPlayer;
        break;
      }
    }

    setPlayer(players);
    localStorage.setItem("players", JSON.stringify(editPlayer));
    handleClose();
  };

  return (
    <div>
      <EditIcon
        onClick={() => {
          handleOpen();
        }}
        style={{ cursor: "pointer", marginRight: "0.5rem" }}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form
            style={{
              ...styleCentered,
              width: "100%",
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
                  defaultValue={player.username}
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
                  defaultValue={player.email}
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
                  defaultValue={player.password}
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
                  defaultValue={player.experience}
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
        </Box>
      </Modal>
    </div>
  );
}
