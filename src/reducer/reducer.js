
function reducer(state={geoInfo:{longitude:0,latitude:0},predLocations:[],location:{},auroraInfo:{}},action)
{
    switch(action.type)
    {
        case 'GEOINFO':
            return {...state,geoInfo:{longitude:action.payload.longitude,latitude:action.payload.latitude}}
        case 'INITPREDLOCATIONS':
            return {...state,predLocations:action.payload} 
        case "SELECTEDLOCATION":
            return {...state,geoInfo:{longitude:action.payload.long,latitude:action.payload.lat},
                    location:action.payload}
        case 'AURORAINFO':
            return {...state,auroraInfo:action.payload} 
        default:
            return state
    }
}

export default reducer