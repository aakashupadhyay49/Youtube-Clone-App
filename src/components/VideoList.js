import React from "react" 
import Videoitem from "./Videoitem"
import {Grid} from "@material-ui/core"

const VideoList=({videos,onVideoSelect})=>{
    const ListOfVideos=videos.map((video,id)=><Videoitem  onVideoSelect={onVideoSelect} key={id} video={video}/>)
    return (
        <Grid container spacing={10}>
            {ListOfVideos}
        </Grid>
    )
}

export default VideoList