import { State } from "./IState"

export function validator(data: State, config: any) {
  const errors: State = {}

  function validate(validateMethod: string, data: string, config: any) {
    let statusValidate
    switch (validateMethod) {
      case 'isRequired': {
        if (typeof data === 'boolean') {
          statusValidate = !data
        } else {
          statusValidate = data.trim() === ''
        }
        break
      }

      case 'min': {
        statusValidate = data.length < config.value
        break
      }

      case 'onlyNumbers': {
        const numbersRegExp = /^[0-9]+$/
        statusValidate = !numbersRegExp.test(data)
        break
      }
      case 'onlyLetters': {
        const lettersRegExp =/^[A-Za-z]+$/
        statusValidate = !lettersRegExp.test(data)
        break
      }
   
      default:
        break
    }

    if (statusValidate) return config.message
  }

  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      )

      if (error && !errors[fieldName]) {
        errors[fieldName] = error
      }
    }
  }
  return errors
}
