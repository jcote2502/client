import React, { useEffect, useState } from 'react';
import SideBar from '../components/SideBar.js';
import myIcons from '../MyIcons.js';
import '../styles/ProductFrame.css'
import product from '../utils/Products.js';
import { useNavigate } from 'react-router-dom';

// AUTHOR(s): Justin Cote
// HOME VIEW
// Provides the landing page of the website
// This is where a user can view and search for products
var viewProduct = null;
function updateViewProduct(value){
    viewProduct = value;
}

const iconSelect = {
    'jersey': myIcons.getJerseyIcon(),
    'shirts': myIcons.getShirtIcon(),
    'joggers': myIcons.getJoggersIcon(),
    'sneakers': myIcons.getSneakerIcon(),
    'sandals': myIcons.getSandalIcon(),
    'shorts': myIcons.getShortIcon()
}
const temp_prods = 
        [
            {
                id: 1,
                // image: 'http'
                gender: null,
                player: null,
                price: null,
                fname: null,
                lname: null,
                color: null,
                title: null
            }
        ];

const WEBFRAME = () => {
    const navigate = useNavigate();
    const [productsInView, setProducts] = useState(temp_prods);
    const loadProducts = async () => {
        const response = await product.getJerseys();
        if (response.status){
            setProducts(product.products);
        }else{
            console.error('Error Fetching Jerseys:', response.error);
        }
    }

    const refreshPage = () => {
        setProducts(product.products);
    }

    useEffect(() => {
        loadProducts();
    }, []);

    function navigateToProduct(item) {
        viewProduct = item;
        navigate('/product')
    }

    return (
        <div>
            <SideBar callbackRender={refreshPage} />
            {/* product frame */}
            <div className="sub-page">
                <div className="product-items">
                    {
                    product.products.length === 0 ? 

                    <p>No Results</p> :
                    
                    productsInView.map((product) => (
                        <div key={product.product_ID || product.id} onClick={()=>navigateToProduct(product)} className="product-item">
                            <div className="product-image">
                                <img
                                    src={
                                        product.title === 'jersey' || product.title === 'shirts' ?
                                        iconSelect[product.title]:iconSelect[product.details]}
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
                                    {product.team + ' '}
                                    {product.title}
                                    {', '}
                                    {product.color}
                                </div>
                                <div className='product-row'>
                                    <b>${product.price}</b>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export {viewProduct, WEBFRAME, updateViewProduct};