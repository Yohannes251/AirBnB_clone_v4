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
});
