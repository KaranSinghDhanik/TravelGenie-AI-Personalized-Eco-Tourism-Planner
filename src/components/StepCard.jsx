function StepCard({ step, title, description }) {
  return (
    <article className="group relative flex flex-col items-center text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-xl font-bold text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-700 group-hover:shadow-lg">
        {step}
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-emerald-700 sm:text-xl">
        {title}
      </h3>
      <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-600 sm:text-base">
        {description}
      </p>
    </article>
  );
}

export default StepCard;
