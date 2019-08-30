import React from 'react'
import { observer } from 'mobx-react'
import { func, bool } from 'prop-types'

// You want these to be as visible as possible
EntryBox.propTypes = {
  onSubmit: func.isRequired,
  expanded: bool,
  onExpand: func.isRequired
}

// destro props and use default args in setting defaultProps
function EntryBox({ onEntry, entered = false, children, onSubmit }) {
  const formStyle = entered ? { display:"none" } : { display:"flex" }
  return (
    <form style={formStyle} onSubmit={onSubmit}>
      {children}
      <button onClick={onEntry}>Enter</button>
    </form>
  )
}

// observer Wrap not decorate @observer
export default observer(EntryBox)
