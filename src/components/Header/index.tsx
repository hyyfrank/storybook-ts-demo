import React, { FC } from 'react'
import HeaderProps from './HeaderProps.interface'
const CommonHeader: FC<HeaderProps> = ({ desc="My desc" }) => {
     return (
         <div style={{backgroundColor: 'lightblue'}}>
             {desc}
         </div>
     )
}
export default CommonHeader