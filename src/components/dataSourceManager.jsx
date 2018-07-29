import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DataSourceManager extends Component {

    constructor() {
        super();
        
        this.state = {
            dataSources: [],
            dataSource: {}
        };        
    }

    componentWillMount() {
        this.setState({
            dataSources: this.props.dataSourceService.list()
        });
    }    

    createDataSource() {
        this.props.dataSourceService.create(this.state.dataSource);
    }

    handleChange(e) {
        let change = { dataSource: this.state.dataSource };
        change.dataSource[e.target.id] = e.target.value;
        this.setState(change);
    }

    render() {
        return ( 
            <div className="pure-u-sm-4-5 pure-u-md-20-24">
                <form className="pure-form pure-form-stacked">
                    <fieldset>
                        
                        <label>Name</label>
                        <input id="name" type="text" value={ this.state.dataSource.name } onChange={ this.handleChange.bind(this) } />

                        <label>Host</label>
                        <input id="host" type="text" value={ this.state.dataSource.host } onChange={ this.handleChange.bind(this) } />

                        <button type="submit" className="pure-button pure-button-active"> Test Connection</button>
                        <Link to="/" className="pure-button pure-button-active"> Cancel</Link>
                        <button type="submit" className="pure-button pure-button-primary" onClick={this.createDataSource.bind(this)}> Save</button>

                    </fieldset>
                </form>
            </div>
        )
    }
}

export default DataSourceManager;