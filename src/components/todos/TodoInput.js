import React, { useState } from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

function TodoInput({ handleAdd }) {
  const [input, setInput] = useState();
  console.log(input);

  return (
    <Paper style={{ margin: 17, padding: 16, height: 32 }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd(input);
          setInput("");
        }}
      >
        <Grid container justifyContent="center">
          <TextField
            placeholder="Input your todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            style={{ left: 10 }}
            color="primary"
            variant="contained"
            type="submit"
          >
            +
          </Button>
        </Grid>
      </form>
    </Paper>
  );
}

export default TodoInput;
