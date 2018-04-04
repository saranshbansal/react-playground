import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';

const boxSource = {
    beginDrag(props) {
        return {
            color: props.color,
        };
    },
};

export class Box extends Component {
    render() {
        const { color } = this.props;
        const style = {
            backgroundColor: color,
            height: 10vh;
        };
        return connectDragSource(
            <Col md={3}>
                <div style={style}>
                    {color}
                </div>
            </Col>
        );
    }
}

Box.propTypes = {
    color: PropTypes.string.isRequired,
    connectDragSource: PropTypes.func.isRequired,
};
export default DragSource(Types.BOX, boxSource, connect => ({
    connectDragSource: connect.dragSource(),
}))(Box);