import { Icon, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box, Theme } from "@mui/system";
import { FC, ReactNode } from "react";
import { useDrawerContext } from "../contexts";

interface ILayoutBaseDePaginaProps extends React.HTMLAttributes<HTMLElement> {
  titulo: string;
  barraDeFerramentas?: ReactNode;
  children?: ReactNode;
}

export const LayoutBaseDePagina: FC<ILayoutBaseDePaginaProps> = ({ children, titulo, barraDeFerramentas} )  => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const theme = useTheme();

  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box display="flex" alignItems="center" padding={1} gap={1} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}>
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}

        <Typography 
        variant={smDown ? "h5" : mdDown ? "h4" : "h3"} 
        overflow="hidden"
        whiteSpace="nowrap"
        textOverflow="ellipsis"
        >
          {titulo}
        </Typography>
      </Box>

      {barraDeFerramentas && (
        <Box>
          {barraDeFerramentas}
        </Box>
      )}

      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};