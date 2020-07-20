import React, { Component, createRef } from "react";
import Cropper from "react-cropper";
import 'cropperjs/dist/cropper.css'; 


class CropImage extends Component {
  cropper = createRef();
  cropImage = () => {
    const { setImages } = this.props;

    this.cropper.current.getCroppedCanvas().toBlob(blob =>{
        setImages(blob)
    }, 'image/jpeg')
  };
  render() {
    const { imagePreview } = this.props;
    return (
      <Cropper
        src={imagePreview}
        ref={this.cropper}
        style={{ height: 200, width: "100%" }}
        preview=".img-preview"
        viewMode={1}
        dragMode="move"
        scalable={true}
        aspectRatio={1}
        cropBoxMovable={true}
        cropBoxResizable={true}
        initialAspectRatio={100 / 19}
        guides={false}
        crop={this.cropImage}
        // onInitialized={this.onCropperInit.bind(this)}
      />
    );
  }
}
export default CropImage;
