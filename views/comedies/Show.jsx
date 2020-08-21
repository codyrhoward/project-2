const React = require('react');

class Show extends React.Component {
    render() {
        // const name = this.props.comedy.name;
        // const color = this.props.comedy.color;
        // const readyToEat = this.props.comedy.readyToEat;
        // destructuring
        const { name, color, readyToEat } = this.props.comedy;
        return (
            <div>
                <h1>Comedies Show Page</h1>
                <p>The {name} is {color} </p>
                <p>{readyToEat ? `It is ready to eat` : `Is not ready to eat`}</p>
            </div>
        )
    }
}

module.exports = Show;