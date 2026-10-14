import { Link } from "react-router-dom";
import "./Breadcrumbs.css";


function Breadcrumbs({ items = [] }) {
  if (!items.length) return null;

  return (
    <nav className="breadcrumbs-nav" aria-label="Breadcrumb">
      <ol className="breadcrumbs-list" itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={index}
              className={`breadcrumb-item ${isLast ? "active" : ""}`}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {!isLast && item.path ? (
                <Link to={item.path} itemProp="item" className="breadcrumb-link">
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span itemProp="name" className="breadcrumb-current" aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
              <meta itemProp="position" content={String(index + 1)} />
              {!isLast && <span className="breadcrumb-separator" aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
