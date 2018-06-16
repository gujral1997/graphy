import React, {Component} from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import {Link, hashHistory} from 'react-router'
import query from '../queries/fetchSongs'
import { mutations } from 'apollo-client/mutations/store';

class SongCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {title: ''}
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.mutate({
            variables: {
                title: this.state.title
                 // as key and value are equal
            },
            refetchQueries: [{query}]
        }).then(()=> hashHistory.push('/'))
        
    }

    render() {
        return (
            <div>
                <h5>Create a New Song </h5>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Song Title:</label>
                    <input
                    onChange={event=> this.setState({title: event.target.value})}
                    value={this.state.title}
                    />
                </form>
            </div>
        )
    }
}

const mutation = gql`
  mutation AddSong($title: String){
    addSong(title: $title) {
      title
    }
  }
`
export default graphql(mutation)(SongCreate)

