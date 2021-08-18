import React, { useRef } from 'react';
import Table from './Table';

import { Card} from 'react-bootstrap';
import './content.css';
import './Facture.css'

import { useReactToPrint } from 'react-to-print';
import FactureButton from './FactureButton';


export default function Facture(props){
    const {cartItem, onAdd, onRemove,Removeall}=props;
   
    


    const componentRef = useRef();
    const print= useReactToPrint({
        content: () => componentRef.current,
      });

    return (
        <Card.Body>
                        <Table ref={componentRef} cartItem={cartItem} onAdd={onAdd} onRemove={onRemove} />
                        
                         <FactureButton Removeall={Removeall} print={print} cartItem={cartItem}/>
        </Card.Body>
       
    );
}