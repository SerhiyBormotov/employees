import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state={
            term: ""
        }
    }

    onTermChange = (event) => {
        const term = event.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {

        let term = this.state.term;
        return (
            <input 
            type="text"
            value={term}
            onChange={this.onTermChange}
            className="form-control search-input"
            placeholder="Знайти співробітника"
/>
        );
    }
};

export default SearchPanel;