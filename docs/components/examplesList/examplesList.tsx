import * as React from "react";
import { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Typography from "@material-ui/core/Typography";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import About from "../About";
import HELLO1 from "../HELLO1";
import HELLO2 from "../HELLO2";
import Example3 from "../Example3";
import Example4 from "../Example4";
import Example5 from "../Example5";
import Collapse from "@material-ui/core/Collapse";
import StarBorder from "@material-ui/icons/StarBorder";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

type Props = {
  selectedIndex: number;
  setSelectedIndex: (setSelectedIndex: number) => void;
};

export default function ExampleList({
  selectedIndex,
  setSelectedIndex
}: Props) {
  const info = ["About"];
  const textOutput = [
    "1. HELLO.BAS",
    "2. HELLO.BAS"
    // "PRINT Statement",
    // "Variable heights",
    // "Horizontal list"
  ];

  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }
  function handleListItemClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ): void {
    setSelectedIndex(index);
  }
  return (
    <List>
      {info.map((text, index) => (
        <ListItem
          button
          key={text}
          selected={selectedIndex === index}
          onClick={event => handleListItemClick(event, index)}
        >
          <ListItemText primary={text} />
        </ListItem>
      ))}
      <Divider />
      <ListSubheader>
        <Typography variant="h6" noWrap>
          Examples
        </Typography>
      </ListSubheader>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Text Output" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {textOutput.map((text, index) => (
          <ListItem
            button
            key={text}
            selected={selectedIndex === index + info.length}
            onClick={event => handleListItemClick(event, index + info.length)}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </Collapse>
    </List>
  );
}
