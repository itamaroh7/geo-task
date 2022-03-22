import { Paper } from "@mui/material";
import map from '../assets/map.jpg';
import locationimg from '../assets/location-image.jpg';
import {useSelector,useDispatch} from 'react-redux'
import { useEffect } from "react";

function MapComp(){

    const storeData = useSelector(state=>state)
    const dispatch = useDispatch()

    useEffect(()=>{
        var x = LongitudeToPixel(storeData.location.long)
        var y = LatitudeToPixel(storeData.location.lat)
        document.getElementById('loc-cursor').style.top=(y-15).toString()+'px'
        document.getElementById('loc-cursor').style.left=(x-15).toString()+'px'
    },[storeData.location])

    const pixelsToLongLat=(x,y)=>{
        //Get x,y coordinates as image pixels and convert it to longitude and latitude
        var mapWidth=720
        var mapHeight=610
        var longi = ((360*x)-(180*mapWidth))/mapWidth
        var lat=(((Math.atan(Math.pow(Math.E,(((mapHeight/2.0)-y)*(2.0*Math.PI))/mapWidth))-(Math.PI/4.0))*360)/Math.PI)*1.099
        console.log("Longitude : " + longi + " ; Latitude : " + lat + ".");
        dispatch({type:'GEOINFO',payload:{longitude:longi,latitude:lat}})
    }

    const LongitudeToPixel=(long)=>{
        //Get longitude and convert it to location on the map image
        console.log("long: "+long)
        var mapWidth=720
        var x = (Math.abs((long*mapWidth))/360.0)
        console.log(x)
        return x
    }

    const LatitudeToPixel=(lat)=>{
        //Get latitude and convert it to location on the map image
        console.log("lat: "+lat)
        var mapHeight=610
        var mapWidth=720
        // var y = ((lat*mapHeight)/180)
        var latRad=lat*Math.PI/180.0
        var merc = Math.log(Math.tan((Math.PI/4.0)+(latRad/2.0)))
        var y = (mapHeight/2) - (mapWidth*merc/(2*Math.PI))
        console.log(y)
        return y
    }

    const replaceCursorLocation=(event)=>{
        //Replace the location cursor to the new click point
        event.preventDefault()
        var rect = event.target.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top; 
        //console.log("Left : " + x.toFixed(3) + " ; Top : " + y.toFixed(3) + ".");
        document.getElementById('loc-cursor').style.top=(y-15).toString()+'px'
        document.getElementById('loc-cursor').style.left=(x-15).toString()+'px'
        pixelsToLongLat(x,y)
    }

    const handleMapClicked=(event)=>{
        document.getElementById('loc-cursor').style.visibility='visible'
        replaceCursorLocation(event);
    }

    return(
         <Paper>
             <div class='container'>
                <img usemap="#map" src={map} class='main_image' onMouseDown={handleMapClicked}/>
                <img id='loc-cursor' src={locationimg}  class='overlay_image'/>
            </div>
         </Paper>
    )

}
export default MapComp