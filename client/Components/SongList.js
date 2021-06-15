import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql } from 'react-apollo';
import {Link }from 'react-router';
import query from '../queries/fetchSongs';




class SongList extends Component{

    onSongDelete(id){
        this.props.mutate({variables:{id}})
        //refetch will automatically associated with that particular query
            .then(()=>this.props.data.refetch());
    }


    rederSongs(){
        return this.props.data.songs.map(({id,title})=>{
            return(
                //to avoid the key warning 
                 <li key={id} className="collection-item">
                    {title}
                    <i
                    className="material-icons"
                    onClick={()=>this.onSongDelete(id)}
                    >delete</i>
                </li>
            );
        });
    }

    render(){
        //console.log(this.props);

        // this handles the delay before it is got from the database
        if(this.props.data.loading) {
            return <div>Loading....</div>
        }
        return(
            <div>
            <ul className="collection">{this.rederSongs()}</ul>
            <Link to="/songs/new" className="btn-floating btn-large red right">
                <i className="material-icons">add</i>
                </Link>
            </div>
        );
    }
}

// //query to call the required data from the database. This code has been moved to a different file 
// const query = gql`
// {
//     songs{
//         id
//       title
//     }
//   }
// `;

const mutation = gql`
mutation DeleteSong($id:ID){
    deleteSong(id:$id){
      id
    }
    
  }
  `;

//merging the component and the graph ql query
//it takes two renders to fetch the data with some wait time . So first fetch wont have the data but the one after the second render does
export default graphql(mutation)(
graphql(query)(SongList));