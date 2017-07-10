import React, { Component } from 'react';

class History extends Component {

    render() {

        var historyEntries = this.props.history.map((h) => 
            <li key = { h.id }>{ h.startedAt.toString() } - { h.endedAt.toString() }</li>);

        historyEntries.reverse();

        return (
            <div>
                <h1>History</h1>
                <ul>
                    { historyEntries.length > 0
                        ? historyEntries
                        : <li>No records yet</li>
                    }
                </ul>
            </div>
        );
    }

}

export default History;