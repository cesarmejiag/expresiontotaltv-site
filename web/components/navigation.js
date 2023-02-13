import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/navigation.module.css";

const drawerWidth = 240;

export default function Navigation({ navItems, logo, magazineUrl }) {
  const logoSrc = logo && logo.asset && logo.asset.url;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const container = typeof window !== "undefined" ? document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link href="/">
        <Box className={styles.logoDrawer}>
          <Image
            priority
            src={logoSrc}
            fill={true}
            alt="Expresion Total TV"
            sizes="183px"
          />
        </Box>
      </Link>
      <Divider />
      <List>
        {navItems.map(({ _id, title, slug }) => (
          <ListItem key={`mobile-${_id}`}>
            <ListItemButton
              component="a"
              href={slug.current}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={title}></ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
        {magazineUrl && (
          <ListItem>
            <ListItemButton
              component="a"
              href={magazineUrl}
              target="_blank"
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary="Ver Revista"></ListItemText>
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar className={styles.navigation} color="transparent" component="nav">
        <Toolbar
          className={styles.toolbar}
          color="inherit"
          aria-label="menu"
          edge="start"
        >
          <Box sx={{ flexGrow: 1 }}>
            <Link href="/">
              <Box className={styles.logo}>
                <Image
                  priority
                  src={logoSrc}
                  fill={true}
                  alt="Expresion Total TV"
                  sizes="183px"
                />
              </Box>
            </Link>
          </Box>
          <Box className={styles.list}>
            {navItems.map(({ _id, title, slug }) => (
              <Link
                key={_id}
                href={{
                  pathname: "[slug]",
                  query: { slug: slug.current },
                }}
                as={`/${slug.current}`}
              >
                {title}
              </Link>
            ))}
            {magazineUrl && (
              <Button href={magazineUrl} target="_blank" variant="contained">
                Ver Revista
              </Button>
            )}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
