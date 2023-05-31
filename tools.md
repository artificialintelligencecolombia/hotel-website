# 30/05

## Computer file paths: Anything
- ../Img/jh.png
.Se utiliza para subir una carpeta y redirigirnos a la deseada.

- ./Img/hi.png
.Redireccion desde la misma carpeta o ubicacion.

# 29/05

## Header tags: HTML
.h1: one per page.
.h2: for mark up the main sections.
.h3:for markup the subsections of each section.


# 28/05

## Types of branches: Git
.master
.develop: the production.
.feature: new products on the online store.
.bugfix: bugfix before develop.
.release: test the website before release.

## Creating a new branch: Git
- git checkout -b newBranch



# 24/05 

## Code indentation
- select the code block + TAB

## Url insertion: md
- [Google](https://www.google.com/)



# 15/05

## Copyright symbol: HTML
- &copy

## Display the commits history: GIT
- git log --stat

## Selecting the whole code: VS Code
- ctrl + a

## Indentation of selected code block: VS Code
- ctrl + k -> ctrl + f 

## Command Palette: VS Code
- ctrl + shift + p



# 13/05

## Check logged GitHub account (name and email): VS Code
- git config user.name
- git config user.email

## Upload local repo to remote: GitHub
1. Create the repo in GitHub website and copy the URL.
2. The origin of local repo is linked with another URL for origin. So we have to remove the existing origin.
- git remote remove origin 
3. Upload the local repo to the remote repository;
- git remote add origin remote_repository_URL
- git push -u origin master  
