import { Checkbox, IconButton, TextField } from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import React from "react";
import styled from "styled-components";

const ItemForm = styled.div`
  padding: 1rem;
  display: flex;
  margin-left: 40px;

  .text {
    margin-left: 0.5rem;
    flex: 1;
    text-decoration: ${(props) => props.checked && "line-through"};
  }
`;

function TodoItem({ todo, handleToggle, handleRemove, handleModify }) {
  const { _id, text, checked, date } = todo;
  console.log(_id, text, checked, date);

  return (
    <ItemForm>
      <div className="checkbox" onClick={() => handleToggle(_id)}>
        {checked ? <Checkbox checked={checked} /> : <Checkbox />}
      </div>

      <div className="text">
        <TextField
          value={text}
          onChange={(e) => handleModify(_id, e.target.value)}
        >
          {text}
        </TextField>
      </div>

      <div className="removeBtn" onClick={() => handleRemove(_id)}>
        <IconButton aria-label="Delete Todo">
          <DeleteOutlined style={{ marginRight: "400%" }} />
        </IconButton>
      </div>
    </ItemForm>
  );
}

export default TodoItem;
