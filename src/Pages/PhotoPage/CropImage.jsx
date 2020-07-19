import React, {Component} from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css'; 

class CropImage extends Component {
    _crop() {
        // image in dataUrl
        console.log(this.cropper.getCroppedCanvas().toDataURL());
    }

    onCropperInit(cropper) {
        this.cropper = cropper;
    }

    render() {
        return (
            <Cropper
                src="http://fengyuanchen.github.io/cropper/images/picture.jpg"
                style={{height: 400, width: '100%'}}
                // Cropper.js options
                initialAspectRatio={16/9}
                guides={false}
                crop={this._crop.bind(this)}
                onInitialized={this.onCropperInit.bind(this)}
            />
        );
    }
}
export default CropImage;