const React = require('react')
const comment = require('../../models/comment')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
          No comments yet!
        </h3>
      )
      if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
          return (
            <div className="border">
              <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
              <h4>{c.content}</h4>
              <h3>
                <stong>- {c.author}</stong>
              </h3>
              <h4>Rating: {c.stars}</h4>
            </div>
          )
        })
      }
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
                <hr/>
                <h2>Comments</h2>
                  {comments}
                <hr/>
                <h2> Got Something to say?</h2>
                <form action={`/places/${data.place.id}/comment`} method="POST">
                    <div className="form-group">
                      <label htmlFor="rant">Rant? </label>
                      <input type= "checkbox" id="rant" name="rant" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="content">Comment</label>
                      <input className="form-control" id="content" name="content" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="author">Your name</label>
                       <input className="form-control" id="author" name="author" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="stars">Star Rating (out of 5)</label>
                      <input className="form-control" type="range" step="0.5" min="1" max="5" id="stars" name="stars" />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Comment" />
                </form>
            </div>
          </main>
        </Def>
    )
}

module.exports = show