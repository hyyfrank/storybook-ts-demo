import React, { FC } from 'react'
import FooterProps from './FooterProps.interface'
const FooterHeader: FC<FooterProps> = ({ desc="My desc" }) => {
     return (
         <div style={{backgroundColor: 'lightblue'}}>
             {desc}
         </div>
     )
}
export default FooterHeader