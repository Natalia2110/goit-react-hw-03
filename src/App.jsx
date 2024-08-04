import { useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import css from "./App.module.css";
import dataContacts from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(dataContacts);
  // const [showContacts, setShowContacts] = useState(true);
  const [inputValue, setInputValue] = useState("");

  // const handleOnInputValue = (event) => {
  //   const value = event.target.value;

  //   setInputValue(value);
  //   console.log(value);
  // };

  const filteredContacts = contacts.filter((contact) => {
    contact.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <p>{}</p>
      <ContactForm />
      <SearchBox value={inputValue} onFilter={setInputValue} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
