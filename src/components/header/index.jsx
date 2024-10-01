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

  const navData = [
    {
      primary: "Home",
      icon: <HomeIcon sx={{ color: theme.colors.secondary }} />,
      href: "/home",
    },
    {
      primary: "Cosmic Captures",
      icon: <CameraIcon sx={{ color: theme.colors.secondary }} />,
      href: "/posts",
    },
    {
      primary: "Stellar Tales",
      icon: <CreateIcon sx={{ color: theme.colors.secondary }} />,
      href: "/blogs",
    },
    {
      primary: "Let's Connect",
      icon: <EmailIcon sx={{ color: theme.colors.secondary }} />,
      href: "/contact",
    },
  ];

  return (
    <>
      <header className="sticky-top site-header">
        <div className="d-flex align-items-center justify-content-between header-div">
          <Link to="/" style={{ fontSize: "25px" }}>
            <img src={Logo} width={200} alt="Logo" />
          </Link>
          <div className="d-flex align-items-center">
            {!open && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                sx={{ transform: "translateX(5)" }}
              >
                <MenuIcon style={{ fontSize: "25px" }} />
              </IconButton>
            )}
          </div>
        </div>
      </header>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "transparent",
            border: "0px none",
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
