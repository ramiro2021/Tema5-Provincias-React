import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

class DetallProvincia extends Component {

    state = {
        provincia: [],
      };

      componentDidMount() {
        this.getOne();
      }

      
  async getOne() {
    fetch("/lista_provincias.json")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        
        let ProvinciaEncontrada  = res.find(
          (prov) => prov.superficie === this.props.match.params.superficie
        );
        this.setState({
            provincia: ProvinciaEncontrada,
        });
      });
  }

    render() {
        console.log(this.state.provincia);
        return (
            <Row>
                <Col lg={12}>
                        <h1>Detalles de : {this.state.provincia.provincia} </h1>
                </Col>
                
                 <Col lg={12}>  
                    <strong>Provincia: {this.state.provincia.provincia}</strong>
                 </Col>  
                
                
                 <Col lg={12}>    
                    <strong>Abreviatura: {this.state.provincia.abreviatura}</strong>
                    </Col>    
                
                    <Col lg={12}> 
                    <strong>Capital: {this.state.provincia.capital}</strong>
                    </Col>  
                    <Col lg={12}> 
                   <strong>Bandera:</strong> <img
            src={"/img/" + this.state.provincia.bandera}
            alt={this.state.provincia.bandera}
          />
             </Col> 
             <Col lg={12}> 
                    <strong>Fecha Autonomia : {this.state.provincia.fechaAutonomia}</strong>
                    </Col> 
                    <Col lg={12}> 
                    <strong>Poblacion: {this.state.provincia.poblacion}</strong>
                    </Col> 

                    <Col lg={12}> 
                    <strong>Superficie: {this.state.provincia.superficie}</strong>
                    </Col> 
               
                    <Col lg={12}> 
                    <strong>Nro Departamentos: {this.state.provincia.nroDepartamentos}</strong>
                    </Col> 
                    <Col lg={12}> 
                {this.state.provincia.tienePuerto === 'Y' ?
                    (
                        
                        <strong>Puerto: Si</strong>
                        
                    )
                    :
                    (
                        
                        <strong>Puerto: No</strong>
                        
                    )   
                }
                </Col> 
                <Col lg={12}> 
                <Link to="/">Volver</Link>
                </Col>

            </Row>

                
                
                
             
                
                
            
        );
    }
}

export default DetallProvincia;