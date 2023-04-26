import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './TableForm.module.scss';
import clsx from 'clsx';

function TableForm() {
  return (
    <Form>
      <Form.Group className='mb-3 d-flex align-items-center'>
        <Form.Label htmlFor='disabledSelect' className='text-bold me-4'>
          Status:{' '}
        </Form.Label>
        <Form.Select id='disabledSelect' className=' w-25'>
          <option>Busy</option>
          <option>Cleaning</option>
          <option>Free</option>
        </Form.Select>
      </Form.Group>
      <Form.Group
        className={clsx('mb-3 d-flex align-items-center', styles['num-input'])}
      >
        <Form.Label htmlFor='disabledSelect' className='text-bold me-4'>
          People:{' '}
        </Form.Label>
        <input type='number' min={0} />/
        <input type='number' min={0} disabled value={3} />
      </Form.Group>
      <Button type='submit'>Submit</Button>
    </Form>
  );
}

export default TableForm;
