import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <List>
      {['Bench Press', 'Pull-ups'].map((text) => (
        <ListItem  key={text} component={Link} to={`/${text.replace(' ', '-').toLowerCase()}`}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }} // Show menu icon only on small screens
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Navbar
          </Typography>
          <div style={{ display: 'flex' }}>
            {['Bench Press', 'Pull-ups'].map((text) => (
              <Typography
                key={text}
                variant="button"
                component={Link}
                to={`/${text.replace(' ', '-').toLowerCase()}`}
                style={{ textDecoration: 'none', margin: '0 10px' }}
                sx={{
                  display: { xs: 'none', sm: 'block' }, // Hide on small screens, show on larger screens
                }}
              >
                {text}
              </Typography>
            ))}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: 'block', sm: 'none' } }} // Show drawer on small screens
      >
        {drawer}
      </Drawer>
    </>
  );
}