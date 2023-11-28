import React, { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import jerseyIcon from '../assets/images/jersey.jpeg';
import joggersIcon from '../assets/images/joggers.jpeg';
import sandalIcon from '../assets/images/sandal.png';
import shirtIcon from '../assets/images/shirt.png';
import shortIcon from '../assets/images/shorts.jpeg';
import sneakerIcon from '../assets/images/sneaker.png';
import Axios from 'axios';
import '../styles/ProductFrame.css'

// AUTHOR(s): Justin Cote
// HOME VIEW
// Provides the landing page of the website
// This is where a user can view and search for products

const iconSelect = {
    'jersey': jerseyIcon
}
const temp_prods = {
    product:
        [
            {
                id: 1,
                // image: 'http'
                gender: null,
                player: null,
                Price: null,
                fname: null,
                lname: null,
                color: null
            }
        ]
}
const WEBFRAME = () => {
    const [productsInView, setProducts] = useState(temp_prods);
    const [productView, setProductView] = useState(false);
    const loadProducts = async () => {
        try {
            const response = await Axios.get('http://localhost:3004/db/jerseys');
            setProducts(response.data);
        } catch (error) {
            console.error('Error Fetching products:', error);
        }
    }

    useEffect(() => {
        loadProducts();
    }, []);
    function queryWithFilter(data) {
        // contact DB
        // data represents what boxes are selected to sort and filter 
        // this will be argument for a call to the backend
        // use setProducts to update product list whenever new filter is selected
    }

    function navigateToProduct(id) {

    }

    return (
        <div>
            <SideBar callbackQuery={queryWithFilter} />
            {/* product frame */}
            <div className="sub-page">
                <div className="product-items">
                    {productsInView.product.map((product) => (
                        <div key={product.product_ID || product.id} className="product-item">
                            <div className="product-image">
                                <img
                                    src={iconSelect[product.title]}
                                    alt="Product"
                                    onClick={() => navigateToProduct(product.id)}
                                />
                            </div>
                            <div className="product-details">
                                <div className="product-row">
                                    {product.gender + ', '}
                                    {product.size}
                                </div>
                                <div className='product-row'>
                                    {product.fname ? product.fname + '\n' : null}
                                    {product.lname ? product.lname + '\n' : null}
                                </div>
                                <div className='product-row'>
                                    {product.title}
                                    {', '}
                                    {product.color}
                                </div>
                                <div className='product-row'>
                                    <b>${product.Price}</b>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WEBFRAME;