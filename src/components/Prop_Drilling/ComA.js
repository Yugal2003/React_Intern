// prop drilling

import React from 'react'
import ComB from './ComB'

const ComA = ({name,age}) => {
  return (
    <div>
        {/* <ComB name={name} age={age}/> */}
        <ComB/>
    </div>
  )
}

export default ComA