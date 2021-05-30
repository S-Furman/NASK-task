import "./App.css";
import { Box, Container } from "@material-ui/core";
import ContactsTable from "./components/ContactsTable/ContactsTable";

function App() {
  return (
    <Box>
      <Container>
        <ContactsTable />
      </Container>
    </Box>
  );
}

export default App;
