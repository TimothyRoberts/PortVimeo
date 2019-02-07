import React from 'react';

class DropDown extends React.Component {
  render() {
    const options = this.props.options.map(item => {
      return <option key={item} value={item}>{item}</option>;
    });
    return (

      <div>
        <div>
          <select className="dropdown"  value={this.props.selected} name={this.props.name} onChange={this.props.handleChange}>
            {options}
          </select>
        </div>
      </div>

    );
  }
}

export default DropDown;
