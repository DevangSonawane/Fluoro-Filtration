import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="page stack-lg">
        <div>
          <span className="eyebrow">Not found</span>
          <h1 className="display page-title">That page does not exist.</h1>
          <p className="lead">Use the navigation to return to the product families or contact page.</p>
        </div>
        <Link href="/" className="btn btn-primary">
          Return home
        </Link>
      </div>
    </section>
  );
}
