$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
        event.preventDefault(); 
        const formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        };
        $.ajax({
            type: 'POST',
            url: '/contact',
            data: JSON.stringify(formData),
            contentType: 'application/json',
            success: function(response) {
                alert('Well done your details got saved');
                $('#contactForm')[0].reset();
            },
            error: function(error) {
                alert('Oops! there is an error: ' + error.responseText);
            }
        });
    });
  });
  