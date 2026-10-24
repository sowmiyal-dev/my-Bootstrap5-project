  const bookingForm = document.getElementById('bookingForm');
  const bookingSuccess = document.getElementById('bookingSuccess');

  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!bookingForm.checkValidity()) {
      bookingForm.classList.add('was-validated');
      bookingSuccess.classList.remove('show');
      return;
    }

    bookingForm.classList.add('was-validated');
    bookingSuccess.classList.add('show');

  });


