import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { Icon, Header } from 'semantic-ui-react'

const Dropzone=({setFiles})=> {
  const onDrop = useCallback(acceptedFiles => {
    setFiles(acceptedFiles.map(file=> Object.assign(file,{
      preview: URL.createObjectURL(file)
    })))
  }, [setFiles])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop,
    multiple:false,
    accept: 'image/*'
  })

  return (
    <div {...getRootProps()} className={isDragActive? 'dropzone dropzone--isActive' : 'dropzone'} >
      <input {...getInputProps()} />
     <Icon name='upload' size='huge'/>
     <Header content='Drop Image here' />
    </div>
  )
}
export default Dropzone;