import React from 'react';
import Header from './Layout/Header';
import Bizinfo from './Layout/Bizinfo';
import '../stylesheets/main.scss';
// Todo: implment react.suspense for fallback spin icon

const App = () => (
  <div className="home">
    <Header />
    <Bizinfo />
  </div>
);

export default App;
