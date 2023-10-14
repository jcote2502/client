import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import ProductFrame from '../components/ProductFrame';
import logo from '../assets/images/nfl.svg';
// Define your product data. You can fetch this data from an API.
const temp_prods = [
    {
        id: 1,
        image: logo,
        gender: 'mens',
        playerName: 'Kelce',
        productType: 'Jersy',
        price: '$50',
        inStock: true,
    },
    {
        id: 2,
        image: logo,
        gender: 'womens',
        playerName: '',
        productType: 'Shirt',
        price: '$50',
        inStock: true,
    },
    {
        id: 3,
        image: logo,
        gender: 'mens',
        playerName: '',
        productType: 'Shirt',
        price: '$50',
        inStock: true,
    },
    {
        id: 4,
        image: logo,
        gender: 'mens',
        playerName: 'Kelce',
        productType: 'Jersy',
        price: '$50',
        inStock: true,
    },
    {
        id: 5,
        image: logo,
        gender: 'womens',
        playerName: '',
        productType: 'Shirt',
        price: '$50',
        inStock: true,
    },
    {
        id: 6,
        image: logo,
        gender: 'mens',
        playerName: '',
        productType: 'Shirt',
        price: '$50',
        inStock: true,
    },
    {
        id: 7,
        image: logo,
        gender: 'mens',
        playerName: 'Kelce',
        productType: 'Jersy',
        price: '$50',
        inStock: true,
    },
    {
        id: 8,
        image: logo,
        gender: 'womens',
        playerName: '',
        productType: 'Shirt',
        price: '$50',
        inStock: true,
    },
    {
        id: 9,
        image: logo,
        gender: 'mens',
        playerName: '',
        productType: 'Shirt',
        price: '$50',
        inStock: true,
    },
    {
        id: 10,
        image: logo,
        gender: 'mens',
        playerName: 'Kelce',
        productType: 'Jersy',
        price: '$50',
        inStock: true,
    },
    {
        id: 11,
        image: logo,
        gender: 'womens',
        playerName: '',
        productType: 'Shirt',
        price: '$50',
        inStock: true,
    },
    {
        id: 12,
        image: logo,
        gender: 'mens',
        playerName: '',
        productType: 'Shirt',
        price: '$50',
        inStock: true,
    },
    {
        id: 13,
        image: logo,
        gender: 'mens',
        playerName: 'Kelce',
        productType: 'Jersy',
        price: '$50',
        inStock: true,
    },
    {
        id: 14,
        image: logo,
        gender: 'womens',
        playerName: '',
        productType: 'Shirt',
        price: '$50',
        inStock: true,
    },
    {
        id: 15,
        image: logo,
        gender: 'mens',
        playerName: '',
        productType: 'Shirt',
        price: '$50',
        inStock: true,
    },
    {
        id: 16,
        image: logo,
        gender: 'mens',
        playerName: '',
        productType: 'Shirt',
        price: '$50',
        inStock: true,
    },
    // Add more product data as needed
];
const Search= () => {
  const [products, setProducts] = useState(temp_prods);

  function queryWithFilter (data){
    // contact DB
    // data represents what boxes are selected to sort and filter 
    // this will be argument for a call to the backend
    // use setProducts to update product list whenever new filter is selected
  }

  return (
    <div>
      <SideBar callbackQuery={queryWithFilter} />
      <ProductFrame products={products} />
      {/* Add content for the home page */}
    </div>
  );
}

export default Search;