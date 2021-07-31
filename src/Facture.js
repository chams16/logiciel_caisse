import React from 'react';

import { Button, Card, FormControl, InputGroup, Row } from 'react-bootstrap';
import './content.css';
import './Facture.css'
import { FaTrash, FaRegCopy } from 'react-icons/fa';


export default function Facture(props){
    const {cartItem, onAdd, onRemove,Removeall}=props;
    const itemsPrice = cartItem.reduce((a,c) => a+c.price*c.qty,0);
    const totalPrice = itemsPrice + "  TND ";
    const x = "cart is Empty"

 

    return (
        <Card.Body>
                   <Row className="facture">
                        <span>
                            <div  className="article">{cartItem.length} Article</div>
                        </span>
                        <span >
                                <InputGroup >
                                {cartItem.length !== 0 ? (<FormControl className="price "  placeholder={totalPrice}/>)
                                :(<FormControl className="price "  placeholder="0.00 TND"/>)}
                                  
                                </InputGroup>
                        </span>
                        <span>
                            <div  className="num">N°19</div>
                        </span>
                      </Row>
                        <div>
                            {cartItem.length === 0 && <div className="choice">{x}</div>}
                            {cartItem.map((item) => (
                                    <div key={item.id} className="row">
                                        <div className="name">{item.name}</div>
                                        <div className="facturebtn">
                                            <div className="minisbtn">
                                            <button  onClick={() => onRemove(item)} className="remove">
                                            -
                                            </button>
                                            </div>
                                             
                                            <div className="plusbtn">
                                            <button  onClick={() => onAdd(item)} className="add">
                                            +
                                             </button>
                                            </div>
                                        </div>

                                        <div className="factureprice">
                                        {item.qty} x ${item.price}
                                        </div>
                                    </div>
                                    ))}
                        </div>
                      <Row className="button">
                         <span>
                            <Button  className="delet" onClick={()=> Removeall(cartItem)}><div className="trash"><FaTrash/></div>SUPPRIMER</Button>
                         </span>
                         <span>
                            <Button  className="wait" ><div className="trash"><FaRegCopy/></div>PRINT</Button>
                            
                         </span>
                      </Row>
     
        </Card.Body>
    );
}