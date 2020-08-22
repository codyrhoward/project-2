const React = require('react');

class Index extends React.Component {
    render() {
        const { dramas } = this.props;
        return (
            <div>
                <h1>Drama Index Page</h1>
                <nav>
                    <a href="/dramas/new">Create a New Drama</a>
                </nav>
                <ul>
                    {
                        dramas.map((drama, i) => {
                            return (
                                <li>
                                    <h3>{drama.title}</h3>
                                    <a href={`/dramas/${drama._id}`}>{drama.title}</a> <br/> {drama.image} <br></br>
                                    {drama.watched ? `It is watched` : `It is not watched`}
                                    {/* /dramas/id_of_the_drama/override_post_method */}
                                    <form action={`/dramas/${drama._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
                                    </form>
                                    {/* Create a link to the edit route /dramas/id_of_drama/edit */}
                                    <a href={`/dramas/${drama._id}/edit`}>Edit</a>
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