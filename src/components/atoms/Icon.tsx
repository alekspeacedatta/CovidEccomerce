import React from 'react'

interface IconProps {
  iconClass: string
}

const Icon: React.FC<IconProps> = ({ iconClass }) => {
  return <i className={iconClass}></i>
}

export default Icon
