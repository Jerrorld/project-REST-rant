const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src='/images/goodeats-yqr-DRZHzm-uAaM-unsplash.jpg' alt='bowl of noodles' width="80%"></img>
                    <div>
                    Photo by <a href="https://unsplash.com/@goodeats_yqr?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">GoodEats YQR</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
  <button className="btn btn-primary">Places Page</button>
  </a>
            </main>
        </Def>
    )
}

module.exports = home