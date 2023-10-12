import React from "react";

class SideBar extends React.Component {
    constructor(){
        super();
        this.state = {
            expanded: true,
            view:'product'
        }
        this.views = [
            'product',
            'account',
        ]
    }

    // handles viewChange
    handleViewChange = (newView) => { this.setState({ view:{newView}});}

    // handles shrink
    shrink = () => {this.setState({ expanded: false});}

    // handles expand
    expand = () => {this.setState({ expanded: true});}

    // Renders Element
    render(){
        return (
            <div className="sidebar">
                {/* 
                Components Outline

                minimize sidebar button 

                if product view

                    sort filters 
                        size
                        team
                        product type
                        gender
                        name
                        price
                        quantity
                
                if account view

                    diffrent view tabs
                        cart
                        wishlist
                        recent searches
                        edit info 
                        past transactions
                        refunds
                */}
            </div>
        )
    }
}