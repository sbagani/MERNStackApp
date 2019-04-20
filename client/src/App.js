import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/Shoppinglist'
import {Provider} from 'react-redux';
import {Container} from 'reactstrap'
import ItemModal from './components/ItemModel'
import store from './store'
import './App.css';

class App extends Component {
  render() {
    return (
  
      <Provider store={store}>
          <div className="App">
      <AppNavbar/>
      <Container>
      <ItemModal/>
      <ShoppingList />
      </Container>
      
      
      </div>
      </Provider>
     
   
    );
  }
}

export default App;
