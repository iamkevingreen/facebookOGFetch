import React from 'react';

const App = React.createClass({
  render() {
    return <div className="app-root">
      <div className="container">
        <h2>Facebook Data Fetch</h2>
        <a href="https://developers.facebook.com/tools/debug/">Mass version of the facebook Debugger</a>
        <h4>Supported Sitemaps: <a href="https://wordpress.org/plugins/wordpress-seo/">Yoast</a></h4>
        <p>For those of you using wordpress, you can install the Yoast SEO plugin to generate XML
        sitemaps. We currently only support single paged XML docs. So if you're using yoast it would be something like the
        `page-sitemap.xml`. </p>

        {this.props.content}
      </div>
    </div>;
  }
});

export {App};
