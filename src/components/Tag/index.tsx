import React, { FC } from 'react'
import TagProps from './TagProps.interface'
const TagComponent: FC<TagProps> = ({ title="My title" }) => {
     return (
         <div style={{backgroundColor: 'lightblue'}}>
             {title}
         </div>
     )
}
export default TagComponent