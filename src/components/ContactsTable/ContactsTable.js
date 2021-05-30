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

const ContactsTable = (props) => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => response.json())
      .then((json) => json.sort(compareNames))
      .then((sorted) => setFetchedData(sorted));

    const compareNames = (a, b) => {
      const getSecondName = (a) => {
        return a.split(" ").slice(-1).join(" ");
      };

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
          {fetchedData.map((person) => {
            if (person.name.includes(props.searchValue)) {
              if (props.searchValue) {
                return (
                  <SingleRow
                    key={person.id}
                    id={person.id}
                    name={person.name}
                    phone={person.phone}
                  />
                );
              } else {
                return (
                  <SingleRow
                    key={person.id}
                    id={person.id}
                    name={person.name}
                    phone={person.phone}
                  />
                );
              }
            }
            return null;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactsTable;
