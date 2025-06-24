import React from 'react'

interface ImageProps {
  src: string
  alt?: string
  width?: number | string
  height?: number | string
}

const Image: React.FC<ImageProps> = ({ src, alt = '', width, height}) => {
  return (
    <img src={src} alt={alt} width={width} height={height} />
  )
}

export default Image