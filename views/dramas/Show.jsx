const React = require('react');
const Default = require('../components/Default');

class Show extends React.Component {
    render() {
        // const name = this.props.drama.name;
        // const image = this.props.drama.image;
        // const watched = this.props.drama.watched;
        // destructuring
        const { title, image, _id, synopsis, watched, trailer } = this.props.drama;
        return (
            <Default>
            <body className="drama-show">
        <div className="container my-container">
            <div className="row align-items-end">
                <div className="col my-col mt-5">
                    {/* <h1 className="align-items-center">{title}</h1> */}
                    <img className="w-75" src={image}/>
                    
                </div>
                <div className="col">
                    <h3>Synopsis:</h3>
                    <p>{synopsis}</p>
                    <p className="my-0 border p-1 rounded">{watched ? `You've watched this movie` : `You still need to watch this movie`}</p>
                    <a className="btn btn-primary my-3 d-flex justify-content-end text-align-center"href={`/dramas/${_id}/edit`}>Edit</a> 
                    <iframe width="540" height="400" src={`${trailer}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className="">
                <div className="">
                
                </div>
            </div> 
            <div>              
                
            </div>   
            </div>
            </body>
            </Default>
        )
    }
}

module.exports = Show;