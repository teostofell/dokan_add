import React from 'react';

const colors = [
    { name: "black", value: "#000000" },
    { name: "grey", value: "#858585" },
    { name: "white", value: "#eae8e8" },
    { name: "red", value: "#e72020" },
    { name: "blue", value: "#1f95e6" },
    { name: "orange", value: "#fc9d20" },
    { name: "green", value: "#47bb1f" },
    { name: "pink", value: "#eb596c" },
    { name: "yellow", value: "#f1dc07" },
];


class ColorwaySelector extends React.Component {
        constructor(props){
            super(props);

            this.handleChange = this.handleChange.bind(this);
        }

        handleChange(e){
             this.props.update('colors', e.target.value, true);
        }

        render(){
            return (
                <div className="color_list checkbox_group">
                    <h3>Colorway</h3>
                    <p>Choose as least 2 colors of your item: </p>
                    <div className="color_list_box">
                        {
                            colors.map(c => (
                                <div class="color_list_item" style={{background:c.value}}>
                                    <input type="checkbox" value={c.name} onChange={this.handleChange} name="colors_list" />
                                    <label><i class="fas fa-check"></i></label>                        
                                </div>
                            ))
                        }
                    </div>
                </div>
            );
        }
}

export default ColorwaySelector;