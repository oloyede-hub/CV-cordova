App.controller('home', function (page) {
    // put stuff here
  });

  App.controller('about', function (page) {
    // put stuff here
  });
  App.controller('skill', function (page) {
    // put stuff here
  });
  App.controller('experience', function (page) {
    // put stuff here
  });

  try {
    App.restore();
  } catch (err) {
    App.load('home');
  }