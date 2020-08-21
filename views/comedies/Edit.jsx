const React = require('react');

class Edit extends React.Component {
    render() {
        const { _id, name, image, watched} = this.props.comedy;
        return (
            <div>
                <h1>Edit Page</h1>
                {/* url - /comedies/id_of_comedy? parameter to indicate the request */}
                <form action={`/comedies/${_id}?_method=PUT`} method="POST">
                    Title: <input type="text" name="name" defaultValue={title}/> <br/>
                    Image: <input type="text" name="color" defaultValue={image}/> <br/>
                    Watched: 
                    <input type="checkbox" name="watched" checked={watched}/>
                    <br/>
                    <input type="submit" name="" value="Submit Changes"/>
                </form>
            </div>
        )
    }
}

module.exports = Edit;