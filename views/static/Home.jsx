const React = require('react');
const Default = require('../components/Default');

class Home extends React.Component {

  render(){
    return(
        <Default>
     <body className="home-body">     
    <div className="jumbotron jumbotron-fluid">
        
        <div className="container d-flex flex-column justify-content-flex-end home-container">
        {/* <h3 className="display-4">Welcome to..</h3> */}
        <h1 className="display-2">The Watchlist</h1> 
        <h3 className="display-4 text-white"></h3>
    
    </div>
    </div>
    <div className="div">
<section><h3 className="display-4 d-flex justify-content-center m-4">Your custom movie list experience...</h3></section>
    </div>
    </body>  
      </Default>
    )
  }
}

module.exports = Home;