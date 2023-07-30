import { useState } from 'react';

import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import ProductsContainer from './components/Product/ProductsContainer';

import './App.css';


function App() {

  const [category, setCategory] = useState('All');
  const [searchKeyword, setSearchKeyword] = useState();

  return (
    <div className="App">
      <Navbar setCategory={setCategory} setSearchKeyword={setSearchKeyword} />
      <Banner />
      <ProductsContainer category={category} searchKeyword={searchKeyword} />
    </div>
  );
}

export default App;
