import PropTypes from 'prop-types';

import GifItem from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      {isLoading && <h2>Loading gifs...</h2>}
      <h3>{category}</h3>
      <div className='card-grid'>
        {gifs.map((gif) => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string,
};

export default GifGrid;
