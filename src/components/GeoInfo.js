import { Typography } from "@mui/material"
import {useSelector} from 'react-redux'

function GeoInfoComp(){


    const storeData = useSelector(state=>state)

    return(
        <Typography>
           <b> Longitude:</b> {storeData.geoInfo.longitude} <b>Latitude:</b> {storeData.geoInfo.latitude}
        </Typography>
    )

}
export default GeoInfoComp