import { Icon, useTheme, Box, Button, Paper, TextField } from "@mui/material";
import { FC } from "react";

interface IBarraDeFerramentasProps {
  textoDaBusca?: string;
  mostrarInputBusca?: boolean;
  aoMudarTextoDeBusca?: (novoTexto: string) => void;
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void;
}

export const BarraDeFerramentas: FC<IBarraDeFerramentasProps> = ({
  textoDaBusca = '',
  mostrarInputBusca = false,
  aoMudarTextoDeBusca,
  aoClicarEmNovo,
  mostrarBotaoNovo = true,
  textoBotaoNovo = 'Novo',
}) => {
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
      { mostrarInputBusca && (
        <TextField 
        placeholder="Pesquisar..."
        size="small"
        value={textoDaBusca}
        onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
      />
      )}

      <Box flex={1} display="flex" justifyContent="end">
        {mostrarBotaoNovo &&(
          <Button
          color="primary"
            variant="contained"
            disableElevation
            endIcon={<Icon>add</Icon>}
            onClick={aoClicarEmNovo}
          >
            {textoBotaoNovo}
          </Button>
        )}
      </Box>
    </Box>
  );
};