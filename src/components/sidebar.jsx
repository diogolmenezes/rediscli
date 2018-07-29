import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Sidebar extends Component {
    constructor() {
        super();
        this.state = { dataSources: [] };
    }

    componentDidMount() {
        this.setState({ dataSources: this.props.dataSourceService.list() });
    }

    render() {
        return (
            <section id="sidebar" className="pure-u-sm-1-5 pure-u-md-4-24">
                <div className="pure-menu pure-menu-horizontal">
                    <ul className="pure-menu-list">
                        <li className="pure-menu-item">
                            <Link to="/connections" className="pure-menu-link">+</Link>
                        </li>
                    </ul>
                </div>
                <div className="pure-menu">
                    <ul className="pure-menu-list">
                        {
                            this.state.dataSources.map((dataSource, i) => {
                                return (<li key={window.btoa(dataSource.name)} className="pure-menu-item"><Link to={`/${dataSource.id}`} className="pure-menu-link">{dataSource.name}</Link></li>)
                            })
                        }
                    </ul>
                </div>
            </section>
        );
    }
}

export default Sidebar