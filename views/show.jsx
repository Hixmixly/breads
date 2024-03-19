const React = require('react')
const Default = require ('./layouts/default')

function Show ({bread}) {
    //confirm were getting our bread data in the terminal
    //console.log(bread.name)
    console.log(bread.name)
    return (
        <Default>
            <h2>Show Page</h2>
            <h3>{bread.name}</h3>
            <p>
                and import 
                {  
                    bread.hasGluten
                    ? <span> does</span>
                    : <span>does not</span>
                
                } have gluten.

            </p>
            <img src={bread.image} alt={bread.name}/>
            <li><a href="/breads">Go Home</a> </li>
        </Default>
    )
}

module.exports = Show