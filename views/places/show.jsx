const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <img src={data.place.pic} alt="restaurant"></img>
            <div>
                <h2>Rating</h2>
                {/* add rating */}
                <p>currently unrated</p>
            </div>
            <h2>Description</h2>
            <p>Located in {data.place.city}, {data.place.state}<br></br>
            Serving {data.place.cuisines}</p>

            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit
            </a> 
            <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                <button type='submit' className='btn btn-danger'>
                    Delete
                </button>
            </form>


            {/* Comments */}
            <br/>
            <h2>Comments</h2>
            
          </main>
        </Def>
    )
}

module.exports = show
