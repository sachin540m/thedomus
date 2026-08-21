(function (Drupal) {
    'use strict';

    Drupal.behaviors.attribution = {
        attach: function (context) {

            const urlParams = new URLSearchParams(window.location.search);

            const attributionData = {
                page_url: window.location.href,
                referrer: document.referrer,
                utm_source: urlParams.get('utm_source') || '',
                utm_medium: urlParams.get('utm_medium') || '',
                utm_campaign: urlParams.get('utm_campaign') || ''
            };

            console.log('Attribution Data:', attributionData);
        }
    };

})(Drupal);