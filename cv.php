<!-- ODD BEHAVIOUR: The second to last div is always skipped in the
sidenav and does not become active when scrolled to.  -->

  <?php include("partials/header.html"); ?>
  <link rel="stylesheet" href="assets/styles/cvstyle.css">
  <body data-spy="scroll" data-target="#myScrollspy" data-offset="20">
    <div class="container">
      <div class="row">
        <nav class="col-sm-2 hidden-xs" id="myScrollspy">
          <ul class="nav nav-stacked">
            <li class="active"><a href="#top">Top</a></li>
            <li><a href="#section1">Programming</a></li>
            <li><a href="#section2">Development</a></li>
            <li><a href="#section3">Front-End/UX</a></li>
            <li><a href="#section4">APIs/Libs</a></li>
            <li><a href="#section5">Education</a></li>
          </ul>
        </nav>

        <div class="col-sm-10 col-xs-12">
          <div id="section1" class="container">
            <!-- <div class="container"> -->
              <h1>Programming Languages</h1>
              <ul>
                <li>Ruby</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Swift (Learning)</li>
              </ul>
            <!-- </div> -->
          </div>
          <div id="section2" class="container">
            <h1>App Development</h1>
            <ul>
              <li>Ruby on Rails Backend</li>
              <li>NodeJS w/ Express Backend</li>
              <li>PostgreSQL Database</li>
              <li>Heroku Deployment</li>
            </ul>
          </div>
          <div id="section3" class="container">
            <h1>Front-End/UX/Testing</h1>
            <ul>
              <li>Bootstrap Framework</li>
              <li>Wordpress</li>
              <li>Responsive Design</li>
              <li>Test driven development with rspec, jest, capybara</li>
            </ul>
          </div>
          <div id="section4" class="container">
            <h1>Network, APIs, and Libraries</h1>
            <ul>
              <li>ReactJS with Redux</li>
              <li>VueJS with Vuex</li>
              <li>Google Maps API</li>
              <li>Heroku Deployment</li>
            </ul>
          </div>
          <div id="section5" class="container">
            <h1>Education</h1>
            <ul>
              <li>B.S. Earth and Planetary Science - UC Santa Cruz</li>
              <li>M.A.T. Earth Science Education - American Museum of Natural History</li>
              <li>Software Engineering Track - App Academy SF</li>
            </ul>
          </div>
      </div>
    </div>
    <script type="text/javascript" src="assets/js/cv.js"></script>
    <!-- <script type="text/javascript" src="assets/js/topofscreen.js"></script> -->
    <!-- <script type="text/javascript"src="assets/js/cvscroll.js"></script> -->
  </body>
</html>
