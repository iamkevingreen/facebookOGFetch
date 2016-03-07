import facebookScrape from 'facebook-scrape';

Meteor.methods({
   facebook(location) {
     check(location, String);

     facebookScrape(location, function (err, json) {
      // err will be an error if the scrape failed
      // json will be the data that json scraped (the values in the og-tags)
      if (err) {
        console.log(err);
      } else {
        console.log('response', json);
      }
    });
  }
});
