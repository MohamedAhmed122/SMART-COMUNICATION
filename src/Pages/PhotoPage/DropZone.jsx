import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Icon, Header } from "semantic-ui-react";

const MyDropzone = ({setFile}) => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    setFile(acceptedFiles.map(files =>Object.assign(files,{
        preview: URL.createObjectURL(files)
    })));
  }, [setFile]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: "image/*",
  });

  return (
    <div {...getRootProps()} className={`${isDragActive? 'dropzone dropzone--isActive' : 'dropzone'}`}>
      <input {...getInputProps()} />
      <Icon name='upload' size='huge' />
      <Header content='Drag your Image here'/>
    </div>
  );
};
export default MyDropzone;
