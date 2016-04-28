$('#btn-send').click(function() {
  // Please set your email in url field
  $('#btn-send').click(function() {
  $.ajax({
      url: "https://formspree.io/uljka@yahoo.com",  
      method: "POST",
      data: {
             email: email.value,
             message: msg.value
             },
      dataType: "json"
  }).done(function() {
     $('#container').html('<h1>Thank you!</h1>')
  } );
});