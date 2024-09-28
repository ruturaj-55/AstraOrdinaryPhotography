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
import { getFromLS } from "../../utils/storage";

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
    secondary: "About Me",
    description: " — Get to know me",
    icon: <HomeIcon sx={{ color: "#008080" }} />,
    href: "/home",
  },
  {
    primary: "Posts",
    secondary: "Photos",
    description: " — View latest captures!",
    icon: <CameraIcon sx={{ color: "#008080" }} />,
    href: "/posts",
  },
  {
    primary: "Blogs",
    secondary: "Articles",
    description: " — Dive into my longer reflections.",
    icon: <CreateIcon sx={{ color: "#008080" }} />,
    href: "/blogs",
  },
  {
    primary: "Contact",
    secondary: "Let's connect",
    description: " — Get in touch with me.",
    icon: <EmailIcon sx={{ color: "#008080" }} />,
    href: "/contact",
  },
];

const Header = () => {
  const themesFromStore = getFromLS("Themes");
  const data = themesFromStore.data;
  const [open, setOpen] = React.useState(false);
  const [currTheme, setCurrTheme] = useState("");
  const { setMode } = useTheme();
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
    setCurrTheme(getFromLS("theme"));
  }, []);

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
            backgroundColor: "#171a1a",
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
                ? () => themeSwitcher(data["dark"])
                : () => themeSwitcher(data["light"])
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
                          sx={{ display: "inline", fontWeight: "bold" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {data.secondary}
                        </Typography>
                        {data.description}
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
