import React, { Component } from "react";
import Provincia from "./Provincia";
import ProvinciasConPuerto from "./ProvinciasConPuerto";
import { Row, Col } from "react-bootstrap";

class ListaProvincias extends Component {
  state = {
    ListaProvincias: [],
  };

  componentDidMount() {
     if(this.props.match.params.paramBuscado=== 'Y'){
         this.getByPort();
     }else if
     (this.props.match.params.paramBuscado=== 'All' 
     || this.props.match.params.paramBuscado=== null
     || this.props.match.params.paramBuscado=== undefined
      ) {
        this.getAll();
     } else {
         this.getBySup();
     }
    
  }

  getAll = () => {
    fetch("/lista_provincias.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.setState({
          ListaProvincias: response,
        });
      });
  };

  getByPort= ()=> {
    fetch("/lista_provincias.json")
     .then((response)=>{
        return  response.json();
     })
     .then((response)=>{
         let provinciasFiltradas= [];
        response.filter(
            provincia => {
                if (provincia.tienePuerto === this.props.match.params.paramBuscado) {
                    provinciasFiltradas.push(provincia)
                    
                }
            }
        );
         this.setState({
            ListaProvincias: provinciasFiltradas
         });
     })
     
}

getBySup= ()=> {
    fetch("/lista_provincias.json")
     .then((response)=>{
        return  response.json();
     })
     .then((response)=>{
         let provinciasFiltradas= [];
        response.filter(
            provincia => {
                if (parseInt(provincia.superficie) >= parseInt(this.props.match.params.paramBuscado)) {
                    provinciasFiltradas.push(provincia)
                    
                }
            }
        );
         this.setState({
            ListaProvincias: provinciasFiltradas
         });
     })
     
}

  render() {
    console.log(this.state.ListaProvincias);
    return (
      <Row>
        <Col lg={12}>
          <h1 id="tituloHome">
            <strong>Provincias de la Republica Argentina</strong>
          </h1>
        </Col>

        {this.state.ListaProvincias.map((provincia) => {
         return <Col lg={3} key={provincia.superficie}>
            {provincia.tienePuerto === "Y" ? (
              <ProvinciasConPuerto provinciaProp={provincia} />
            ) : (
              
                <Provincia provinciaProp={provincia} />
              
            )}
          </Col>;
        })}
      </Row>
    );
  }
}

export default ListaProvincias;
