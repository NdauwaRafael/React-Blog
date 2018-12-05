import React, {Component} from 'react';

export default class extends Component {
    state = {
        authors: []
    };

    componentDidMount() {
        fetch('http://localhost:3004/authors')
            .then(res => res.json())
            .then(authors => this.setState({authors}))
    };

    render() {
        return (
            <div className="App">

            </div>
        );
    }
};


