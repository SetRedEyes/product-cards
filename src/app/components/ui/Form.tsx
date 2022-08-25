import { useEffect, useState } from 'react'
import { validator } from '../../utils/validator'
import TextField from './textField'
interface FormProps {
  isOpen: boolean
}

const Form = ({ isOpen}: FormProps) => {
  const [username, setUsername] = useState('')
  const [phone, setPhone] = useState('')
  const [usernameErrors, setUsernameErrors] = useState('')
  const [phoneErrors, setPhoneErrors] = useState('')

  useEffect(() => {
    clearForm()
  }, [isOpen])

  const usernameHandleChange = (value: string) => {
    setUsernameErrors('')
    setUsername(value)
  }

  const phoneHandleChange = (value: string) => {
    setPhoneErrors('')
    setPhone(value)
  }

  const clearForm = () => {
    setUsername('')
    setPhone('')
    setPhoneErrors('')
    setUsernameErrors('')
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

  const validateUsername = () => {
    const errors = validator({ username }, validatorConfig)
    setUsernameErrors(errors.username)
    return Object.keys(errors).length === 0
  }

  const validatePhone = () => {
    const errors = validator({ phone }, validatorConfig)
    setPhoneErrors(errors.phone)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isValidPhone = validatePhone()
    const isValidUsername = validateUsername()
    if (!isValidPhone || !isValidUsername) return
    console.log('DATA', { username, phone })
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={username}
        name='username'
        placeholder='Name'
        onChange={usernameHandleChange}
        error={usernameErrors}
        onBlur={validateUsername}
      />
      <TextField
        value={phone}
        name='phone'
        placeholder='Number'
        onChange={phoneHandleChange}
        error={phoneErrors}
        onBlur={validatePhone}
      />

      <button className='modal-card__order-button' type='submit'>
        ORDER
      </button>
    </form>
  )
}

export default Form
