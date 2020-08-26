const React = require('react');
const Default = require('../components/Default');

class Index extends React.Component {
    render() {
        const { scifis } = this.props;
        return (
            <Default>
            <body className="drama-body">
            <div>                          
                <h1 className="d-flex justify-content-center ml-5 my-4 text-white">Sci-Fis</h1>
                <hr/>
                <ul className="comedy-index-ul">
                    {
                        scifis.map((scifi, i) => {
                            return (
                                <li className="comedy-index-li">
                                    {/* <h3>{scifi.title}</h3> */}
                                    <a className="index-link" href={`/scifis/${scifi._id}`}><img className="comedy-index-img" src={scifi.image}/></a><br/>
                                    <div className="under-container">
                                    <p className="index-watched text-white">{scifi.watched ? `You've watched this movie.` : `You need to watch this movie.`}</p>
                                    
                                    <form action={`/scifis/${scifi._id}?_method=DELETE`} method="POST">
                                        <input className="btn btn-primary btn-sm" type="submit" value="delete"/>
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