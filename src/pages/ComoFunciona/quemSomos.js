import { Grid } from "@mui/material";

export default function ComoFunciona({ camera }) {
  return (
    <>
      <Grid container style={{ display: "flex", flexDirection: "column" }}>
        <Grid item>
          <h1>Como Fazemos</h1>
        </Grid>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item>
              <img src={camera} alt="smat Gate" width={400} />
            </Grid>

            <Grid item style={{ maxWidth: "50%" }}>
              <h3>Monitoramento</h3>
              <p>
                Temos uma inteligência artificial que controla a abertura do
                portão. Cadastramos os veículos e as placas de identificação de
                cada um deles. A IA vai poder identificar quando algum veículo
                está impedindo o fechamento do portão, e acionar alguma pessoa
                responsável para verificar questão.
              </p>
              <p>
                A Smart Gate tem um robusto sistema de monitoramento que vai
                personalizar a sua empresa.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
