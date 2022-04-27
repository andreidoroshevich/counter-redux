import React, {ChangeEvent} from 'react';
import './App.css';
import Button from "./component/Button";
import Count from "./component/Count";
import Header from "./component/Header";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {
    incValueAC,
    resetValueAC,
    setButtonDisableAC,
    setMaxValueAC,
    setMinValueAC,
    setValueAC
} from "./bll/counterReducer";

function App() {

    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const minValue = useSelector<AppStateType, number>(state => state.counter.minValue)
    const disable = useSelector<AppStateType, boolean>(state => state.counter.disableButtonSet)
    const dispatch = useDispatch()

    const buttonAddHandler = () => {
        dispatch(incValueAC())
    }

    const buttonResetHandler = () => {
        dispatch(resetValueAC())
    }

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (!isFinite(+e.currentTarget.value)) {
            return
        } else dispatch(setMaxValueAC(+e.currentTarget.value))
    };

    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (!isFinite(+e.currentTarget.value)) {
            return
        } else dispatch(setMinValueAC(+e.currentTarget.value))
    };

    const onClickSetSettings = () => {
        dispatch(setValueAC())
        dispatch(setButtonDisableAC(false))
    }

    return (
        <div className="App">

            <div className={'setting'}>
                <Header
                    className={((minValue >= maxValue) || (minValue < 0)) && ((minValue !== 0) || (maxValue !== 0)) ? 'red' : ''}
                    name={((minValue >= maxValue) || (minValue < 0)) && ((minValue !== 0) || (maxValue !== 0)) ? "Incorrect Value" : "Set Min/Max count Value"}/>

                <div className={'valueItem'}><span>maxValue: </span>
                    <input
                        className={((minValue >= maxValue) || (minValue < 0) || (maxValue < 0)) && ((minValue !== 0) || (maxValue !== 0)) ? 'red' : ''}
                        value={maxValue}
                        onChange={onChangeMaxValueHandler}/>
                </div>

                <div className={'valueItem'}><span>minValue: </span>
                    <input
                        className={((minValue >= maxValue) || (minValue < 0) || (maxValue < 0)) && ((minValue !== 0) || (maxValue !== 0)) ? 'red' : ''}
                        value={minValue}
                        onChange={onChangeMinValueHandler}/>
                </div>

                <Button
                    className={(minValue >= maxValue) || (minValue < 0) || (maxValue < 0) ? '' : "setButton btn_add"}
                    disabled={(minValue >= maxValue) || (minValue < 0)}
                    name={'SET'} callBack={onClickSetSettings}/>
            </div>


            <div className={'count'}>
                <Header className={(value === maxValue) && (maxValue !== 0) ? 'red' : ''}
                        name={(value !== maxValue) || (value === 0) ? "Simple React Counter" : "Maximum value reached"}/>
                <Count className={(value === maxValue) && (maxValue !== 0) ? 'max-counter' : 'counter'} count={value}/>
                <Button className={value !== minValue ? 'btn_reset' : ''} callBack={buttonResetHandler}
                        disabled={disable}
                        name={'Reset'}/>
                <Button
                    className={value < maxValue ? 'btn_add' : ''} disabled={disable || value === maxValue}
                    callBack={buttonAddHandler} name={'Increment'}/>
            </div>
        </div>
    );
}

export default App;
