import React from 'react'
import { inject, observer } from 'mobx-react'
import { constants } from '../constants'

@inject('validatorStore', 'ballotStore')
@observer
export class Validator extends React.Component {
  componentDidMount() {
    this.props.ballotStore.ballotKeys.miningKey = constants.NEW_MINING_KEY
  }

  componentWillUnmount() {
    const { ballotStore } = this.props
    if (JSON.stringify(ballotStore.ballotKeys.miningKey) === JSON.stringify(constants.NEW_MINING_KEY)) {
      ballotStore.ballotKeys.miningKey = ''
    }
  }

  render() {
    return <div />
  }
}
