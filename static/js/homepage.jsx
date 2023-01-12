'use strict';

function Homepage() {
  return (
    <div>
      <div>
        Welcome to <a href="/cards">Ballonicorn's Card Game!</a>
      </div>
      <div> 
        <img src= "/static/img/balloonicorn.jpg" />
      </div>
    </div>);
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
