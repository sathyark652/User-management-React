## Admin Dashboard React Application
This React-based Admin Dashboard provides an intuitive interface for administrators to manage users with the following features:

Distinctive Column Titles: Column titles are designed to stand out clearly from the user entries, ensuring easy identification.

Search Functionality: A versatile search bar allows users to filter records based on any property, ensuring efficient data retrieval.

In-Place Editing and Deletion: Users can edit or delete rows directly in the table. Edits and deletions are in-memory, with no persistence expectation.

Pagination with Dynamic Updates: Pagination is implemented with 10 rows per page. Buttons for first page, previous page, next page, and last page dynamically adjust based on search/filter results.

Row Selection and Bulk Deletion: Users can select one or more rows, highlighted with a grayish background. The 'Delete Selected' button enables bulk deletion of the selected rows.

Shortcut Checkbox for Page Selection: A checkbox at the top left serves as a shortcut to select or deselect all rows displayed on the current page, not affecting all records.

User-Friendly Search Box: The search box has a placeholder text starting with "Search," providing clear instructions to users.

Search Trigger Options: The search icon/button has the class search-icon and triggers the search either by clicking or pressing ENTER.

Action Elements with Specific Class Names: Action elements (edit, delete, save) are presented as buttons, each having a specific class name for easy styling and identification.

Navigation Elements with Class Names: Navigation elements (first-page, previous-page, next-page, last-page) are implemented as buttons or divs with class names, ensuring consistency in styling.

In-Place Editing: Clicking the 'Edit' action in a row transforms the row into an editable format, allowing users to make changes directly within the table.

Libraries Used: The project utilizes various libraries for enhanced functionality and design.

Deployment on Netlify: The application is successfully deployed on Netlify, providing a live and accessible environment.
netlify link:https://tubular-hamster-3ba3d5.netlify.app/


![image](https://github.com/sathyark652/User-management-React/assets/117423140/f7f7b46b-31cc-4b7f-914a-f73e167ebf3e)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
