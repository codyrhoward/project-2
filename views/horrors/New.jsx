const React = require('react');
const Default = require('../components/Default');

class New extends React.Component {
    render() {
      return (
          <Default>
              
              <body id="new-horror">
              <br/>
              <h1 className="new-h1 d-flex justify-content-center">New Horror</h1>
              <div className="new-container d-flex justify-content-center align-items-center">
              
           <div className="col-7 bg-light text-dark pt-3 rounded mb-5">
              <form className="whole-form" action="/horrors/" method="POST">
              <div className="form-group"> 
                <label for="title" >Title</label> 
                  <input className="form-control" type="text" name="title"/>
                  </div> 
                  <div className="form-group">
                    <label for="image">Image</label>          
                    <input className="form-control"  type="text" name="image" />
                  </div> 

                  <div className="form-group"> 
                  <label for="trailer">Trailer</label>              
                  <input className="form-control"  type="text" name="trailer"/>
                  </div>

                  <div className="form-group"> 
                  <label for="synopsis">Synopsis</label> 
                  <textarea className="form-control"  type="text" name="synopsis" rows="10" cols="35"/>
                  </div>

                  <div classname="form-group">
                  <input className="form-check" type="checkbox" name="watched"/>
                  <label className="" 
                  for="watched">Watched</label>
                  </div>
                   
                  <div className="form-group d-flex justify-content-end">       
                  <input className="btn btn-primary" type="submit" name="" value="Add Horror"/>
                  </div>
                  
               </form>
               </div>
               </div>
               </body>
               
          </Default>
          );
    }
  }
  
  module.exports = New;