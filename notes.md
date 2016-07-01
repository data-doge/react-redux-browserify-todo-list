immutable state trees

the only way to change the state tree is by dispatching an action, a plain object describing in a minimum way what has changed in the application

actions can be initiated by anything, a component, a network request

the reducer is a pure function that takes the current state, and an action, and returns the new state
