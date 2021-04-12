# Recast.ly

A designer friend of yours has been kind enough to give you the skeleton this application. It has all the needed styling and React components, but only renders dummy content. Your job is to bring this application to life by hooking it up with data from the [YouTube Data API](https://developers.google.com/youtube/v3/?hl=en). After completing the Bare Minimum Requirements, you'll be able to live-search, display, and play any video from YouTube.

![Recast.ly demo](https://cloud.githubusercontent.com/assets/6980359/12561585/d24594a8-c355-11e5-9aa9-adb6e2c40a40.gif "Recast.ly demo")

## React is Interesting in a Few Key Ways

* React uses JSX, which is a syntax extension to JS that is used to describe what the UI should look like.
* React offers two types of view components, a simple functional-style component, and a feature rich class-based component.
* When using React, developers don't have to listen to changes and manually trigger a re-render - instead, React will re-render the necessary components upon state change.


## High Level Goals of this Sprint

* Understand the importance, and experience the benefits of client side libraries by building with React
* Learn how to think about web apps as components
* Learn popular ES6 features and practice using them
* Learn how to transpile code with Babel's command line tool
* Gain more exposure interacting with a REST API (in this case, the YouTube Data API)
* Gain some experience with larger codebase, containing many modules across a variety of files

## Thinking in Components

When designing and building front-end applications, a good approach is to break the functionality of the application apart into small, easily understandable and reusable pieces, often called components. React components are like JavaScript functions - they accept inputs (called props) and return React elements describing what should appear on the screen.

## App Organization

Here's how the app is organized:


![App Organization](https://res.cloudinary.com/dwtaamxgn/image/upload/v1606848129/qweasd_d4ydri.jpg)


* `App` - The top level container for the entire application. This is the component that will be rendered to the DOM
* `Search` - Responsible for knowing and communicating information about the search input field
* `VideoPlayer` - Responsible for playing a single video and displaying information about it
* `VideoList` - A container component responsible for populating video list entry components
* `VideoListEntry` - A component that shows a thumbnail view for a single video. When the title of this video is clicked, that video will be played in the VideoPlayer component

## Project set up

*npm*

This sprint uses [npm](https://www.npmjs.com/)  to manage its dependencies. npm comes bundled with Node, and is another JavaScript package manager that makes it easy for developers to share and reuse code. Even though npm started in the Node ecosystem, it is quickly becoming the default choice for sharing all types of JavaScript code.

Here are a few tips to help get up and running:

- To install all the dependencies run npm install
- npm's configuration file is package.json
- npm downloads packages into node_modules

Install this sprint's dependencies:

- [ ] [Install Node.js](https://nodejs.org/en/)  if you haven't yet.
- [ ] Run npm install

## Babel

In order to take advantage of React's declarative [JSX](https://reactjs.org/docs/jsx-in-depth.html)  syntax, we need to use a tool called a transpiler. A transpiler converts source code written with non-standard syntax, into to a version of JavaScript that will work in all major environments. [Babel](https://babeljs.io/)  is a generic transpiler for JavaScript that can convert both JSX and [ES6](https://babeljs.io/docs/en/babel-preset-env/) syntax.

We're going to use Babel's [command line interface](https://babeljs.io/docs/en/babel-cli/)  to transpile the source code in this sprint. To install it globally, run:

```
npm install -g babel-cli
```

The following command will transpile all of the JSX/ES6 files in this sprint into parallel ES5 files in the compiled/ directory.

```
babel . --out-dir compiled --presets=react --ignore=node_modules,compiled --source-maps inline
```

This command might seem intimidating, but is similar to passing multiple arguments to a function. Let's break it down:

- `.` tells Babel to transpile all javascript files in the current working directory
- `--out-dir` tells Babel to put the transpiled files into the compiled/ folder
- `--presets` tells Babel what kind of transformations to make. The preset, react, transpiles JSX. Each preset is installed as its own package, with the naming convention babel-preset-*.
- `--ignore` tells Babel to not transpile any files in the the node_modules and compiled directories
- `--source-maps` tells Babel to include [source maps](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)  with our transpiled code, making debugging much easier.

Inside of `index.html` and `SpecRunner.html`, the _compiled_ files are loaded in the script tags. After making any changes to the files in the `src/` directory, you must transpile them to see the changes reflected when you refresh your html files.

- [ ] Run the `babel` command to transpile all the source files into the compiled directory

This is arduous to do manually after every change. Luckily, Babel has an option that makes this much easier.

- [ ]  Find a way to make `babel` compile files as they are changed

## Live reloading server

In order to boost productivity when developing rich client side applications, this sprint uses a live development server to automatically refresh the browser page as you make changes to your source code.

Install [Live Server](https://github.com/tapio/live-server)  from npm:

```
npm install -g live-server
```

Try it out:

 - [ ] In a new Terminal tab, start the Recast.ly app by running `live-server`
 - [ ] Make a change in one of the JavaScript files in the `src/` directory
 - [ ] Be amazed as your browser should magically refresh with the compiled changes

_We'll be covering servers later in extensive detail. For now you can just run this command and ignore the complexity of what it means or how it works._

## npm scripts
npm comes with a handy [scripting](https://docs.npmjs.com/cli/v6/using-npm/scripts)  feature that lets you define shell commands inside of `package.json`. If you want to improve your application's build process, consider completing the following optional task:

 - [ ] Write an npm `start` script that combines the previous two build steps together.
 
## React Dev Tools
 Install the [React Dev Tools](https://github.com/facebook/react-devtools)  extension for Chrome to make debugging this sprint easier.

## Try the Problem
During the "Try the Problem" phase, you should:

- [ ] Work through the React Components primer solo
- [ ] Read [this guide](https://reactjs.org/docs/thinking-in-react.html)  about thinking in React components.


## Bare Minimum Requirements

- [ ] Inside of `src/index.js`, render the `App` component to the DOM and explore the codebase to get an understanding of each component's responsibility
- [ ] Read [this guide](https://facebook.github.io/react/docs/thinking-in-react.html) to learn more about thinking in components. This guide uses the old `React.createClass` syntax to create a class component. Do not worry about the syntax as much as the philosophy of structuring a React app.
- [ ] **Use ES6**. There are [a lot of new features](https://ponyfoo.com/articles/es6) in ES6. A few play very nicely with React. Insist on using them throughout this sprint:
  - [Import Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
  - [Export Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
  - [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
  - [Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), especially to exploit its quality of binding `this` to the lexical scope
  - [Shorthand object property and method syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
  - [Template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings)
  - [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
  - [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

### Create a dynamic Video List component

When building out front-end applications, it can be productive to temporarily ignore the complexity of working with real data, and mock out "fake" data instead. [**Stateless functional components**](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components) make this easy because they render the same with "real" data from a live API or "fake" data from a file.

You're going to use the sample data in `src/data/exampleVideoData.js` to build out the stateless functional `VideoList` and `VideoListEntry` components.

- [ ] Include `src/data/exampleVideoData.js` in an appropriate place in `index.html` so it can be used by your React components
- [ ] Pass `exampleVideoData` as a prop to `VideoList` and dynamically render one `VideoListEntry` component for each video object in `exampleVideoData`
- [ ] Refactor the `VideoList` component to dynamically render one `VideoListEntry` component for each video object in `exampleVideoData`.
- [ ] Refactor the `VideoListEntry` component to dynamically render based on the video object it receives.
- [ ] Make sure the tests for `VideoList` and `VideoListEntry` are passing. You can open the tests with npm test.


When it's all set up, you should see the titles, thumbnails, and descriptions of some React Tutorials on the page. If you notice a _Warning_ in the console about a "unique 'key' prop", know that this has to do with React's performance  , but you can ignore it if you wish.
### Create a dynamic Video Player component

Videos are played by passing a source url to the `iframe` tag inside the `VideoPlayer` component. The video associated with the id included after `https://www.youtube.com/embed/` will get played. Because this is also a stateless functional component, we can build it out with our example data.

- [ ] Pass a single video from `exampleVideoData` as a prop to `VideoPlayer`
- [ ] Update `VideoPlayer` to play the video it is passed and display its title and descriptions
- [ ] Make sure the tests for `VideoPlayer` are passing. You can open the tests with `npm test`


### Hook together the Video List and Video Player components

Now it's time to make the stateless functional components interact. In React, sibling components can not directly access each other, so they need the help of a parent component to manage communication between them. In this case, `App` is the parent component for the sibling components `VideoList` and `VideoPlayer`.
Up until now you have been working with stateless functional components which are great when all you need to do is receive props and render JSX. When your components need to do more than this, such as keep track of internal state or use [lifecycle methods](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods), you will need to use **[class components](https://facebook.github.io/react/docs/reusable-components.html#es6-classes)**.

- [ ] If you haven't already, complete the [6ees6ees6ees mini sprint](https://github.com/hackreactor/rbktn_6ees6ees6ees)
- [ ] Refactor `App` into a [class component](https://reactjs.org/docs/components-and-props.html#es6-classes) using ES6 classes
- [ ] Initialize the `state` of `App` to keep track of all the videos in the video list and the current video in the player. Pass this `state` down as props to its children components. Continue to use the example data.
- [ ] Make it so that when the title of a `VideoListEntry` is clicked, that video is displayed in the player. **Do not** add `state` to any of the functional components. Remember:
  * When `setState` is called, the component whose state was updated re-renders, along with any of its children components
  * You can pass functions as props
- [ ] Make sure all the active tests for App are passing. You can open the tests with npm test

### Set up interactions with the YouTube API

You'll need a developer key in order to access videos from the YouTube Data API. This is common practice with third party APIs because they want to keep track of who is accessing their data, enforce rate limits, and even sometimes make money. Access to the YouTube API is free, all you need is a Google Account.

- [ ] Go to Google's [YouTube API](https://console.developers.google.com/apis/library/youtube.googleapis.com)
- [ ] If prompted, select a project or create a new one. It doesn't matter what you name a new project
- [ ] Click `Enable` and then `Go to Credentials`
- [ ] Select `Web browser` from the drop-down and the `Public data` radio button
- [ ] Give your key any name, leave the optional field blank, and click `Create`.
- [ ] Make your key available to the rest of your application from a new file, `src/config/youtube.js`

### Create a reusable API helper

To search for YouTube videos, you'll use the API's [`Search:list`](https://developers.google.com/youtube/v3/docs/search/list) endpoint. To help keep your code organized, write a helper function that is solely responsible for interacting with this endpoint. In `lib/searchYouTube.js` fill out the `searchYouTube` function. It should:

- [ ] Use `$.ajax` to send a `GET` request to the search endpoint. **This is the only time you should use jQuery in this sprint**
- [ ] Accept a `callback` function that is invoked with the videos array that is returned from hitting the endpoint
- [ ] Accept an `options` object with the following properties: 
  - [ ] `query` - the string to search for
  - [ ] `max` - the maximum number of videos to get, which should default to 5
  - [ ] `key` - an authorized YouTube Browser API key
- [ ] Only `GET` embeddable videos
- [ ] Make sure all the tests for `searchYouTube` are passing. You can open the tests with `npm test`

Data passed into the `callback` should be the same *shape* as `exampleVideoData`. That is, the data should have the same keys, nested the same way as `exampleVideoData`, though it will not necessarily have the same values. You should use this function in the rest of your application. If you find yourself wanting to hit more endpoints, just extend this file with more helper functions.

### Initialize the app with live data

Before integrating live data, you should take a minute to appreciate how far you got with the `exampleVideoData`. Now you can tackle the complexity of starting to use actual data in isolation, and assuming the shape of the live data is the same as the data you mocked out, everything will continue working. If you made your helper correctly, this following section should be simple.

- [ ] As you've done with other modules, make `searchYouTube` available for consumption and pass it as a prop to your app
- [ ] Replace `exampleVideoData` from the initial `state` of `App` with empty initial values, appropriate to the type of values it is expecting
- [ ] Utilize the [componentDidMount](https://reactjs.org/docs/react-component.html#mounting-componentdidmount)  lifecycle hook to render your app with live videos returned from `searchYouTube`
- [ ]  Remove the x from the pending tests in `AppSpec.jsx`, and make sure all the `App` tests are passing. You can open the tests with `npm test`

### Implement live-search

Build out `Search` and update other components:

It's time to take the training wheels off. Build out `Search` and update other components as necessary so that:

 - [ ] As a user types into the input box, the `VideoList` and `VideoPlayer` components are updated with videos from the YouTube data API that match the value of the input
 - [ ] Debounce ajax requests triggered by the `Search` component to occur `at most` once every 500ms. (Imagine if YouTube's API wasn't free :O)
 - [ ] Make sure all the tests for `Search` are passing. You can open the tests with `npm test`
 
## Advanced Content

Well done! Our advanced content is intended to throw you in over your head, requiring you to solve problems with very little support or oversight, much like you would as a mid or senior level engineer. The following problem is no exception, and you may have to do a fair amount of work to get enough context to get started on the problem itself.

 - [ ] Create a `VideoDetails` component that makes another request to the YouTube API and renders more complete video information to the page
 - [ ] Create an auto-play toggle button that will automatically start playing the video selected from `VideoList`
 - [ ] Give each video it's own unique url with the help of [React Router](https://github.com/ReactTraining/react-router)
 - [ ] Handle pagination of search results via the YouTube API
 - [ ] Refactor `searchYouTube` to use the [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)  function to make HTTP requests, instead of `$.ajax`
 - [ ] Refactor your application to use Redux 
 - [ ] Integrate with the parse server from the chatterbox-client sprint to create a Twitch-like experience. You will need to build additional models, collections and views. (Don't let yourself be blocked by XSS, solve the XSS problem before it starts!)
    - [ ] Initially, use a single chat feed for the app.
    - [ ] Then, refactor the chat feature so there is one chat room per video. When you select a video, that video's chat history loads. Only the currently selected video should be updating its chat messages. All others should only load when selected.
 - [ ] Use a module loader like [webpack](https://webpack.github.io/)  , or [SystemJS](https://github.com/systemjs/systemjs)  instead adding them as script tags.
 
## Resources

* [Import Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) 
* [Export Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) 
* [ES6 Features](https://github.com/lukehoban/es6features)
* [Facebook's Tutorial](https://facebook.github.io/react/docs/tutorial.html)
* The [Babel REPL](http://babeljs.io/repl/) shows you a ES5 representation of either ES6 or JSX code
* [YouTube API](https://developers.google.com/youtube/v3/getting-started)
* [Controlled Components](https://facebook.github.io/react/docs/forms.html#controlled-components)
* [Intro to Redux](https://egghead.io/series/getting-started-with-redux)
