const React = require('react');
const Default = require('../components/Default');

class Index extends React.Component {
    render() {
        const { horrors } = this.props;
        return (
            <Default>
            <body className="drama-body">
            <div>                          
                <h1 className="d-flex justify-content-center ml-5 my-4 text-white">Horror</h1>
                <hr/>
                <ul className="comedy-index-ul">
                    {
                        horrors.map((horror, i) => {
                            return (
                                <li className="comedy-index-li">
                                    {/* <h3>{horror.title}</h3> */}
                                    <a className="index-link" href={`/horrors/${horror._id}`}><img className="comedy-index-img" src={horror.image}/></a><br/>
                                    <div className="under-container">
                                    <p className="index-watched text-white">{horror.watched ? `You've watched this movie.` : `You need to watch this movie.`}</p>
                                    
                                    <form action={`/horrors/${horror._id}?_method=DELETE`} method="POST">
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