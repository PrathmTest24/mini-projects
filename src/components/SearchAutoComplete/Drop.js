import React from 'react'

export const Drop = ({ data, handleClick }) => {
    return (
        <>
            <ul>
                {
                    data.map((item, index) => (
                        <li onClick={handleClick} key={index}>
                            {item}

                        </li>

                    ))


                }
            </ul>
        </>
    )
}
