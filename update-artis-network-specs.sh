#!/bin/sh

cd ./public/networks

rm -r sigma1;
rm -r tau1;

git clone git@code.lab10.io:graz/04-artis/poa/poa-chain-spec.git sigma1 -b sigma1 
git clone git@code.lab10.io:graz/04-artis/poa/poa-chain-spec.git tau1 -b tau1

#remove GIT repo, so git does not see it as git repositories.

rm -rf ./sigma1/.git
rm -rf ./tau1/.git