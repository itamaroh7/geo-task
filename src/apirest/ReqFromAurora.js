import axios from "axios"

const getAuroraInfo=async(longi,lat)=>{
    try{
        return  axios.get("http://api.auroras.live/v1/?type=all&lat="+lat+"&long="+longi+"&forecast=false&threeday=false")
    }
    catch(e){
        return {}
    }
}

const getPredLocations=()=>{
    try{
        return  axios.get("http://api.auroras.live/v1/?type=locations") 
    }
    catch(e){
        return []
    }
 }

export default {getAuroraInfo,getPredLocations}