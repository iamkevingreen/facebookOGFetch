import React from 'react';
import {xml2obj} from 'nodexml';

export const Index = React.createClass({
  handleSubmit(event) {
    event.preventDefault();

    let file = document.getElementById('file').files[0];
        fr = new FileReader();

    fr.onload = function(e) {

      let obj = xml2obj(fr.result);
      let urls = obj.urlset.url;

      urls.map((url) => {
        let location = url.loc;
        Meteor.call('facebook', location);
      });
    }

    fr.readAsText(file);

    // Meteor.call('facebook');
  },
  render() {
    return (
      <div className="">
        <form id="scrape" onSubmit={this.handleSubmit}>
          <input type="file" required id="file" ref="redirect" /><br />
          <input type="submit" className="btn" value="Submit" />
        </form>
      </div>
    )
  }
})
