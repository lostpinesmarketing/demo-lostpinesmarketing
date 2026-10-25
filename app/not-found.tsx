import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="page-head">
      <div className="wrap">
        <h1 className="page-head__title">This page isn’t here.</h1>
        <p className="page-head__intro">
          Head back to the <Link href="/">home page</Link> or <Link href="/contact/">get in touch</Link>.
        </p>
      </div>
    </section>
  );
}
