import { useState } from 'react'

export const Form = ({onAdd}) => {
  const [value, setValue] = useState('');


  const handleChange = ({target: {value}}) => {
    setValue(value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tilte = value.trim();

    if (tilte) {
      onAdd(tilte);
    }

    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={value} onChange={handleChange}/>
      <button type='submit'>Add</button>
    </form>
  )
}