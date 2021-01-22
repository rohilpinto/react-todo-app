import React from "react";
import { FormControl, Container, TextField, Button } from "@material-ui/core";

const TodoForm = () => {
  return (
    <Container maxWidth="sm">
      <form action="">
        <FormControl fullWidth={true}>
          <TextField label="Add your ToDo's" required={true} />

          <Button variant="contained" color="primary" style={{ marginTop: 10 }}>
            Add Your ToDo
          </Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default TodoForm;
