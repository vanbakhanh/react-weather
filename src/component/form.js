import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form className="form-inline d-flex justify-content-center mb-5" onSubmit={this.props.loadWeather}>
        <input
          type="text"
          className="form-control mr-sm-2 mb-2 border-0 shadow"
          name="city"
          placeholder="City" />
        <input
          type="text"
          className="form-control mr-sm-2 mb-2 border-0 shadow"
          name="country"
          placeholder="Country" />
        <button
          type="submit"
          className="btn btn-primary mb-2 shadow">Get Weather</button>
      </form>
    )
  }
}

export default Form;