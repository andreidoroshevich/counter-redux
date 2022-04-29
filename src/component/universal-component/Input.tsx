import React, {ChangeEvent} from 'react';

type InputType = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
    className: string
}


const Input: React.FC<InputType> = ({
                                        onChange,
                                        value,
                                        className,
                                    }) => {
    return (
        <input value={value} className={className}
               onChange={onChange}
        />

    );
};

export default Input;