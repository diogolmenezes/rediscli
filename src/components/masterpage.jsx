import React, { Component } from 'react';
import Sidebar from './sidebar';

export default class MasterPage extends Component {
    
    render() {
        return (           
            <div id="layout" className="pure-g">
                <Sidebar dataSourceService={this.props.dataSourceService} />
                {this.props.children}
            </div>
        );
    }
}