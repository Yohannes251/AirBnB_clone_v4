$('document').ready(function () {
  if ($('div#api_status').hasClass('available')) {
    $('div#api_status').removeClass('available');
  }
  $.get('http://0.0.0.0:5001/api/v1/status', function (response, status) {
    if (response.status === 'OK') {
      $('div#api_status').addClass('available');
    }
  });
  const checkedAmenities = {};

  $('.amenities input').change(function () {
    if (this.checked) {
      checkedAmenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete checkedAmenities[$(this).attr('data-id')];
    }
    if (Object.keys(checkedAmenities).length > 0) {
      $('.amenities h4').text(Object.values(checkedAmenities).join(', '));
    } else {
      $('.amenities h4').html('&nbsp;');
    }
  });

  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    type: 'POST',
    data: JSON.stringify({}),
    contentType: 'application/json',
    dataType: 'json',
    success: function (data, status) {
      if (status === 'success') {
        data.forEach((place) => $('section.places').append(`<article>
        <div class="title_box">
          <h2>${place.name}</h2>
          <div class="price_by_night">${place.price_by_night}</div>
        </div>
        <div class="information">
          <div class="max_guest">${place.max_guest} Guests</div>
                <div class="number_rooms">${place.number_rooms} Bedrooms</div>
                <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
        </div>
        <div class="user">
        </div>
        <div class="description">
          ${place.description}
        </div>
      </article>`));
      }
    }
  });
});
