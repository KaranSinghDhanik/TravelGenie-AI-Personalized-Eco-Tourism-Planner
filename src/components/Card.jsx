function Card({ title, description }) {
  return (
    <article className="flex flex-col rounded-xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-lg font-semibold text-emerald-800">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 sm:text-base">
        {description}
      </p>
    </article>
  );
}

export default Card;
