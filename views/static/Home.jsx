const React = require('react');
const Default = require('../components/Default');

class Home extends React.Component {

  render(){
    return(
        <Default>
     <body className="home-body">     
    <div className="jumbotron jumbotron-fluid">
        
        <div className="container">
        {/* <h3 className="display-4">Welcome to..</h3> */}
        <h1 className="display-3">The Watchlist</h1> 
        <p className="lead">Your custom movie list experience. No more thoughtless searching for movies to watch. Add your favorites or add movies you still need to see. Mark as watched and work your way through your list.</p>
    
    </div>
    </div>
    <div className="div">
<section></section>
    </div>
    </body>  
      </Default>
    )
  }
}

module.exports = Home;