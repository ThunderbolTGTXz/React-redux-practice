export const setStateToADD = () => ({
    type: ACTION_ADD,
})

export const setStateToREM = () => ({
    type: ACTION_REM,
})

export const setStateToCLR = (payload) => ({
    type: ACTION_CLR,
    payload
})

export const add = ()=>{
    //do something
    return dispatch=>{
        srtTimeout(()=>{
            dispatch(setStateToADD())
        },1000)
    }
}

export const remove = ()=>{
    //do something
    return dispatch=>{
        srtTimeout(()=>{
            dispatch(setStateToREM())
        },1000)
    }
}


export const clear = (payload)=>{
    //do something
    return dispatch=>{
            dispatch(setStateToCLR(payload))    
    }
}



