import React, { Component } from 'react'
import Query from '../components/app/queries/Query'
import {makeRequest} from '../services/apiShaper'
import JsonFormat from '../components/app/outputs/JsonFormat'

export default class Posty extends Component {
    state={
        url: '',
        method: '',
        body: '',
        jsonString: '',
        formatJson: '',
    }

    handleQueryChange = ({target}) => {
        this.setState({url: target.value});
    }

    handleMethodChange = ({target}) => {
        this.setState({method: target.value})
    }
    handleBodyChange = ({target}) => {
        this.setState({body: target.value});
    }
    handleFormSubmit = async (event) => {
        event.preventDefault();
        this.setState({loading: true});

        const res = await makeRequest(this.state.url, this.state.method, this.state.body);
        this.setState({loading: false, jsonString: JSON.stringify(res), formatJson: JSON.stringify(res, null, 6)});
    }
    render() {
        const {formatJson} = this.state;
        return (
            <>
            <Query 
                onSubmit={this.handleFormSubmit} 
                onQueryChange={this.handleQueryChange} 
                onMethodChange={this.handleMethodChange}
                onBodyChange={this.handleBodyChange}
            />
            <JsonFormat 
                text={formatJson} 
            />
            </>
        )
    }
}
