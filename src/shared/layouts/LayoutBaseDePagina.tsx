import { Icon, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box, Theme } from "@mui/system";
import { FC, ReactNode } from "react";
import { useDrawerContext } from "../contexts";

interface ILayoutBaseDePaginaProps extends React.HTMLAttributes<HTMLElement> {
  titulo: string;
  children?: ReactNode;
}

export const LayoutBaseDePagina: FC<ILayoutBaseDePaginaProps> = ({ children, titulo} )  => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const theme = useTheme();

  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box display="flex" alignItems="center" padding={1} height={theme.spacing(12)} gap={1}>
        {smDown && (
        <IconButton onClick={toggleDrawerOpen}>
          <Icon>menu</Icon>
        </IconButton>
        )}

        <Typography variant="h5">
          {titulo}
        </Typography>
      </Box>

      <Box>
        Barra de Ferramentas
      </Box>

      <Box>
        {children}
      </Box>
    </Box>
  );
};