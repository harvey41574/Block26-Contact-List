import { useState } from "react" 
import "./App.css"
import ContactList from "./Components/ContactList";
import Selectedcontact from "./Components/SelectedContact"

 
       export default function App(){
          const[selectedcontactId, setSlectedContactId]= useState(null);

          return(
            <>
              {selectedcontactId ?(
                <div>Selected Contact</div>
              ):(
              <ContactList/>
              )}
         
            
            
            </>
          );
        
       }   
        


