import React from 'react'
import { inject, observer } from 'mobx-react'
import Select from 'react-select'
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'
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
    const { validatorStore } = this.props
    const inputProps = {
      value: validatorStore.address,
      onChange: e => validatorStore.changeValidatorMetadata(e, 'address'),
      id: 'address'
    }
    const AutocompleteItem = ({ formattedSuggestion }) => (
      <div className="custom-container">
        <strong>{formattedSuggestion.mainText}</strong> <small>{formattedSuggestion.secondaryText}</small>
      </div>
    )
    return (
      <div>
        <div className="hidden">
          <div className="left">
            <div className="form-el">
              <label htmlFor="full-name">Full Name</label>
              <input
                type="text"
                id="full-name"
                value={validatorStore.fullName}
                onChange={e => validatorStore.changeValidatorMetadata(e, 'fullName')}
              />
              <p className="hint">Proposed validator's full name. Example: Jefferson L. Flowers.</p>
            </div>
          </div>
          <div className="left">
            <div className="form-el">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                value={validatorStore.country}
                onChange={e => validatorStore.changeValidatorMetadata(e, 'country')}
              />
              <p className="hint">Country of (tax) residence. Example: Italy.</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    )
  }
}
