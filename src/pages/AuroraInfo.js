import { Grid,Box, Container, Typography } from "@mui/material"
import MapComp from "./MapComp"
import {useSelector} from 'react-redux'
import { useEffect, useState } from "react"
import reqFromAurora from '../apirest/ReqFromAurora'

function AuroraInfoComp(){


    const storeData = useSelector(state=>state)
    const [aurora,setAurora] = useState({date:'',probability:{calculated:{value:0}}})

    useEffect(async()=>{
        let response=await reqFromAurora.getAuroraInfo(storeData.geoInfo.longitude,storeData.geoInfo.latitude)
        setAurora(response.data)
        //console.log(aurora)
        
    },[storeData.geoInfo,storeData.location])

    return(
        <Typography>
            {aurora.date}<br/>
            {aurora.probability.calculated.value}
        </Typography>
    )

}
export default AuroraInfoComp