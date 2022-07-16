import React from 'react';
interface TextFieldProps  {
    name?: string;
    valueType?: string;
    valuePlaceholder?: string;
    valueLabel?: string;
    onChange?: any;
    value?: string;
    className?: string;
    error?: string;
    disabled?: boolean;
    optionList?: {value?: string, name?: string, default?: Boolean}[];
    // TODO: add onBlur
}

const Dropdown: React.FC<TextFieldProps>  = ({ 

    name,
    valueType,
    valuePlaceholder,
    valueLabel,
    value,
    className,
    onChange,
    error,
    optionList,
    disabled,
    ...props
    

}) => {
    return (
        <div className='dropdown'>
              <label className="label label-regular" htmlFor={name}>{valueLabel}</label><br />
              <select name={name} id={name} className='textbox' onChange={onChange} defaultValue={'-'} disabled={disabled}>
                {optionList && <> <option disabled hidden value={'-'}> - </option> {optionList.map((item) => <option key={item.name} value={item.value}>{item.name}</option> )}</>}
              </select>
            {error && <div className="error-alert">{error}</div>}
            <style>{`
                  .error-alert {
                      color: #C60000;
                      padding: 4px 8px;
                      border-radius: 2px;
                      background-color: #FFDADA;
                      display: inline-block;
                      font-weight: 500;
                      position: relative;
                      top: -0.5rem;
                  }
                  .dropdown {
                    width: 100%;
                  }
        `}</style>
        </div>
    )
};
export { Dropdown };