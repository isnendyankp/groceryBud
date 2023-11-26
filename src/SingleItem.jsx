const SingleItem = ({ item, removeItem, editItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed && 'line-through',
        }}
      >
        {item.name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => removeItem(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;

// Progress:
// S7-236: create SingleItem component
// S7-236: add item prop & removeItem prop
// S7-236: Add className single-item to div
// S7-236: Add input checkbox to div
// S7-236: Add p with  pass in item.name to div
// S7-236: Add button with className remove-btn to div
// S7-236: Add isCompleted state to SingleItem component
// S7-236: Add isChecked to input checkbox
// S7-236: Add onChange with pass setIsChecked @input
// S7-236: Add style to p with textTransform: 'capitalize' & textDecoration: item.completed && 'line-through'
// S7-237: Add onClick with pass removeItem @button
// S7-239: pass in editItem function to singleItem component
