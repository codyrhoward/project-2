const React = require('react');
const Default = require('../components/Default');

class Edit extends React.Component {
    render() {
        const { _id, title, image, watched, trailer, synopsis} = this.props.comedy;
        return (
            <Default>

            <div>
                <h1>Edit Page</h1>
                {/* url - /comedies/id_of_comedy? parameter to indicate the request */}
                <form action={`/comedies/${_id}?_method=PUT`} method="POST">
                    Title: <input type="text" name="title" defaultValue={title}/> <br/>
                    Image: <input type="text" name="image" defaultValue={image}/> <br/>
                    Trailer: <input type="text" name="trailer" defaultValue={trailer}/><br/> 
                    Synopsis: <br/> 
                    <textarea type="text" name="synopsis" defaultValue={synopsis} rows="10" cols="35"/><br/>
                    Watched: 
                    <input type="checkbox" name="watched" checked={watched}/>
                    <br/>
                    <input type="submit" name="" value="Submit Changes"/>
                </form>
            </div>
            </Default>
        )
    }
}

module.exports = Edit;