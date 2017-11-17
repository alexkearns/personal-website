<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Alex Kearns</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="all,follow">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,700,800,400italic">
    <link rel="stylesheet" href="css/style.default.css" id="theme-stylesheet">
    <link rel="stylesheet" href="css/custom.css">
    <!-- Tweaks for older IEs--><!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script><![endif]-->
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <?php 

            if(isset($_GET['contactSuccess'])){
              if($_GET['contactSuccess'] == 'true'){
                echo "<div class='alert alert-success alert-dismissable fade in'>
                        <a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>
                        <strong>Success!</strong> I've received your message and look forward to getting in touch soon!
                      </div>";
              }
              else{
                echo "<div class='alert alert-danger alert-dismissable fade in'>
                        <a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>
                        <strong>Whoops!</strong> There was an issue submitting your contact form, please check the submission.
                      </div>";
              }
            }

          ?>
        </div>
      </div>
    </div>
    <section id="intro" class="text-intro no-padding-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-10">
            <h1>Hello.<br />I'm <span class="text-primary">Alex Kearns</span>, an expert in <span class="text-primary">IT solutions</span> living in Norwich</h1>
          </div>
        </div>
      </div>
    </section>

    <hr />

    <section id="about" class="section">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h2 class="heading">About me</h2>
          </div>
          <div class="col-sm-12">
            <div class="row">
              <div class="col-sm-6 text-left">
                <p>For most of my time, I'm a 3rd Year Computer Science Undergraduate at the University of East Anglia.</p>
                <p>Alongside my degree, I work for <a target="_new" href="https://www.ubisend.com">ubisend</a> building bespoke AI-driven chatbots for sales, service and HR.</p>
                <p class="margin-bottom--big">I'm passionate about giving back to the community. I do this through my position as a Trustee for a family charity, <a href="http://www.kearnsfoundation.org.uk">The Kearns Foundation</a> as well as an involvement in The Scout Association.</p>
                <div class="row">
                  <div class="col-xs-8 col-xs-offset-2">
                    <p><img src="img/profile.jpg" alt="This is me" class="image img-circle img-responsive"></p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <p>My expertise mainly falls in web development, however I have experience in integrating existing cloud based business solutions also. This could include full solution suites such as Office 365 or G Suite, or it could be just as simple as setting up an off-site backup to keep your important data safe.</p>

                <p>Due to my extensive work in the charity sector, I'm well placed to finding the best value solution for those who help make our world a better place. </p>
                <div class="skill-item">
                  <div class="progress-title">Front-End Development</div>
                  <div class="progress">
                    <div role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%;" class="progress-bar"><span class="sr-only">85</span></div>
                  </div>
                </div>
                <div class="skill-item">
                  <div class="progress-title">Back-End Development</div>
                  <div class="progress">
                    <div role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%;" class="progress-bar"><span class="sr-only">80</span></div>
                  </div>
                </div>
                <div class="skill-item">
                  <div class="progress-title">Charity Solutions</div>
                  <div class="progress">
                    <div role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%;" class="progress-bar"><span class="sr-only">90</span></div>
                  </div>
                </div>
                <div class="skill-item">
                  <div class="progress-title">Office 365</div>
                  <div class="progress">
                    <div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;" class="progress-bar"><span class="sr-only">60</span></div>
                  </div>
                </div>
                <div class="skill-item">
                  <div class="progress-title">G Suite</div>
                  <div class="progress">
                    <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%;" class="progress-bar"><span class="sr-only">70</span></div>
                  </div>
                </div>
                <div class="skill-item">
                  <div class="progress-title">Design</div>
                  <div class="progress">
                    <div role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;" class="progress-bar"><span class="sr-only">50</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 mt-big"></div>
        </div>
      </div>
    </section>
    <!--   *** CUSTOMERS ***-->
    <section id="customers" class="section background-gray-lightest">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="heading">Some of the people I've worked with</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-md-3">
            <div class="customer"><img src="/img/clients/build.jpg" title="The BUILD Charity" data-placement="bottom" data-toggle="tooltip" alt="" class="img-responsive"></div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="customer"><img src="/img/clients/tkf.jpg" title="The Kearns Foundation" data-placement="bottom" data-toggle="tooltip" alt="" class="img-responsive"></div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="customer"><img src="/img/clients/madgiraffe.jpg" title="MaD Giraffe" data-placement="bottom" data-toggle="tooltip" alt="" class="img-responsive"></div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="customer"><img src="/img/clients/scouts.jpg" title="1st Great and Little Plumstead Scouts" data-placement="bottom" data-toggle="tooltip" alt="" class="img-responsive"></div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact">
      <div class="container clearfix">
        <div class="row">
          <div class="col-md-12">
            <h2 class="heading">Got something you'd like to talk about?</h2>
            <p class="lead margin-bottom--big">Drop me a message and I'll get back to you soon</p>
            <div class="row">
              <div class="col-md-6">
                <form id="contact-form" method="post" action="contact.php" class="contact-form form">
                  <div class="controls">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="form-group">
                          <label for="name">Your firstname *</label>
                          <input type="text" name="name" id="name" placeholder="Enter your firstname" required="required" class="form-control">
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                          <label for="surname">Your lastname *</label>
                          <input type="text" name="surname" id="surname" placeholder="Enter your lastname" required="required" class="form-control">
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="email">Your email *</label>
                      <input type="email" name="email" id="email" placeholder="Enter your email" required="required" class="form-control">
                    </div>
                    <div class="form-group">
                      <label for="message">Your message for me *</label>
                      <textarea rows="4" name="message" id="message" placeholder="Enter your message" required="required" class="form-control"></textarea>
                    </div>
                    <div class="text-center">
                      <input type="submit" value="Send message" class="btn btn-primary btn-block">
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="footer__copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <p>&copy; Copyright 2017 Alex Kearns. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- Javascript files-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <script src="js/front.js"></script>
  </body>
</html>
