import React from "react"

import {Grid} from "@material-ui/core"

import youtube from "./api/youtube"

import {SearchBar,VideoDetail,VideoList} from "./components"

class App extends React.Component{

    state={
        videos:[],
        selectedVideo:null
    }


    componentDidMount(){
        this.handleSubmit("Web Development")
    }

    onVideoSelect=(video)=>{
        this.setState({selectedVideo:video})
    }

    handleSubmit=async(searchTerm)=>{
       try{
        const response=await youtube.get("search",{
            params:{
                part:"snippet",
                maxResults:10,
                key:"AIzaSyCqeIkOH3H9CjA2fe3Cgjsht4qSHSKJkbc",
                q:searchTerm
            }
        })
       this.setState({videos:response.data.items,selectedVideo:response.data.items[0]})
       }catch(err){
           console.log(err)
       }
    }

    render(){
        const {selectedVideo,videos}=this.state
        return(
           <Grid justifyContent="center" container spacing={16}>
               <Grid item xs={12}>
                   <Grid container spacing={10}>
                       <Grid item xs={12}>
                           <SearchBar onFormSubmit={this.handleSubmit}/>
                       </Grid>
                       <Grid item xs={7}>
                           <VideoDetail  video={selectedVideo}/>
                       </Grid>
                       <Grid item xs={5}>
                        <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
                       </Grid>
                   </Grid>
               </Grid>
           </Grid>
        )
    }
}


export default App