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
{/* <section>“We love films because they makes us feel something. They speak to our desires, which are never small. They allow us to escape and to dream and to gaze into the eyes that are impossibly beautiful and huge. They fill us with longing. But also. They tell us to remember; they remind us of life. Remember, they say, how much it hurts to have your heart broken.”</section> */}
    </div>
    </body>  
      </Default>
    )
  }
}

module.exports = Home;