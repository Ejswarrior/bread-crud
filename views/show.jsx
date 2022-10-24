const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread, index, ingIndex}) {

      return (
        <Default>
        <h3>{bread.name}</h3>
        <p>
          and it
          {
            bread.hasGluten
            ? <span> does </span>
            : <span> does NOT </span>
          }
          have gluten.
        </p>
        <img src={bread.image} alt={bread.name} />
        <li>{bread.ingrediants}</li>
        <li><a href="/breads">Go home</a></li>
        <form action={"/breads/index?_method=DELETE"} method="post">
          <input type='submit' value='Delete'></input>
        </form>

        <a href={`/breads/${index}/edit`}><button>Edit</button></a>

      </Default>
      )
}
  

module.exports = Show
