import { TextField } from "@material-ui/core";

const Input = (props) => {
  return (
    <TextField
      margin="normal"
      variant="outlined"
      label="Search by Name"
      onChange={(event) => props.inputValue(event.target.value)}
    />
  );
};

export default Input;
