const React = require('react');

class Show extends React.Component {
    render() {
        // const name = this.props.comedy.name;
        // const image = this.props.comedy.image;
        // const watched = this.props.comedy.watched;
        // destructuring
        const { name, image, watched } = this.props.comedy;
        return (
            <div>
                <h1>Comedies Show Page</h1>
                <p>{name}</p> 
                <p>{image}</p>
                <p>{watched ? `It is watched` : `Is not watched`}</p>
            </div>
        )
    }
}

module.exports = Show;