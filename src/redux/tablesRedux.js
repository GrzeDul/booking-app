import settings from '../settings';
//selectors
export const getTables = ({ tables }) => tables;
// actions
const createActionName = (actionName) => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

// action creators
export const updateTables = (payload) => ({
  type: UPDATE_TABLES,
  payload,
});
export const fetchTables = (setLoading) => {
  return (dispatch) => {
    fetch(settings.db.url)
      .then((res) => res.json())
      .then((tables) => {
        dispatch(updateTables(tables));
        setLoading(false);
      });
  };
};
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];
    default:
      return statePart;
  }
};
export default tablesReducer;
