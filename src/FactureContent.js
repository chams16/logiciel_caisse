import React from 'react'

import './content.css';
import './Facture.css'

export default class FactureContent extends React.Component{

    render(){
        return(
            <table >
            {this.props.cartItem.length !== 0 && 
                <thead className="tablehead">
                <th>name</th>
                <th>add/remove</th>
                <th>price</th>
                </thead>
            }
            
            {this.props.cartItem.map((item) => (
            <tbody>
            <tr>
                <td className="name">{item.name}</td>
                <td>
                <div className="facturebtn">
                        <div className="minisbtn">
                        <button  onClick={() => this.props.onRemove(item)} className="remove">
                        -
                        </button>
                        </div>
                         
                        <div className="plusbtn">
                        <button  onClick={() => this.props.onAdd(item)} className="add">
                        +
                         </button>
                        </div>
                    </div>

                </td>
                <td className="factureprice">{item.qty} x {item.price} TND</td>
            </tr>
            </tbody>
            ))}
            </table>

          


        )
    }
}