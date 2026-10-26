import { SCHOOL_YEAR_FACTS } from "../content/schoolYearGroupClasses";

export default function ClassFacts() {
  return (
    <div className="elite-facts">
      {SCHOOL_YEAR_FACTS.map((fact) => (
        <article key={fact.label} className="elite-facts__item">
          <p className="elite-facts__label">{fact.label}</p>
          <p className="elite-facts__value">{fact.value}</p>
        </article>
      ))}
    </div>
  );
}
