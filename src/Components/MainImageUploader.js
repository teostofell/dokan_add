import React from 'react';
import Dropzone from 'react-dropzone';

class MainImageUploader extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          preview: null
        };

        this.handleDrop = this.handleDrop.bind(this);
      }
    
      handleDrop = (newFile) => {
        this.props.update('mainPhoto', newFile[0]);

        this.setState({
          preview: URL.createObjectURL(newFile[0])
        });
      }
    
      render() {
        const previewStyle = {
          display: 'inline',
          width: 100,
          height: 100,
        };
    
        return (
          <div className="app">
            <Dropzone onDrop={this.handleDrop} multiple={false}>
                {({getRootProps, getInputProps}) => (
                    <div class="big_area">
                        <div {...getRootProps()}>
                            <h3>Main photo</h3>

                            {this.state.preview &&
                                <div className="image-preview">
                                    <img
                                        alt="Preview"
                                        src={this.state.preview}
                                        style={previewStyle}
                                    />                                    
                                </div>
                            }

                            <img src="assets/images/cloud_drag_and_drop.png" alt=""/>
                            <input {...getInputProps()} />
                            <p>Drop file here or click to upload</p>
                        </div>
                    </div>
                )}
            </Dropzone>
          </div>
        );
      }
}

export default MainImageUploader;