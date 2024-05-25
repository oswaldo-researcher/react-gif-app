import PropTypes from 'prop-types';

const GifItem = ({ title, url, id }) => {
  return (
    <div className='card'>
      <img src={url} alt={title} key={id} width='100' />
      <p>{title}</p>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  id: PropTypes.string,
};

export default GifItem;
