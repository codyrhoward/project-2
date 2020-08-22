const React = require('react')

class Index extends React.Component{
    render(){
        // const dramas = this.props.dramas;
        // OR obj desctructuring:
        const {dramas} = this.props
        return (
            <>
            <h1>Drama Index Page</h1>
            <a href={'/dramas/new'}>Add New Drama</a>
            {dramas.map((drama)=>{// the '?' doesnt return undefinded if no data in db
                return(
                  
                    <div key={drama._id}>
                       
                        <p>{drama.name}</p>
                        {drama.isGreen ? `it is green`:`it is not green`}<br/>
                        <a href={`/dramas/${drama._id}`}>check it out!</a>
                        <form action={`/dramas/${drama._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="delete"/>
                        </form>
                    </div>
                  )
            })}
            </>
        )
    }
}


module.exports = Index