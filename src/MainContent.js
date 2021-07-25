
import React, { useState } from 'react';
import { Button, Card, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import './content.css';
import { FaTrash, FaRegCopy } from 'react-icons/fa';





export default function MainContent() {
  

    const [choice, setchoice] = useState('')

  return (
    <Row className="ligne">
        <Col className="colone1 d-inline p-2">
        <Card className="firstcard">
        <Card.Body>
            <Row>
                <span>
                <Button  className="tacos"
                    onClick={()=> setchoice("tacos")}
                    >Tacos
                </Button>
            </span>
            <span>
                <Button  className="sandwich" onClick={()=> setchoice("sandwich")}>SANDWICH</Button>
            </span>
            <span>
                <Button  className="burger" onClick={()=> setchoice("burger")}>BURGER</Button>
            </span>
            <span>
                <Button  className="extra" onClick={()=> setchoice("extra")}>EXTRA</Button>
            </span>
            <span>
                <Button  className="salad" onClick={()=> setchoice("salad")}>SALADE</Button>
            </span>
            <span>
                <Button  className="urban" onClick={()=> setchoice("urban")}>URBAN KID</Button>
            </span>
            <span>
                <Button  className="boisson" onClick={()=> setchoice("boisson")}>BOISSON</Button>
            </span>
            <span>
                <Button  className="dessert" onClick={()=> setchoice("dessert")}>DESSERT</Button>
            </span>
            
                <span>
                <Button  className="MILKSHAKE" onClick={()=> setchoice("milkshake")}>MILKSHAKE</Button>
                </span>
             </Row>
             <Row>
                 <div className="choice">
                     {choice.toUpperCase()}
                 </div>
                 <span className="block">
                    {choice==="tacos" && <Card  className="tacosCard">
                        <Card.Body>
                            <Button className="btnAdd"> 
                            <Card.Title className="titleCard">tacos</Card.Title>
                            <Card.Text className="textCard">5.00 €</Card.Text>
                            </Button>
                            <img className="imgCard" alt="tacos" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh4t3Imw9hFjH3fKthVAZ_NWY2uXNGji6Xhg&usqp=CAU" />

                        </Card.Body>
                    </Card>}
                </span>
                <sapn className="block">
                    {choice==="tacos" &&<Card  className="artisanal ">
                            <Button className="btnAdd2"> 
                            <Card.Title className="titleCard">tacos artisanal</Card.Title>
                            <Card.Text className="textCard">9.00 €</Card.Text>
                            </Button>
                    </Card>}
                </sapn>
                <sapn className="block">
                    {choice==="tacos" && <Card  className="essentiel ">
                            <Button className="btnAdd2"> 
                            <Card.Title className="titleCard">tacos essentiel</Card.Title>
                            <Card.Text className="textCard">8.50 €</Card.Text>
                            </Button>
                    </Card>}
                </sapn>
                <sapn className="block">
                   {choice==="tacos" &&  <Card  className="fondant ">
                            <Button className="btnAdd2"> 
                            <Card.Title className="titleCard">tacos fondant</Card.Title>
                            <Card.Text className="textCard">9.50 €</Card.Text>
                            </Button>
                    </Card>}
                </sapn>
                <sapn className="block">
                    {choice==="tacos" && <Card  className="jaffar ">
                            <Button className="btnAdd2"> 
                            <Card.Title className="titleCard">tacos jaffar</Card.Title>
                            <Card.Text className="textCard">9.00 €</Card.Text>
                            </Button>
                    </Card>}
                </sapn>
                <span className="block">
                   {choice==="boisson"&&  <Card  className="cafeCard">
                        <Card.Body>
                            <Button className="btnAddcafe"> 
                            <Card.Title className="titleCard">cafe</Card.Title>
                            <Card.Text className="textCard">1.50 €</Card.Text>
                            </Button>
                            <img className="imgCard" alt="cafe" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnriL54tU4fWrT6ISAc_nd1ZydnyNlzlqVj-2ZUDyXE2W-JD5-il-SdezPCFfWIehOVJL4ewyPThM&usqp=CAU" />
                        </Card.Body>
                    </Card>}
                </span>
                <sapn className="block">
                    {choice==="boisson" && <Card  className="coca ">
                            <Button className="btnAdd3"> 
                            <Card.Title className="titleCard">coca 33cl</Card.Title>
                            <Card.Text className="textCard">1.50 €</Card.Text>
                            </Button>
                    </Card>}
                </sapn>
                <span className="block">
                   {choice==="dessert" &&  <Card  className="tiramissuCard">
                        <Card.Body>
                            <Button className="btnAddtiramissu"> 
                            <Card.Title className="titleCard">tiramissu</Card.Title>
                            <Card.Text className="textCard">3.00 €</Card.Text>
                            </Button>
                            <img className="imgCard" alt="tiramissu" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrx6MOEmJZJ1B5O_a9lYrqkjk8L9Nl4E0leg-5fLPoedj8yjfV0WehMs19L-C4Dp1ROOW-Q3cU1bg&usqp=CAU" />
                        </Card.Body>
                    </Card>}
                </span>
             </Row>
        </Card.Body>
      </Card>
        </Col>
        <Col className="colone2 d-inline p-2">
            <Card className="secondcard">
                <Card.Body>
                    <Row className="facture">
                        <span>
                            <div  className="article">0 Article</div>
                        </span>
                        <span >
                                <InputGroup >
                                <FormControl className="price "  placeholder="0,00 €" />   
                                </InputGroup>
                        </span>
                        <span>
                            <div  className="num">N°19</div>
                        </span>
                      </Row>
                      <Row className="button">
                         <span>
                            <Button  className="delet"><div className="trash"><FaTrash/></div>SUPPRIMER</Button>
                         </span>
                         <span>
                            <Button  className="wait"><div className="trash"><FaRegCopy/></div>ATTENTE</Button>
                         </span>
                      </Row>
                </Card.Body>
            </Card>
       
       
        </Col>
    </Row>
    
  );
}