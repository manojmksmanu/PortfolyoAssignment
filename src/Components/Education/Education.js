import React, { useEffect, useState } from 'react'
import './Education.css'
import UseContext from '../../Context/UseContext'
import { FaLocationDot } from "react-icons/fa6";
const Education = () => {
    const data = UseContext();
    const [education, setEducation] = useState();
    useEffect(() => {
        data && setEducation(data.user.timeline.filter(item => item.forEducation === true))
    }, [data])
    return (
        <div className='education'>
            {
                data && education && education.map((e, index) => {
                    return (<div key={index}>
                        <h2>{e.company_name}</h2>
                        <h3>{e.jobTitle}</h3>
                        <h3 className='location'><FaLocationDot />{e.jobLocation}</h3>
                        <h3> {e.summary}</h3>

                        <ul className='bulletpoints'>
                            {
                                e.bulletPoints && e.bulletPoints.map((e, index) => {
                                    return <li key={index}>
                                        {`${e}`}
                                    </li>
                                })
                            }
                        </ul>

                        <div>
                        </div>
                    </div>)

                })
            }
        </div>
    )
}

export default Education