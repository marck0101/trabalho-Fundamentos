import { Grid } from "@mui/material";

export default function EntradaSaidaDados({ inOut }) {
  return (
    <>
      <Grid container style={{ display: "flex", flexDirection: "column" }}>
        <Grid item>
          <h1>Entrada e saída de Dados</h1>
        </Grid>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item style={{ maxWidth: "50%" }}>
              <h3>Input / Output</h3>
              <p>
                A entrada/saída de dados compõem esse processo que consiste em
                receber os dados do mundo real, por meio do que é digitado ou da
                ação do mouse, por exemplo. Após isso, mostramos a informação
                processada ao usuário, o que pode acontecer por meio da tela,
                uma impressão ou ainda a gravação em um arquivo.
              </p>
              <p>
                Saída de dados é o que vai do programa para fora. quando pegamos
                o retorno do processamento de um programa, temos uma saída de
                dados.
              </p>
            </Grid>
            <Grid item>
              <img src={inOut} alt="smat Gate " width={500} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
