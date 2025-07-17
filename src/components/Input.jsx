import React from 'react'
import { useId } from 'react'

const Input =React.forwardRef( function Input({
    label,
    placeholder,
    classname="",
    type="text",
    ...props
},ref) {
    const id=useId()
  return (<div class="form-floating mb-3">

    {label && <label
        htmlFor={id}
        >
        {label}
        </label>}
        <Input
        type={type}
        id={id}
        classname={`${classname}`}
        placeholder={placeholder}
        ref={ref}
        {...props}
        />
  </div>
  )
}
)
export default Input
