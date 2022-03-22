import { Typography } from "@mui/material"
import {useSelector} from 'react-redux'
import { useEffect, useState } from "react"
import reqFromAurora from '../apirest/ReqFromAurora'

function AuroraInfoComp(){


    const storeData = useSelector(state=>state)
    const [aurora,setAurora] = useState({date:'',probability:{calculated:{value:0},colour:''}})

    useEffect(async()=>{
        let response=await reqFromAurora.getAuroraInfo(storeData.geoInfo.longitude,storeData.geoInfo.latitude)
        setAurora(response.data)
    },[storeData.geoInfo,storeData.location])

    return(
        <Typography>
            <b>Date:</b>{Date(aurora.date).substring(0,Date(aurora.date).indexOf('GMT'))}<br/>
            <b>Probability:</b>{aurora.probability.calculated.value}%<br/>
            <b>Colour:</b>{aurora.probability.colour}
        </Typography>
    )

}
export default AuroraInfoComp