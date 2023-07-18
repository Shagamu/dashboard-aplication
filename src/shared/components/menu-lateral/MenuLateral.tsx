import { List } from '@mui/material';
import { Divider, Avatar, Drawer, useTheme, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Box } from '@mui/system';
import { ReactNode } from 'react';

export const MenuLateral: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const theme = useTheme()

  return (
    <>
      <Drawer variant="permanent">
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">

          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="https://avatars.githubusercontent.com/u/86428685?v=4"
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>

                <ListItemText primary="Página Inicial" />
              </ListItemButton>
            </List>

          </Box>

        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  )
}
