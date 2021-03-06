import React from 'react';
import Helmet from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faRssSquare } from '@fortawesome/free-solid-svg-icons';
import config from '../../data/SiteConfig';
import Layout from '../components/Layout/Layout';
import Subscribe from '../components/Subscribe/Subscribe';
import '../styles/pages.scss';

const ContactPage = () => {
  return (
    <Layout>
      <div className="contact-container page-body">
        <Helmet title={`Contact | ${config.siteTitle}`} />
        <h1>Contact</h1>
        <h2>
          Thanks again for visiting my site, I hope you like it.
          <br />
          If you'd like to get in touch...
        </h2>
        <h2>
          Send me an email&nbsp;
          <FontAwesomeIcon icon={faEnvelope} />
        </h2>
        <p>
          If you'd like to say "hi" or want to talk, feel free to reach me at
          &nbsp;
          <a href="#mailgo" data-address="hellopaigen" data-domain="gmail.com">
            hellopaigen@gmail.com
          </a>
          . I may not reply immediately, but I will eventually.
        </p>
        <h2>
          Follow me and chat on social media&nbsp;
          <FontAwesomeIcon icon={faTwitter} />
        </h2>
        <ul>
          <li>
            I'm on Twitter at&nbsp;
            <a
              href="https://twitter.com/pniedri"
              target="_blank"
              rel="noopener noreferrer"
            >
              @pniedri
            </a>
          </li>
          <li>
            And I publish on Medium under&nbsp;
            <a
              href="https://medium.com/@paigen11"
              target="_blank"
              rel="noopener noreferrer"
            >
              @paigen11
            </a>
          </li>
        </ul>
        <h2>
          Check out my Github profile&nbsp;
          <FontAwesomeIcon icon={faGithub} />
        </h2>
        <p>
          All of the&nbsp;
          <a
            href="https://github.com/paigen11"
            target="_blank"
            rel="noopener noreferrer"
          >
            projects
          </a>
          &nbsp; I build for myself (mostly to learn new stuff) are open source,
          and I'm happy for people to fork them and put them to use.
        </p>
        <h2>
          Or subscribe to my newsletter&nbsp;
          <FontAwesomeIcon icon={faRssSquare} />
        </h2>
        <p>
          I promise to never send spam, only useful emails about new articles
          I've written or links to talks I've given.
        </p>
        <Subscribe />
        <p>Thanks and have a great day!</p>
      </div>
    </Layout>
  );
};

export default ContactPage;
