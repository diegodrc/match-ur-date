import React from 'react';
import { useSelector } from 'react-redux';
import {  selectTela } from '../src/features/tela/telaSlice';
import './App.css';
import Initial from './app/components/Initial/Initial';
import Rating from './app/components/Rating/Rating';
import Match from './app/components/Match/Match';
import Categories from './app/components/Categories/Categories';
import Code from './app/components/Code/Code';

const App = () => {
  const screen = useSelector(selectTela);
  
    return (
        <div className="App">
          {screen === 'initial' && (
            <Initial />
          )}
          {screen === 'categories' && (
            <Categories />
          )}
          {screen === 'code' && (
            <Code />
          )}
          {screen === 'rating' && (
            <Rating />
          )}
          {screen === 'match' && (
            <Match />
          )}
        </div>
    );
};
export default App;
