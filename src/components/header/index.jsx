import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import {
  IconButton,
  Drawer,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  ListItemIcon,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import CameraIcon from "@mui/icons-material/Camera";
import CreateIcon from "@mui/icons-material/Create";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ContrastIcon from "@mui/icons-material/Contrast";
import { useTheme } from "../../theme/useTheme";

import "./style.scss";
import Logo from "../../assets/logo/logo1ccaca.png";

const drawerWidth = 300;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const navData = [
  {
    primary: "Home",
    secondary: "Welcome",
    description: " — Get to know me",
    icon: <HomeIcon sx={{ color: "#008080" }} />,
    href: "/home",
  },
  {
    primary: "Cosmic Frames",
    secondary: "Photos",
    description: " — Discover latest captures!",
    icon: <CameraIcon sx={{ color: "#008080" }} />,
    href: "/posts",
  },
  {
    primary: "Astronomer's Log",
    secondary: "Blogs",
    description: " — Dive into my longer reflections.",
    icon: <CreateIcon sx={{ color: "#008080" }} />,
    href: "/blogs",
  },
  {
    primary: "Contact",
    secondary: "Let's connect",
    description: " — Reach out to me.",
    icon: <EmailIcon sx={{ color: "#008080" }} />,
    href: "/contact",
  },
];

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [currTheme, setCurrTheme] = useState({});
  const { setMode, theme, themes } = useTheme();
  const location = useLocation();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const themeSwitcher = (selectedTheme) => {
    setMode(selectedTheme);
    window.location.reload();
  };

  useEffect(() => {
    setCurrTheme(theme);
  }, [theme]);

  return (
    <>
      <header className="sticky-top site-header">
        <div className="d-flex align-items-center justify-content-between header-div">
          <Link to="/" style={{ fontSize: "25px" }}>
            <img src={Logo} width={200} alt="Logo" />
          </Link>
          <div className="d-flex align-items-center">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
            >
              <MenuIcon style={{ fontSize: "25px" }} />
            </IconButton>
          </div>
        </div>
      </header>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: theme.colors.body,
            border: "2px solid",
            borderColor: theme.colors.secondary,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
          <IconButton
            onClick={
              currTheme.name === "Light"
                ? () => themeSwitcher(themes["data"]["dark"])
                : () => themeSwitcher(themes["data"]["light"])
            }
          >
            <ContrastIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List className="p-4">
          {navData
            .filter((data) => {
              return data.href !== location.pathname;
            })
            .map((data, ind) => (
              <div key={ind} className="nav-items mt-4 mb-4">
                <ListItemButton
                  alignItems="flex-start"
                  href={data.href}
                  className="m-2"
                >
                  <ListItemIcon>{data.icon}</ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body1" className="nav-primary">
                        {data.primary}
                      </Typography>
                    }
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{
                            display: "inline",
                            fontWeight: "bold",
                            color: theme.colors.text,
                          }}
                          component="span"
                          variant="body2"
                        >
                          {data.secondary}
                        </Typography>
                        <span style={{ color: theme.colors.text }}>
                          {data.description}
                        </span>
                      </React.Fragment>
                    }
                  />
                </ListItemButton>
              </div>
            ))}
        </List>
        <Divider />
      </Drawer>
    </>
  );
};

export default Header;
