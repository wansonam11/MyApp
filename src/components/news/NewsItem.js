import React from "react";
import styled from "styled-components";

const NewItemBlock = styled.div`
  display: flex;
  a {
    color: block;
    text-decoration: none;
  }
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 160px;
      object-fit: cover;
    }
  }

  .content {
    h3 {
      margin: 0;
    }
    p {
      margin: 0;
      line-height: 1.5s;
      margin-top: 0.5rem;
      white-space: normal;
      font-size: 0.9rem;
    }
  }
  & + & {
    margin-top: 2rem;
  }
`;

function NewsItem({ article }) {
  const { title, description, urlToImage, url } = article;

  return (
    <NewItemBlock>
      <div className="thumbnail">
        <a href={url} target="_blank" rel="noopenor noreferrer">
          <img src={urlToImage} alt="news" />
        </a>
      </div>
      <div className="content">
        <a href={url}>
          <h3>{title}</h3>
        </a>
        <p>{description}</p>
      </div>
    </NewItemBlock>
  );
}

export default NewsItem;
