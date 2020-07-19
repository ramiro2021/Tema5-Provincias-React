import React, { Component } from 'react';
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Provincia extends Component {
  
 
    
    render() {
      const {
        provincia,
        capital,
        bandera,
        superficie,
        
    }= this.props.provinciaProp
        return (
            <Table striped bordered hover className="mt-5">
            <thead>
              <tr>
                
               <th>{provincia}</th>
                 
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                <img src={"/img/" + bandera} alt={bandera} />
                
                </td>
                
              </tr>
              <tr>
                <td>
              <strong>CAPITAL  - {capital}</strong>
                </td>
                
              </tr>
              <tr>
                <td>
                    
                      <Link to={"/provincia/"+ superficie}><Button > Ver Mas... </Button></Link>
                </td>
                
               
              </tr>
              
            </tbody>
          </Table>
        );
    }
}

export default Provincia;

