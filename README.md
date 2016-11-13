# roposo-dashboard 

This project is an application that performs basic CRUD operations and allows view switch from list view to grid view.


## Getting Started

To get you started you can simply clone the roposo-dashboard repository and install the dependencies:

### Prerequisites

You need git to clone the roposo-dashboard repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize roposo-dashboard. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone roposo-dashboard

Clone the roposo-dashboard repository using [git][git]:

```
git clone https://github.com/akashsondhi/roposo-dashboard.git
cd roposo-dashboard
```

If you just want to start a new project without the roposo-dashboard commit history then you can do:

```bash
git clone --depth=1 https://github.com/akashsondhi/roposo-dashboard.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
roposo-dashboard changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/index.html`.

## Contact

For more information on AngularJS please check out http://angularjs.org/

[bower]: http://bower.io
[git]: http://git-scm.com/
[http-server]: https://github.com/nodeapps/http-server
[node]: https://nodejs.org
[npm]: https://www.npmjs.org/
