# HII WP React Theme

Sometimes, you just have to take the journey yourself...

This is an in-progress client-side headless WordPress theme in React. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It uses [React Router](https://reacttraining.com/react-router/), [React Helmet](https://github.com/nfl/react-helmet), and styling via [Styled Components](https://styled-components.com/).

It creates a navigation based on WordPress's appearance menu and generates pages and posts. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available)
- [To-Dos](#todos)

## Installation

1. Download this project directory.
2. Modify the `window.$baseURL` in App.js L12. to the URL of your WordPress install. 
3. In the WordPress admin, ensure you have defined a menu under Appearance > Menus and assigned it to the location of "Primary". This build pulls the menu into the nav.
4. WordPress Admin > Settings: Common Settings set to "Post Name", as API calls are built with slugs.
5. In functions.php, register your nav menu and add the function below, which creates a custom API endpoint for navigation.

```
register_nav_menus( array(
    'menu-1' => esc_html__( 'Primary', 'text-domain' ),
));

function wp_menu_route() {
		
	// using register_nav_menus primary menu name -> 'menu-1'
	$menuID = $menuLocations['menu-1'];
	$primaryNav = wp_get_nav_menu_items($menuID);
	foreach ($primaryNav as $link) {
		
		// Ensure slug isn't an external link and add to payload
		$url = $link->url;
		$slug = (strpos($url, 'http') !== false) ? basename($url) : $url;
		$link->slug = $slug;
	}
	return $primaryNav;
}
	// Create custom endpoint at yourwpdomain.com/wp-json/menu
	add_action( 'rest_api_init', function () {
		register_rest_route( 'nav', '/menu', array(
		'methods' => 'GET',
		'callback' => 'wp_menu_route',
	));
});
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## To-Dos

- Refine navigation to handle external links and parent-child relationships
- Modify Helmet to accept other meta data
- Fix history with routing
- Cache data in some sort of state to eliminate redundant API requests