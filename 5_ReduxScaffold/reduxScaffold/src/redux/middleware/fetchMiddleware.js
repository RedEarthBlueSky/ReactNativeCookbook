//  Define a new action creator to call our new middleware
export default function fetchMiddleware({ dispatch, getState }) {
//  the function returns another function to be executed between
//  the action dispatch right before action gets into the reducer
  return next => action => {
    const { promise, types, ...rest } = action;
//  does the action contain a promise property.  If not ignore
//  the action and pass the next action to the middleware of reducer
    if (!promise) {
      return next(action);
    }
//  if there is a promise get the types, to dispatch actions
   const [REQUEST, SUCCESS, FAILURE] = types;
//  dispatch REQUEST action to inform reducer request started
    next({ ...rest, type: REQUEST });
//  FINAL STEP:  Trigger fetch request, parse response to json
//  dispatch SUCCESS or ERROR actions
    const actionPromise = fetch(promise.url, promise);

    actionPromise
      .then(response => response.json())
      .then(payload => next({ ...rest, payload, type: SUCCESS }))
      .then(error => next({ ...rest, error, type: FAILURE }));

    return actionPromise;
  };
}
