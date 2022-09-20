# QuickBucks Frontend 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

* Initialization of project

- assets - global static assets such as images, svgs, company logo, etc.
- components - global shared/reusable components, such as layout (wrappers, navigation), form components, buttons
- services - JavaScript modules - api calls
- utils- Utilities, helpers, constants, and the like
- views- Can also be called "pages", the majority of the app would be contained here


### Release (Sentry)  - COMING SOON
After making a release, Sentry should automatically pick up this release in
github, however if there is no release management on github, manual release can be
done by running `npm sentry:release <env>` replace `<env` to the right environment
between 'development', 'production', 'test'

NOTE: release use the version number in package.json hence always update this for
any new release
