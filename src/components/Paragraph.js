import React from 'react';

class Paragraph extends React.Component {
  render() {
    return (
        <p>
            {this.props.response}
        </p>
    );
  }
}

export default Paragraph
