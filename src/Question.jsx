import React, { useState } from 'react'

const Question = ({lucky}) => {
    

    const [state,setState] = useState(false)
  return (
    <section>
        <div className= {state?"open" :"closed"}>
            <h4>
                {
                    lucky.title
                }
            </h4>
            <button onClick={()=> setState(!state)}> { state ? "-" : "+"}</button>
            
        </div>
        {state && <p>{lucky.info}</p>}
    </section>
  )
}

export default Question