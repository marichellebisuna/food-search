import React, { Component } from 'react'

export default class 
 extends Component {
  render() {
    const {value, handleSubmit, handleChange} = this.props
    return (
     <React.Fragment>
         <div className="container">
           <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5 text-center">
            <h1 className="text-slanted text-capitalize">search for recipe with {""}
            <strong className="text-danger">Food2Fork</strong>
            </h1>
            <form className="mt-4" onSubmit={handleSubmit}>
              <label htmlFor="search" className="text-capitalize">
                type recipes separated by comma
              </label>
              <input type="text" value={value} onChange={handleChange} name="search" placeholder="chicken, onions, carrots" className="form-control"/>
              <div className="input-group-append">
              <button type="submit" className="input-group-text bg-primary text-white">
              <i className="fas fa-search" />
              </button>
              </div>
            </form>
            </div>
           </div>
         </div>
     </React.Fragment>
        
      
    )
  }
}
