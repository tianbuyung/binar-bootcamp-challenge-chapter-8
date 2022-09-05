import { useState } from "react";
import { Tabs, Tab, Box, Container } from "@mui/material";
import PropTypes from "prop-types";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Home from "../pages/Home/Home";
import CreatePlayer from "../pages/CreatePlayer/CreatePlayer";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Container>{children}</Container>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

Home.propTypes = {
  children: PropTypes.node,
  players: PropTypes.array.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabsMenu = (props) => {
  const { players, setPlayer } = props.payload;
  const [valueTab, setValueTab] = useState(0);

  const handleChange = (event, newValue) => {
    setValueTab(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={valueTab} onChange={handleChange}>
          <Tab label={<HomeIcon />} {...a11yProps(0)} />
          <Tab label={<PersonAddAlt1Icon />} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={valueTab} index={0}>
        <Home players={players} setPlayer={setPlayer} />
      </TabPanel>
      <TabPanel value={valueTab} index={1}>
        <CreatePlayer setPlayer={setPlayer} setValueTab={setValueTab} />
      </TabPanel>
    </Box>
  );
};

export default TabsMenu;
