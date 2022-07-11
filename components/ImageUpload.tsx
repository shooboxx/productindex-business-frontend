import React, {useState} from 'react';
interface ImageUploadProps  {
    name?: string;
    valueType?: string;
    valuePlaceholder?: string;
    valueLabel?: string;
    onChange?: any;
    value?: string;
    className?: string;
    show?: boolean;
    optional?: boolean;
    disabled?: boolean;
    error?: string;
}

const ImageUpload: React.FC<ImageUploadProps>  = ({ 

    name,
    valueType,
    valuePlaceholder,
    valueLabel,
    value,
    className,
    onChange,
    show,
    optional,
    disabled,
    error,
    ...props
    

}) => {
    return (
        <>
            <label className={`file-label file-label-regular`} htmlFor={name}>{valueLabel} {optional && <span className='label-optional'>(Optional)</span>}</label><br />
            <input type="file" name={name} onChange={onChange} id={name} className='btn-upload' accept="image/png, image/jpeg, image/jpg" />
            {error && <div className="error-alert">{error}</div>}
        </>
    )
};
export { ImageUpload };