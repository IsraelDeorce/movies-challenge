## Overview  
 
#### App link on Heroku: [https://shows-challenge.herokuapp.com/](https://shows-challenge.herokuapp.com/)  
  
This is a **WEB Application** that searches for tv shows/movies and displays them in an image catalog using their posters. Then, the user can click on a poster to view the show's details.  
  

The Application uses data from the open [TV MAZE API](https://www.tvmaze.com/api)  
  
You can access the [project's board](https://trello.com/b/Fat0VJV1/hp-movies-challenge) to see the issues, chores, and features related to the project development  
 
 
## Setup Instructions  
 
- To run this project, you will need to have Node.js installed:  
  
####  [https://nodejs.org](https://nodejs.org)  
  
- In the project directory, you can run:  
  
**`npm install`**: Installs necessary dependencies.
  
**`npm start`**: Opens a local server that runs the app in the development mode  .

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.  

The page will reload if you make edits.
  
You will also see any lint errors in the console.  
  
**`npm test`** : Launches the test runner in the interactive watch mode. 


## List of manually installed dependencies  
  
- [node-fetch](https://github.com/node-fetch/node-fetch): A light-weight module that brings `window.fetch` to Node.js  
  
- [enzyme](https://airbnb.io/enzyme/): Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output.  
  
- [fetch-mock](http://www.wheresrhys.co.uk/fetch-mock): Mock http requests made using node-fetch  


## Challenge Questions  
 
### How did you decide on the technical and architectural choices used as part of your solution?  

I based my architectural decisions based on the requirements that demanded a lightweight web application, personal experiences engineering web apps with React.js and having in mind that I only had 2 days to implement what was requested.  
  
Some decisions to highlight were:  

- I decided not to use Redux since it would add unnecessary complexity to an app that could easily handle the state using only [Hooks](https://reactjs.org/docs/hooks-intro.html)  
- The App was deployed to Heroku because it was a simple to do, and it supports automatically deploys with the Github tool  
- The javascript components were organized in well defined layers inside the **src** folder:  
	- **src**  
		- **components** - Components to be rendered in different situations depending on the state  
		- **pages** - Well defined pages that group more than one components (we only have the MainPage)  
		- **services** - Handles external services calls  
  
### Are there any improvements you could make to your submission?  

  - Add a controlled CI/CD pipeline that only accepts deployingment due to safety conditions
  - Start working with different branches and let master only to deploy safe versions that go to production
  - Some CSS and UX improvements:
	  - Disable the Search Bar input when the search is still fetching
	  - The show descriptions could be set to a fixed place and some animations could be added to make it render smoother
	  - The Search Bar could have a clickable icon that indicates it is used for searches intead of a long text
	  - Add something to give feedback to the user when a search does not return any show
	  - Add a better image placeholder when a shows does not have a poster
	  - Make it prettier in general terms

### What would you do differently if you had more time?

I would not only try to do the improvements described in the question above, but also I'd code using Test Driven Development (TDD). **TDD**  is a bit more time consuming if the application is not very complex, but reduces the number of bugs in production and improves code quality. In other words it makes code easier to maintain and understand. In addition, I would ask users to try the App and give feedback, so I can get real user feedback.