const React = require('react');

class New extends React.Component {
    render() {
      return (
          <div>
              <h1>New Drama page</h1>
              <form action="/dramas" method="POST">
                  Name: <input type="text" name="name" /><br/>
                  Is Green: <input type="checkbox" name="isGreen" /><br/>
                  <input type="submit" name="" value="Create Drama"/>
               </form>
          </div>);
    }
  }
  
  module.exports = New;