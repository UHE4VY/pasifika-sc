import Link from "next/link";

type Props = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  highlight: string;
  title: string;
  description: string;
};

export default function ServiceCardLink({
  href,
  imageSrc,
  imageAlt,
  highlight,
  title,
  description,
}: Props) {
  return (
    <Link href={href} className="service-card">
      <div className="service-card__media">
        <img src={imageSrc} alt={imageAlt} className="service-card__img" />
        <div className="service-card__scrim" aria-hidden="true" />

        <div className="service-card__overlay">
          <p className="service-card__highlight">{highlight}</p>
          <h2 className="service-card__title">{title}</h2>
          <p className="service-card__description service-card__description--desktop">
            {description}
          </p>
          <span className="service-card__link service-card__link--desktop">
            View details →
          </span>
        </div>
      </div>

      <div className="service-card__body">
        <p className="service-card__description service-card__description--mobile">
          {description}
        </p>
        <span className="service-card__link service-card__link--mobile">
          View details →
        </span>
      </div>
    </Link>
  );
}
