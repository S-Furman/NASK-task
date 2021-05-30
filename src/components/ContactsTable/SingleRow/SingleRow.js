import { TableRow, TableCell, Checkbox } from "@material-ui/core";
import { useState } from "react";

const SingleRow = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const personClickHandler = () => {
    setIsChecked(!isChecked);
    console.log(props.id);
  };

  return (
    <TableRow key={props.id} value={false}>
      <TableCell onClick={personClickHandler}>{props.name}</TableCell>
      <TableCell>{props.phone}</TableCell>
      <TableCell padding="checkbox">
        <Checkbox
          onClick={() => setIsChecked(!isChecked)}
          checked={isChecked}
        />
      </TableCell>
    </TableRow>
  );
};

export default SingleRow;
