import React, {useState} from 'react';
interface TextFieldProps  {
    name?: string;
    valueType?: string;
    valuePlaceholder?: string;
    valueLabel?: string;
    onChange?: any;
    value?: string;
    className?: string;
    error?: string;
    show?: boolean;
    optional?: boolean;
    disabled?: boolean;
    onBlur: any;
}

const TextField: React.FC<TextFieldProps>  = ({ 

    name,
    valueType,
    valuePlaceholder,
    valueLabel,
    value,
    className,
    onChange,
    error,
    show,
    optional,
    disabled,
    onBlur,
    ...props
    

}) => {
    const [showPassword, setShowPassword] = useState(false)
    const toggleType = () => {
      if (valueType == 'password' && showPassword == true) {
        return 'text'
      }
      if (valueType == 'telephone' || valueType == 'tel') return 'tel'
      return valueType
    }
    const showPass = () => {
      setShowPassword(true)
    }
    const hidePass = () => {
      setShowPassword(false)
    }

    const formatTelephone = () => {
      if (!value) return value;
      const phoneNumber = value.replace(/[^\d]/g,'');
      if (phoneNumber.length < 4) return phoneNumber;
      if (phoneNumber.length < 7) { return `(${phoneNumber.slice(0,3)})` + ' ' + phoneNumber.slice(3) }
      return `(${phoneNumber.slice(0,3)})` + ' ' + `${phoneNumber.slice(3,6)}` + ' - ' + phoneNumber.slice(6,10) 

    }
    return (
        <div className='text-container'>
            <label className={`label label-regular`} htmlFor={name}>{valueLabel} {optional && <span className='label-optional'>(Optional)</span>}</label><br />
            <input 
                type={toggleType()} 
                className={error && onBlur ? `textbox-error textbox ${className}` : `${className} textbox`} 
                name={name} 
                placeholder={valuePlaceholder }
                id={name}
                onChange={onChange}
                value={valueType == 'telephone'? formatTelephone() : value}
                disabled={disabled}
                onBlur={onBlur}
                
            />
            {valueType=='password' && <button type='button' className='show-hide' onPointerDown={showPass} onPointerUp={hidePass}>{showPassword? 'hide' : 'show'}</button>}
            {error && onBlur && <div className="error-alert">{error}</div>}
            <style>{`
                  .label {
                    color: #1c1c1c;
                    font-weight: 300;
                  }
                  .show-hide {
                      postion: absolute;
                      transform: translateY(-3.4rem);
                      float: right;
                      margin-right: 2rem;
                      padding: 6px;
                      cursor: pointer;
                      border: 1.5px solid #E5E9E8;
                      text-transform: uppercase;
                      display: inline-block;
                      user-select: none;
                  }
                  
                  .label-regular {
                    font-size: 1em;
                    letter-spacing: 1px;
                  }

                  .textbox {
                    padding: 0.75rem 1rem;
                    margin: 0.5rem 0 1rem 0;
                    border: 1.5px solid #E5E9E8;
                    -webkit-box-shadow: inset 0px 4px 6px rgba(58, 58, 58, 0.05);
                    box-shadow: inset 0px 4px 6px rgba(58, 58, 58, 0.05);
                    border-radius: 2px;
                    color: #5C5C5C;
                    outline: none;   
                    box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    -webkit-box-sizing: border-box;
                    letter-spacing: 0.05rem;
                    font-size: 1.125rem;
                    width: 100%;
                    letter-spacing: 0.05rem;
                  }
                  .textbox:focus {
                    box-shadow: 0px 0px 2px 2px #B8EEED;
                  }
                  .textbox::placeholder {
                    color: #CACACA;
                  }
                  .text-container {
                    width: 100%;
                  }

        `}</style>
        </div>
    )
};
export { TextField };