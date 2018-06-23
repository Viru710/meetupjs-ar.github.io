import React, { PureComponent } from 'react';
import LazyLoad from 'react-lazyload';
import Tilt from 'react-tilt';
import Body from '../Body/Body';
import Metatags from '../Metatags/Metatags';
import facebook from './facebook.svg';
import github from './github.svg';
import * as styles from './Home.module.css';
import HomePageMetatags from './HomeMetatags';
import logo from './logo.svg';
import meetup from './meetup.svg';
import slack from './slack.svg';
import twitter from './twitter.svg';
import youtube from './youtube.svg';

class Home extends PureComponent {
  render() {
    return (
      <Body>
        <Metatags metatags={HomePageMetatags} />
        <div className="flex justify-center">
          <h1 className={`${styles.mw175} mv0 w-100`}>
            <Tilt
              options={{
                axis: 'x',
                reverse: true,
                scale: '1.05'
              }}
            >
              <LazyLoad height="100%" once={true}>
                <img src={logo} alt="Logo" className="db v-btm" />
              </LazyLoad>
            </Tilt>
          </h1>
        </div>
        <p className="f4 mb0 mt4 tc">
          ¡Sumate a la comunidad de desarrolladores <span className="b">JavaScript</span> de Buenos
          Aires!
        </p>
        <div className="flex justify-center mv4 pb2">
          <a
            href="https://www.facebook.com/groups/1572363023007913/"
            target="_blank"
            rel="noopener noreferrer"
            className="grow mr2 mr3-l w2 w3-ns"
          >
            <LazyLoad height="100%" once={true}>
              <img src={facebook} alt="facebook" className="v-btm" />
            </LazyLoad>
          </a>
          <a
            href="https://twitter.com/meetupjs_ar"
            target="_blank"
            rel="noopener noreferrer"
            className="grow mh2 mh3-l w2 w3-ns"
          >
            <LazyLoad height="100%" once={true}>
              <img src={twitter} alt="twitter" className="v-btm" />
            </LazyLoad>
          </a>
          <a
            href="https://github.com/meetupjs-ar"
            target="_blank"
            rel="noopener noreferrer"
            className="grow mh2 mh3-l w2 w3-ns"
          >
            <LazyLoad height="100%" once={true}>
              <img src={github} alt="github" className="v-btm" />
            </LazyLoad>
          </a>
          <a
            href="https://slack.meetupjs.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="grow mh2 mh3-l w2 w3-ns"
          >
            <LazyLoad height="100%" once={true}>
              <img src={slack} alt="slack" className="v-btm" />
            </LazyLoad>
          </a>
          <a
            href="https://www.meetup.com/es-ES/meetup-js/"
            target="_blank"
            rel="noopener noreferrer"
            className="grow mh2 mh3-l w2 w3-ns"
          >
            <LazyLoad height="100%" once={true}>
              <img src={meetup} alt="meetup" className="v-btm" />
            </LazyLoad>
          </a>
          <a
            href="https://www.youtube.com/channel/UCosDO1DDQBkKkmmIJaOdyXQ"
            target="_blank"
            rel="noopener noreferrer"
            className="grow ml2 ml3-l w2 w3-ns"
          >
            <LazyLoad height="100%" once={true}>
              <img src={youtube} alt="youtube" className="v-btm" />
            </LazyLoad>
          </a>
        </div>
        <div className="flex flex-column flex-row-m flex-row-l items-center justify-center">
          <a
            href="https://github.com/meetupjs-ar/charlas/issues/new"
            target="_blank"
            rel="noopener noreferrer"
            className="b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 f6 grow link mb3 mb0-m mb0-l mr3-m mr3-l ph3 pv2 ttu"
          >
            <span>Quiero dar una charla</span>
          </a>
          <a
            href="mailto:meetupjs@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 f6 grow link ph3 pv2 ttu"
          >
            <span>Quiero contactarlos</span>
          </a>
        </div>
      </Body>
    );
  }
}

export default Home;
