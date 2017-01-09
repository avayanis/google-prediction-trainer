export const CLEAR_CSV = 'NEW_CSV';
export const CSV_ADD_HEADER = 'CSV_ADD_HEADER';
export const CSV_ADD_ROW = 'CSV_ADD_ROW';
export const NEW_MODEL_FORM = 'NEW_MODEL_FORM';
export const UPDATE_MODEL_FORM = 'UPDATE_MODEL_FORM';

export function clearData() {
  return {
    type: CLEAR_CSV
  };
}

export function addHeader(headers) {
  return {
    type: CSV_ADD_HEADER,
    payload: headers
  };
}

export function addRow(row) {
  return {
    type: CSV_ADD_ROW,
    payload: row
  };
}

export function newModelForm() {
  return {
    type: NEW_MODEL_FORM
  }
}

export function updateModelForm() {
  return {
    type: UPDATE_MODEL_FORM
  }
}
