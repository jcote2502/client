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
            case 'longsleeve':
                setImage(myIcons.getShirtIcon());
                break;
            case 'shortsleeve':
                setImage(myIcons.getShirtIcon());
                break;
            case 'joggers':
                setImage(myIcons.getJoggersIcon());
                break;
            case 'shorts':
                setImage(myIcons.getShortIcon());
                break;
            case 'sneakers':
                setImage(myIcons.getSneakerIcon());
                break;
            case 'sandals':
                setImage(myIcons.getSandalIcon());
                break;
            case 'jersey':
                const img = myIcons.getJerseyIcon();
                setImage(img);
                break;
        }
    }

    useEffect(()=>{
        getImage();
    },[]);

    const handleAddToCart = async (productID) =>{
        console.log(user.user_ID);
        if (user.user_ID == null){
            alert('Sign In or Create Account To Use Cart and Purchase');
            return;
        }else{
            const response = await cart.addItem(productID,user.user_ID);
            if (response.status){
                console.log('success');
                navigate('/home/cart');
            }else{
                console.error('Error Adding Item:',response.error);
            }
            
        }
    }

    return (
        <div className="product-container">
            <div className="top-row">
                <img src={image} alt="Product" className='product-image' />
                <div className="product-details">
                    <p className="title">{product.title}</p>
                    {product.details ? <p className="details">{product.details}</p> : 
                    <span>
                        <p className='details'>{product.fname + ' ' + product.lname}</p>                    </span>
                    }
                    <p className="size">Size: {product.size}</p>
                    <p className="gender">Gender: {product.gender}</p>
                    <p className="color">Color: {product.color}</p>
                    <p className="price">Price: ${product.Price}</p>
                    <button onClick={()=>handleAddToCart(product.product_ID)}>add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;