const checkedAmenities = {};
$('document').ready(function () {
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
