import React,{Component} from 'react';
import {graphql} from 'react-apollo';
import fetchSong from '../queries/fetchSong';


class SongDetail extends Component{
    render(){
        console.log(this.props);
        return(
            <div>
                <h1>Song Detail Page</h1>
            </div>

        );
    }
}



export default graphql(fetchSong,{
    //to pass the variable specifi id in this case
    options:(props)=>{return{variables:{id:props.params.id}}}
})(SongDetail);