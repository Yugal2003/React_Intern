// prop drilling

import React, { useContext } from 'react'
import { fname,currage} from '../../App'

const ComC = () => {
    const name = useContext(fname);
    const age = useContext(currage);

  return (
    <div>
        {/* <h1>My name is {name} & age is {age}</h1> */}

        {/* <fname.Consumer>{
            (fname) => {
                return(
                    <currage.Consumer>{
                        (currage) =>{
                            return(
                                <h1>My name is {fname} and age is {currage}</h1>
                            )
                        }}</currage.Consumer>
                )
            }}
        </fname.Consumer> */}

        <h1>My name is {name} & age is {age}</h1>
    </div>
  )
}

export default ComC