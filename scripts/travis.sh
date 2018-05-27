#!/bin/bash

set -e

TRAVIS=true yarn test --watch=false
TRAVIS=true yarn e2e
TRAVIS=true yarn lint

exit 0
