import React, { Component } from 'react'

class ShoppingCart extends Component {

    constructor() {
        super();

        this.state = {
            items: [
                {
                    //Item 1
                    quantity: 0,
                    price: 1200,
                    name: "Macbook Air"
                },
                {
                    //Item 2
                    quantity: 0,
                    price: 2000,
                    name: "Macbook Pro"
                },
                {
                    //Item 3
                    quantity: 0,
                    price: 1000,
                    name: "iPhone 11"
                }
            ],
            cartSubTotal: 0,
            tax: 0.08875,
            total: 0,
        }

    }
    // Components
    addQuantity = index => {
        this.setState(
            {
                quantity: this.state.items[index].quantity ++
            }
        )
    }

    subtractQuantity = index => {
        this.setState(
            {
                quantity: this.state.items[index].quantity --
            }  
        )
    }

    render() {
        //Items
        let mAir = this.state.items[0];
        let mPro = this.state.items[1];
        let iPhone = this.state.items[2];

        let itemTotalCount = mAir.quantity + mPro.quantity + iPhone.quantity;
        let cartSubTotal = Math.floor((mAir.quantity * mAir.price) + (mPro.quantity * mPro.price) + (iPhone.quantity * iPhone.price));
        let tax = (cartSubTotal * this.state.tax).toFixed(2);

        let total = (cartSubTotal * (1+this.state.tax)).toFixed(2);

        return (
            <div className="cashier">
                <div className="items">
                    <div className="firstItem">
                        <h2>Item 1: {mAir.name}</h2>
                        <p>Quantity: {mAir.quantity}</p>
                        <button onClick={() =>this.subtractQuantity(0)}>-</button> 
                        <button onClick={() =>this.addQuantity(0)}>+</button>
                        <p>Price: ${mAir.price}</p>

                    </div>
                    <div className="secondItem">
                        <h2>Item 2: {mPro.name}</h2>
                        <p>Quantity: {mPro.quantity}</p>
                        <button onClick={() =>{this.subtractQuantity(1)}}>-</button>
                        <button onClick={() =>{this.addQuantity(1)}}>+</button>
                        <p>Price: ${mPro.price}</p>
                    </div>
                    <div className="thirdItem">
                        <h2>Item 3: {iPhone.name}</h2>
                        <p>Quantity: {iPhone.quantity}</p>
                        <button onClick={() =>{this.subtractQuantity(2)}}>-</button>
                        <button onClick={() =>{this.addQuantity(2)}}>+</button>
                        <p>Price: ${iPhone.price}</p>
                    </div>
                </div>
                    <div className="checkOut">
                        <h3>Total Item(s): {itemTotalCount}</h3>
                        <h2>Subtotal: ${cartSubTotal}</h2>
                        <h3>Tax: ${tax}</h3>
                        <h2>Total: ${total}</h2>
                    </div>
            </div>
        )
    }
}
export default ShoppingCart;