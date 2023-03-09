import React from 'react'
import { AdminForm, Textarea } from 'components'
import { EditRestaurantContext } from 'core/context'
import { useInitial } from 'hooks'

export default function Comment() {
  const { initial } = React.useContext(EditRestaurantContext)

  const comment = useInitial(initial, 'managerInfo.comment', '')

  return (
    <AdminForm.Group title="Комментарий">
      <Textarea value={comment} className="col col-12" />
    </AdminForm.Group>
  )
}
