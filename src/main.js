import { shibe } from './shibe';
import $ from 'jquery';
import './styles.css';

$(document).ready(function() {
  $('#shibeLocation').click(function() {

    let request = new XMLHttpRequest();
    const url = `http://shibe.online/api/shibes?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]
    &appid=${process.env.API_KEY}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

   const getElements = function(response) {
      console.log(response);
      $('.showShibe').text(`Enjoy this ${response.main.humidity} picture!`);
    }
  });
});