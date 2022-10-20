const React = require('react')

Default((html) => {
return (
   
    
        <html>
          <head>
            <title>Default</title>
          </head>
          <body>
            <h1>HTML Rendered!</h1>
            <div className="container">
                {html.children}
            </div>
          </body>
        </html>
      )

})

module.exports = Default