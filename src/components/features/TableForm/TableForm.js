import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './TableForm.module.scss';
import { useState } from 'react';
import { updateTablesRequest, getTableById } from '../../../redux/tablesRedux';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function TableForm({ id, setLoading }) {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => getTableById(state, id));
  const [formData, setFormData] = useState(tableData);

  const { status, bill, peopleAmount, maxPeopleAmount } = formData;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTablesRequest(formData, setLoading));
  };
  const handlePeopleAmountChange = (e) => {
    let value = e.target.value;
    if (formData.status === 'Cleaning' || formData.status === 'Free') {
      value = 0;
    } else if (formData.maxPeopleAmount < value) {
      value = formData.maxPeopleAmount;
    }
    setFormData((prev) => ({
      ...prev,
      peopleAmount: value,
    }));
  };
  const handleStatusChange = (e) => {
    if (e.target.value === 'Cleaning' || e.target.value === 'Free') {
      setFormData((prev) => ({ ...prev, peopleAmount: 0 }));
    }
    setFormData((prev) => ({ ...prev, bill: 0 }));
    setFormData((prev) => ({ ...prev, status: e.target.value }));
  };

  const handleMaxPeopleChange = (e) => {
    if (e.target.value < tableData.peopleAmount) {
      setFormData((prev) => ({
        ...prev,
        peopleAmount: e.target.value,
      }));
    }
    setFormData((prev) => ({
      ...prev,
      maxPeopleAmount: e.target.value,
    }));
  };

  return (
    <Form className={styles['num-input']} onSubmit={handleSubmit}>
      <Form.Group className='mb-3 d-flex align-items-center'>
        <Form.Label htmlFor='status' className='text-bold me-4 my-auto'>
          Status:{' '}
        </Form.Label>
        <Form.Select
          id='status'
          className=' w-25'
          value={status}
          onChange={handleStatusChange}
        >
          <option value='Busy'>Busy</option>
          <option value='Cleaning'>Cleaning</option>
          <option value='Free'>Free</option>
          <option value='Reserved'>Reserved</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className='mb-3 d-flex align-items-center'>
        <Form.Label htmlFor='people' className='text-bold me-4 my-auto'>
          People:{' '}
        </Form.Label>
        <input
          type='number'
          min={0}
          max={10}
          id='people'
          value={peopleAmount}
          onChange={handlePeopleAmountChange}
        />
        /
        <input
          type='number'
          min={0}
          max={10}
          value={maxPeopleAmount}
          onChange={handleMaxPeopleChange}
        />
      </Form.Group>
      <Form.Group className='mb-3 d-flex align-items-center'>
        <Form.Label htmlFor='bill' className='text-bold me-4 my-auto'>
          Bill:{' '}
        </Form.Label>
        $
        <input
          type='number'
          id='bill'
          min={0}
          value={bill}
          disabled={formData.status === 'Busy' ? false : true}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, bill: e.target.value }));
          }}
        />
      </Form.Group>
      <Button type='submit'>Update</Button>
    </Form>
  );
}
TableForm.propTypes = {
  id: PropTypes.string.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default TableForm;
