const React = require('react');
const Default = require('../components/Default');

class New extends React.Component {
    render() {
      return (
          <Default>
          <div>
              <h1>New Comedy</h1>
              <form action="/comedies/" method="POST">
                  Title: <input type="text" name="title" /><br/>                  
                  Image: <input type="text" name="image" /><br/>                 
                  Trailer: <input type="text" name="trailer"/><br/>  
                  Synopsis: <br/> 
                  <textarea type="text" name="synopsis" rows="10" cols="35"/><br/>
                  Watched: <input type="checkbox" name="watched" /><br/>               
                  <input type="submit" name="" value="Add Comedy"/><br/>
                  
               </form>
          </div>
          </Default>
          );
    }
  }
  
  module.exports = New;