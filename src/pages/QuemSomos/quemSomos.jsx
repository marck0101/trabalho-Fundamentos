import { Grid } from "@mui/material";

export default function QuemSomos({ smartGate }) {
  return (
    <>
      <Grid container style={{ display: "flex", flexDirection: "column" }}>
        <Grid item>
          <h1>Quem Somos</h1>
        </Grid>
        <Grid item >  
          <Grid container spacing={2}>
            <Grid item>
              <img src={smartGate} alt="smat Gate " width={400} />
            </Grid>
            <Grid item style={{ maxWidth: '50%'}}>
              <h3>Somos a Smart Gate</h3>
              <p>
                Existimos para ser perita em segurança de empresas com um alto
                fluxo de grandes veículos, nosso foco são as transportadoras
              </p>
              <p>
                Somos conhecidos por melhor atender nossos clientes. Temos um
                acompanhamento personalizado para garantir o sucesso do seu
                negócio!!
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
