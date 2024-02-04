import React from 'react'
import MyContext from './myContext';


function MyState(props) {
  const name = "Piyush Gupta"

  return (
    <MyContext.Provider value={{name}} >
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState