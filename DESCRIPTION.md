### About This App
-------

The task is to implement a small webapp that will list the most starred Github repos that were created in the last 30 days. 
You'll be fetching the sorted JSON data directly from the Github API (Github API explained down below).

add link here...

### TODO Lists
-------

* [x] Setupt reactjs
* [x] Install dependencies
* [x] Landing Page
    * [x] Create a describe to the app, and how to use it.
    * [x] create buttotn that take you to the app page
* [ ] As a User I should be able to list the most starred Github repos that were created in the last 30 days.
    * [x] GET created repos in the last 30 days
    * [x] Return error if there is a bad request
    * [x] Return Loading whene user try to get request to the API
    * [x] make url like this /repos/last-30-days
    * [x] Create Repo Component
        * Owner name: login
        * Owner Avatar: avatar_url
        * Repo Name: name
        * Repo Description: description
        * Number Of Stars: stargazers_count
        * Number Of Issues: open_issues_count
        * Last Submit: pushed_at
* [x] As a User I should see the results as a list. One repository per row. 
* [x] As a User I should be able to see for each repo/row the following details :
  * [x] Repository name
  * [x] Repository description 
  * [x] Number of stars for the repo. 
  * [x] Number of issues for the repo.
  * [x] Username and avatar of the owner. 
* [x] As a User I should be able to keep scrolling and new results should appear (pagination).
    * [x] Create pagination component
* [x] Check for bad request error or connection error
* [x] Create Footer
* [x] Review css code
* [x] Check if there is react error in the console
* [x] Design 404 page
* [x] Create favicon 
* [ ] Deploy the App
* [x] Setup eslint
* [ ] Add test to each component

### About The Folder Of The Project
-------

* [x] public
    * All assets folder: css, js, html
* [x] src
   * [x] components
        * [x] BadRequest.js
            *  Component render message for error request
        * [x] CustomLink.js
            * Component render all links in the App
        * [x] Header.js
            * Component render the header for the App
        * [x] Pages.js
            * Component render the pagination
        * [x] Repo
            * Component render repo item with the info
   * [x] helpers
        * [x] index.js
            * Contain helpers function, and the app logic
   * [x] views
        * [x] Home.js
            * Landing Page
        * [x] PageNotFound.js
            * Render 404 bad request
        * [x] Repos.js
            * Render all repo
* [x] App.js
    * Contain all Routers about using in the App
* [x] App.test.js
    * Test App component using jest
* [x] index.js
    * Conatin main App
* [x] Routers.js
    * Component render all routers using react-router-dom
* [x] setupTests.js
    * run the test, using command yarn test
* [x] App.css
    * Contain all css style

### Github API
-------

## How To Get The Data From Github 
-------

To get the most starred Github repos created in the last 30 days (relative to 2017-11-22), you'll need to call the following endpoint : 

`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc`

The JSON data from Github will be paginated (you'll receive around 100 repos per JSON page). 

To get the 2nd page, you add `&page=2` to the end of your API request : 

`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=2`

To get the 3rd page, you add `&page=3` ... etc

You can read more about the Github API over [here](https://developer.github.com/v3/search/#search-repositories
).

### Mockups
-------

![alt text](https://raw.githubusercontent.com/hiddenfounders/frontend-coding-challenge/master/mockup.png)

Here's what each element represents :

![alt text](https://raw.githubusercontent.com/hiddenfounders/frontend-coding-challenge/master/row_explained.png)

### Screen Shots
-------

### Technologies To Use
-------

* Reactjs
* reactstrap for CSS styling
* axios for fetching data

### Deployment
-------

* [ ] Deploy project on netlify
* [ ] push project on github
* [ ] Set the Repo privacy:
   * If the repo is sensitive and you're not comfortable sharing it publicly please give access to this username: [salimbraksa](https://github.com/salimbraksa).
   * If it's public go to the next step
* [ ] Send the repo's link to this email: `careers@gemography.com`.

### TIME SPEND ON APP
-----

* 3 days

### Level Of Defficulties For Me
-----

* Easy
