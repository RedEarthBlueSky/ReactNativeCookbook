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

reducer.js - code to manage all the data

index.js - public actions.  There are public and private actions.  Private actions
are only required within the module itself.
