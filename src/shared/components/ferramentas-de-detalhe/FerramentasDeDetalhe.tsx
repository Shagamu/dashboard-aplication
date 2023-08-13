import { Paper, Button, Box, useTheme, Icon, Divider } from "@mui/material";
import { FC } from "react";

interface IFerramentasDeDetalheProps {
  textoBotaoNovo?: string;

  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvar?: boolean;
  mostrarBotaoSalvarEFechar?: boolean;

  aoClicarEmNovo?: () => void;
  aoClicarEmVoltar?: () => void;
  aoClicarEmApagar?: () => void;
  aoClicarEmSalvar?: () => void;
  aoClicarEmSalvarEFechar?: () => void;
}

export const FerramentasDeDetalhe: FC<IFerramentasDeDetalheProps> = ({
  textoBotaoNovo = 'Novo',

  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEFechar = false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEFechar,

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

      { mostrarBotaoSalvar && (
        <Button
            color="primary"
            variant="contained"
            disableElevation
            startIcon={<Icon>save</Icon>}
            onClick={aoClicarEmSalvar}
          >
            Salvar
        </Button>
      )}

      { mostrarBotaoSalvarEFechar && (
        <Button
          color="primary"
          variant="outlined"
          disableElevation
          startIcon={<Icon>save</Icon>}
          onClick={aoClicarEmSalvarEFechar}
        >
          Salvar e Voltar
        </Button>
      )}

      { mostrarBotaoApagar && (
        <Button
          color="primary"
          variant="outlined"
          disableElevation
          startIcon={<Icon>delete</Icon>}
          onClick={aoClicarEmApagar}
        >
          Apagar
        </Button>
      )}

      {mostrarBotaoNovo && (
        <Button
          color="primary"
          variant="outlined"
          disableElevation
          startIcon={<Icon>add</Icon>}
          onClick={aoClicarEmNovo}
        >
          {textoBotaoNovo}
        </Button>
      )}

        <Divider 
          variant="middle"
          orientation="vertical"
        />

      {mostrarBotaoVoltar && (
        <Button
          color="primary"
          variant="outlined"
          disableElevation
          startIcon={<Icon>arrow_back</Icon>}
          onClick={aoClicarEmVoltar}
        >
          Voltar
        </Button>
      )}
    </Box>
  );
};