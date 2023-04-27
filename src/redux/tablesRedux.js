import { API_URL, endpoint } from '../config';
//selectors
export const getTables = ({ tables }) => tables;
export const getTableById = ({ tables }, id) =>
  tables.find((table) => table.id === id);
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
    fetch(`${API_URL}/${endpoint}`)
      .then((res) => res.json())
      .then((tables) => {
        dispatch(updateTables(tables));
        setLoading(false);
      });
  };
};
export const updateTablesRequest = (table, setLoading) => {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(table),
    };
    fetch(`${API_URL}/${endpoint}/${table.id}`, options).then(() => {
      dispatch(fetchTables(setLoading));
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
