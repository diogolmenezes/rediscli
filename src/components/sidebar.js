import React, { Component } from 'react';
import DataSourceManager from './dataSourceManager';

const DATA_SOURCE_COLLECTION = 'rediscli:datasources';

class Sidebar extends Component {
    constructor() {
        super();
        this.state = { dataSources: [], openDataSourceManager: false };
    }

    componentDidMount() {
        this.setState({ dataSources: JSON.parse(localStorage.getItem(DATA_SOURCE_COLLECTION)) });
    }

    toggleDataSourceManager() {
        this.setState({ openDataSourceManager: !this.state.openDataSourceManager });
    }

    render() {
        return (
            <section id="sidebar" className="pure-u-sm-1-5 pure-u-md-4-24">
                <DataSourceManager open={this.state.openDataSourceManager} />
                <div className="pure-menu pure-menu-horizontal">
                    <ul className="pure-menu-list">
                        <li className="pure-menu-item">
                            <a onClick={this.toggleDataSourceManager.bind(this)} className="pure-menu-link">+</a>
                        </li>
                        <li className="pure-menu-item">
                            <a href="" className="pure-menu-link">edit</a>
                        </li>
                        <li className="pure-menu-item">
                            <a href="" className="pure-menu-link">refresh</a>
                        </li>
                    </ul>
                </div>
                <div className="pure-menu">
                    <ul className="pure-menu-list">
                        {
                            this.state.dataSources.map((dataSource, i) => {
                                return (<li key={window.btoa(dataSource.name)} className="pure-menu-item"><a href="" className="pure-menu-link">{dataSource.name}</a></li>)
                            })
                        }
                    </ul>
                </div>
            </section>
        );
    }
}

export default Sidebar