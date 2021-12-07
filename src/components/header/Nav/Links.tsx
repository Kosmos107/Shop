import React from 'react'

interface User {
    name:string
}

const Links = (props:User) => {
    return (
        <div>
            <a href="">{props.name}</a>
            <span>стрелка</span>
        </div>
    )
}

export default Links
