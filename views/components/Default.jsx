const React = require('react');
class Default extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="./css/style.css" type="text/css"/>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
                    <title>Watchlist</title>
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
                   
                </head>
                <header>
                    <nav className="">
                    <ul className="nav navbar bg-dark justify-content-around nav-pills">
                        <li className="nav-item">
                            <a className="navbar-brand text-white" 
                            href="/">Watchlist</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Genres</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="/comedies">Comedy</a>
                                <a className="dropdown-item" href="/dramas">Drama</a>
                                <a className="dropdown-item" href="/horrors">Horror</a>
                                <a className="dropdown-item" href="/scifis">Sci-Fi</a>
                            </div>
                        </li> 

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Add Movie</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="/comedies/new">Add a Comedy</a>
                                <a className="dropdown-item" href="/dramas/new">Add a Drama</a>
                                <a className="dropdown-item" href="/horrors/new">Add a Horror</a>
                                <a className="dropdown-item" href="/scifis/new">Add a Sci-Fi</a>
                            </div>
                        </li> 
                       </ul> 
                       </nav>
                </header>
                
                <body>
                   
             <div className="">
                <section className="placeholder">
                {this.props.children}
                </section>
            </div>
                </body>
            </html>
        )
    }
}
module.exports = Default;