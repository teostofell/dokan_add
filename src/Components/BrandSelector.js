import React from 'react';

const brands = [
    { name: 'Adidas', slug: 'adidas' },
    { name: 'Nike', slug: 'nike' },
    { name: 'Jordan', slug: 'jordan' },
    { name: 'Reebok', slug: 'reebok' },
    { name: 'Puma', slug: 'puma' },
    { name: 'Vans', slug: 'vans' },
    { name: 'Asics', slug: 'asics' },
    { name: 'New Balance', slug: 'new_balance' },
    { name: 'Saucony', slug: 'saucony' },
    { name: 'Converse', slug: 'converse' },
    { name: 'Brand', slug: 'brand' },
    { name: 'Brand 1', slug: 'brand_1' },
];


class BrandSelector extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            show_more: false,
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleClick(){
        this.setState({ show_more: !this.state.show_more, });
    }

    handleSelect(e){
        this.props.update('brand', e.target.value);
    }



    render(){
        return (
            <div className="checkbox_group">
            <h3>Select a brand</h3>
            <div className="brand_list choosen_list">
                {
                    brands.map((b, i) => (
                        <div key={b.slug} 
                            className="single_brand choosen_list_item"
                            style={{ display: (this.state.show_more || i <= 6) ? 'block' : 'none' }}
                        >
                            <input type="radio" value={b.slug} name="brand_list" onChange={this.handleSelect} />
                        <label>{b.name}</label></div>
                    ))
                }
            </div>
            <div className="show_more_row">
                <a className="show_more" onClick={this.handleClick}>Show more</a>                        
            </div>
        </div>
        );
    }
}

export default BrandSelector;