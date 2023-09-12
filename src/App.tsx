import React from 'react';
import './App.css';
import Apollo from "./components/Apollo"
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import Filterlist from './components/Filterlist';
import DisplayCountry from './components/DisplayCountry';
function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>Filter İtems</h1>
      <Filterlist></Filterlist>
      <DisplayCountry></DisplayCountry>
    </div>
  );
}

export default App;
