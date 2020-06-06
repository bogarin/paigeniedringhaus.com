import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import config from '../../data/SiteConfig';
import speaking from '../../data/speaking';
import publications from '../../data/publications';
import podcasts from '../../data/podcasts';
import Layout from '../components/Layout/Layout';
import logRocket from '../images/thumbnails/logRocket.jpg';
import butterCMS from '../images/thumbnails/butterCMS.png';
import '../styles/pages.scss';

const MediaPage = () => {
  const companyMap = {
    ButterCMS: butterCMS,
    LogRocket: logRocket,
  };

  const companies = Object.entries(publications);

  return (
    <Layout>
      <div className="media-container page-body">
        <Helmet title={`Media – ${config.siteTitle}`} />
        <h1>Media</h1>
        <p>
          In addition to my own <Link to="/blog">blog posts</Link>, I've been
          fortunate enough to share what I've learned through speaking at
          conferences and meetups, writing technical articles for companies, and
          appearing as a guest on podcasts.
        </p>
        <p>
          Since 2020 I've also been a regular host on the popular tech podcast{' '}
          <a
            href="https://devchat.tv/react-round-up/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Round Up
          </a>{' '}
          , a bi-monthly podcast dedicated to React and the development
          community. Each episode we talk to different experts in the community
          about all things React and beyond.
        </p>
        <h2>Talks</h2>
        <ul>
          {speaking.map((talk, i) => {
            return (
              <>
                <li className="media-items" key={talk.title}>
                  <img
                    className="media-images"
                    src={talk.img}
                    alt="organization logo"
                  />
                  {talk.path ? (
                    <a
                      href={talk.path}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {talk.title}
                    </a>
                  ) : (
                    <>{talk.title}</>
                  )}
                  &nbsp;- {talk.date}
                </li>
              </>
            );
          })}
        </ul>
        <h2>Podcast interviews</h2>
        <ul>
          {podcasts.map((episode) => {
            return (
              <li className="media-items" key={episode.title}>
                <img
                  className="media-images"
                  src={episode.img}
                  alt="podcast logo"
                />
                <a
                  href={episode.path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {episode.title}
                </a>
                &nbsp;- {episode.date}
              </li>
            );
          })}
        </ul>
        <h2>Company articles</h2>
        {companies.map((publication) => {
          const companyName = publication[0];
          const articles = publication[1];
          return (
            <article key={companyName}>
              <span className="media-items companies">
                <img
                  src={companyMap[companyName]}
                  className="media-images"
                  alt="company logo"
                />
                <h3>{companyName}</h3>
              </span>
              <ul>
                {articles.map((article) => {
                  return (
                    <li className="media-items articles" key={article.title}>
                      <a
                        href={article.path}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {article.title}
                      </a>
                      &nbsp;- {article.date}
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </Layout>
  );
};

export default MediaPage;
