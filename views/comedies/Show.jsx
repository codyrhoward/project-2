const React = require('react');
const Default = require('../components/Default');

class Show extends React.Component {
    render() {
        // const name = this.props.comedy.name;
        // const image = this.props.comedy.image;
        // const watched = this.props.comedy.watched;
        // destructuring
        const { title, image, _id, synopsis, watched, trailer } = this.props.comedy;
        return (
            <Default>
            <div>
                <h1>{title}</h1>
                <img src={image}></img>
                <h2>Synopsis:</h2>
                <p>{synopsis}</p>                
                <iframe width="960" height="540" src={`${trailer}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>{watched ? `You've watched this movie` : `You still need to watch this movie`}</p>
                <a href={`/comedies/${_id}/edit`}>Edit</a>
            </div>
            </Default>
        )
    }
}

module.exports = Show;