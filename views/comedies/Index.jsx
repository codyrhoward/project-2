const React = require('react');

class Index extends React.Component {
    render() {
        const { comedies } = this.props;
        return (
            <div>
                <h1>Comedies Index Page</h1>
                <nav>
                    <a href="/comedies/new">Create a New Comedy</a>
                </nav>
                <ul>
                    {
                        comedies.map((comedy, i) => {
                            return (
                                <li>
                                    The <a href={`/comedies/${comedy._id}`}>{comedy.name}</a> is {comedy.color} <br></br>
                                    {comedy.readyToEat ? `It is ready to eat` : `It is not ready to eat`}
                                    {/* /comedies/id_of_the_comedy/override_post_method */}
                                    <form action={`/comedies/${comedy._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
                                    </form>
                                    {/* Create a link to the edit route /comedies/id_of_comedy/edit */}
                                    <a href={`/comedies/${comedy._id}/edit`}>Edit</a>
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