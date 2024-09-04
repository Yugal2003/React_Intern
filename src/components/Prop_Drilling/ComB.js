// prop drilling

import React from 'react'
import ComC from './ComC'

const ComB = ({name,age}) => {
  return (
    <div>
        {/* <ComC name={name} age={age}/> */}
        <ComC/>
    </div>
  )
}

export default ComB