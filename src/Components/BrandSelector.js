import React from 'react';


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
        let { terms } = this.props.brands;

        return (
            <div className="checkbox_group">
            <h3>Select a brand</h3>
            <div className="brand_list choosen_list">
                {
                    terms.map((b, i) => (
                        <div key={b.id} 
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