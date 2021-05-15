import React, { Component } from 'react'
import Query from '../components/app/queries/Query'
import {makeRequest} from '../services/apiShaper'
import JsonFormat from '../components/app/outputs/JsonFormat'
import HistoryList from '../components/app/outputs/history/HistoryList'
import styles from '../styles/style.css'

export default class Posty extends Component {
    state={
        url: '',
        method: '',
        body: '',
        jsonString: '{}',
        formatJson: '',
        history: [],
        stamp: '',
    }

    handleQueryChange = ({target}) => {
        this.setState({url: target.value});
    }

    handleMethodChange = ({target}) => {
        this.setState({method: target.value})
    }
    handleBodyChange = ({target}) => {
        this.setState({body: target.value});
        console.log(typeof(this.state.body))
        console.log(this.state.body)
    }
    handleFormSubmit = async (event) => {
        event.preventDefault();
        let stamp = String(Date.now());
        this.setState({loading: true});

        const res = await makeRequest(
            this.state.url, 
            this.state.method, 
            this.state.body
        );
        this.setState({
            loading: false, 
            formatJson: JSON.stringify(res, null, 6),
            stamp
        });
        
        this.setState(prevState => ({
            history: [...prevState.history, {url: this.state.url, method: this.state.method, body: this.state.body, stamp: this.state.stamp } ]}));

    }
    render() {
        const {formatJson, history, stamp} = this.state;
        return (
            <>
            <Query 
                onSubmit={this.handleFormSubmit} 
                onQueryChange={this.handleQueryChange} 
                onMethodChange={this.handleMethodChange}
                onBodyChange={this.handleBodyChange}
            />
            <div className={styles.report}>
                <JsonFormat text={formatJson} />
                <HistoryList history1={history} stamp={stamp}/>
            </div>
            </>
        )
    }
}
