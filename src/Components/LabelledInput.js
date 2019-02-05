import React from 'react';

class LabelledInput extends React.Component {
  render() {
    return (
      <div>
        <div>
          <input name={this.props.name} value={this.props.value} onChange={this.props.handleChange} className="input marginTop search" type="text" placeholder="  Search Projects" />
        </div>
      </div>
    );
  }
}

export default LabelledInput;
