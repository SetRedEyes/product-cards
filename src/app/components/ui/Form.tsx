import React, { useEffect, useState } from 'react'
import { validator } from '../../utils/validator'
import TextField from './textField'

const Form = () => {
  const [data, setData] = useState({ username: '', phone: '' })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleChange = (target: { name: string; value: string }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  const validatorConfig = {
    username: {
      isRequired: { message: 'This field in required' },
      onlyLetters: { message: 'Only letters allowed' }
    },
    phone: {
      isRequired: { message: 'This field in required' },
      min: {
        message: 'Should contain 12 characters',
        value: 8
      },
      onlyNumbers: { message: 'Only numbers allowed' }
    }
  }

  // useEffect(() => {
  //   validate()
  // }, [data])

  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    console.log('DATA', data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={data.username}
        name='username'
        placeholder='Name'
        onChange={handleChange}
        error={errors.username}
      />
      <TextField
        value={data.phone}
        name='phone'
        placeholder='Number'
        onChange={handleChange}
        error={errors.phone}
      />

      <button className='modal-card__order-button' type='submit'>
        ORDER
      </button>
    </form>
  )
}

export default Form
