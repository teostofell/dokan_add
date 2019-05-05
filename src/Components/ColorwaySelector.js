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
            if(e.target.checked){
                let color = this.props.colors.terms.filter(s => s.id == e.target.value)[0];
                this.props.add('colors', color);
            }
            else
                this.props.remove(e.target.value, 'colors');
        }

        render(){
            return (
                <div className="color_list checkbox_group">
                    <h3>Colorway</h3>
                    <p>Choose as least 2 colors of your item: </p>
                    <div className="color_list_box">
                        {
                            this.props.colors.terms.map(c => (
                                <div class="color_list_item" key={c.id} style={{background:c.description}}>
                                    <input type="checkbox" value={c.id} onChange={this.handleChange} name="colors_list" />
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