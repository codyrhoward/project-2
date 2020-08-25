const React = require('react');
const Default = require('../components/Default');

class Index extends React.Component {
    render() {
        const { comedies } = this.props;
        return (
            <Default>
            <body className="comedy-body">
            <div>                          
                <h1 className="d-flex justify-content-center my-4 text-white">Your Comedy Watchlist</h1>
                <hr/>
                <ul className="comedy-index-ul">
                    {
                        comedies.map((comedy, i) => {
                            return (
                                <li className="comedy-index-li">
                                    {/* <h3>{comedy.title}</h3> */}
                                    <a className="index-link" href={`/comedies/${comedy._id}`}><img className="comedy-index-img" src={comedy.image}/></a><br/>
                                    <div className="under-container">
                                    <p className="text-white">{comedy.watched ? `You've watched this movie.` : `You need to watch this movie.`}</p>
                                    
                                    <form action={`/comedies/${comedy._id}?_method=DELETE`} method="POST">
                                        <input className="btn btn-primary" type="submit" value="delete"/>
                                    </form>
                                    </div>
                                    
                                    
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            </body>
            </Default>
        )
    }
}

module.exports = Index;