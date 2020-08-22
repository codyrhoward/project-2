const React = require('react');

class Show extends React.Component {
    render() {
        // const name = this.props.drama.name;
        // const image = this.props.drama.image;
        // const watched = this.props.drama.watched;
        // destructuring
        const { name, image, watched } = this.props.drama;
        return (
            <div>
                <h1>Drama Show Page</h1>
                <p>{name}</p> 
                <p>{image}</p>
                <p>{watched ? `It is watched` : `Is not watched`}</p>
            </div>
        )
    }
}

module.exports = Show;