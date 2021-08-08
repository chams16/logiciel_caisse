import React from "react"

function Modal(){
    return(
        <div className="ModalBackground">
            <div className="ModalContainer">
                <button>X</button>
                <div className="title">
                    <h1>Are you sure you want to remove this item??</h1>
                </div>
                
                <div className="footer">
                    <button>cancel</button>
                    <button>continue</button>
                </div>

            </div>
        </div>

    )
}

export default Modal;