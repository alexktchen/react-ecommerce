import React from 'react';
import './ListHeader.css'
import PropTypes from 'prop-types';

class ListHeader extends React.Component {
    render() {
        return (
            <div className="headerPanel">
                <div className='headerIcon'/>
                <div className='headerText'>{this.props.text}</div>
            </div>
        );
    }
}

ListHeader.prototypes = {
    text: PropTypes.string
};

export default ListHeader;
