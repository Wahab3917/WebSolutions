// PROJECTS WORK COUNTER-UP JQUERY PLUGIN CODE

$('.count').counterUp({
  delay: 10,
  time: 1000
});

// SCROLL TO TOP BTN CODE

myScrollBtn = document.getElementById('myScrollBtn');

window.onscroll = function() {
  scroll();
};

// When the user scrolls down 50px from the top of the document
function scroll() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    myScrollBtn.style.display = 'block';
  }

  else {
    myScrollBtn.style.display = 'none';
  }
}

// When the user clicks on the button

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Others
}


