import React from 'react'
import { officalIcons } from '../Assetspath'

export default function Footer() {
    const iconsStyling = {
        width: '60px',
        height: '40px'
    }
    return (
        <div className='container'>
            <h4 className='text-start'>Have a project idea? Reach out to me and let's work together!</h4>
            <div className="row">
                {
                    officalIcons.map(({ icon_name, path }, index) => {
                        return (
                            <img src={path} alt={icon_name} style={iconsStyling} key={index} />
                        )
                    })
                }

            </div>

        </div>
    )
}
