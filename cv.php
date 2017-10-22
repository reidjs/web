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
            <li><a href="#section2">Back-End</a></li>
            <li><a href="#section3">Front-End</a></li>
            <li><a href="#section4">Science</a></li>
            <li><a href="#section5">Education</a></li>
          </ul>
        </nav>

        <div class="col-sm-10 col-xs-12">
          <div id="section1" class="container">
            <!-- <div class="container"> -->
              <ul>Programming Languages
                <li>Ruby</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>C/C++</li>
              </ul>
            <!-- </div> -->
          </div>
          <div id="section2" class="container">
            <ul>Back-End Development
              <li>SQL</li>
              <li>MongoDB</li>
              <li>NodeJS</li>
              <li>Apache Server</li>
            </ul>
          </div>
          <div id="section3" class="container">
            <ul>Front-End Development
              <li>jQuery</li>
              <li>NodeJS</li>
              <li>PHP</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          <div id="section4" class="container">
            <ul>Scientific Research
              <li>Mineralogy</li>
              <li>Astrophysics</li>
              <li>Geology</li>
            </ul>
          </div>
          <div id="section5" class="container">
            <ul>Education
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
