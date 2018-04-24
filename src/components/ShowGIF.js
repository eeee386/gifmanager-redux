import React, {Component} from 'react';
import {connect} from "react-redux";
import EditGIF from "../containers/EditGIF";
import {changeEditMode} from "../actions/GIFactions";

class ShowGIF extends Component {

    constructor(props) {
        super(props);
        this.input = '';
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        console.log(this.input.src);
        event.preventDefault();
        this.props.dispatch(changeEditMode(this.input.src));
    }


    render() {
        return (
            <div>
                <ul>
                    {this.props.images.map((savedGIF, id) => {
                        return (
                            <li key={id}>
                                <img src={savedGIF.imageUrl} onClick={this.handleClick}
                                     alt={savedGIF.imageUrl} ref={node => this.input = node}/>
                                {savedGIF.editMode ?
                                    <EditGIF urlprop={savedGIF}/> :
                                    <button onClick={this.handleClick}>Edit</button>
                                }
                            </li>)
                    })}
                </ul>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    images: state.images,
    editMode: state.editMode,
});

export default connect(mapStateToProps)(ShowGIF);