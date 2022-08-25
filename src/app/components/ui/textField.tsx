import React from 'react'

interface TextFieldProps {
  value: string
  name: string
  placeholder: string
  error?: string
  onChange: (value:string) => void
  onBlur:()=>void
}

const TextField = ({
  value,
  name,
  placeholder,
  error,
  onBlur,
  onChange
}: TextFieldProps) => {
  const getInputClasses = () => {
    return 'modal-card__input' + (error ? ' is-invalid' : '')
  }

  return (
    <div>
      <input
        value={value}
        className={getInputClasses()}
        placeholder={placeholder}
        type='text'
        name={name}
        onChange={(e) =>
          onChange( e.target.value )
        }
        onBlur={onBlur}
      />
      {error && <div className='error-message'>{error}</div>}
    </div>
  )
}

export default TextField
