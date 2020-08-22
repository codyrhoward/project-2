const React = require('react');

class Edit extends React.Component {
    render() {
        const { _id, title, image, watched} = this.props.drama;
        return (
            <div>
                <h1>Edit Page</h1>
                {/* url - /dramas/id_of_drama? parameter to indicate the request */}
                <form action={`/dramas/${_id}?_method=PUT`} method="POST">
                    Title: <input type="text" name="title" defaultValue={title}/> <br/>
                    Image: <input type="text" name="image" defaultValue={image}/> <br/>
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