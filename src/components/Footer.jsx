import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import Socials from './Socials.jsx'
import { constants } from '../constants'

export const Footer = ({ netId }) => {
  const footerClassName = netId in constants.NETWORKS && constants.NETWORKS[netId].TESTNET ? 'sokol' : ''

  return <footer />
}
