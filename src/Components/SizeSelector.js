import React from 'react';

const sizes = [
    {
        id: 1,
        name: "6",
        slug: "6",
        quantity: 1,
        price: 12,
    },
    {
        id: 2,
        name: "7",
        slug: "7",
        quantity: 2,
        price: 122,
    },
    {
        id: 3,
        name: "8",
        slug: "8",
        quantity: 4,
        price: 100,
    },
]


class QuantitySelector extends React.Component {
    constructor(props){
        super(props);

        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }
    
    handleIncrement(){
        this.props.update(this.props.index, 1);
    }

    handleDecrement(){
        this.props.update(this.props.index, -1);
    }

    render(){
        return (
            <div class="quantity_per_size_count_change ">
                <div class="size_minus" onClick={this.handleDecrement}>
                    <i className="fas fa-minus-circle"></i>
                </div>
                <div>{this.props.quantity}</div>
                <div class="size_plus" onClick={this.handleIncrement}>
                    <i className="fas fa-plus-circle"></i>
                </div>
            </div>  
        );
    }
}

class PriceSelector extends React.Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e){
        this.props.update(this.props.index, e.target.value);
    }

    render(){
        return (
            <div className="price_for_special_sizes_row quantyti_per_size_row">
                <div className="form_group">
                    <div className="price_list_single">
                        <p>
                            <label className="radio_label"><span><i className="fas fa-euro-sign"></i></span></label>
                            <input type="text" pattern="[0-9]*" onChange={this.handleChange} value={this.props.price} />
                        </p>
                    </div>                
                </div>
             </div>
        );
    }
}


class SizeSelector extends React.Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);
        this.updatePrice = this.updatePrice.bind(this);
    }

    handleChange(e){
        if(e.target.checked){
            let size = this.props.terms.filter(s => s.id == e.target.value)[0];
            this.props.add('sizes', size);
        }
        else
            this.props.remove(e.target.value, 'sizes');
    }

    updateQuantity(i, val){
        let item = this.props.terms.filter(s => s.id == i)[0];

        const newValue = item.quantity + val;
        this.props.update('quantity', item.id, newValue);
    }

    updatePrice(i, val){
        let item = this.props.terms.filter(s => s.id == i)[0];

        this.props.update('price', item.id, val);
    }

    render(){
        return (
            <React.Fragment>
                <div className="checkbox_group sizes_list_box">
                    <h3>Sizes</h3>
                    <p>Choose sizes You have for sale: <br /><span>(US sizing)</span></p>
                    <div class="choosen_list sizes_list">
                    {
                        this.props.terms.map((s, i) => (
                            <div key={s.id} class="choosen_list_item">
                                <input type="checkbox" name="sizes" value={s.id} onChange={this.handleChange} /><label>{s.name}</label>
                            </div>
                        ))
                    }
                    </div>
                </div>
                <div class="checkbox_group quantity_per_size">
                    <h3><b>Quantity per size</b></h3>
                    {
                        this.props.sizes.map((s, i) => (
                            <div class="quantyti_per_size_row">
                                <div class="form_group">
                                    <div class="quantity_per_size_head">{s.name}</div>
                                    <QuantitySelector update={this.updateQuantity} index={s.id} quantity={s.quantity} />                   
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div class="checkbox_group price_for_special_sizes">
                    <h3><b>Price for specified sizes</b></h3>
                    {
                        this.props.sizes.map((s, i) => (
                            <div class="quantyti_per_size_row">
                                <div class="form_group">
                                    <div class="quantity_per_size_head">{s.name}</div>
                                    <PriceSelector update={this.updatePrice} index={s.id} price={s.price} />                   
                                </div>
                            </div>
                        ))
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default SizeSelector;