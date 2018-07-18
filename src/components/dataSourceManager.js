import React, { Component } from 'react';

class DataSourceManager extends Component {
    render() {
        return (
            <div className={!this.props.open ? 'hide modal' : 'modal'}>
                <form className="pure-form pure-form-stacked">
                    <fieldset>
                        <legend>Legend</legend>

                        <div className="pure-g">
                            <div className="pure-u-1 pure-u-md-1-3">
                                <label for="first-name">First Name</label>
                                <input id="first-name" className="pure-u-23-24" type="text" />
                            </div>

                            <div className="pure-u-1 pure-u-md-1-3">
                                <label for="last-name">Last Name</label>
                                <input id="last-name" className="pure-u-23-24" type="text" />
                            </div>

                            <div className="pure-u-1 pure-u-md-1-3">
                                <label for="email">E-Mail</label>
                                <input id="email" className="pure-u-23-24" type="email" required />
                            </div>

                            <div className="pure-u-1 pure-u-md-1-3">
                                <label for="city">City</label>
                                <input id="city" className="pure-u-23-24" type="text" />
                            </div>

                            <div className="pure-u-1 pure-u-md-1-3">
                                <label for="state">State</label>
                                <select id="state" className="pure-input-1-2">
                                    <option>AL</option>
                                    <option>CA</option>
                                    <option>IL</option>
                                </select>
                            </div>
                        </div>

                        <label for="terms" className="pure-checkbox">
                            <input id="terms" type="checkbox" /> I've read the terms and conditions
                    </label>

                        <button type="submit" className="pure-button pure-button-primary">Submit</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default DataSourceManager;