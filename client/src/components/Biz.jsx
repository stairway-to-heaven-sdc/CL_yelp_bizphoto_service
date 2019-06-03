import React, { lazy, Suspense } from 'react';
import Header from './Layout/Header';
import Loading from './Layout/Loading';
// import '../stylesheets/main.scss';
// import Bizinfo from './Layout/Bizinfo';
const Bizinfo = lazy(() => import('./Layout/Bizinfo'));

const Biz = () => (
  <div className="home">
    <Header />
    <Suspense fallback={<Loading />}>
      <Bizinfo />
    </Suspense>
  </div>
);

export default Biz;
