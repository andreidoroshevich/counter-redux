import React, {ChangeEvent} from 'react';
import '../App.css';
import Header from "./Header";
import Button from "./universal-component/Button";
import Count from "./universal-component/Count";
import Input from "./universal-component/Input";

type CounterPropsType = {
    value: number,
    minValue: number,
    maxValue: number,
    disable: boolean,
    buttonAddHandler: () => void,
    buttonResetHandler: () => void,
    onChangeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    onChangeMinValueHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    onClickSetSettings: () => void
}

const Counter: React.FC<CounterPropsType> = ({
                                                 value,
                                                 minValue,
                                                 maxValue,
                                                 disable,
                                                 buttonAddHandler,
                                                 buttonResetHandler,
                                                 onChangeMaxValueHandler,
                                                 onChangeMinValueHandler,
                                                 onClickSetSettings,
                                             }) => {
    return (
        <React.Fragment>
            <div className="App">
                <div className={'setting'}>
                    <Header
                        className={((minValue >= maxValue)
                            || (minValue < 0))
                        && ((minValue !== 0)
                            || (maxValue !== 0))
                            ? 'red' : ''}
                        name={((minValue >= maxValue)
                            || (minValue < 0))
                        && ((minValue !== 0)
                            || (maxValue !== 0))
                            ? "Incorrect Value"
                            : "Set Min/Max count Value"}
                    />

                    <div className={'valueItem'}><span>maxValue: </span>
                        <Input onChange={onChangeMaxValueHandler} value={maxValue}
                               className={((minValue >= maxValue)
                                   || (minValue < 0)
                                   || (maxValue < 0))
                               && ((minValue !== 0)
                                   || (maxValue !== 0))
                                   ? 'red'
                                   : ''}/>
                    </div>

                    <div className={'valueItem'}><span>minValue: </span>
                        <Input onChange={onChangeMinValueHandler} value={minValue}
                               className={(minValue >= maxValue) && ((minValue !== 0) || (maxValue !== 0))
                                   ? 'red'
                                   : ''}/>
                    </div>

                    <Button
                        className={(minValue >= maxValue) ? '' : "setButton btn_add"}
                        disabled={(minValue >= maxValue) || (minValue < 0)}
                        name={'SET'} callBack={onClickSetSettings}/>
                </div>

                <div className={'count'}>
                    <Header className={(value === maxValue) && (maxValue !== 0) ? 'red' : ''}
                            name={(value !== maxValue) || (value === 0)
                                ? "Simple React Counter"
                                : "Maximum value reached"}/>

                    <Count className={(value === maxValue) && (maxValue !== 0) ? 'maxCounter' : 'counter'}
                           count={value}/>

                    <Button className={(value !== minValue) && (minValue <= maxValue) ? 'btn_reset' : ''} callBack={buttonResetHandler}
                            disabled={disable || value === minValue || (minValue >= maxValue) && ((minValue !== 0) || (maxValue !== 0))}
                            name={'Reset'}/>

                    <Button className={(value < maxValue) && (minValue <= maxValue) ? 'btn_add' : ''}
                            disabled={disable || value === maxValue || (minValue >= maxValue) && ((minValue !== 0) || (maxValue !== 0))}
                            callBack={buttonAddHandler} name={'Increment'}/>
                </div>
            </div>
        </React.Fragment>

    )
}

export default Counter;