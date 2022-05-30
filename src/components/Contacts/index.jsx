import { useState, useEffect } from "react";

import Form from "./Form";
import List from "./List";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Emre",
      phone_number: "123456789",
    },
    {
      fullname: "John",
      phone_number: "987654321",
    },
    {
      fullname: "Jane",
      phone_number: "123456789",
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
