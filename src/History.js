import React, { Component } from 'react';

class History extends Component {

    render() {

        var historyEntries = this.props.history.map((h) => {

            var start = new Date(h.startedAt);
            var end = new Date(h.endedAt);

            // milliseconds
            var diff = end.getTime() - start.getTime();

            // seconds
            var secs = Math.round(diff / 1000);

            // minutes
            var mins = secs / 60;

            // hrs
            var hrs = Math.round(mins / 60);
            
            // remaining mins after hrs
            var remainingMins = Math.round(mins % 60);

            var fastingFor = "";
            if (hrs !== 0)
                fastingFor += `${hrs}h `;
            if (remainingMins !== 0)
                fastingFor += `${remainingMins}m`;
            if (hrs === 0 && remainingMins === 0)
                fastingFor += `${secs}s`;

            return (
                <tr key={h.id}>
                    <td>{ start.toString() }</td>
                    <td>{ end.toString() }</td>
                    <td>{ fastingFor }</td>
                </tr>
            );

        });

        historyEntries.reverse();

        return (
            <div>
                <h1>History</h1>
                <table>
                    <tbody>
                        { historyEntries.length > 0
                            ? historyEntries
                            : <li>No records yet</li>
                        }
                    </tbody>
                </table>
            </div>
        );
    }

}

export default History;