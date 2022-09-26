const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div className='row'>
                <div className='col-sm-6'>
                    <img src={data.place.pic} alt={data.place.name} width="40%"></img>
                        <h3>Located in {data.place.city}, {data.place.state}</h3>
                </div>
                <div className='col-sm-6'>
                    <h1>{data.place.name}</h1>
                        <h2>Rating</h2>
                            <p>Not Rated</p>
                        <h2>Description</h2>
                            <p>{data.place.showEstablished()}<br></br>
                            Serving {data.place.cuisines}</p>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                    Edit
                </a> 
                <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                    <button type='submit' className='btn btn-danger'>
                        Delete
                    </button>
                </form>
                </div>
                {/* Comments */}
                <br/>
                <h2>Comments</h2>
            </div>
          </main>
        </Def>
    )
}

module.exports = show
