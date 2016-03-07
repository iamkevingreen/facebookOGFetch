Meteor Powered Facebook Open Graph Re-Scraper
=======

Built a little application that accepts an XML sitemap, typically from something like [YOAST SEO](https://wordpress.org/plugins/wordpress-seo/) that tells facebook Open Graph to reindex those pages. I've had various issues with having to reindex various pages with the [facebook debugger](https://developers.facebook.com/tools/debug/) tool so I went ahead and built one that does it for us.

---

The app requires [Meteor](http://meteor.com), which can be downloaded in your terminal via the following command:

`curl https://install.meteor.com/ | sh`

Once installed git pull the repo and navigate to the root, and run `meteor` in the root.

Navigate to `http://localhost:3000` you can upload an xml file and check the server log for the response.
