function PageContent({ heading, children }) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{heading}</h1>
      <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
        {children}
      </p>
    </section>
  );
}

export default PageContent;
