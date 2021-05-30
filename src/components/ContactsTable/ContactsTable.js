import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Paper,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import SingleRow from "./SingleRow/SingleRow";

const ContactsTable = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => response.json())
      .then((json) => json.sort(compare))
      .then((sorted) => setFetchedData(sorted));

    const compare = (a, b) => {
      const secondNameA = getSecondName(a.name);
      const secondNameB = getSecondName(b.name);

      if (secondNameA < secondNameB) {
        return -1;
      }
      if (secondNameA > secondNameB) {
        return 1;
      }
      return 0;
    };
    const getSecondName = (a) => {
      return a.split(" ").slice(-1).join(" ");
    };
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fetchedData.map((person) => (
            <SingleRow
              key={person.id}
              id={person.id}
              name={person.name}
              phone={person.phone}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactsTable;
