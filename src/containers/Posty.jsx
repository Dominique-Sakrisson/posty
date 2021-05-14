import React, { Component } from 'react'
import Query from '../components/app/queries/Query'
import {makeRequest} from '../services/apiShaper'
import JsonFormat from '../components/app/outputs/JsonFormat'

export default class Posty extends Component {
    state={
        url: '',
        method: '',
        jsonString: '',
        formatJson: '',
    }

    handleQueryChange = ({target}) => {
        this.setState({url: target.value});
        console.log(this.state.url)
    }

    handleMethodChange = ({target}) => {
        this.setState({method: target.value})
    }

    handleFormSubmit = async (event) => {
        event.preventDefault();

        this.setState({loading: true});
        const res = await makeRequest(this.state.url, this.state.method);
        this.setState({loading: false, jsonString: JSON.stringify(res), formatJson: JSON.stringify(res, null, 6)});
    }
    render() {
        const {formatJson} = this.state;
        return (
            <>
            <Query onSubmit={this.handleFormSubmit} onQueryChange={this.handleQueryChange} onMethodChange={this.handleMethodChange}/>
            <JsonFormat text={formatJson} />
            </>
        )
    }
}
