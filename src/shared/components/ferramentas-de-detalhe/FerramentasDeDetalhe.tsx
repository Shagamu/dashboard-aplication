import { Paper, Button, Box, useTheme, Icon, Divider } from "@mui/material";
import { FC } from "react";


export const FerramentasdeDetalhe: FC = () => {
  const theme = useTheme();

  return (
    <Box 
      height={theme.spacing(5)} 
      marginX={1} 
      padding={1} 
      paddingX={2} 
      display="flex" 
      gap={1} 
      alignItems={"center"} 
      component={Paper}
    >
      <Button
            color="primary"
            variant="contained"
            disableElevation
            startIcon={<Icon>save</Icon>}
          >
            Salvar
          </Button>

          <Button
            color="primary"
            variant="outlined"
            disableElevation
            startIcon={<Icon>save</Icon>}
          >
            Salvar e Voltar
          </Button>

          <Button
            color="primary"
            variant="outlined"
            disableElevation
            startIcon={<Icon>delete</Icon>}
          >
            Apagar
          </Button>

          <Button
            color="primary"
            variant="outlined"
            disableElevation
            startIcon={<Icon>add</Icon>}
          >
            Novo
          </Button>

          <Divider 
            variant="middle"
            orientation="vertical"
          />

          <Button
            color="primary"
            variant="outlined"
            disableElevation
            startIcon={<Icon>arrow_back</Icon>}
          >
            Voltar
          </Button>
    </Box>
  );
};