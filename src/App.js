import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from "./image.jpeg";
import CardGroup from 'react-bootstrap/CardGroup';
import {Navbar} from "react-bootstrap";
import {Nav} from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import React from "react";
import { FaShoppingCart} from 'react-icons/fa';
import {Button} from "react-bootstrap";
import Container from 'react-bootstrap/Container';





class App extends React.Component {


  state = { a: 0, cart: [] };
  
  

  render() {
    
    
    const inc = (item) => {
      this.state.cart.push(item);
      this.setState({ a: this.state.a + 1}); 

    };


    const dec = (item1) => {    
      let temp = this.state.cart;    
      temp.splice(temp.indexOf(item1),1);
      this.setState({ a: this.state.a - 1, cart: temp });
      
    };
    
   

    console.log(this.state.cart)

    
  return (
    <div>
    <div className="App">
      <header class="navbar navbar-expand-lg navbar-light bg-light px-5">
      <div class=" navbar-collapse">
      <Container fluid>
        <Navbar expand="lg">
          <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">About</Nav.Link>
                  <NavDropdown title="Shop" id="basic-nav-dropdown">
                    <NavDropdown.Item>All Products</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Popular Items</NavDropdown.Item>
                    <NavDropdown.Item>New Arrival</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              </Navbar.Collapse>
               
           
              <Navbar.Collapse className='me-auto'>            
              <Button style={{borderColor:"black",backgroundColor:'white',color:'black'}}><FaShoppingCart/>&nbsp;Cart&nbsp;&nbsp;
              <span style={{color:'white'}}class="zero">{this.state.a}</span>
              </Button>              
              </Navbar.Collapse>
    </Navbar>
    </Container>
    </div>   
    </header>
  
   
    

    <section class="padd text-center text-light ">
          <div class="section-font">Shop in Style</div>
          <div class="h5 text-secondary">With this shop homepage template</div>
        </section>
    
    </div>
   
     
  <CardGroup className="Cards">

    <div className="container mt-5 mb-5">
               <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5">
                        <div className="card h-100" >
                         <img src={pic} alt="..." className="img-thumbnail"/>
                          <div className="card-body text-center">
                            <h5 className="card-title">Fancy Product</h5>
                            <p>$40.00 - $80.00</p>
                            <a style={{borderColor:"black"}} className="btn button1">View Options</a>
                            </div>
                           </div>
                   
                    </div>


                    <div className="col mb-5">
                        <div className="card" >
                        <div className="badge bg-dark text-white position-absolute pos" >Sale</div>
                         <img src={pic} alt="..." className="img-thumbnail"/>
                          <div className="card-body text-center">
                            <h5 className="card-title">Special Item</h5>
                            <div className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                            <p><strike>$20.00</strike> $18.00</p>
                            {this.state.cart.includes(1) ?
                          (<button style={{borderColor:"black"}}class="btn btn-outline-dark button1" onClick={() => dec(1)}>Remove from cart</button>) : 
                          (<button style={{borderColor:"black"}} class="btn btn-outline-dark button1" onClick={() => inc(1)}> Add to cart</button> )
                           }
                            </div>
                           </div>
                   
                    </div>


                    <div className="col mb-5">
                        <div className="card" >
                        <div className="badge bg-dark text-white position-absolute pos" >Sale</div>
                         <img src={pic} alt="..." className="img-thumbnail"/>
                          <div className="card-body text-center">
                            <h5 className="card-title">Sale Item</h5>
                            <p><strike>$50.00</strike> $25.00</p>
                            {this.state.cart.includes(2) ?
                          (<button style={{borderColor:"black"}}class="btn btn-outline-dark button1" onClick={() => dec(2)}>Remove from cart</button>) : 
                          (<button style={{borderColor:"black"}} class="btn btn-outline-dark  button1" onClick={() => inc(2)}> Add to cart</button> )
                           }
                            </div>
                           </div>
                   
                    </div>


                    <div className="col mb-5">
                        <div className="card" >
                         <img src={pic} alt="..." className="img-thumbnail"/>
                          <div className="card-body text-center">
                            <h5 className="card-title">Popular item</h5>
                            <div className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                            <p>$40.00</p>
                            {this.state.cart.includes(3) ?
                          (<button style={{borderColor:"black"}}class="btn btn-outline-dark button1" onClick={() => dec(3)}>Remove from cart</button>) : 
                          (<button style={{borderColor:"black"}} class="btn btn-outline-dark button1" onClick={() => inc(3)}> Add to cart</button> )
                           }


                            </div>
                           </div>
                   
                    </div>

                    <div className="col mb-5">
                        <div className="card" >
                        <div className="badge bg-dark text-white position-absolute pos" >Sale</div>
                         <img src={pic} alt="..." className="img-thumbnail"/>
                          <div className="card-body text-center">
                            <h5 className="card-title">Sale Item</h5>
                            <p><strike>$50.00</strike> $25.00</p>
                            {this.state.cart.includes(4) ? 
                               (<button style={{borderColor:"black"}}class="btn btn-outline-dark button1" onClick={() => dec(4)}>Remove from cart</button>) :
                               (<button style={{borderColor:"black"}}class="btn btn-outline-dark button1" onClick={() => inc(4)}>Add to cart   </button>)
                     
                            }
                         
                            </div>
                           </div>
                   
                    </div>


                    <div className="col mb-5">
                        <div className="card h-100" >
                         <img src={pic} alt="..." className="img-thumbnail"/>
                          <div className="card-body text-center">
                            <h5 className="card-title">Fancy Product</h5>
                            <p>$40.00 - $80.00</p>

                            <a style={{borderColor:"black"}} className="btn button1">View Options</a>
                            </div>
                           </div>
                   
                    </div>

                    <div className="col mb-5">
                        <div className="card" >
                        <div className="badge bg-dark text-white position-absolute pos" >Sale</div>
                         <img src={pic} alt="..." className="img-thumbnail"/>
                          <div className="card-body text-center">
                            <h5 className="card-title">Special Item</h5>
                            <div className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                            <p><strike>$20.00</strike> $18.00</p>
                            {this.state.cart.includes(6) ? 
                               (<button style={{borderColor:"black"}}class="btn btn-outline-dark button1" onClick={() => dec(6)}>Remove from cart</button>) :
                               (<button style={{borderColor:"black"}}class="btn btn-outline-dark button1" onClick={() => inc(6)}>Add to cart   </button>)
                     
                            }
                         
                            
                            </div>
                           </div>
                   
                    </div>

                    <div className="col mb-5">
                        <div className="card" >
                         <img src={pic} alt="..." className="img-thumbnail"/>
                          <div className="card-body text-center">
                            <h5 className="card-title">Popular item</h5>
                            <div className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                            <p>$40.00</p>
                            {this.state.cart.includes(7) ? 
                               (<button style={{borderColor:"black"}}class="btn btn-outline-dark button1" onClick={() => dec(7)}>Remove from cart</button>) :
                               (<button style={{borderColor:"black"}}class="btn btn-outline-dark button1" onClick={() => inc(7)}>Add to cart   </button>)
                     
                            }
                            </div>
                           </div>
                   
                    </div>

               </div>
                 
           </div> 
</CardGroup>

        <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright © Your Website 2021</p></div>
        </footer>
      

      


    </div>


  );
}
}
export default App;