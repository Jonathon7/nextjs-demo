import Layout from "../components/Layouts";

export default () => (
  <Layout>
    <div className="home-cont">
      <h1 className="header">What's cool about Next.js? </h1>
      <div className="features-cont">
        <li>Automatically rendered on the server</li>
        <li>Automatic code splitting</li>
        <li>Built-in styled jsx support</li>
        <li>File-System Routing</li>
        <li>Prefetching Pages</li>
      </div>

      <div className="feature-description">
        <li>
          With Next.js, every component inside pages/ gets server-rendered
          automatically and their scripts inlined and styles scoped.
        </li>
        <li>
          Every import you declare gets bundled and served with each page. That
          means pages never load unnecessary code!
        </li>
        <li>
          We bundle styled-jsx to provide support for isolated scoped CSS. The
          aim is to support "shadow CSS" similar to Web Components, which
          unfortunately do not support server-rendering and are JS-only.
        </li>
        <li>
          Next.js will serve each file in /pages under a pathname matching the
          filename. For example, /pages/about.js is served at site.com/about.
        </li>
        <li>
          Next.js has an API which allows you to prefetch pages. Since Next.js
          server-renders your pages, this allows all the future interaction
          paths of your app to be instant. Effectively Next.js gives you the
          great initial download performance of a website, with the
          ahead-of-time download capabilities of an app.
        </li>
        <li>
          You can add prefetch prop to any Link and Next.js will prefetch those
          pages in the background.
        </li>
      </div>

      <style>{`
        .header {
            position: absolute;
            top: 14%;
            width: 100%;
            text-align: center;
        }

       .features-cont {
           position: absolute;
           top: 30%;
           left: 10%;
       }

       .features-cont li {
           margin: 8px;
           font-size: 25px;
           line-height: 1.8;
       }

       .feature-description {
           border: solid 2px lightgray;
           background-color:white;
           position: absolute;
           width: 45vw;
           height: 50vh;
           top: 30%;
           right: 5%;
           overflow:scroll;
           border-radius: 10px;
       }

       .feature-description li {
           line-height: 1.8;
           font-size: 20px;
           margin: 8px;
       }
    
    `}</style>
    </div>
  </Layout>
);
