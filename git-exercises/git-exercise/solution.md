# Git Tasks
1. Used 
git config --global core.editor "code --wait"

to configure VSCode as the editor.


# Git Exercises

1.  I created a new branch "solutions-git-exercise" in my repository and switched to the created branch for commits using:
  git branch solutions-git-exercise 
  git checkout solutions-git-exercise
created a sample-gitexercise.txt file in challenges-batch07-lakshmiprabhat folder and committed it using the following commands:
   git add sample-gitexercise.txt
   git commit -m "initially create a sample text file"
   And pushed the branch to the remote repository using:
   git push --set-upstream solutions-git-exercise

 And then was able to see the objects with commit ids with the help of command:  
   cd .git/objects   


2. Inspected the object with :

git cat-file -t 57c2
git cat-file -p 57c2

3. Used `git ls-files -s` to view the content of staging area. my commit was listed in the staging.

4. Use `git reset` to undo the staging of your file.
5. Stashed my changes with :  
 git stash save "Work in Progress: new text added"
 git stash list
 Unstashed with :  git stash pop

6. Created a lightweight tag using the below commands and verified the commit id:   
   git show-ref --heads
   git tag "tag-1.0-solutions-git-exercise"
   git log
   git checkout tag-1.0-solutions-git-exercise
7. Created an annotated tag using:

   git tag -a "tag-1.1-solutions-git-exercise" -m "Annotated tag for solutions-git-exercise"
   git show tag-1.1-solutions-git-exercise

And pushed my tags to the remote repository using:
 git push --tags

8. Tried git revert command to revert the commit changes. 
 
9. Used various options in git log to see the filtered history of repository.

  git log --since ="1 hour ago"

11.  Tried Following command and got the SHA key b565616822fbce5389152fa905b240d1cea7e4d9
 echo 'Hello, World!' | git hash-object --stdin
 Got the blob 5ad1cb82b3edb9d3ef1ae227745c90bcd23d2120
 echo 'blob 14\0Hello, World!' | openssl sha1

