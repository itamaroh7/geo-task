import { Grid,Box, Container } from "@mui/material"
import { useEffect } from "react"
import GeoInfoComp from "./GeoInfo"
import MapComp from "./MapComp"
import reqFromAurora from '../apirest/ReqFromAurora'
import {useDispatch,useSelector} from 'react-redux'
import PredefinedLocationComp from "./PredefinedLocation"
import AuroraInfoComp from "./AuroraInfo"

function MainPageComp(){
    const dispatch = useDispatch()
    const storeData = useSelector(state=>state)

    useEffect(async()=>{
        let response=await reqFromAurora.getPredLocations()
        let data = response.data
        let arrLocations=[]
        for(let i=0;i<=16;i++){
            arrLocations.push(data[i.toString()])
        }
        dispatch({type:'INITPREDLOCATIONS',payload:arrLocations})
    },[])

    return(
        <Container fixed sx={{m:'150px'}}>
            <Grid container >
                <Grid container direction="row"  >
                    <Grid direction="column" >
                        <Grid item>
                            <Box sx={{backgroundColor:'red'}}>
                                <MapComp/>
                            </Box>

                        </Grid>
                        <Grid item>
                            <Box  sx={{backgroundColor:'yellow'}}>
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
                            <Box  sx={{backgroundColor:'yellow'}}>
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