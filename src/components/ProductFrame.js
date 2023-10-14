import React from 'react';
import '../styles/ProductFrame.css'


const ProductFrame = ({products}) => {
    return (
        <div className="sub-page">
            <div className="product-items">
                {products.map((product) => (
                    <div key={product.id} className="product-item">
                        <div className="product-image">
                            <img
                                src={product.image}
                                alt="Product"
                                onClick={() => navigateToProduct(product.id)}
                            />
                        </div>
                        <div className="product-details">
                            <div className="product-row">
                                {product.gender + ', ' }
                                {product.playerName ? product.playerName + ',   ': null}
                                {product.productType}
                            </div>
                            <div className="product-row">
                                {product.inStock ? <p>In Stock</p> : <p>Out of Stock</p>}
                                <h4>${product.price}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Function to navigate to the product page
const navigateToProduct = (productId) => {
    // Implement your navigation logic here, e.g., using React Router.
    // Example:
    // history.push(`/product/${productId}`);
};

export default ProductFrame;