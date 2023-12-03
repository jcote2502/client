import React from "react";
import '../styles/SideBar.css'
import { TextField } from "@mui/material";
import product from "../utils/Products";

// AUTHOR: Justin Cote
// SIDEBAR COMPONENT
// controls the sidebar and search filters for product view

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.callbackRender = this.props.callbackRender;
        this.state = {
            expanded: true,
            searchInput: '',
        };
    }

    // will handle the search
    handleSearchQuery = async () => {
        const searchTerm = (document.getElementById('searchBar').value).trim();
        const words = searchTerm.split(/\s+/);
        // search team (eagles)
        if (words.length == 1){
            const word = words[0].charAt(0).toUpperCase()+words[0].slice(1);
            console.log(word);
            const response = await product.searchTeam(word);
            if (response.status){
                console.log(product.products);
            }else{
                console.error('Error Fetching Team:', response.error);
            }
        }
        // player (jalen hurts)
        else if (words.length==2){
            const fname = words[0].charAt(0).toUpperCase()+words[0].slice(1);
            const lname = words[1].charAt(0).toUpperCase()+words[1].slice(1);
            console.log(fname, lname);
            const response = await product.searchPlayer(fname,lname);
            if (response.status){
                console.log(product.products);
            }else{
                console.error('Error Fetching Team:', response.error);
            }
        }
        this.callbackRender();
    }


    // toggles sidebar
    toggleSideBar = () => {
        this.setState((prevState) => ({
            expanded: !prevState.expanded,
        }));
    }

    // Renders Element
    render() {
        const { expanded } = this.state;
        return (
            // expand button
            <div className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`}>
                <div className="collapse-button" onClick={this.toggleSideBar}>
                    {expanded ? 'Collapse' : 'Expand'}
                </div>

                {/* if expanded and view is selected for product filters */}
                {expanded && (
                    <div className="filters">
                        
                        {/* Search Bar */}
                        <div style={{padding:"10px"}}>
                            <TextField 
                            id="searchBar"
                            label="search"
                            fullWidth
                            name="searchBar"
                            />
                        </div>
                        <button onClick={()=>this.handleSearchQuery()} style={{marginLeft:"100px"}}>Search</button>
                        <div style={{padding:'15px 5px 3px 10px'}}>
                            Welcome to NFL FanGearShop. To search for items there are some restrictions that you must follow to get 
                            real results.
                        </div>
                        <div style={{padding:'3px 5px 3px 10px'}}>
                            You can search for teams and players.
                        </div>
                        <div style={{padding:'3px 5px 3px 10px'}}>
                            When Searching a team make sure to make it plural. For example Eagles instead of Eagle.
                        </div>
                        <div style={{padding:'3px 5px 3px 10px'}}>
                            When Searching for a player make sure to include a space and spell their name completely right or the search will fail.
                        </div>
                        <div style={{padding:'3px 5px 3px 10px'}}>
                            We have just under 4,000 products generated for our site. 100 different NFL players that are included in those products as well.
                        </div>
                        <div style={{padding:'3px 5px 3px 10px'}}>
                            We limited the number of items that can be added to your cart at one time to three. This is only to keep the project simple.
                        </div>
                        <div style={{padding:'3px 5px 3px 10px'}}>
                            None of the transactions that occur on our site are legitimate. 
                        </div>
                        <div style={{padding:'3px 5px 3px 10px'}}>
                            Happy Shopping !
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default SideBar;