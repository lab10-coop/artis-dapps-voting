# ARTIS Network Voting Dapp

The voting Dapp is a core tool for the ARTIS governance.  
It's a web interface which allows trustnode operators to create proposals (as _ballots_) and cast votes for or against proposals.  
Such proposals can cover a range of core parameters of the chain/protocol (e.g. adding or removing of trustnodes, use of co-owned funds, confirmations of trustnode metadata change, etc.) which can through this on-chain-mechanism be updated in a well defined and transparent way.

The Dapp directly interacts with the [governance contracts](https://github.com/lab10-coop/artis-network-consensus-contracts) of the ARTIS network connected via web3 interface (no server backend involved).

For more details about the voting process, check this resources: 
* [Governance Overview](https://github.com/poanetwork/wiki/wiki/Governance-Overview)
* [Ballots life cycle](https://github.com/poanetwork/wiki/wiki/Ballots-Overview.-Life-cycle-and-limits)

## Supported browsers

Chrome/Chromium v59+ or Brave v0.58+ with MetaMask   
(in principle it should work in any modern browser with web3 API, but this is the tested and recommended configuration)

## MetaMask setup

The recommended way to connect to an ARTIS network is via the [MetaMask browser plugin](http://metamask.io/).  
In order to set up MetaMask for ARTIS, follow the [instructions for tau1](https://github.com/lab10-coop/tau1#use-with-metamask) or [instructions for sigma1](https://github.com/lab10-coop/sigma1#use-with-metamask)).

## Building from source

Requires nodejs v8.

1) `npm ci`   
2) `npm start`
