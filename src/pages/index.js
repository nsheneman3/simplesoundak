import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import projectStyles from '../style.module.css'
import styles from './index.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Simple Sound</title>
        <meta property="og:title" content="Simple Sound" />
      </Helmet>
      <Navigation></Navigation>
      <main className={styles['main']}>
        <div
          className={` ${styles['hero']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['heading-container']}>
              <h1
                className={` ${styles['text']} ${projectStyles['heading1']} `}
              >
                <span>We make your wedding or event sound awesome.</span>
              </h1>
              <span className={styles['text02']}>
                <span>
                  Sound is often the last thing you think of, but the first
                  thing people notice when it isn&apos;t done with excellence.
                  We&apos;ve been to too many wedding where the sound was
                  cringe-worthy, so we decided to do something about it.
                </span>
              </span>
            </div>
          </div>
          <div className={styles['gallery']}>
            <div className={styles['container01']}>
              <div className={styles['gallery-card']}>
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1535185384036-28bbc8035f28?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                  className={styles['image']}
                />
              </div>
              <div className={styles['gallery-card1']}>
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1620899210227-5a745efd8a67?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                  className={styles['image1']}
                />
              </div>
            </div>
            <div className={styles['container02']}>
              <div className={styles['gallery-card2']}>
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1578730169862-749bbdc763a8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fG91dGRvb3IlMjB3ZWRkaW5nfGVufDB8fHx8MTY1MjE2MTExNA&amp;ixlib=rb-1.2.1&amp;w=800"
                  className={styles['image2']}
                />
              </div>
              <div className={styles['gallery-card3']}>
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1466428996289-fb355538da1b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                  className={styles['image3']}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={` ${styles['about']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width1']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['text-container']}>
              <span className={styles['text04']}>about us</span>
              <h2
                className={` ${styles['text05']} ${projectStyles['heading2']} `}
              >
                <span>A couple of friends who like sound</span>
              </h2>
              <div className={styles['container03']}>
                <div className={styles['container04']}>
                  <div className={styles['container05']}></div>
                  <div className={styles['container06']}></div>
                </div>
                <div className={styles['container07']}>
                  <h3 className={styles['text07']}>Quinton Cluff</h3>
                  <h3 className={styles['text08']}>Neale Sheneman</h3>
                </div>
              </div>
            </div>
            <div className={styles['image-container']}></div>
          </div>
          <span className={styles['text09']}>
            The two of us have run sound for many years at our local churches,
            and for a campus ministry at UAA called Chi Alpha. We both have been
            in roles where we have been in leadership over all aspects of the
            audio engineering operation. This has given us the opportunity to
            really learn what it takes to ensure an event has top-notch audio
            production and is free from distracting technical difficulties.
          </span>
        </div>
        <div
          className={` ${styles['process']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width2']} ${projectStyles['max-content-container']} `}
          >
            <span className={styles['text10']}>OUR SERVICES</span>
            <h2
              className={` ${styles['text11']} ${projectStyles['heading2']} `}
            >
              <span>No-Problem Sound Solutions</span>
            </h2>
            <div className={styles['step']}>
              <span className={styles['text13']}>01</span>
              <div className={styles['container08']}>
                <span className={styles['text14']}>Portable</span>
                <span className={styles['text15']}>
                  Want to have your wedding outside, far away from any power
                  source? No problem.
                </span>
              </div>
            </div>
            <div className={styles['step1']}>
              <span className={styles['text16']}>02</span>
              <div className={styles['container09']}>
                <span className={styles['text17']}>Flexible</span>
                <span className={styles['text18']}>
                  Whether you just have a couple of people talking into a
                  microphone or a full band, accommodating your specific needs
                  is no problem.
                </span>
              </div>
            </div>
            <div className={styles['step2']}>
              <span className={styles['text19']}>03</span>
              <div className={styles['container10']}>
                <span className={styles['text20']}>
                  Convenient
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text21']}>
                  You&apos;ll rest easy knowing that everyone will be able to
                  hear you well.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={` ${styles['banner']} ${projectStyles['section-container']} `}
        ></div>
      </main>
      <div className={projectStyles['section-container']}>
        <div className={projectStyles['max-content-container']}>
          <div className={styles['top-part']}>
            <div className={styles['links-container']}>
              <div className={styles['contact-container']}>
                <span className={styles['text22']}>Contact Us</span>
                <a
                  href="mailto:simplesoundak@gmail.com?subject="
                  className={styles['link']}
                >
                  simplesoundak@gmail.com
                </a>
                <div className={styles['container11']}>
                  <div className={styles['container12']}>
                    <div className={styles['container13']}>
                      <div className={styles['container14']}>
                        <a
                          href="https://www.instagram.com/simplesoundak/"
                          target="_blank"
                          rel="noreferrer noopener"
                          className={styles['link1']}
                        >
                          <svg
                            viewBox="0 0 877.7142857142857 1024"
                            className={styles['icon']}
                          >
                            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon2']}
                  >
                    <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['separator']}></div>
        <footer
          className={` ${styles['max-width4']} ${projectStyles['max-content-container']} `}
        >
          <img
            alt="image"
            src="/playground_assets/simple%20sound-200h.png"
            className={styles['image4']}
          />
        </footer>
      </div>
    </div>
  )
}

export default Home
