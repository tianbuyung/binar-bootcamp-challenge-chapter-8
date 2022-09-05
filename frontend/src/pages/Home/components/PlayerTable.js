import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import PersonRemoveAlt1Icon from "@mui/icons-material/PersonRemoveAlt1";
import EditIcon from "@mui/icons-material/Edit";

const PlayerTable = (props) => {
  const players = props.players;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">Username</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Experience</TableCell>
            <TableCell align="center">Level</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player) => {
            const { id, username, email, experience, lvl } = player;
            return (
              <TableRow
                key={id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {id}
                </TableCell>
                <TableCell align="left">{username}</TableCell>
                <TableCell align="left">{email}</TableCell>
                <TableCell align="center">{experience}</TableCell>
                <TableCell align="center">{lvl}</TableCell>
                <TableCell align="center">
                  <EditIcon /> {"   |   "}
                  <PersonRemoveAlt1Icon />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PlayerTable;
