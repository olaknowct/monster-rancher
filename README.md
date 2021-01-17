# monster-rancher
link : https://olaknowct.github.io/monster-rancher/

### Configuration
- The repo project has 2 branch. If you need to check my development commits, switched to master branch.
- Otherwise gh-pages branch are product of "npm run deploy" script from package.json that automates the production build and deployment process. 

### Description
- I named the project as monster rancher, the app kinda like a movie(monster rancher) that i watched and used to play at early stage of my age, feeling nostalgia.

### About
- The project is a basic react project wherein it gives you functionality of searching a monster.
- It uses 2 API to generate dummy data and source image.

### Purpose
- The main purpose of creating this project is to get a good grasp of basic fundamental of React Library.

### Concepts
- Class and functional component and its differences 
- JSX
- Unidirectional flow
- Some Lifecycle Methods
- Props

### Takeaway
- Components has access to the states and we can also set it states.
- JXS is responsible for creating a VIRTUAL DOM, its pretty much HTML alike and does mimic it,
  - when can add attribute on custom component inside JXS and passed into component as props 
- I've learned that when we see that the component can be used from multiple place, then we need to break it down into component as much as possible this is to make optimize and efficient
- State becomes props when it gets passed down to components, its a uni-directional flow wherein the data can only flow one way.
- Lifycycle methods gets called automatically from every different stages
- We have syntetic events on Virtual DOM. DOM API events for HTML 
- Functional component
  - does not have this nor parent element
  - used for JXS only
  - does get some props (attributes that we passed) and return JXS
  - Doesn't have lifecycle methods
- Class Component
  - inheritance
  - gets access to THIS and parent class
  - has lifecycle methods
  - lots of method available 
  
### API used
- https://robohash.org/
- https://jsonplaceholder.typicode.com/users
