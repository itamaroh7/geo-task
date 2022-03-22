import { FormControl, InputLabel, MenuItem, Select, Typography,Box } from "@mui/material"
import {useSelector,useDispatch} from 'react-redux'
import { useState} from 'react'

function PredefinedLocationComp(){

    const storeData = useSelector(state=>state)
    const dispatch = useDispatch()
    const [location,setLocation] = useState({name:'',country:'',lat:'',long:''})

    const handleLocationChanged=(event)=>{
        setLocation(event.target.value)
        document.getElementById('loc-cursor').style.visibility='hidden'
        dispatch({type:'SELECTEDLOCATION',payload:event.target.value})
    }


    return(
        <Box>
        <FormControl sx={{minWidth:150}}>
            <InputLabel>Location</InputLabel>
            <Select
            value={location}
            label='Location'

            onChange={handleLocationChanged}
            >
                
               {storeData.predLocations.map(loc=>{
                   return(
                       <MenuItem value={loc} >
                           <Box>
                           <Typography sx={{fontSize:15}}>
                           {loc.name+" "} <br/> 
                           </Typography>
                           <Typography sx={{fontSize:10}}>
                            {loc.country}
                           </Typography>
                           </Box>
                       </MenuItem>
                   )
               })}
            </Select>
        </FormControl>
        </Box>
    )

}
export default PredefinedLocationComp