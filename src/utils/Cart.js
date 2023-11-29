import Axios from 'axios';

class Cart {
    constructor() {
        this.items = [];
    }

    async getCart(userID) {
        try {
            const response = await Axios.get('http://localhost:3004/db/cart', {
                params: {
                    uid: userID
                }
            })
            this.items = response.data.cart;
            return { status: true };
        } catch (error) {
            console.error("Error retrieving cart", error);
            return { status: false, error: error.message };
        }
    }

    async addItem(productID, userID) {
        if (this.items.length < 3) {
            try {
                await Axios.post('http://localhost:3004/db/addItem', {
                    uid: userID,
                    pid: productID
                });
                return { status: true };
            } catch (error) {
                console.log('hello');
                console.error("Error Adding Item:", error);
                return { status: false, error: error.message };
            }
        }else{
            alert('Can only checkout up to three items at once.')
            return { status: false, error: "Three Items In cart" };
        }
    }

    async purchaseCart(uid) {
        if (this.items.length > 0) {
            try {
                await Axios.post('http://localhost:3004/db/purchase', {
                    uid: uid
                });
                return { status: true };
            } catch (error) {
                console.error("Error Purchasing Cart", error);
                return { status: false, error: error.message };
            }
        } else {
            alert('Cart is Empty. Make Sure to go Shopping!');
            return { status: false, error: "Cart Empty" }
        }
    }

    async removeItem(cartID) {
        try {
            await Axios.post('http://localhost:3004/db/removeCartItem', {
                cid: cartID
            });
            return { status: true }
        } catch (error) {
            console.error("Failed to Remove Item:", error);
            return { status: false, error: error.message };
        }
    }

    async clearCart(userID) {
        try {
            await Axios.post('http://localhost:3004/db/clearCart', {
                uid: userID
            });
            return { status: true }
        } catch (error) {
            console.error("Failed to clear cart:", error);
            return { status: false, error: error.message };
        }
    }
}

const cart = new Cart();
export default cart;