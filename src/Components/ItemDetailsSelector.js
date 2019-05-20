import React from 'react';

class ItemDetailsSelector extends React.Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.update(e.target.name, e.target.value);
    }

    render(){
        let { model_line, model_name, year } = this.props;

        return (
            <div className="item_details checkbox_group">
                <h3>Item details</h3>
                <div className="form_group_row">
                    <div className="form_group many_blocks">
                        <div>
                            <label>Model line</label>
                            <input type="text" value={model_line} name="model_line" placeholder="E.g. ULTRA BOOST" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label>Model name / Specific CW</label>
                            <input type="text" value={model_name} name="model_name" placeholder="E.g. Triple Black" onChange={this.handleChange} />
                        </div>
                        <div>
                            <label>Year</label>
                            <select name="year" value={year} onChange={this.handleChange}>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemDetailsSelector;