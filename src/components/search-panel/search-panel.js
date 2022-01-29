import {Component} from 'react';

import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    valueChange = (e) => {
        /*this.setState({
            value: e.target.value
        });*///или краткая запись this.setState ниже
        const value = e.target.value;
        this.setState({value});
        this.props.onSearch(value)
    }
    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.value} 
                onChange={this.valueChange} />
        );
    }  
};

export default SearchPanel;