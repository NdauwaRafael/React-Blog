import React, {Component} from 'react';

export default class extends Component {
    state = {
        authors: []
    };

    async componentDidMount() {
       const authors = await (await fetch('http://localhost:3004/authors') ).json();
        this.setState({authors});
    };

    render() {
        return (
            <div className="App">

            </div>
        );
    }
};


