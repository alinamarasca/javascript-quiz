# Components


## Howto

1. Create component
    - Make a new `.js` file /components directory.
        - if it is a component that will shared you can put it in the /shared directory
    - Create a function that in your new `.js` file and let that return an element with some content.
    - Import the new function on the page where you need to use it.
    - Modify the the logic of the function according to the specifications
        - If the component needs to do an action bind the according event listeners
    - Optionally create a handler in the `/handlers` directory that modifies the state
    - Create an associated `.css` file for the component in the `/styles` directory.
        - Import the new `.css` file in `styles/index.css`