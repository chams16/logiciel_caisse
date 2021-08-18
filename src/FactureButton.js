import React from 'react'
import { FaTrash, FaRegCopy } from 'react-icons/fa';

import { Button, Row } from 'react-bootstrap';
import './content.css';
import './Facture.css'

export default class  FactureButton extends React.Component{

    render(){
        return(
            <Row className="button">
                         <span>
                            <Button  className="delet" onClick={()=> this.props.Removeall(this.props.cartItem)}><div className="trash"><FaTrash/></div>SUPPRIMER</Button>
                         </span>
                         <span>

                            <Button  className="wait" onClick={this.props.print}><div className="trash" ><FaRegCopy/></div>PRINT</Button>

                         </span>
            </Row>
        )
    }
}