import React, {ChangeEvent} from 'react';
import Counter from "./Counter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../bll/store";
import {
    ActionType,
    incValueAC,
    resetValueAC,
    setButtonDisableAC,
    setMaxValueAC,
    setMinValueAC,
    setValueAC
} from "../bll/counterReducer";
import {Dispatch} from "redux";

const CountContainer: React.FC = () => {

    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const minValue = useSelector<AppStateType, number>(state => state.counter.minValue)
    const disable = useSelector<AppStateType, boolean>(state => state.counter.disableButtonSet)
    const dispatch = useDispatch<Dispatch<ActionType>>()

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
        <React.Fragment>
            <Counter
                value={value}
                minValue={minValue}
                maxValue={maxValue}
                disable={disable}
                buttonAddHandler={buttonAddHandler}
                buttonResetHandler={buttonResetHandler}
                onChangeMaxValueHandler={onChangeMaxValueHandler}
                onChangeMinValueHandler={onChangeMinValueHandler}
                onClickSetSettings={onClickSetSettings}
            />
        </React.Fragment>
    )

}

export default CountContainer;
