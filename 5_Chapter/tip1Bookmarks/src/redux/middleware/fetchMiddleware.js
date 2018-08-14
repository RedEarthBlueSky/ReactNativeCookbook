
export default function fetchMiddleware({ dispatch, getState }) {
  return next => action {

    const { promise, types, ...rest } = action;

    if (!promise) {
      return next(action);
    }

    const [REQUEST, SUCCESS, FAILURE] = types;

  };
}
