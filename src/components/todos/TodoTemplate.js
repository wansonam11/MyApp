import React from "react";
import styled from "styled-components";
import { Paper, AppBar, Grid, Typography } from "@material-ui/core";
import "../../scss/style.css";

const Tdt = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  overflow: hidden;

  .title {
    background-color: blue;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function todoTemplate({ children }) {
  return (
    <main>
      <Tdt>
        <Paper style={{ marginTop: 80, padding: 10 }}>
          <AppBar position="static">
            <Grid justifyContent="center" container>
              <Typography> TODO LIST</Typography>
            </Grid>
          </AppBar>
        </Paper>
        <div className="content">{children}</div>
      </Tdt>
    </main>
  );
}

export default todoTemplate;
