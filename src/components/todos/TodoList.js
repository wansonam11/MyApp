import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { Paper, Grid } from "@material-ui/core";

const ListForm = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

function TodoList({ todos, handleRemove, handleToggle, handleModify }) {
  return (
    <ListForm>
      <Grid container justifyContent="center">
        <Paper
          style={{
            margin: 16,
            padding: 16,
            width: "90%",
            height: 330,
            overflow: "auto",
          }}
        >
          {todos &&
            todos.map((todo) => (
              <TodoItem
                todo={todo}
                key={todo._id}
                handleRemove={handleRemove}
                handleToggle={handleToggle}
                handleModify={handleModify}
              />
            ))}
        </Paper>
      </Grid>
    </ListForm>
  );
}

export default TodoList;
