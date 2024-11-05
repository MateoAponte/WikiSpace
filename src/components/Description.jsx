export const Description = ({ name, content, source }) => {
  return (
    <section className="description">
      <h2 className="description__title">{name}</h2>
      <p className="description__content">{content}</p>
      <span className="description__source">
        <span className="description__source-label">Source: </span>
        <a
          className="description__source-link"
          href={source}
          target="_blank"
          rel="noreferrer"
        >
          Wikipedia
        </a>
      </span>
    </section>
  );
};
