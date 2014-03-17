var ngInstagram = angular.module('instagram', []);

ngInstagram.controller('InstagramCtrl', function () {
});


/**
 *
 *
 */

ngInstagram.factory('InstagramStream', function () {
  return {
    stream : {
      type : "tag",
      meta : "yolo",
      location : {
        longitude : +70,
        latitude  : -70,
        radius    : 1000
      },
      description : "Instagram stream describing yolo"
    }
  };
});

/**
 * Sample Controller for Data-binding
 *
 */

ngInstagram.controller('WhateverCtrl', function ($scope, InstagramStream) {
  $scope.stream = InstagramStream.stream;
});

/**
 *
 *
 */
ngInstagram.directive('instagram', [ '$http', function ($http) {
  return {
    restrict : 'E',
    scope : {
      type : "=type",
      meta : "=meta"
    },
    templateUrl : 'instagram.html',
    link : _link
  };

  /**
   *
   *
   */
  function _link (scope, element, attrs) {
    scope.type = attrs.type;
    scope.meta = attrs.meta;
    scope.refresh = Number(attrs.refresh);
    scope.refresh = scope.refresh > 0 ? scope.refresh : -1;

    var url = '';
    url += 'https://api.instagram.com/v1/tags/';
    url += attrs.meta;
    url += '/media/recent?client_id=' + attrs.clientId;

    // Retrieve Information from JSONP
    $.ajax({ method : 'GET', url : url, dataType : 'JSONP' })
      .success(function (json) {
        var results = json.data;
        console.log(results);
        for (var i=0; i < results.length; i++) {
          var container     = document.createElement('DIV');
          var instagramItem = results[i];
          var itemEl        = createElement(instagramItem);
          if (itemEl !== undefined)
            $(element).append(itemEl);
        }
      })
      .error(function () {
        // TODO: Write an error message handler
      });

    var refreshTimeout = scope.refresh;
    function refreshFunction () {
      console.log('>>');
    }
    setInterval(refreshFunction, refreshTimeout);
  }

  /**
   * Create An Element Containing a Piece of Instagram Media
   * Returns a DOM-Element representing a piece of Instagram media *or*
   * undefined. In particular, this is a DIV containing a single IMG or VIDEO
   * element.
   * @param {!InstagramMediaItem} item An object containing information about
   * the URL/Comments/User/Etc. of an Instagram element. This is one element
   * from the array of returned values.
   * @return {DOM Element} A dom element containing either a DIV, which in turn
   * contains an IMG or VIDEO
   */
  function createElement (item) {
    if (item.type === 'image')
      return createImageElement(item);
    if (item.type === 'video')
      return createVideoElement(item);
    return undefined;
    /**
     * Create An Element Containing an Instagram Image
     * Returns a DOM-Element representing a piece of Instagram Image *or*
     * undefined. In particular, this is a DIV containing a single IMG. This is
     * invoked by the locally defined function `createElement`.
     * * @param {!InstagramMediaItem} item An object containing information about
     * the URL/Comments/User/Etc. of an Instagram element. This is one element
     * from the array of returned values.
     * @return {DOM Element} A dom element containing either a DIV, which in turn
     * contains an IMG
     */
    function createImageElement (item) {
      var el = document.createElement('DIV');
      var img = new Image();
      var img_url = item.images.low_resolution.url;
      img.src = img_url;
      $(el).append(img);
      return el;
    }

    /**
     * Create An Element Containing an Instagram Image
     * Returns a DOM-Element representing a piece of Instagram Video *or*
     * undefined. In particular, this is a DIV containing a single VIDEO. This is
     * invoked by the locally defined function `createElement`.
     * * @param {!InstagramMediaItem} item An object containing information about
     * the URL/Comments/User/Etc. of an Instagram element. This is one element
     * from the array of returned values.
     * @return {DOM Element} A dom element containing either a DIV, which in turn
     * contains a VIDEO
     */
    function createVideoElement () {
      var el = document.createElement('DIV');
      return undefined;
    }
  }

  /**
   * Request Media Results Based on Type and Meta-Data
   * Request
   * @param String type a string specifying the type of data
   * @param Object meta an object containing meta information used by 
   * @return {!Promise} a promise object, sending an object to attach "success"
   * and "error" callbacks to, based on a HTTP-request
   */
  function request (type, meta) {
    // ...
    function requestTagMedia (tagName) {
    }
    // ...
    function requestUserMedia (userId) {
    }
    // ...
    function requestGeographyMedia (lng, lat, rad) {
    }
    // ...
    function requestLocationMedia (locId) {
    }
  }



}]);
