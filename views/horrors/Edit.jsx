const React = require('react');
const Default = require('../components/Default');

class Edit extends React.Component {
    render() {
        const { _id, title, image, watched, trailer, synopsis} = this.props.horror;
        return (
            <Default>
            <br/>
            <h1 className="new-h1 d-flex justify-content-center">Edit Horror</h1>
            <div className="new-container d-flex justify-content-center align-items-center">
            
         <div className="col-7">
            <form className="whole-form" action={`/horrors/${_id}?_method=PUT`} method="post">

            <div className="form-group"> 
              <label for="title" >Title</label> 
                <input className="form-control" type="text" name="title" defaultValue={title}/>
                </div> 

                <div className="form-group">
                  <label for="image">Image</label>          
                  <input className="form-control"  type="text" name="image" defaultValue={image} />
                </div> 

                <div className="form-group"> 
                <label for="trailer">Trailer</label>              
                <input className="form-control"  type="text" name="trailer" defaultValue={trailer}/>
                </div>

                <div className="form-group"> 
                <label for="synopsis">Synopsis</label> 
                <textarea className="form-control"  type="text" name="synopsis" rows="10" cols="35" defaultValue={synopsis}/>
                </div>

                <div classname="form-group">
                <input className="form-check-input" type="checkbox" name="watched" checked={watched}/>
                <label className="form-check-label" 
                for="watched">Watched</label>
                </div>
                 
                <div className="form-group d-flex justify-content-end">       
                <input className="btn btn-primary" type="submit" name="" value="Update Horror"/>
                </div>
                
             </form>
             </div>
             </div>
        </Default>
        )
    }
}

module.exports = Edit;