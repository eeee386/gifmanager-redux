import {addGIFToGroup, deleteGIFUrl} from "../actions/GIFactions";
import React, {Component} from 'react';
import {connect} from "react-redux";

class EditGIF extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.groupName = '';
        this.handleDelete = this.handleDelete.bind(this);
        this.handleGroup = this.handleGroup.bind(this);
    }

    handleDelete() {
        this.props.dispatch(deleteGIFUrl(this.props.url))
    }

    handleGroup() {
        this.props.dispatch(addGIFToGroup(this.props.url, this.groupName));
    }

    render() {
        return (
            <div>
                {this.props.groups.map((group, id) => {
                    return (
                        <form>
                            <select>
                                <option key={id} ref={node => this.groupName = node} onClick={this.handleGroup}>{group}
                                </option>
                            </select>
                        </form>
                    )
                })}
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    groups: state.groups
});

export default connect(mapStateToProps)(EditGIF);