import { useState, useEffect } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import css from "./App.module.css";
import dataContacts from "./contacts.json";
import { nanoid } from "nanoid";

function App() {
  const [contacts, setContacts] = useState(() => {
    const localStorageValue = window.localStorage.getItem("contactsValue");
    if (localStorageValue !== null) {
      return JSON.parse(localStorageValue);
    }
    return dataContacts;
  });
  const [inputValue, setInputValue] = useState("");
  // console.log("inputValue", inputValue);

  useEffect(() => {
    // console.log("state");
    window.localStorage.setItem("contactsValue", JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = (friend) => {
    const newContact = {
      ...friend,
      id: nanoid(),
    };
    // console.log("onAddContact", newContact);
    setContacts([newContact, ...contacts]);
  };
  // console.log(onAddContact);

  const handleFilter = (event) => {
    const value = event.target.value;

    setInputValue(value);
    // console.log(value);
  };

  const filteredContacts = contacts.filter((contact) => {
    // console.log(contact.name);
    // console.log("filter", inputValue);
    return contact.name.toLowerCase().includes(inputValue.toLowerCase());
  });
  // console.log("filteredContacts", filteredContacts);

  const deleteContact = (contactId) => {
    // console.log("Contacts", contacts);
    // console.log(contactId);
    setContacts(contacts.filter((item) => item.id !== contactId));
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox value={inputValue} onFilter={handleFilter} />

      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
