jQuery.fn.multicheck = function() {
  // Get multipleselect name
  var name = $(this).attr('name');

  // Selected values
  var selected = $(this).val();

  // Get all options (keys and values)
  var values = {};
  $(this).find('option').each(function() {
    var key = $(this).attr('value');
    var value = $(this).html();
    values[key] = value;
  });

  // Create container with checkboxes
  var container = $('<div/>', {
    'class': 'multicheck'
  });
  jQuery.each(values, function(value, key) {
    var subcontainer = $('<div/>');

    var elementId = name+'_'+value;

    subcontainer.append($('<input/>', {
      'type': 'checkbox',
      'name': name,
      'value': value,
      'id': elementId,
      'checked': (-1 != jQuery.inArray(value, selected))
    }));

    subcontainer.append($('<label/>', {
      'for': elementId,
      'html': key
    }));

    container.append(subcontainer);
  });

  // Replace multiple select with miltiple checkboxes
  $(this).after(container);
  $(this).remove();
};
