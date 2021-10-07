# Speedrun - Test

A speedrun is a play-through (or a recording thereof, namely run) of a video game performed with the intention of completing it as fast as possible within one's own ability.

[Wikipedia](https://en.wikipedia.org/wiki/Speedrun)

You must develop a web app that shows the world records speedruns. Your task is to extract the information from [speedrun](http://www.speedrun.com) using its api: [speedrun-api](http://www.speedrun.com/api/v1/games)

The app must:

Show a list with the games. You must show the game logo and the game name. There is no need to implement pagination.
When you select a game in the list, it must open a new screen containing information of the first run in the api runs list. The screen must contain:
a button to see the video in an outside web,
the name of the player (if there is more than one, you must show only the first player’s name),
the time of that run,
the game logo and,
the game name.

## Requirements

  - [npm](https://www.npmjs.com/) as package manager


## Start

First, install all dependencies by running the following command on your project directory:

```bash
npm install
```

You can run the app in the development mode:

```bash
npm start
```

## Architecture

In this section, I'm going to explain how the app was structured. The first thing I want to point is how to split a component. Usually, a component can be split in a container and a component, container states for the component's logic and the component states for the presentation/visual of the component.

### Modules

The main modules that you can found in the app are:
* [./core](https://github.com/bilaluali/speedrun-list-app/tree/master/src/modules/core): as the name describes, includes the core components of the application such as the redux config, the router...
* [./material-ui](https://github.com/bilaluali/speedrun-list-app/tree/master/src/modules/material-ui): custom material-ui theme.
* [./models](https://github.com/bilaluali/speedrun-list-app/tree/master/src/modules/models): includes the redux files for each application entity.
* [./game](https://github.com/bilaluali/speedrun-list-app/tree/master/src/modules/game): usually we will define a module per entity where we will define the containers and components related to the entity.
* [./ui](https://github.com/bilaluali/speedrun-list-app/tree/master/src/modules/ui): "core" components that will be used among the entire application. This module should include few components such as Page, AppBar... Everything else should be placed in ```material-ui``` module.

### Route example

If you're not familiar with this architecture, it may be confusing to know where to start checking the files for a concrete route. Hence, in the image below, you can see a tree showing the differnt components for games route. Please note in the diagram I avoided putting in the tree both, the component and the container. So that, if the component has a container, first check the container.

![route dom diagram](./doc/route-dom-diagram.png)