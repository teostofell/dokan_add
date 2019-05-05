import React from 'react';
import Dropzone from 'react-dropzone';
import Preview from './Preview';


class ImagesUploader extends React.Component {
    constructor(props) {
        super(props);

        this.handleDrop = this.handleDrop.bind(this);
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleDrop = (newFiles) => {
        if( (this.props.images.length + newFiles.length) > 8 )
            return;

        newFiles.forEach(element => {
            this.props.add('photos', element); 
        });
      }

      handleClick = (i) => {
        this.props.remove('photos', i);
      }
    
      render() {
    
        return (
          <div className="app">
            <Dropzone onDrop={this.handleDrop}>
                {({getRootProps, getInputProps}) => (
                    <div class="small_area">
                        <div {...getRootProps()}>
                        <h3>Drop files or click to upload</h3>
                        <p>(max. 8 photos)</p>
                            <input {...getInputProps()} />
                        </div>
                    </div>
                )}
            </Dropzone>
            {this.props.images.map((i, key) => (
                <Preview image={i} value={key} key={key} onClick={this.handleClick}/>
            ))}
          </div>
        );
      }
}

export default ImagesUploader;