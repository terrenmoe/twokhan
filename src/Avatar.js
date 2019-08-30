import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { string, object } from 'prop-types'
// Separate local imports from dependencies
import EntryBox from './EntryBox'

// Use decorators if needed
@observer
class Avatar extends Component {
  state = { entered: false }
  // Initialize state here (ES7) or in a constructor method (ES6)

  // Declare propTypes as static properties as early as possible
  static propTypes = {
    model: object.isRequired,
    title: string
  }

  // Default props below propTypes
  static defaultProps = {
    model: {
      id: 0
    },
    title: 'Your Name'
  }

  // Use fat arrows
  // (this will thus be the component instance)
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.model.save()
  }

  handleNameChange = (e) => {
    this.props.model.name = e.target.value
  }

  handleEntry = (e) => {
    e.preventDefault()
    this.setState(prevState => ({ entered: !prevState.entered }))
  }

  render() {
    // Destructure props for readability
    const {
      model,
      title
    } = this.props
    return (
      <EntryBox
        onSubmit={this.handleSubmit}
        entered={this.state.entered}
        onEntry={this.handleEntry}>
        <div>
          <h1>{title}</h1>
          <input
            type="text"
            value={model.name}
            onChange={this.handleNameChange}
            placeholder="Your Name"/>
        </div>
      </EntryBox>
    )
  }
}
export default Avatar
