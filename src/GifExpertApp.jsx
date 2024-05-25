import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {
  const [categories, setCategories] = useState([`x-men'97 team`]);

  const onNewCategory = (newCategory) => {
    const existCategory = categories.some(
      (item) => item.toLowerCase() === newCategory.toLowerCase()
    );
    if (existCategory) {
      alert('hero already exist');
      return;
    }
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Heros</h1>
      <AddCategory onNewCategory={onNewCategory} />

      {categories.map((item) => (
        <GifGrid category={item} key={item} />
      ))}
    </>
  );
};

export default GifExpertApp;
