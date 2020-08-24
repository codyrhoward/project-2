const React = require('react');
const Default = require('../components/Default');

class Index extends React.Component {
    render() {
        const { comedies } = this.props;
        return (
            <Default>
            <div>                          
                <h1>Your Comedy List</h1>
                <ul>
                    {
                        comedies.map((comedy, i) => {
                            return (
                                <li>
                                    <h3>{comedy.title}</h3>
                                    <a href={`/comedies/${comedy._id}`}><img src={comedy.image}></img></a><br/>
                                    {comedy.watched ? `You've watched this movie!` : `You still need to watch this movie.`}
                                    {/* /comedies/id_of_the_comedy/override_post_method */}
                                    <form action={`/comedies/${comedy._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
                                    </form>
                                    {/* Create a link to the edit route /comedies/id_of_comedy/edit */}
                                    
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            </Default>
        )
    }
}

module.exports = Index;