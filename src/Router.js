import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ListaProvincias from './componentes/ListaProvincias';
import MenuDeOpciones from './componentes/MenuDeOpciones';
import DetalleProvincia from './componentes/DetalleProvincia';
import MapaArgentina from './componentes/MapaArgentina';
class Router extends Component {
    render() {
        return (
            <BrowserRouter>
              
                <MenuDeOpciones/>
              
              <Switch>
                  <Route exact path="/" component ={ListaProvincias} />
                  <Route exact path="/home" component ={ListaProvincias} />
                 <Route exact path="/mapa" component ={MapaArgentina} />
                  <Route exact path="/provincia/:superficie" component ={DetalleProvincia} />
                  
                  <Route
                  exact
                  path="/redirect/:paramBuscado"
                  render={(props) => {
                    var search = props.match.params.paramBuscado;
                    return <Redirect to={"/home/" + search} />;
                  }}
                />
                <Route exact path="/home/:paramBuscado" component ={ListaProvincias} /> 
      
                  
              </Switch>
            </BrowserRouter>
          );
    }
}

export default Router;