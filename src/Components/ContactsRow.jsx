export default function ContactsRows({setSelectedContactId,contact}){
    const [selectedContact, setSelectedContact]= useState({})

   
  return(
         <tr 
          onClick= {()=>{
            setSelectedContactId(contact.id);
          }}
          >
             <td>{contact.name}</td>
             <td>{contact.email}</td>
             <td>{contact.phone}</td>
         </tr>
  );
  } 
