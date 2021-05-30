import "./App.css";
import { Box, Container } from "@material-ui/core";
import ContactsTable from "./components/ContactsTable/ContactsTable";
import Input from "./components/Input/Input";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  const changeHandler = (inputValue) => {
    const firstLetterToUpper = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    setInputValue(firstLetterToUpper(inputValue));
  };

  return (
    <Box>
      <Container>
        <Input inputValue={changeHandler} />
        <ContactsTable searchValue={inputValue} />
      </Container>
    </Box>
  );
}

export default App;
