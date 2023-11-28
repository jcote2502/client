import React from "react";
import '../styles/SideBar.css'


// AUTHOR: Justin Cote
// SIDEBAR COMPONENT
// controls the sidebar and search filters for product view

class SideBar extends React.Component {
    constructor(callbackQuery) {
        super();
        this.callbackQuery = callbackQuery;
        this.state = {
            expanded: true,
            view: 'product',
            filters: {
                size: {
                    small: false,
                    medium: false,
                    large: false,
                },
                productType: {
                    shoes: false,
                    shirts: false,
                    pants: false,
                    jerseys: false,
                },
                gender: {
                    male: false,
                    female: false,
                },
                price: null,
                quantity: null,
            }
        };
        this.views = [
            'product',
            'account',
        ]
    }

    // handle any kind of filter update
    handleRequestQuery = () => {
        this.callbackQuery()
        console.log('Callback function complete');
    }

    // handles viewChange
    handleViewChange = (newView) => { this.setState({ view: { newView } }); }

    // toggles sidebar
    toggleSideBar = () => {
        this.setState((prevState) => ({
            expanded: !prevState.expanded,
        }));
    }

    // Handles checkbox changes
    handleCheckboxChange = (filterCategory, filterName) => {
        this.setState((prevState) => {
            const newFilters = {
                ...prevState.filters,
                [filterCategory]: {
                    ...prevState.filters[filterCategory],
                    [filterName]: !prevState.filters[filterCategory][filterName]
                }
            };
            return { filters: newFilters };
        });
    };


    // Handles price dropdown change
    handlePriceChange = (event) => {
        this.setState({ filters: { ...this.state.filters, price: event.target.value } });
    };

    // Handles quantity slider change
    handleQuantityChange = (event) => {
        this.setState({ filters: { ...this.state.filters, quantity: event.target.value } });
    };

    // Renders Element
    render() {
        const { expanded , filters } = this.state;
        return (
            // expand button
            <div className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`}>
                <div className="collapse-button" onClick={this.toggleSideBar}>
                    {expanded ? 'Collapse' : 'Expand'}
                </div>

                {/* if expanded and view is selected for product filters */}
                {this.state.view === 'product' && expanded && (
                    <div className="filters">

                        {/* Product Filter */}
                        <div className="filter-section">
                            <h3>Product Type:</h3>
                            <Checkbox
                                label='Jerseys' id='jerseys'
                                value={filters.productType.jerseys}
                                onChange={()=>this.handleCheckboxChange('productType', 'jerseys')}
                            />
                            <Checkbox
                                label='Shirts' id='shirts'
                                value={filters.productType.shirts}
                                onChange={()=>this.handleCheckboxChange('productType', 'shirts')}
                            />
                            <Checkbox
                                label='Pants' id='pants'
                                value={filters.productType.pants}
                                onChange={()=>this.handleCheckboxChange('productType', 'pants')}
                            />
                            <Checkbox
                                label='Shoes' id='shoes'
                                value={filters.productType.shoes}
                                onChange={()=>this.handleCheckboxChange('productType', 'shoes')}
                            />
                        </div>

                        {/* Size Filter */}
                        <div className="filter-section">
                            <h3>Size:</h3>
                            <Checkbox
                                label='Small' id='small'
                                value={filters.size.small}
                                onChange={()=>this.handleCheckboxChange('size', 'small')}
                            />
                            <Checkbox
                                label='Medium' id='medium'
                                value={filters.size.medium}
                                onChange={()=>this.handleCheckboxChange('size', 'medium')}
                            />
                            <Checkbox
                                label='Large' id='large'
                                value={filters.size.large}
                                onChange={()=>this.handleCheckboxChange('size', 'large')}
                            />
                        </div>

                        {/* Gender Filter */}
                        <div className="filter-section">
                            <h3>Gender:</h3>
                            <Checkbox
                                label='Male' id='male'
                                value={filters.gender.male}
                                onChange={()=>this.handleCheckboxChange('gender', 'male')}
                            />
                            <Checkbox
                                label='Female' id='female'
                                value={filters.gender.female}
                                onChange={()=>this.handleCheckboxChange('gender', 'female')}
                            />
                        </div>

                        <div className="filter-section">
                            <h3>Price:</h3>
                            <select value={filters.price || ''} id='price' onChange={this.handlePriceChange}>
                                <option value="none">None</option>
                                <option value="hi-lo">High to Low</option>
                                <option value="lo-hi">Low to High</option>
                            </select>
                        </div>

                        <div className="filter-section">
                            <h3>Quantity:</h3>
                            <input
                                id = 'quantity'
                                type="range"
                                min="0"
                                max="20000"
                                value={filters.quantity || ''}
                                onChange={this.handleQuantityChange}
                            />
                            <p>Quantity: {filters.quantity}</p>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

// checkbox object used in render
const Checkbox = ({ label, value, id, onChange }) => {

    return (
        <>
            <input
                type="checkbox"
                id={id}
                checked={value}
                onChange={onChange}
            />
            <label htmlFor={id}>{label}</label>
        </>
    )
}
export default SideBar;