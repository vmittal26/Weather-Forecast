import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/action_weather';

export class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'term': ''
        };
        this.onInputChange = this.onInputChange .bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        console.log('Submit');

        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} className="input-group">
                <input
                    placeholder="Search Weather..."
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}></input>
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="submit">Search</button>
                </span>
            </form>
        );
    }

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch)
}

export default connect(null,mapDispatchToProps)(SearchBar);
