# Angular HackerClone Source

To create this project I used angular quickstart [angular.io quickstart](https://angular.io/docs/ts/latest/quickstart.html) as boilerplate code and extended that to current project

## Prerequisites

Node.js and npm are essential to Angular development. 
    
## Create a new project based on the QuickStart

Clone this repo into new project folder (e.g., `my-hacker`).
```shell
git clone https://github.com/Abby3017/HackerClone  my-hacker
cd my-hacker
```
## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

>Doesn't work in _Bash for Windows_ which does not support servers as of January, 2017.

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.


## Current Version
This application will display a navbar and list of news from Hackenews using its official api 
![alt text] https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty 

Here pager service is used to display the hackernews in 30 news page list.
![alt text] (https://github.com/Abby3017/HackerClone/blob/pagination/img/Screenshot%20from%202017-06-19%2009:47:50.png)
