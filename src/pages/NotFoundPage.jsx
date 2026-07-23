import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="section">
      <div className="page stack-lg">
        <div>
          <span className="eyebrow">Not found</span>
          <h1 className="display page-title">That page does not exist.</h1>
          <p className="lead">Use the navigation to return to the product families or contact page.</p>
        </div>
        <Link to="/" className="btn btn-primary">
          Return home
        </Link>
      </div>
    </section>
  );
}
