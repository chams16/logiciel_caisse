import React, {useState} from 'react'

import './content.css';
import './Facture.css'

import { FormControl, InputGroup, Row } from 'react-bootstrap';

export default class Somme extends React.Component{

    constructor(){
        super()
        this.state = {
            data: "0",
            reste:0
        }
    }

    render(){

        

        const itemsPrice = this.props.cartItem.reduce((a,c) => a+c.price*c.qty,0);
        const totalPrice = itemsPrice + "  TND ";

        const getData=(val) => {
            this.setState({
                data: val.target.value
            })
            this.setState({
                reste:(val.target.value)-parseFloat(totalPrice)
            })
            
        }

        return(
            <div>
                <Row className="facture">
                <span>
                    <div  className="article">{this.props.cartItem.length} Article</div>
                </span>
                <span >
                        <InputGroup >
                        {this.props.cartItem.length !== 0 ? (<FormControl className="price "  placeholder={totalPrice}/>)
                        :(<FormControl className="price "  placeholder="0.00 TND"/>)}
                        
                        </InputGroup>
                </span>
                <span>
                    <div  className="num">N°19</div>
                </span>
            </Row>
            {this.props.cartItem.length !== 0 ? (
            <Row>
            
                <div className="montant">
                        <table>
                            <tr>
                                <td className="pricedata">Le montant donnée est: </td>
                                <td>
                                    <input className="price2" type="text" onChange={getData} placeholder={this.state.data}/> 
                                </td>
                            </tr>
                            <tr>
                                <td className="restedata">Le reste a retourner est: </td>
                                <td className="reste">{this.state.reste} TND</td>
                            </tr>
                        </table>
                </div>
            
            </Row>
            ):(<div></div>)}
        </div>
        )

    }
}