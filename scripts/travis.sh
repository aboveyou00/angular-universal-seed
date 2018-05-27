#!/bin/bash

set -e

yarn test --watch=false
yarn lint

exit 0
