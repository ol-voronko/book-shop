import "../sign-in/style.css";

export default function Footer() {
  return (
    <div>
      <p className="footer-description">
        Виконано в
        <span>
          <a href="https://prometheus.org.ua/" target="_blank" rel="noreferrer">
            Prometheus
          </a>
        </span>
        2024
      </p>
    </div>
  );
}
