#commit, merge, push changes from dev
git add .
git commit -m "$1" && echo "commit with $1"
git checkout master && git merge dev
echo "merged changes"
git push
echo "pushed changes"
git checkout dev