Redux folder Structure

Components:  presentational.  Receive data from props only.

Container:  Receive data from Redux and Call Actions

Views:  main modules - use containers and Components

Redux:  Business logic no components or Views

Module mile Structure
action.js - containes all the Actions
    Actions send data to the store either from a view event, from a fetch response, or a task that runs every X seconds.
    Each action must have a type and payload.
    In order to use an action creator use dispatch method from the store.
    Most actions are CRUD defined:  Create, Copy, Read, Update, Delete

reducer.js - code to manage all the data.  
    Define how the data from the actions will be stored on the global state.
    Each update creates a new state object with the new data, no mutation


index.js - public actions.  There are public and private actions.  Private actions
are only required within the module itself.

the store
a single global object that can be accessed via getState
bring together the actions and reducer, use the actions to save data on the stored
Log changes on the state by subscribing to the store changes.

dispatch
the dispatch method takes an action, created by the loadBookmarks function.  This
calls the reducer to set the new bookmarks to the state.
