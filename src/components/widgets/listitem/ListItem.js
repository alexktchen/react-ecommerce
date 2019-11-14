import React from 'react';
import './ListItem.css';
import PropTypes from "prop-types";

class ListItem extends React.Component {

    render() {
        const imageColor =
          (this.props.statusCode === 3 || this.props.statusCode === 4)
            ? "imgStyle grayscale"
            : "imgStyle";

        return (
          <div className="panel">
            <img alt="" className={imageColor} src={this.props.logo} />
            <div className="descPanel">
              <div>
                <div style={{ display: "inline" }}>{this.props.statusType}</div>
                <div style={{ display: "inline", float: "right" }}>
                  預計出貨 : {this.props.date}
                </div>
              </div>
              <div className="subDesc">{this.props.name}</div>
            </div>
            <i className="fas fa-chevron-right arrow"></i>
          </div>
        );
    }
}


ListItem.prototypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  statusCode: PropTypes.string,
  statusType: PropTypes.string,
  logo: PropTypes.string
};

export default ListItem;
