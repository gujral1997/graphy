import React, {Component} from 'react'

class SongCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {title: ''}
    }
    render() {
        return (
            <div>
                <h5>Create a New Song </h5>
                <form>
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

export default SongCreate