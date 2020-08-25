const React = require('react');
const Default = require('../components/Default');

class Index extends React.Component {
    render() {
        const { dramas } = this.props;
        return (
            <Default>
            <body className="drama-body">
            <div>                          
                <h1 className="d-flex justify-content-center ml-5 my-4 text-white">Drama</h1>
                <hr/>
                <ul className="comedy-index-ul">
                    {
                        dramas.map((drama, i) => {
                            return (
                                <li className="comedy-index-li">
                                    {/* <h3>{drama.title}</h3> */}
                                    <a className="index-link" href={`/dramas/${drama._id}`}><img className="comedy-index-img" src={drama.image}/></a><br/>
                                    <div className="under-container">
                                    <p className="index-watched text-white">{drama.watched ? `You've watched this movie.` : `You need to watch this movie.`}</p>
                                    
                                    <form action={`/dramas/${drama._id}?_method=DELETE`} method="POST">
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