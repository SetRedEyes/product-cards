import React from 'react'

interface TextFieldProps {
  value: string
  name: string
  placeholder: string
  error?: string
  onChange: (param1: { name: string; value: string }) => void
}

const TextField = ({
  value,
  name,
  placeholder,
  error,
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
          onChange({ name: e.target.name, value: e.target.value })
        }
      />
      {error && <div className='error-message'>{error}</div>}
    </div>
  )
}

export default TextField
