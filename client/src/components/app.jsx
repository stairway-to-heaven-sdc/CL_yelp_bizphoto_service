import React, {lazy, Suspense} from 'react';
import Header from './Layout/Header';
// import Bizinfo from './Layout/Bizinfo';
const Bizinfo = lazy( () => import('./Layout/Bizinfo'));
import Loading from './Layout/Loading';
import '../stylesheets/main.scss';

const App = () => (
  <div className="home">
    <Header />
  <Suspense fallback = {<Loading/>}>
    <Bizinfo />
  </Suspense>
  </div>
);

export default App;
