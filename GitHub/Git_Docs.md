                                                                         GIT-HUB
          
YOUR CONFIG SETTINGS

git config - -global user.email ‘your-email-id’
git config - -global user.name ‘username’

CHECK CONFIG SETTINGS

git config - -list  


CREATE REPOSITORY
git status
git init

ADD FILES AT STAGING

git add .  // add all files
git add file1.txt file2.txt // Add Specific Files

Unadd Files At Staging:
git rm - -cached <filename> to unstage 

Git Commit all File:
git commit -m ‘commit message’
git status

Git log In one Line:
git log - -oneline

Git gitignore or gitkeep
.gitignore  // ignore files
create folder → .gitkeep // ignore empty Directory



BRANCHES : Think of a Git branch like a separate copy of your project where you can make changes without messing up the main version.

🧠 Why use branches?
Let’s say you’re working on a website. The website is live and working. Now, you want to try a new design.
    • You create a branch called new-design.
    • You make changes in new-design.
    • If everything looks good, you merge it back into the main version (usually called main or master).
    • If it doesn’t work, you can just delete the branch, and your main project stays safe.


CHECK BRANCHE
git branch


CREATE BRANCHE
git branch branch_name

CHANGE BRANCHE
git switch branch_name  // where head point the branch we want
git checkout branch_name

git switch -c branch_name // create and directly switch to that mode


MERGINIG FAST FORWARD 
git check	out master branch
git merge branchname



RENAME BRANCHES
git branch -m old_branch_name new_branch_name


DELETE BRANCHES
git branch -m branch_name


GIT DIFF , STASH AND TAGS

git diff : Shows the Comprasion between two commands and stage

1. a -> file A and file B -> file B
2. ---- indicates the file A
3. +++ indicates the file B
4. @@ indicates the line number

DIFF USING WITH STAGING
git diff branch_name_one branch_name_two

DIFF USING WITH TWO COMMITS
git log --oneline
git diff  59980bc..afec329


STASH:
git stash: Change between Branches without commit changes

NAMING THE STASH:
git stash save 'any name as you prefer'

STASH LIST:
git stash list

STASH APPLY OR ANY SPECIFIC STASH:
git stash apply
git stash apply stash{0}


STASH APPLY AND DROP AT THE SAME TIME:
git stash pop
git stash drop


STASH APPLY TO A SPECIFIC BRANCHE:
git stash apply stash{0} branch_name


CLEAR THE STASH:
git stash clear 


GIT TAGS: Rearly use
git tag 'smalltext'
git tag -a 'largetext' -m 'release ver'

TAGGING A SPECIFIC COMMIT:
git log --oneline
git tag  tagname commit-hash
git tag release_ver 75846

PUSH TAGS TO REMOTE REPOSITORY
git push origin tagname

DELETE TAG
git tag -d tagname
git push origin :tagname

PUSHING SETUP IN GITHUB:

git remote add origin https://github.com/akashworkprofile2024/githubthree.git

git push -u origin branchname

CHECK REMOTE LOCATION ATTACH OR NOT:
git remote -v  
show fetch , push

PUSHING AN EXISTING REPOSITORY
git push -u origin main

PUSHING UPSTREAM:
    git push --set-upstream origin branchname

AFTER MODIFICATION ANY FILE:    
git push 

