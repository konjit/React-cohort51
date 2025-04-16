
const Category = ({ name, onClick, selectedCategory }) => {
  return (
    <a
      className={`category ${name === selectedCategory ? "active" : ""}`}
      href="#"
      onClick={onClick}
    >
      {name}
    </a>
  );
};

export default Category;
