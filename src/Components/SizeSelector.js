import React from 'react';

const sizes = [
    {
        id: 1,
        name: "6",
        slug: "6",
        quantity: 0,
    },
    {
        id: 2,
        name: "7",
        slug: "7",
        quantity: 1,
    },
    {
        id: 3,
        name: "8",
        slug: "8",
        quantity: 4,
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

        this.handleIncrement = this.handleChange.bind(this);
    }
    
    handleChange(){
        this.props.update(this.props.index, 1);
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


class SizeSelector extends React.Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);
    }

    handleChange(e){
        this.props.update('sizes', sizes[e.target.value], true);
    }

    updateQuantity(i, val){
        let item = this.props.sizes[i];
        this.props.update('sizes', item, true);

        item.quantity += val;
        this.props.update('sizes', item, true);
    }

    render(){
        return (
            <React.Fragment>
                <div className="checkbox_group sizes_list_box">
                    <h3>Sizes</h3>
                    <p>Choose sizes You have for sale: <br /><span>(US sizing)</span></p>
                    <div class="choosen_list sizes_list">
                    {
                        sizes.map((s, i) => (
                            <div key={s.id} class="choosen_list_item">
                                <input type="checkbox" name="sizes" value={i} onChange={this.handleChange} /><label>{s.name}</label>
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
                                <QuantitySelector update={this.updateQuantity} index={i} quantity={s.quantity} />                   
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