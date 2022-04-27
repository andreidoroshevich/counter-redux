const initialState = {
    value: 0,
    minValue: 0,
    maxValue: 0,
    disableButtonSet: true,
}

type initialStateType = typeof initialState

export const counterReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "INC-VALUE":
            return {
                ...state, value: state.value + 1
            }
        case "SET-VALUE-FROM-LOCAL-STORAGE":
            return {
                ...state, value: action.value
            }
        case "MAX-VALUE":
            return {
                ...state, maxValue: action.maxValue
            }
        case "MIN-VALUE":
            return {
                ...state, minValue: action.minValue
            }
        case "RESET-VALUE":
        case "SET-VALUE":
            return {
                ...state, value: state.value = state.minValue
            }
        case "SET-BUTTON-DISABLE":
            return {
                ...state, disableButtonSet: action.disable
            }
        default:
            return state
    }
}

export const incValueAC = () => ({type: 'INC-VALUE'} as const)
export const resetValueAC = () => ({type: 'RESET-VALUE'} as const)
export const setMaxValueAC = (maxValue: number) => ({type: 'MAX-VALUE', maxValue} as const)
export const setMinValueAC = (minValue: number) => ({type: 'MIN-VALUE', minValue} as const)
export const setValueAC = () => ({type: 'SET-VALUE'} as const)
export const setButtonDisableAC = (disable: boolean) => ({type: 'SET-BUTTON-DISABLE', disable} as const)
export const setValueFromLocalStorageAC = (value: number) => ({type: 'SET-VALUE-FROM-LOCAL-STORAGE', value} as const)

export type IncValuesActionType = ReturnType<typeof incValueAC>
export type ResetValueActionType = ReturnType<typeof resetValueAC>
export type SetMaxValueActionType = ReturnType<typeof setMaxValueAC>
export type SetMinValueActionType = ReturnType<typeof setMinValueAC>
export type SetValueActionType = ReturnType<typeof setValueAC>
export type SetButtonDisableActionType = ReturnType<typeof setButtonDisableAC>
export type SetValueFromLocalStorageActionType = ReturnType<typeof setValueFromLocalStorageAC>

type ActionType = IncValuesActionType
    | SetValueFromLocalStorageActionType
    | ResetValueActionType
    | SetMaxValueActionType
    | SetMinValueActionType
    | SetValueActionType
    | SetButtonDisableActionType