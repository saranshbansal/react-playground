import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';

const boxTarget = {
    drop(targetProps, monitor) {
        return {
            box: monitor.getItem().color
        };
    },
};

export class Bin extends Component {
    render() {
        const { isOver, connectDropTarget } = this.props;
        const style = {
            backgroundColor: isOver ? 'grey' : 'white';
        };
        return connectDropTarget(
            <Col>
                <div style={style}>
                    Drag your box here
         </div>
            </Col>,
        );
    }
}
export default DropTarget(Types.BOX, boxTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
}))(Bin);
