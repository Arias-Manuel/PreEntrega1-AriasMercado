import "./styles/Gaming.css";

const Gaming = ({ tittle }) => {
  return (
    <section className="gaming gaming-slide-1">
      <div className="gaming-container">
        <article className="gaming-container__text-box">
          <h1>{tittle}</h1>
          <strong>Gaming Store</strong>
          <p>
            Bienvenido a una futura tienda digital dedicada a los videojuegos.
          </p>
          <button className="button-primary">
            <a href="/">Muy pronto</a>
          </button>
        </article>
      </div>
    </section>
  );
};

export default Gaming;
