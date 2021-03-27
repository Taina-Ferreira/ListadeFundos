const SetFoundName = (foundName) => {
    return {
        type: 'FOUND_NAME',
        foundName, 
    }
}

const SetMinimumApplication = (value) => {    
    return {
        type: 'MINIMUM_APPLICATION',
        minimumAplication: {
            min: 0,
            max: 16,
            value: value
        }, 
    }
}

const SetMaximumRedemption = (value) => {    
    return {
        type: 'MAXIMUM_REDEMPTION',
        redemption: {
            min: 0,
            max: 46,
            value: value
        }, 
    }
}


export {SetFoundName,SetMinimumApplication,SetMaximumRedemption}