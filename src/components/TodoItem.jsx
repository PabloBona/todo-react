import PropTypes from 'prop-types';

const TodoItem = ({ itemProp }) => (
  <li>
    <input type="checkbox" />
    {itemProp.title}
  </li>
);

TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    title: PropTypes.string,
  }),
};

TodoItem.defaultProps = {
  itemProp: {
    title: 'Untitled Todo',
  },
};

export default TodoItem;
