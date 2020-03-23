var contactForm = document.querySelector('form');



function validateForm(event) {
    event.preventDefault();

    var form = document.querySelector('text');
    var fields = form.querySelectorAll('.required');
    var valid = true;
    for (var i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            valid = false;
        }
    }
    if (valid == true) {
        var submit = form.querySelector('[type=submit]');
        submit.removeAttribute('class');
    }
}

function validateRequired(event) {
    var target = event.target;
    var parent = target.parentElement;
    var error = '<label class="error">Please fill out form!</label>';

    if (!target.value.length) {
        if (!parent.querySelector('.error')) {
            parent.insertAdjacentHTML('beforeend', error);
        }
    } else {
        parent.removeChild(parent.querySelector('.error'));
    }
}

var contactFields = contactForm.querySelectorAll('.required');
for (let i = 0; i < contactFields.length; i++) {
    contactFields[i].addEventListener("input", validateForm);
    contactFields[i].addEventListener("blur", validateRequired);
}

function send(event) {
    event.preventDefault();
    var form = document.querySelector('form');
    var message = '<h2>Thank You!</h2><p> Thanks for contacting me! The game of golf is a great way to enjoy the outdoors, exercise and have fun! </p>';

    var target = event.target;
    var disabled = target.classList.contains('.disabled');

    if (disabled === false) {
        form.innerHTML = message;
    }
    /*else {
        document.getElementById('button').disabled = false;
    }*/
}


var submit = contactForm.querySelector('[type=submit]');
submit.addEventListener('click', send);