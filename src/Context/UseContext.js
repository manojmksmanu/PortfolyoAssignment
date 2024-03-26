import React, { useContext } from 'react'
import { CreateContext } from './ContextProvider'
const UseContext = () => {
    return useContext(CreateContext)
}

export default UseContext