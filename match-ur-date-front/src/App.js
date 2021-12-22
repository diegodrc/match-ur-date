import React from 'react';
import { useSelector } from 'react-redux';
import {  selectTela } from '../src/features/tela/telaSlice';
import './App.css';
import Initial from './app/components/Initial/Initial';
import Rating from './app/components/Rating/Rating';
import Categories from './app/components/Categories/Categories';

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
          {screen === 'rating' && (
            <Rating />
          )}
        </div>
    );
};
export default App;
