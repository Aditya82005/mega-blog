import React from 'react'

function Button({
    children,
    Type="text", 
    className="",
    ...props          
}) {
  return (
    <button className={`btn ${className}`} type={`${Type}`} {...props}>
        {children}
    </button>
  )
}

export default Button
