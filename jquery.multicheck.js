jQuery.fn.multicheck = function() {
  $(this).each(function(index, mselect) {
    // Get multipleselect name
    var name = $(mselect).attr('name');

    // Selected values
    var selected = $(mselect).val();

    // Create container with checkboxes
    var container = $('<div/>', {
      'class': 'multicheck'
    });

    // Get all options (keys and values)
    jQuery.each($(mselect).find('option'), function() {
      var value = $(this).attr('value');
      var key = $(this).html();

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
    $(mselect).after(container);
    $(mselect).remove();
  });
};
