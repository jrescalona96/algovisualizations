#commit, merge, push changes from dev
git add .
printf "\n====================== stage changes =============================\n\n"
git status
printf "\n====================== committing changes ========================\n\n"
printf "commit with $1"
git commit -m "$1"
printf "\n=================== merged master to dev =========================\n\n"
git checkout master && git merge dev
printf "\n====================== merged changes ============================\n\n"
git push
printf "\n====================== pushed changes ============================\n\n"
git checkout dev
printf "\nAll Done!!\n\n"