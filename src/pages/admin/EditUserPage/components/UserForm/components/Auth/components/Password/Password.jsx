import React from 'react'
import { Input } from 'components'
import { EditUserContext } from 'core/context'
import { generatePassword } from 'core/utils'
import { useErrors } from 'hooks'

export default function Password() {
  const {
    error: { errors },
    setData,
    id,
  } = React.useContext(EditUserContext)

  const [password, setPassword] = React.useState('')
  const [repeatPassword, setRepeatPassword] = React.useState('')

  const error = useErrors(errors, 'password')
  const repeatError = useErrors(errors, 'repeatPassword')

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        password,
        repeatPassword,
      }
    })
  }, [password, repeatPassword])

  function handleGeneratePassword() {
    const password = generatePassword()

    setPassword(password)
    setRepeatPassword(password)
  }

  return (
    <React.Fragment>
      <Input
        type="text"
        label={id ? 'Новый пароль' : 'Пароль'}
        action={{
          text: 'Сгенерировать пароль',
          onClick: handleGeneratePassword,
        }}
        error={error}
        value={password}
        onInput={setPassword}
        className="col col-6"
      />
      <Input
        type="text"
        label="Повторите пароль"
        error={repeatError}
        value={repeatPassword}
        onInput={setRepeatPassword}
        className="col col-6"
      />
    </React.Fragment>
  )
}