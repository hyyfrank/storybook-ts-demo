import React from 'react'
import CommonHeader from './index'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
     desc: 'Component',
     component: CommonHeader
 }
 
export const Header = () => (
     <CommonHeader desc="my header" />
)