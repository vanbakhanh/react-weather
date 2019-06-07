import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div className="row">
        <form className="form-inline col-lg-12 mb-5 d-flex justify-content-center" onSubmit={this.props.loadWeather}>
          <input
            type="text"
            className="form-control col-lg-4 col-md-12 m-1 border-0 shadow"
            name="city"
            placeholder="City"
            required />
          <button
            type="submit"
            className="btn btn-outline-light col-lg-2 col-md-12 m-1 shadow">Get Weather</button>
        </form>
      </div>
    )
  }
}

export default Form;