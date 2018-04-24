import React, {Component} from 'react'
import {connect} from "react-redux";
import {saveGIFUrl} from "../actions/GIFactions";
import {searchGIFThunk} from "../actions/searchGIFAction";


class SearchGIF extends Component {
    constructor(props) {
        super(props);
        this.handleGIFClick = this.handleGIFClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.dispatch(searchGIFThunk(event.target.value));
    }

    handleGIFClick(event) {
        this.props.dispatch(saveGIFUrl(event.target.src));
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Search a GIF:
                        <input onChange={this.handleChange}/>
                    </label>
                </form>
                <ul>{this.props.searchResultUrls.map((result, id) => {
                    return (
                        <li key={id}>
                            <img src={result} onClick={this.handleGIFClick} alt={result}/>
                        </li>)
                })}</ul>
            </div>)
    }
}

const mapStateToProps = (state) => ({
    searchResultUrls: state.searchResultUrls
});

export default connect(mapStateToProps)(SearchGIF);