/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Card,
  Fade,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import "./App.css";
import QuemSomos from "./pages/QuemSomos/quemSomos";
import smartGate from "../src/image/smartgate1.png";
import apertoMaos from "../src/image/apertoMaos.jpg";
import gateII from "../src/image/gateII.png";
import inOut from "../src/image/leia_escreva.png";
import camera from "../src/image/camera.png";
import QueFazemos from "./pages/QueFazemos/QueFazemos";
import ComoFunciona from "./pages/ComoFunciona/quemSomos";
import EntradaSaidaDados from "./pages/EntradaSaidaDados/EntradaSaidaDados";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    // border: "2px solid #000",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    textAlign: "center",
  };
  function fim() {
    alert("aa");
  }

  return (
    <>
      <div
        className="alingPadrao" /*style={{backgroundImage: `url(${smartGate})` }}*/
      >
        <Grid
          container
          spacing={2}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Grid item style={{ padding: 155 }}>
            <img
              src={gateII}
              alt="Logo da aplicação"
              width={"100%"}
              height={"110%"}
            />
            <strong>Integrantes:</strong> Alexandre, Laisa, Nicolas & Marcos
          </Grid>
          <Grid item>
            <Card>
              <Grid className="alingPadrao">
                <QuemSomos smartGate={smartGate} />
              </Grid>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <Grid className="alingPadrao">
                <QueFazemos apertoMaos={apertoMaos} />
              </Grid>
            </Card>
          </Grid>

          <Grid item>
            <Card>
              <Grid className="alingPadrao">
                <ComoFunciona camera={camera} />
              </Grid>
            </Card>
          </Grid>

          <Grid item>
            <Card>
              <Grid className="alingPadrao">
                <EntradaSaidaDados inOut={inOut} />
              </Grid>
            </Card>
          </Grid>

          <Grid item>
            <Grid className="alingPadrao2">
              <div>
                <Button variant="outlined" onClick={() => handleOpen()}>
                  Fim
                </Button>
                <Modal
                  aria-labelledby="spring-modal-title"
                  aria-describedby="spring-modal-description"
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  // slots={{ backdrop: Backdrop }}
                  slotProps={{
                    backdrop: {
                      TransitionComponent: Fade,
                    },
                  }}
                >
                  <Fade in={open}>
                    <Box sx={style}>
                      <Typography
                        id="spring-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Muito Obrigado Pela Atenção!!
                      </Typography>
                    </Box>
                  </Fade>
                </Modal>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;
