const React = require('react');

class New extends React.Component {
    render() {
      return (
          <div>
              <h1>New Drama page</h1>
              <form action="/dramas/" method="POST">
                  Title: <input type="text" name="title" /><br/>
                  Image: <input type="text" name="image" /><br/>
                  Watched: <input type="checkbox" name="watched" /><br/>
                  <input type="submit" name="" value="Add Drama"/>
               </form>
          </div>);
    }
  }
  
  module.exports = New;