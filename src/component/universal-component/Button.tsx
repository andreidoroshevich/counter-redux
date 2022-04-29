import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: () => void
    disabled?: boolean
    className?: string
}

const Button: React.FC<ButtonPropsType> = ({
                                               name,
                                               callBack,
                                               disabled,
                                               className,

                                           }) => {
    const onClickHandler = () => {
        callBack()
    }

    return (
        <button className={className} onClick={onClickHandler} disabled={disabled}>{name}</button>
    );
};

export default Button;