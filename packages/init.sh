#!/bin/bash

for i in components core docs hooks theme utils; do
    # shellcheck disable=SC2164
    mkdir $i && cd $i
    pnpm init
    cd ..
done