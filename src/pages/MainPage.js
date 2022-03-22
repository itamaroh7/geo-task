import { Grid,Box, Container } from "@mui/material"
import { useEffect } from "react"
import GeoInfoComp from "../components/GeoInfo"
import MapComp from "../components/MapComp"
import reqFromAurora from '../apirest/ReqFromAurora'
import {useDispatch} from 'react-redux'
import PredefinedLocationComp from "../components/PredefinedLocation"
import AuroraInfoComp from "../components/AuroraInfo"

function MainPageComp(){
    const dispatch = useDispatch()

    useEffect(async()=>{
        let response=await reqFromAurora.getPredLocations()
        let data = response.data
        let arrLocations=[]
        for(let i=0;i<=16;i++){
            arrLocations.push(data[i.toString()])
        }
        dispatch({type:'INITPREDLOCATIONS',payload:arrLocations})
        dispatch({type:'GEOINFO',payload:{longitude:0,latitude:0}})
    },[])

    return(
        <Container fixed sx={{m:'150px'}}>
            <Grid container >
                <Grid container direction="row"  >
                    <Grid direction="column" >
                        <Grid item>
                            <Box >
                                <MapComp/>
                            </Box>

                        </Grid>
                        <Grid item>
                            <Box  >
                                <GeoInfoComp/>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid direction="column" >
                        <Grid item>
                            <Box >
                                <PredefinedLocationComp/>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box  sx={{backgroundColor:'#c9fdff'}}>
                                <AuroraInfoComp/>
                            </Box>
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Container>
    )

}
export default MainPageComp