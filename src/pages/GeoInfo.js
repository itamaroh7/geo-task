import { Grid,Box, Container, Typography } from "@mui/material"
import MapComp from "./MapComp"
import {useSelector} from 'react-redux'

function GeoInfoComp(){


    const storeData = useSelector(state=>state)

    return(
        <Typography>
            Longitude: {storeData.geoInfo.longitude} Latitude: {storeData.geoInfo.latitude}
        </Typography>
    )

}
export default GeoInfoComp