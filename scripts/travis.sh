#!/bin/bash

set -e

yarn test --watch=false
yarn e2e
yarn lint

exit 0
