
import React from 'react';
import './nav.css'
import {Button, InputGroup, FormControl} from 'react-bootstrap';
import { FaAlignJustify, FaSearch,FaUserAlt,FaWeightHanging,FaBarcode } from "react-icons/fa";


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


toast.configure()
export default function Navbar() {
  
  const enFace=()=>{
      toast('vous serez servez au table 25',{ position: toast.POSITION.TOP_CENTER})
  }

  const Emporter =()=>{
    toast('votre commande sera prét a emporter',{ position: toast.POSITION.TOP_CENTER})
  }

  return (
 
              <header className='navbar'>
            
            <span>
            <Button  className="firstbtn"><FaAlignJustify/></Button>
            </span>
            <span >
            <InputGroup >
            <FormControl className="searchfield "  placeholder="Numero de téléphone / Nom / Prénom" />   
            </InputGroup>
            </span>
            <span>
            <Button  className="searchbtn"><FaSearch/></Button>
            </span>
            

            <div ><Button  className="ENFACE" onClick={enFace}><span className="user"><FaUserAlt/></span>EN FACE</Button></div>
            <div ><Button  className="EMPORTER" onClick={Emporter}><span className="emport"><FaWeightHanging/></span>EMPORTER</Button></div>
            <span >
            <Button className="clientBtn"><span className="user"><FaUserAlt/></span>Client 4056881</Button>
            </span>
            <span>
            <Button className="marketbtn"><FaBarcode/></Button>
            </span>       
        </header>
    
    
  );
}