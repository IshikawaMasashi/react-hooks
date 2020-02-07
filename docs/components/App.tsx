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
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import { VirtualList, ItemStyle } from "../../src";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import About from "./About";
import HELLO1 from "./HELLO1";
import HELLO2 from "./HELLO2";
import Example3 from "./Example3";
import Example4 from "./Example4";
import Example5 from "./Example5";
import Collapse from "@material-ui/core/Collapse";
import StarBorder from "@material-ui/icons/StarBorder";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExampleList from "./examplesList/examplesList";

const { useEffect, useRef } = React;
enum View {
  Example1,
  Example2
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: { ...theme.mixins.toolbar },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    height: 400,
    width: "100%"
  },
  title: {
    padding: 16
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

type Props = {};

export default function ResponsiveDrawer(props: Props) {
  const info = ["About"];
  const textOutput = [
    "1. HELLO.BAS",
    "2. HELLO.BAS"
    // "PRINT Statement",
    // "Variable heights",
    // "Horizontal list"
  ];

  const statementList = ["PRINT"];

  // const labels = info.concat(textOutput.concat(statementList));

  const pages = [
    <About />,
    <HELLO1 />,
    <HELLO2 />,
    <Example3 />,
    <Example4 />,
    <Example5 />
  ];

  // const { container } = props;
  const theme = useTheme();

  const classes = useStyles(theme);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(View.Example1);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const [selectedIndex, setSelectedIndex] = useState(0);

  function handleListItemClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ): void {
    setSelectedIndex(index);
  }

  function handleClick() {
    setOpen(!open);
  }

  useEffect(() => {
    return () => {};
  }, []);

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <div className={classes.title}>
          <Typography variant="h6" noWrap>
            QuickBASIC
          </Typography>
        </div>
      </div>
      <Divider />
      <ExampleList
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <Divider />
      <List>
        <ListSubheader>
          <Typography variant="h6" noWrap>
            Statement List
          </Typography>
        </ListSubheader>
        {statementList.map((text, index) => (
          <ListItem
            button
            key={text}
            selected={selectedIndex === index + info.length + textOutput.length}
            onClick={event =>
              handleListItemClick(
                event,
                index + info.length + textOutput.length
              )
            }
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} noWrap>
            {/* {labels[selectedIndex]} */}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="Mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {pages[selectedIndex]}
      </main>
    </div>
  );
}
