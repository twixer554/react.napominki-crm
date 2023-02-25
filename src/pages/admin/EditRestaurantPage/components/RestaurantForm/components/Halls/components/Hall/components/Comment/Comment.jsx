import React from 'react'
import { AdminForm, Textarea } from 'components'

export default function Comment({ text, setHalls, index }) {
  function handleInput(value) {
    setHalls((prev) =>
      prev.map((hall, i) => {
        if (index === i) {
          hall.comment = value
        }

        return hall
      })
    )
  }

  return (
    <AdminForm.Group title="Комментарий">
      <Textarea
        value={text}
        onInput={(value) => handleInput(value)}
        className="col col-12"
      />
    </AdminForm.Group>
  )
}