import { useState } from 'react';

const AddCategory = ({ onNewCategory }) => {
  const [newCategory, setNewCategory] = useState('');

  const onChangeInput = (e) => {
    setNewCategory(e.target.value.trimStart());
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (newCategory && newCategory.length > 1) {
      onNewCategory(newCategory);
      setNewCategory('');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        name='category'
        onChange={onChangeInput}
        value={newCategory}
        placeholder='type hero name'
      />
    </form>
  );
};

export default AddCategory;
