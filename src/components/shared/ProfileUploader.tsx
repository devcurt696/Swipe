import {useCallback, useState} from 'react'
import { FileWithPath, useDropzone} from 'react-dropzone'


type ProfileUploaderProps = {
    fieldChange: (FILES: File[]) => void;
    mediaUrl: string;
}

const ProfileUploader = ({ fieldChange, mediaUrl }: ProfileUploaderProps) => {
    const [file, setFile] = useState<File[]>([]);
    const [fileUrl, setFileUrl] = useState(mediaUrl);

    const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
        setFile(acceptedFiles);
        fieldChange(acceptedFiles);
        setFileUrl(URL.createObjectURL(acceptedFiles[0]));
    }, [file])

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.png', '.jpeg', '.jpg', '.svg']
        }
    })
  return (
    <div {...getRootProps()}>
        <input {...getInputProps()} className='cursor-pointer'/>
        <div className='cursor-ponter flex-center gap-4'>
            <img 
                src={fileUrl}
                alt='image'
                className='h-24 w-24 rounded-full object-cover object-top'
            />
        </div>
        <p className='text-blue-500 small-regular md:base-semibold'>Change profile photo</p>
    </div>
  )
}

export default ProfileUploader