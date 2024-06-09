import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{color: "white"}}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {["About", "Skills", "GitHub Profile"].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              component="a"
              href={
                index === 2
                  ? "https://github.com/asutosh24595"
                  : `#${text.toLowerCase()}`
              }
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="md:hidden">
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon
          sx={{
            color: "white",
          }}
        />
      </Button>
      <Drawer
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "transparent",
            height: 160,
            width: "100%",
            mt: 6.5,
          },
        }}
        open={open}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
