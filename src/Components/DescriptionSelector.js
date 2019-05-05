import React from 'react';

class DescriptionSelector extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.update('description', e.target.value);
    }

    render(){
        return (
            <div class="description checkbox_group">
                <h3>Description</h3>
                <p>Good description of the item is important for buyers:</p>
                <div class="form_group">
                    <label>Description</label>
                    <textarea onChange={this.handleChange} placeholder="E.g. Sending without an original box, something about the item..."></textarea>
                </div>            
            </div>
        );
    }
}

export default DescriptionSelector;