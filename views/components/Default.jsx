const React = require('react');
class Default extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="./css/style.css" type="text/css"/>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
                    <title>Watchlist</title>
                </head>
                <header>
                <div>
                            <nav className="navbar  navbar-dark bg-dark">
                            <a className="navbar-brand" href="/">Watchlist</a>
                            <a className="nav-link" href="/comedies/new">Add Comedy</a>
                            <a className="nav-link" href="/comedies">Comedies</a>
                            <a className="nav-link" href="/dramas">Dramas</a>
                            <a className="nav-link" href="/dramas/new">Add Drama</a>
                        </nav>
                    </div>
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