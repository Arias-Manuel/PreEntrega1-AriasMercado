import "./styles/ItemListContainer.css";

const ItemListContainer = ({ greetings }) => {
  return (
    <section className="item-list-container">
      <h2 className="item-list-container-item">{greetings}</h2>
    </section>
  );
};

export default ItemListContainer;
