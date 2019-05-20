import React from 'react';


class BrandSelect extends React.Component {
    constructor(props){
        super(props);

        this.handleSelect = this.handleSelect.bind(this);
    }


    handleSelect(e){
        this.props.update('brand', e.target.value);
    }


    render(){
        let { terms } = this.props.brands;
        let { brand } = this.props;

        return (
            <div className="form_group names">
                <div>
                    <label>Brand</label>
                    <select name="brand" value={brand} onChange={this.handleSelect}>
                        {
                            terms.map((b, i) => (
                                <option value={b.slug}>{b.name}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        );
    }
}

export default BrandSelect;