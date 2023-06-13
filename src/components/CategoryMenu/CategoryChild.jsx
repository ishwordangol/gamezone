import CategoryItems from "./CategoryItems";
const CategoryChild = ({ submenus, categorychild, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const categorychildClass = depthLevel > 1 ? "categorychild-submenu" : "";
  return (
    <div
      className={`categorychild bg-white hover:shadow-lg ${categorychildClass} ${
        categorychild ? "hidden" : "categoryblock"
      }`}
    >
      {submenus.map((submenu, index) => (
        <CategoryItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </div>
  );
};

export default CategoryChild;
