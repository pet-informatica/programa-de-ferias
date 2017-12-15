![](http://res.cloudinary.com/dkbuneg9h/image/upload/v1477079274/pet/pet_wn9jqn.png)

#Programa de Férias

The project must be developed under the `dev` branch. `master` branch is used only for publishing the website on the web under production enviroment.

### Dependencies

In order to manage project dependencies, you will need first to install [Node.js](https://nodejs.org/en/). Then, run
* `npm install`

To install all the project dependencies, such as UI frameworks and React.

### Development

For [React](https://reactjs.org/) to work, you will need to setup a webserver. You can do it by simply running
* `npm start`

You can then open your browser and navigate to `http://localhost:3000/` to see the website live.

### Production

When website is ready to be published on the web, you must create a new production version of the project. Just run
* `npm run build`

The full website will be ready for deployment under the `build/` folder.

### Publishing

To publish the website on the web, first, create a production version of it using the step above, and then copy the full content of `build/` folder to the `master` branch.

### UI Framework

All the website design is built along with [Semantic UI React](https://react.semantic-ui.com/introduction). You can see the docs in order to learn how to construct new components.


