import React from 'react';

class Preview extends React.Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.props.onClick(this.props.value);
    }
    
    render(){
        const previewStyle = {
            display: 'inline',
            width: 100,
            height: 100,
        };

        return (
            <div className="image-preview">
                <img
                    alt="Preview"
                    src={URL.createObjectURL(this.props.image)}
                    style={previewStyle}
                    onClick={this.handleClick}
                />                                    
            </div>
        );
    }
}

export default Preview;