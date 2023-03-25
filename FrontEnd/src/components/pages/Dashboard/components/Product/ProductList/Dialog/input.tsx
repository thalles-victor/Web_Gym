import React, { InputHTMLAttributes, useCallback } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  
}

export const RefInput = React.forwardRef<any, InputProps>(({ ...props }, ref) => {
  return (
    <div>
      <input ref={ref} {...props} />
    </div>
  )
})