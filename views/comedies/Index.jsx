const React = require('react');

class Index extends React.Component {
    render() {
        const { comedies } = this.props;
        return (
            <div>               
                <nav>
                    <a href="/comedies/new">Add a Comedy</a>
                    <a href="/home">Home</a>
                    <a href="/comedies">Comedies</a>
                    <a href="/dramas">Dramas</a>
                    <a href="/dramas/new">Add a Drama</a>
                </nav>
                <h1>Your Comedies</h1>
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
        )
    }
}

module.exports = Index;