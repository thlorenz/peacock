# Pre-Commit hook

Run:
```sh
ln -s ../../build/pre-commit.sh .git/hooks/pre-commit
```
after cloning/forking this repository to ensure that all tests are run before your changes are committed. 
If a test fails, the commit will be aborted.
