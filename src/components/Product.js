import React, { useEffect, useState } from 'react';
import myIcons from '../MyIcons';
import '..//styles/Product.css';
import { viewProduct } from '../pages/Search';
import user from '../utils/User';
import cart from '../utils/Cart';
import { useNavigate } from 'react-router-dom';

const Product = () => {
    const navigate = useNavigate();
    const product = viewProduct;
    console.log(product);
    const [image, setImage] = useState(myIcons.getJerseyIcon());

    const getImage = () => {

        switch (product.title) {

            // single shirt image
            case 'shirts':
                setImage(myIcons.getShirtIcon());
                break;
            // check if joggers or shorts
            case 'pants':
                if (product.details === 'joggers') {
                    setImage(myIcons.getJoggersIcon());
                } else {
                    setImage(myIcons.getShortIcon());
                }
                break;
            // check if sneakers or sandals
            case 'shoes':
                if (product.details === 'sandals') {
                    setImage(myIcons.getSandalIcon());
                } else {
                    setImage(myIcons.getSneakerIcon());
                }
                break;
            case 'jersey':
                setImage(myIcons.getJerseyIcon());
                break;
            default:
                setImage(null);
        }
    }

    useEffect(() => {
        getImage();
    });

    const handleAddToCart = async (productID) => {
        console.log(user.user_ID);
        if (user.user_ID == null) {
            alert('Sign In or Create Account To Use Cart and Purchase');
            return;
        } else {
            const response = await cart.addItem(productID, user.user_ID);
            if (response.status) {
                console.log('success');
                navigate('/cart');
            } else {
                console.error('Error Adding Item:', response.error);
            }

        }
    }

    return (
        <div className="product-container">
            <div className="product-details-view">
            <img src={image} alt="Product" className='product-image-view' />
                <p className="title">{product.title}</p>
                {product.details ? <p className="details">{product.details}</p> :
                    <span>
                        <p className='details'>{product.fname + ' ' + product.lname}</p>                    </span>
                }
                <p className="size">Size: {product.size}</p>
                <p className="gender">Gender: {product.gender}</p>
                <p className="color">Color: {product.color}</p>
                <p className="price">Price: ${product.price}</p>
                <button onClick={() => handleAddToCart(product.product_ID)}>add to cart</button>
            </div>
        </div>
    );
};

export default Product;