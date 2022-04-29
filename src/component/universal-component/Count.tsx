import React from 'react';

type CountPropsType = {
    className?: string
    count: number
}

const Count: React.FC<CountPropsType> = ({
                                             className,
                                             count,
                                         }) => {
    return (
        <div className={className}>{count}</div>

    );
};

export default Count;