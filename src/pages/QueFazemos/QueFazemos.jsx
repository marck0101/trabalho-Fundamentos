import { Grid } from "@mui/material";

export default function QueFazemos({ apertoMaos }) {
  return (
    <>
      <Grid container style={{ display: "flex", flexDirection: "column" }}>
        <Grid item>
          <h1>O que Fazemos</h1>
        </Grid>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item style={{ maxWidth: "60%" }}>
              <h3>Melhoramos a experiência dos usuários</h3>
              <p>
                Em ambientes que tem fluxo contínuo de veículos, as vezes pode
                ser que acabamos nos distraindo e causando algum incidente, como
                pessoas não autorizadas acessar áreas restritas de nossas
                empresas.
              </p>
              <p>
                A Smart Gate tem um robusto sistema de monitoramento que vai
                personalizar a sua empresa.
              </p>
            </Grid>
            <Grid item>
              <img src={apertoMaos} alt="smat Gate" width={400} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
