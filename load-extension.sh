#!/bin/bash

if [ -n "$(pidof chrome)" ]; then
    echo "Please close Chrome to start it with this script!"
    exit 1
fi

SCRIPT=$(readlink -f "$0")
SCRIPTPATH=$(dirname "$SCRIPT")

google-chrome --load-extension=$SCRIPTPATH http://www.transfertrail.com/
