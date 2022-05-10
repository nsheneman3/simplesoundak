import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes} lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <style
          dangerouslySetInnerHTML={{
            __html:
              'html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6 {  margin: 0;  padding: 0;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}',
          }}
        ></style>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n  html {\n    font-family: DM Sans;\n    font-size: 16px;\n  }\n\n  body {\n    font-weight: 400;\n    font-style:normal;\n    text-decoration: none;\n    text-transform: undefined;\n    letter-spacing: normal;\n    line-height: 1.3;\n    color: var(--dl-color-scheme-darkblue);\n    background-color: var(--dl-color-scheme-white);\n    \n  }\n\n  \n',
          }}
        ></style>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&amp;display=swap"
        ></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital,wght@0,400;1,400&amp;display=swap"
        ></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta charSet="utf-8"></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '</noscript><style>\n.services-card:hover > div{\nbackground-color: #fff\n}\n</style>\n\n<!-- Messenger Chat Plugin Code -->\n    <div id="fb-root"></div>\n\n    <!-- Your Chat Plugin code -->\n    <div id="fb-customer-chat" class="fb-customerchat">\n    </div>\n\n    <script>\n      var chatbox = document.getElementById(\'fb-customer-chat\');\n      chatbox.setAttribute("page_id", "102959789086958");\n      chatbox.setAttribute("attribution", "biz_inbox");\n    </script>\n\n    <!-- Your SDK code -->\n    <script>\n      window.fbAsyncInit = function() {\n        FB.init({\n          xfbml            : true,\n          version          : \'v13.0\'\n        });\n      };\n\n      (function(d, s, id) {\n        var js, fjs = d.getElementsByTagName(s)[0];\n        if (d.getElementById(id)) return;\n        js = d.createElement(s); js.id = id;\n        js.src = \'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js\';\n        fjs.parentNode.insertBefore(js, fjs);\n      }(document, \'script\', \'facebook-jssdk\'));\n    </script><noscript>',
          }}
        ></noscript>
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          id="___gatsby"
          key={`body`}
          dangerouslySetInnerHTML={{
            __html: props.body,
          }}
        />
        {props.postBodyComponents}
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<script src=\'https://unpkg.com/@teleporthq/teleport-custom-scripts\'></script>\n<script>\n      window.onload = () => {\n        const runAllScripts = () => {\n          initializeAllSliders();\n        };\n\n        const listenForUrlChanges = () => {\n          let url = location.href;\n          document.body.addEventListener(\n            "click",\n            () => {\n              requestAnimationFrame(() => {\n                if (url !== location.href) {\n                  runAllScripts();\n                  url = location.href;\n                }\n              });\n            },\n            true\n          );\n        };\n\n        const initializeAllSliders = () => {\n          const allSliders = document.querySelectorAll(\'[data-type="slider"]\');\n          allSliders.forEach((slider) => {\n            initializeSlider(slider);\n          });\n        };\n\n        const initializeSlider = (slider) => {\n          const slides = slider.querySelectorAll(\'[data-type="slide"]\');\n          const middle = Math.ceil(slides.length / 2);\n          let currentSlide = middle;\n\n          const nextSlideBtns = document.querySelectorAll(\n            \'[data-action="nextSlide"]\'\n          );\n          const previousSlideBtns = document.querySelectorAll(\n            \'[data-action="previousSlide"]\'\n          );\n\n          const changeSlide = (slideIndex, action) => {\n            currentSlide = slideIndex;\n\n            switch (action) {\n              case "next":\n                slideIndex === slides.length\n                  ? (currentSlide = 1)\n                  : currentSlide++;\n                break;\n              case "previous":\n                slideIndex === 1\n                  ? (currentSlide = slides.length)\n                  : currentSlide--;\n            }\n\n            const slide = slides[0];\n            if (!slide) {\n              console.error("No slides present");\n              return;\n            }\n            const style = window.getComputedStyle(slide);\n            slideWidth =\n              parseInt(style.width) +\n              parseInt(style.marginLeft) +\n              parseInt(style.marginRight);\n            const transformValue = -slideWidth * (currentSlide - middle);\n\n            slider.style.transform = `translateX(${transformValue}px)`;\n          };\n\n          previousSlideBtns.forEach((btn) => {\n            btn.addEventListener("click", () =>\n              changeSlide(currentSlide, "previous")\n            );\n          });\n\n          nextSlideBtns.forEach((btn) => {\n            btn.addEventListener("click", () =>\n              changeSlide(currentSlide, "next")\n            );\n          });\n        };\n\n        runAllScripts();\n      };\n</script>',
          }}
        ></div>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
