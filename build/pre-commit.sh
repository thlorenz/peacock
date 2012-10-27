#!/bin/sh

# Run: 
# ln -s ../../build/pre-commit.sh .git/hooks/pre-commit 
# from the root of this project in order to activate the pre-commit hook.

# 0. Prepare commit by running build and adding the result to this commit
npm run build
git add peacock-browser.js

# 1. Ensure that code not part of prospective commit is not tested during pre-commit script
git stash -q --keep-index

# 2. Test prospective commit

npm test
RESULT=$?

# 3. Restore what we stashed in step 1
git stash pop -q

[ $RESULT -ne 0 ] && exit 1
exit 0
