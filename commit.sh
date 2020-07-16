#commit, merge, push changes from dev
printf "\n====================== stage changes =============================\n"
git add .
printf "\n====================== commit changes ============================\n"
git commit -m "$1" && printf "commit with $1"
printf "\n=================== merged master to dev =========================\n"
git checkout master && git merge dev
printf "\n====================== merged changes ============================\n"
git push
printf "\n====================== pushed changes ============================\n"
git checkout dev
printf "\n\nAll Done!!\n\n"