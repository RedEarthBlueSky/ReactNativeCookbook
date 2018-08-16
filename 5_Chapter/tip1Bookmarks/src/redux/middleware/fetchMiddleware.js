
export default function fetchMiddleware({ dispatch, getState }) {
  return next => action => {

    const { promise, types, ...rest } = action;

    if (!promise) {
      return next(action);
    }

    //  if there is a promise property, get the types as
    const [REQUEST, SUCCESS, FAILURE] = types;

    //  dispatch the REQUEST action to inform the reducer request has started
    next({ ...rest, type: REQUEST });

    //  trigger the fetch request, parse the response to JSON and
    //  dispatch the success or error actions
    const actionPromise = fetch(promise.url, promise);

    actionPromise
      .then(response => response.json())
      .then(payload = next({ ...rest, payload, type: SUCCESS }))
      .catch(error => next({ ...rest, error, type: FAILURE }));

    return actionPromise;
  };
}
