import React from "react"
import './content.css';
import './Facture.css'
import FactureContent from "./FactureContent";

import Somme from "./Somme";


export default class  Table extends React.Component{
    render(){

        const x = "cart is Empty"
       
        
    return(
 
        <div>
            <Somme cartItem={this.props.cartItem}/>
            {this.props.cartItem.length === 0 && <div className="choice">{x}</div>}
                <FactureContent cartItem={this.props.cartItem} onAdd={this.props.onAdd} onRemove={this.props.onRemove}/>    

                

        </div>

    )
    
    

}
}
