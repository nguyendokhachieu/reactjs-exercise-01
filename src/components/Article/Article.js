import { useEffect, useState } from "react";
import "./bundle.css";

function showPost(type, data) {
  let categoryItems = null;
  if (data.category.length > 0) {
    categoryItems = data.category.map((value, index) => {
      return (
        <li key={index}>
          <a href={value.URL} className="btn btn-category">
            {value.name}
          </a>
        </li>
      );
    });
  }

  let categoryJSX = (
    <>
      <ul className="article-item__categories">{categoryItems}</ul>
      <ul className="article-item__stats">
        <li>
          <i className="icons ion-ios-eye" />
          <span className="text">Views</span>
        </li>
      </ul>
    </>
  );

  let descriptionJSX = <p className="article-item__desc">{data.description}</p>;

  let dateTimeJSX = (
    <div className="article-item__datetime">
      <div className="date">{data.datePublished}</div>
      <div className="time">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 512 512"
          className="css-uk6cul"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
        </svg>
        {data.timePublished}
      </div>
    </div>
  );

  let authorImageJSX = (
    <div className="article-item__author-image">
      <a aria-label={data.authorName} href="/">
        <img src={data.authorImageLink} alt={data.authorName} />
      </a>
    </div>
  );

  return (
    <article className={"article-item " + ((type === "latest") ? "" : "style-card")}>
      <div className="article-item__thumbnail">
        <a href={data.link}>
          <img src={data.backgroundImageLink} alt={data.title} />
        </a>
      </div>
      <div className="article-item__content">
        {type === "popular" ? categoryJSX : null}
        <h2 className="article-item__title">
          <a href={data.link}>{data.title}</a>
        </h2>
        {type === "popular" ? descriptionJSX : null}
        <div className="article-item__info">
          {type === "latest" ? authorImageJSX : null}

          <div className="article-item__info-right">
            <div className="article-item__author-name">
              <a href={data.authorLink}>
                <strong>{data.authorName}</strong>
              </a>
            </div>
            {dateTimeJSX}
          </div>
        </div>
      </div>
    </article>
  );
}

function Article(props) {
  let [type, setType] = useState("normal");
  // normal post // popular post // latest post

  let [data, setData] = useState({
    title: "",
    description: "",
    authorName: "",
    authorImageLink: "/images/john-doe.png",
    backgroundImageLink: "/images/blog-1.jpg",
    category: [{
      name: "News",
      URL: "/news",
        }, {
          name: "Technology",
          URL: "/tech",
        }],
    datePublished: "",
    timePublished: "",
    link: "/",
    authorLink: "/",
  });

  let result = showPost(type, data);

  useEffect(() => {
    if (props.type !== undefined) {
      setType(props.type);
    }
  }, [props.type]);

  useEffect(() => {
    if (props.data !== undefined) {
      setData(props.data);
    }
  }, [props.data]);

  return result;
}

export default Article;
