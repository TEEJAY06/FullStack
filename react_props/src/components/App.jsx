import { useState } from "react";
import "../App.css";
import PhoneCard from "./Card";
import contacts from "../Contacts";

function CreateCard(contact) {
  return (
    <PhoneCard
      key={contact.id}
      cdId={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      mail={contact.email}
    ></PhoneCard>
  );
}

function App() {
  // let res;
  // for (let index = 0; index < contacts.length; index++) {
  //   res.push(
  //     <PhoneCard
  //       name={contacts[index].name}
  //       img={contacts[index].imgURL}
  //       tel={contacts[index].phone}
  //       mail={contacts[index].email}
  //     ></PhoneCard>
  //   );
  // }
  // return (
  //   <div>
  //     <h1 className="heading">My Contacts</h1>
  //     {res}
  //   </div>
  // );

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(CreateCard)}

      {/* <PhoneCard
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        mail={contacts[0].email}
      ></PhoneCard>

      <PhoneCard
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        mail={contacts[1].email}
      ></PhoneCard>

      <PhoneCard
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        mail={contacts[2].email}
      ></PhoneCard> */}
    </div>
  );
}

export default App;
