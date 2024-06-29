import './Banner.css';

export default function Banner({ text }) {
  return (
    <section className="banner">
      <div className="container banner__container">
        <h1 className="banner__text">{text}</h1>
      </div>
    </section>
  );
}
