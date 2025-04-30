

const Category = ({ name, onClick, selectedCategory }) => {
  return (
    <a
      className={`category ${name === selectedCategory ? "active" : ""}`}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {name}
    </a>
  );
};

export default Category;
