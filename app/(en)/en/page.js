import Script from "next/script";

export default function Home() {
    return (
        <>
            <div
                dangerouslySetInnerHTML={{
                    __html: `
    <!-- Preloader -->
    <div class="preloader">
        <div class="loading-container">
            <div class="loading"></div>
            <div id="loading-icon"><img src="/assets/img/favicon.png" alt="img"></div>
        </div>
    </div>
    <!-- End Preloader -->

    <!-- Start Header Area -->
    <header class="header-area">
        <div class="top-header">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-8">
                        <ul class="header-contact-info">
                            <li><i class="fas fa-phone"></i> <a href="tel:966535195519">+966 53 519
                                    5519</a></li>
                            <li><i class="fa-regular fa-envelope"></i> <a
                                    href="mailto:support@almunifi.com"><span>support@almunifi.com</span></a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-lg-4">
                        <div class="header-right-content">
                            <ul class="top-header-social">
                                <li>
                                    <a target="_blank" href="https://www.tiktok.com/@DrAlMunifi">
                                        <i class="fab fa-tiktok"></i>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://x.com/DrAlMunifi">
                                        <i class="fa-brands fa-x-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://www.youtube.com/@DrAlMunifi">
                                        <i class="fab fa-youtube"></i>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://www.instagram.com/DrAlMunifi">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Start Navbar Area -->
        <div class="navbar-area">
            <div class="fovia-responsive-nav">
                <div class="container">
                    <div class="fovia-responsive-menu">
                        <div class="logo">
                            <a href="./">
                                <img src="/assets/img/logo.png" alt="logo">
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="fovia-nav">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <a class="navbar-brand" href="./">
                            <img src="/assets/img/logo.png" alt="logo">
                        </a>

                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item active"><a href="./" class="nav-link">Home</a>
                                </li>

                                <li class="nav-item"><a href="about.html" class="nav-link">About</a>
                                </li>

                                <li class="nav-item"><a href="types-of-operations.html" class="nav-link">Types of
                                        Bariatric
                                        Surgeries</a>
                                </li>

                                <li class="nav-item"><a href="blogs.html" class="nav-link">Blog</a>
                                </li>

                                <li class="nav-item">
                                    <a href="contact.html" class="nav-link">Contact us</a>
                                </li>

                                <li class="d-block d-lg-none nav-item">
                                    <a class="nav-link" href="/">
                                        <img src="/assets/img/saudi-arabia.png" alt="flag">
                                    </a>
                                </li>

                                <li class="d-block d-lg-none w-fit-content nav-item">
                                    <a href="contact.html" class="btn btn-primary nav-link">Book a consultation</a>
                                </li>
                            </ul>

                            <div class="others-options">
                                <a href="/">
                                    <img src="/assets/img/saudi-arabia.png" alt="flag">
                                </a>
                                <a href="contact.html" class="btn btn-primary">Book a consultation</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <!-- End Navbar Area -->
    </header>
    <!-- End Header Area -->

    <!-- Start Main Banner Area -->
    <div class="main-banner-video">
        <video playsinline list loop="" muted="" autoplay="" poster="#" class="background-video">
            <source src="/assets/img/banner-video.mov" type="video/mp4">
        </video>
        <div class="main-banner">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="main-banner-content">
                            <h1>Bariatric Surgery: Your Path to Fitness and Beauty</h1>
                            <p>
                                Bariatric surgery is the optimal choice for achieving fitness and beauty in a safe and
                                effective manner. With advanced
                                techniques and specialized medical supervision, you can now shed excess weight and enjoy
                                a healthier, more vibrant life.
                            </p>

                            <div class="btn-box">
                                <a href="contact.html" class="btn btn-primary">Book an Appointment
                                    <i class="fas fa-bell"></i>
                                </a>
                                <a href="types-of-operations.html" class="btn btn-light">
                                    Types of operations
                                    <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Main Banner Area -->

    <!-- Call To Action Start -->
    <div class="our-scrolling-ticker">
        <!-- Scrolling Ticker Start -->
        <div class="scrolling-ticker-box">
            <div class="scrolling-content">
                <span><img src="/assets/img/favicon.png" alt="icon">Gastroesophageal reflux</span>
                <span><img src="/assets/img/favicon.png" alt="icon">Cholecystectomy</span>
                <span><img src="/assets/img/favicon.png" alt="icon">Hernia surgeries</span>
                <span><img src="/assets/img/favicon.png" alt="icon">Obesity</span>
                <span><img src="/assets/img/favicon.png" alt="icon">Gastroesophageal reflux</span>
                <span><img src="/assets/img/favicon.png" alt="icon">Hernia surgeries</span>
                <span><img src="/assets/img/favicon.png" alt="icon">Obesity</span>
                <span><img src="/assets/img/favicon.png" alt="icon">Gastroesophageal reflux</span>
                <span><img src="/assets/img/favicon.png" alt="icon">Cholecystectomy</span>
                <span><img src="/assets/img/favicon.png" alt="icon">Hernia surgeries</span>
                <span><img src="/assets/img/favicon.png" alt="icon">Obesity</span>
            </div>

            <div class="scrolling-content">
                <span><img src="/assets/img/favicon.png" alt="icon">Gastroesophageal reflux</span>
                <span><img src="/assets/img/favicon.png" alt="icon">Cholecystectomy</span>
                <span><img src="/assets/img/favicon.png" alt="icon">Hernia surgeries</span>
                <span><img src="/assets/img/favicon.png" alt="icon">Obesity</span>
                <span><img src="/assets/img/favicon.png" alt="icon">Gastroesophageal reflux</span>
                <span><img src="/assets/img/favicon.png" alt="icon">Hernia surgeries</span>
                <span><img src="/assets/img/favicon.png" alt="icon">Obesity</span>
                <span><img src="/assets/img/favicon.png" alt="icon">Gastroesophageal reflux</span>
                <span><img src="/assets/img/favicon.png" alt="icon">Cholecystectomy</span>
                <span><img src="/assets/img/favicon.png" alt="icon">Hernia surgeries</span>
                <span><img src="/assets/img/favicon.png" alt="icon">Obesity</span>
            </div>
        </div>
    </div>
    <!-- Call To Action End -->

    <!-- Start About Area -->
    <section class="about-area py-lg-0 ptb-100">
        <div class="row align-items-center m-0">
            <div class="col-lg-6 col-md-12">
                <img src="/assets/img/about-img1.webp" class="w-100" alt="image">
            </div>

            <div class="col-lg-6 col-md-12">
                <div class="about-content">
                    <span>A Career Rich in Experience and Achievements</span>
                    <h2>Dr. Abdullah bin Musaed Al-Munifi, a History of Creativity and Excellence</h2>
                    <ul>
                        <li>
                            <i class="flaticon-check-mark"></i>
                            Specialty: General Surgery
                        </li>
                        <li>
                            <i class="flaticon-check-mark"></i>
                            Sub-specialty: Bariatric Surgery, Advanced Laparoscopy, and Robotics
                        </li>
                        <li>
                            <i class="flaticon-check-mark"></i>
                            Bachelor of Medicine and Surgery, King Saud University, Riyadh, Saudi Arabia (2010)
                        </li>
                        <li>
                            <i class="flaticon-check-mark"></i>
                            Higher Diploma in Bariatric Surgery and Metabolic Diseases, University of Côte d'Azur,
                            Nice, France (2016)
                        </li>
                        <li>
                            <i class="flaticon-check-mark"></i>
                            Higher Diploma in Advanced Laparoscopic Surgery for the Digestive System, Paris-Saclay
                            University, School of Surgery,
                            Paris, France (2016)
                        </li>

                        <li>
                            <i class="flaticon-check-mark"></i>
                            French Board in General Surgery and Digestive System Surgery, University of Côte d'Azur,
                            Nice, France (2018)
                        </li>

                        <li>
                            <i class="flaticon-check-mark"></i>
                            Canadian Fellowship in Bariatric Surgery, Advanced Laparoscopy, and Robotic Surgery,
                            Montreal, Canada (2022)
                        </li>
                    </ul>

                    <a href="about.html" class="btn btn-primary">
                        Discover the Details Now
                        <i class="flaticon-right-chevron"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <!-- End About Area -->

    <!-- Start Our Mission Area -->
    <section class="our-mission-area pb-lg-0 pt-lg-0 ptb-100">
        <div class="container-fluid p-0">
            <div class="row m-0">
                <div class="col-lg-6 col-md-12 p-0">
                    <div class="our-mission-content">
                        <span class="sub-title">Unique Advantages</span>
                        <h2>Discover the Benefits of Bariatric Surgery and Start Your Journey Toward Change</h2>
                        <p>
                            Bariatric surgery offers a variety of benefits for those suffering from obesity, including
                            improved health, increased
                            mobility, and enhanced self-esteem. Additionally:
                        </p>

                        <ul>
                            <li>
                                <div class="icon">
                                    <i class="fi fi-rr-doctor"></i>
                                </div>
                                <span>Health and Prevention</span>
                                Reducing health risks and achieving a healthier life.
                            </li>

                            <li>
                                <div class="icon">
                                    <i class="fi fi-rr-muscle"></i>
                                </div>
                                <span>Restoring Activity and Vitality</span>
                                Increasing mobility and enjoying higher daily energy levels.
                            </li>

                            <li>
                                <div class="icon">
                                    <i class="fi fi-rr-user-trust"></i>
                                </div>
                                <span>Boosting Self-Confidence</span>
                                Changing perceptions and increasing self-satisfaction.
                            </li>

                            <li>
                                <div class="icon">
                                    <i class="fi fi-rr-head-side-medical"></i>
                                </div>
                                <span>Achieving Psychological Stability</span>
                                Reducing stress and achieving better psychological balance.
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12 p-0">
                    <div class="our-mission-image">
                        <img src="/assets/img/find-out.webp" alt="image">
                    </div>
                </div>
            </div>
        </div>

        <div class="shape4"><img src="/assets/img/shape/3.png" class="wow fadeInLeft" alt="image"></div>
    </section>
    <!-- End Our Mission Area -->

    <!-- Start Our Mission Area -->
    <section class="our-mission-area pb-lg-0 pt-lg-0 ptb-100">
        <div class="container-fluid p-0">
            <div class="row m-0 flex-sm-row-reverse">
                <div class="col-lg-6 col-md-12 p-0">
                    <div class="our-mission-content">
                        <span class="sub-title">The Importance of Bariatric Surgery</span>
                        <h2>The Role of Bariatric Surgery in Improving Health</h2>
                        <p>
                            Bariatric surgery not only treats obesity but also addresses other conditions such as
                            diabetes, heart disease, high
                            blood pressure, joint pain, and acid reflux. Additionally, the surgery significantly reduces
                            the risk of death from
                            cancer, diabetes, heart disease, and other illnesses.
                        </p>

                        <ul>
                            <li>
                                <div class="icon">
                                    <i class="fi fi-rr-heart-rate"></i>
                                </div>
                                <span>Improving Heart Health</span>
                                Reducing blood pressure and cholesterol to improve heart health.
                            </li>

                            <li>
                                <div class="icon">
                                    <i class="fi fi-rr-arrow-comparison"></i>
                                </div>
                                <span>Increasing Oxygen Flow</span>
                                Enhancing oxygen delivery to tissues and muscles.
                            </li>

                            <li>
                                <div class="icon">
                                    <i class="fi fi-rr-laptop-medical"></i>
                                </div>
                                <span>Supporting Brain Health</span>
                                Reducing fat accumulation and improving blood flow.
                            </li>

                            <li>
                                <div class="icon">
                                    <i class="flaticon-laboratory"></i>
                                </div>
                                <span>Lowering Harmful Fat Levels</span>
                                Reducing saturated fats and harmful cholesterol to improve heart health.
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12 p-0">
                    <div class="our-mission-image our-mission-image-2">
                        <img src="/assets/img/improve.webp" alt="image">
                    </div>
                </div>
            </div>
        </div>

        <div class="shape3"><img src="/assets/img/shape/2.png" class="wow fadeInLeft" alt="image"></div>
    </section>
    <!-- End Our Mission Area -->

    <!-- Page Video Gallery Start -->
    <div class="page-video-gallery ptb-100 bg-f4f9fd">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Featured Video Library</span>
                <h2>Specialized Bariatric Surgery Content</h2>
                <p>
                    Explore everything you need to know about bariatric surgery through our featured videos!
                </p>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="video-gallery-image" data-cursor-text="Play">
                        <a href="https://www.youtube-nocookie.com/embed/4Olc7KZLKEc?rel=0&modestbranding=1&autoplay=1" class="popup-video">
                            <figure>
                                <img src="/assets/img/video-thumbnails/1.png" alt="video">
                            </figure>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="video-gallery-image" data-cursor-text="Play">
                        <a href="https://www.youtube-nocookie.com/embed/4Olc7KZLKEc?rel=0&modestbranding=1&autoplay=1" class="popup-video">
                            <figure>
                                <img src="/assets/img/video-thumbnails/2.webp" alt="video">
                            </figure>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="video-gallery-image" data-cursor-text="Play">
                        <a href="https://www.youtube-nocookie.com/embed/4Olc7KZLKEc?si=XrMBk_ZpPSNaruZ6?rel=0&modestbranding=1&autoplay=1" class="popup-video">
                            <figure>
                                <img src="/assets/img/video-thumbnails/3.webp" alt="video">
                            </figure>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="video-gallery-image" data-cursor-text="Play">
                        <a href="https://www.youtube-nocookie.com/embed/kVbs8IwkqIk?si=hBvq0q5WYh1Chl02?rel=0&modestbranding=1&autoplay=1" class="popup-video">
                            <figure>
                                <img src="/assets/img/video-thumbnails/4.webp" alt="video">
                            </figure>
                        </a>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="more-services-btn">
                        <a href="https://www.youtube.com/@DrAlMunifi" target="_blank" class="btn btn-primary">
                            Explore More By Videos
                            <i class="flaticon-right-chevron"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Page Video Gallery End -->

    <!-- Photo Gallery Section Start -->
    <div class="page-gallery ptb-100">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">
                    A healthy journey begins with a step and a decision
                </span>
                <h2>
                    Your guide to a better, healthier life
                </h2>
                <p>
                    Start now — because your health deserves a new beginning
                </p>
            </div>
            <!-- gallery section start -->
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="video-gallery-image" data-cursor-text="Watch">
                        <a href="/assets/img/Infographic/02.pdf" class="popup-video Infographic">
                            <figure>
                                <img src="/assets/img/Infographic/Thumbnail/Infographic Thumbnail 02 .webp"
                                    alt="video">
                            </figure>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="video-gallery-image" data-cursor-text="Watch">
                        <a href="/assets/img/Infographic/06.pdf" class="popup-video Infographic">
                            <figure>
                                <img src="/assets/img/Infographic/Thumbnail/Infographic Thumbnail 06.webp"
                                    alt="video">
                            </figure>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="video-gallery-image" data-cursor-text="Watch">
                        <a href="/assets/img/Infographic/07.pdf" class="popup-video Infographic">
                            <figure>
                                <img src="/assets/img/Infographic/Thumbnail/Infographic Thumbnail 07.webp"
                                    alt="video">
                            </figure>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="video-gallery-image" data-cursor-text="Watch">
                        <a href="/assets/img/Infographic/08.pdf" class="popup-video Infographic">
                            <figure>
                                <img src="/assets/img/Infographic/Thumbnail/Infographic Thumbnail 08.webp"
                                    alt="video">
                            </figure>
                        </a>
                    </div>
                </div>
            </div>
            <!-- gallery section end -->
        </div>
    </div>
    <!-- Photo Gallery Section End -->

    <!-- Our Counter Section Start -->
    <div class="hc-appointment-wrapper hc-sections ptb-100 bg-f4f9fd" id="calc">
        <div class="container">
            <div class="hc-appointment-row">
                <div class="hc-appointmnet-text">
                    <div class="hc-about-top">
                        <span class="sub-title">Body Mass Index (BMI) | Your Guide to Better Understanding Your Weight
                            and Health</span>
                        <h2 class="hc-about-head">Quickly Assess Your Health Status Using Body Mass Index BMI</h2>
                        <p class="hc-paragraph">
                            BMI is calculated using your weight and height (weight divided by height squared). Along
                            with other factors such as
                            blood pressure and cholesterol, BMI can help estimate the risk of heart disease or stroke.
                        </p>
                        <form class="form" id="bmiForm">
                            <input type="number" id="height" class="form-control" placeholder="Enter your height (cm)"
                                required="">
                            <input type="number" id="weight" class="form-control" placeholder="Enter your weight (kg)"
                                required="">
                            <button type="submit" class="form-control">Calculate</button>
                        </form>
                    </div>
                </div>
                <div class="bmi-table">
                    <div class="bmi-head">
                        <i class="fas fa-tachometer-alt"></i> Block Indicators Sections
                    </div>
                    <ul class="mk-list bmi-list">
                        <li>Less than 18.5</li>
                        <li>Underweight</li>
                        <li>18.5 to 24.9</li>
                        <li>Healthy weight</li>
                        <li>25 to 29.9</li>
                        <li>Overweight</li>
                        <li>30 to 34.9</li>
                        <li>Grade I obesity
                        </li>
                        <li>35 to 39.9</li>
                        <li>Grade II obesity
                        </li>
                        <li>40 or more</li>
                        <li>Grade III obesity
                        </li>
                    </ul>
                    <p class="text-center">Note: The BMI table remains unchanged.</p>
                </div>
                <div class="layout" style="display: none;">
                    <div class="result">
                        <i class="fa-solid fa-xmark"></i>
                        <div class="result-text">
                            Result
                        </div>
                        <span class="status">

                        </span>
                        <div class="calc_info_line">
                            <div class="calc_info_line_result_wrapper" style="left: 0;">
                                <div class="calc_info_line_result">
                                    You
                                </div>
                            </div>
                            <div class="calc_info_line_underweight calc">
                                Weight loss </div>
                            <div class="calc_info_line_healthy calc">
                                healthy </div>
                            <div class="calc_info_line_overweight calc">
                                Overweight </div>
                            <div class="calc_info_line_obese calc">
                                obese </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Our Counter Section End -->

    <!-- Start Services Area -->
    <section class="services-area ptb-100">
        <div class="container">
            <div class="section-title">
                <span>Bariatric Surgeries</span>
                <h2>Explore the Latest Types of Bariatric Surgeries and Start Your Health Transformation Journey</h2>
                <p>
                    Review all types of bariatric surgeries and learn all the details related to each option!
                </p>
            </div>

            <div class="row gy-4">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-services-box bg-1">
                        <div class="icon">
                            <img src="/assets/img/icons/تكميم المعدة.webp" alt="icon">
                        </div>
                        <h3>
                            <a href="operation-details/sleeve-gastrectomy.html">Sleeve Gastrectomy</a>
                        </h3>
                        <p>
                            Sleeve gastrectomy is one of the most common bariatric surgeries worldwide, known for its
                            high effectiveness...
                        </p>

                        <a href="operation-details/sleeve-gastrectomy.html" class="read-more-btn">Read more <i
                                class="fas fa-arrow-right"></i></a>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-services-box bg-1">
                        <div class="icon">
                            <img src="/assets/img/icons/ربط المعدة.webp" alt="icon">
                        </div>
                        <h3>
                            <a href="operation-details/gallbladder-removal.html">
                                Gallbladder Removal
                            </a>
                        </h3>
                        <p>
                            Gallbladder removal is a surgical procedure used to remove the gallbladder when gallstones
                            cause pain or recurrent
                            inflammation.
                        </p>

                        <a href="operation-details/gallbladder-removal.html" class="read-more-btn">Read more <i
                                class="fas fa-arrow-right"></i></a>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-services-box ">
                        <div class="icon">
                            <img src="/assets/img/icons/تحويل المسار المصغر.webp" alt="icon">
                        </div>
                        <h3>
                            <a href="operation-details/mini-gastric-bypass.html">Mini Gastric Bypass</a>
                        </h3>
                        <p>
                            Mini gastric bypass is a simpler procedure than traditional gastric bypass but offers
                            similar results in weight loss...
                        </p>

                        <a href="operation-details/mini-gastric-bypass.html" class="read-more-btn">Read more
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

            </div>

            <a href="types-of-operations.html" class="btn btn-primary">Explore Other Surgical Options
                <i class="flaticon-right-chevron"></i>
            </a>
        </div>
    </section>
    <!-- End Services Area -->

    <!-- Start Feedback Area -->
    <section id="feedbacks" class="feedback-area ptb-100 bg-f4f9fd">
        <div class="container">
            <div class="section-title">
                <span>Customer Reviews</span>
                <h2>Reviews Reflecting Our Excellence</h2>
                <p>
                    Discover real experiences from our clients who chose to transform their lives with us. Honest
                    reviews reflect their
                    successes and satisfaction with our care.
                </p>
            </div>

            <div class="feedback-slides">
                <div class="client-thumbnails">
                    <div>
                        <div class="item">
                            <div class="img-fill"><img src="/assets/img/client-image/1.png" alt="client"></div>
                        </div>

                        <div class="item">
                            <div class="img-fill"><img src="/assets/img/client-image/2.png" alt="client"></div>
                        </div>


                        <div class="item">
                            <div class="img-fill"><img src="/assets/img/client-image/1.png" alt="client"></div>
                        </div>

                        <div class="item">
                            <div class="img-fill"><img src="/assets/img/client-image/2.png" alt="client"></div>
                        </div>


                        <div class="item">
                            <div class="img-fill"><img src="/assets/img/client-image/1.png" alt="client"></div>
                        </div>

                        <div class="item">
                            <div class="img-fill"><img src="/assets/img/client-image/2.png" alt="client"></div>
                        </div>

                    </div>
                </div>

                <div class="client-feedback">
                    <div>
                        <div class="item">
                            <div class="single-feedback">
                                <img src="/assets/img/feedback/1.webp" alt="image">
                            </div>
                        </div>

                        <div class="item">
                            <div class="single-feedback">
                                <img src="/assets/img/feedback/2.jpg" alt="image">
                            </div>
                        </div>

                        <div class="item">
                            <div class="single-feedback">
                                <img src="/assets/img/feedback/1.webp" alt="image">
                            </div>
                        </div>

                        <div class="item">
                            <div class="single-feedback">
                                <img src="/assets/img/feedback/1.webp" alt="image">
                            </div>
                        </div>

                        <div class="item">
                            <div class="single-feedback">
                                <img src="/assets/img/feedback/1.webp" alt="image">
                            </div>
                        </div>

                        <div class="item">
                            <div class="single-feedback">
                                <img src="/assets/img/feedback/1.webp" alt="image">
                            </div>
                        </div>

                    </div>

                    <button class="next-arrow slick-arrow">
                        <i class='flaticon-arrow-pointing-to-right'></i>
                    </button>

                    <button class="prev-arrow slick-arrow">
                        <i class='flaticon-left-arrow'></i>
                    </button>


                </div>
            </div>
        </div>
    </section>
    <!-- End Feedback Area -->

    <!-- Start FAQ Area -->
    <section class="faq-area">
        <div class="container-fluid p-0">
            <div class="row m-0">
                <div class="col-lg-6 col-md-12 p-0">
                    <div class="faq-image">
                        <img src="/assets/img/our-work.webp" alt="image">
                    </div>
                </div>

                <div class="col-lg-6 col-md-12 p-0">
                    <div class="faq-accordion">
                        <span class="sub-title">Frequently Asked Questions</span>
                        <h2>Learn Everything You Need to Know About Bariatric Surgery!</h2>

                        <ul class="accordion">
                            <li class="accordion-item">
                                <a class="accordion-title active" href="javascript:void(0)">
                                    <i class="fas fa-plus"></i>
                                    Who is Not Suitable for Weight Loss Surgery?
                                </a>

                                <p class="accordion-content show">
                                    Individuals who do not meet BMI criteria are usually not suitable for bariatric
                                    surgery. Someone may meet BMI criteria,
                                    but after consulting with the surgeon, it may be determined that the individual
                                    risks outweigh the potential benefits of
                                    the surgery. These situations are rare and are discussed individually with your care
                                    team.

                                </p>
                            </li>

                            <li class="accordion-item">
                                <a class="accordion-title" href="javascript:void(0)">
                                    <i class="fas fa-plus"></i>
                                    How Much Does Bariatric Surgery Cost?

                                </a>

                                <p class="accordion-content">
                                    The cost of the procedure depends on the patient, the surgery, and any complications
                                    that may arise after the surgery.
                                    In many cases, insurance companies cover the cost of the surgery because severe
                                    obesity can be a life-threatening
                                    condition. You should speak with your insurance company to confirm coverage and any
                                    related expenses.

                                </p>
                            </li>

                            <li class="accordion-item">
                                <a class="accordion-title" href="javascript:void(0)">
                                    <i class="fas fa-plus"></i>
                                    Can Laparoscopic Surgery Be Performed If I’ve Had Previous Abdominal Surgery?

                                </a>

                                <p class="accordion-content">
                                    The surgeon will evaluate you on an individual basis. It is possible to perform
                                    laparoscopic gastric bypass after
                                    previous abdominal surgery or other laparoscopic procedures. Our surgeons believe
                                    that every patient has the right to
                                    choose the least invasive surgical option.

                                </p>
                            </li>

                            <li class="accordion-item">
                                <a class="accordion-title" href="javascript:void(0)">
                                    <i class="fas fa-plus"></i>
                                    What Happens to the Stomach? Does It Shrink?

                                </a>
                                <p class="accordion-content">
                                    The remaining stomach becomes smaller over time as it is no longer stretched by
                                    food. However, it still serves the basic
                                    purpose of producing stomach acid and enzymes to help digest food.

                                </p>
                            </li>

                            <li class="accordion-item">
                                <a class="accordion-title" href="javascript:void(0)">
                                    <i class="fas fa-plus"></i>
                                    How Long Will I Stay in the Operating Room?

                                </a>

                                <p class="accordion-content">
                                    Bariatric surgery typically takes between 30 minutes to two hours.
                                </p>
                            </li>

                            <li class="accordion-item">
                                <a class="accordion-title" href="javascript:void(0)">
                                    <i class="fas fa-plus"></i>
                                    Do I Need to Be in Good Health to Undergo Surgery?
                                </a>

                                <p class="accordion-content">
                                    Many individuals with severe obesity suffer from poor health due to obesity-related
                                    conditions such as diabetes, high
                                    blood pressure, heart problems, lung issues, and kidney difficulties. Patients must
                                    be medically cleared and able to
                                    undergo general anesthesia.
                                </p>
                            </li>

                            <li class="accordion-item">
                                <a class="accordion-title" href="javascript:void(0)">
                                    <i class="fas fa-plus"></i>
                                    How Do I Know Which Procedure Is Best for Me?
                                </a>

                                <p class="accordion-content">
                                    Each procedure is discussed in detail during our counseling sessions, allowing you
                                    to determine the most suitable
                                    option. These procedures will also be discussed with the surgeon during your initial
                                    consultation.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End FAQ Area -->

    <!-- Start Blog Area -->
    <section class="blog-area ptb-100 bg-f4f9fd">
        <div class="container">
            <div class="section-title">
                <span>Blog and Latest Articles</span>
                <h2>Read Our Featured Articles Now</h2>
                <p>
                    Discover the secrets to successful bariatric surgeries. Browse our articles now and start your
                    journey toward a
                    healthier, more vibrant life.
                </p>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="post-image">
                            <a href="blog/deep-vein-thrombosis.html">
                                <img src="/assets/img/blog/2.webp" alt="image">
                            </a>
                        </div>

                        <div class="post-content">
                            <h3>
                                <a href="blog/deep-vein-thrombosis.html">
                                    Deep Vein Thrombosis
                                </a>
                            </h3>
                            <p>
                                is a serious medical condition that occurs when a blood clot forms in the deep veins...
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="more-services-btn">
                        <a href="blogs.html" class="btn btn-primary">
                            More Articles
                            <i class="flaticon-right-chevron"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End Blog Area -->

    <!-- Start Footer Area -->
    <section class="footer-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <div class="logo">
                            <a href="./">
                                <img src="/assets/img/logo.png" alt="image">
                            </a>
                            <p>
                                With Dr. Abdullah Al-Munifi’s expertise, prepare to achieve the transformation you’ve
                                always dreamed of. Choose the
                                ideal bariatric surgery for you and start your journey toward a healthy life and an
                                ideal body.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget pl-5">
                        <h3>Quick Links</h3>
                        <ul class="departments-list">
                            <li><a href="./">Home</a></li>
                            <li><a href="about.html">About the Doctor</a></li>
                            <li><a href="blogs.html">Blog</a></li>
                            <li><a href="#calc">Body Mass Index</a></li>
                            <li><a href="#feedbacks">Customer Reviews</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget pl-5">
                        <h3>Operations</h3>

                        <ul class="links-list">
                            <li>
                                <a href="operation-details/sleeve-gastrectomy.html">Sleeve Gastrectomy</a>
                            </li>
                            <li>
                                <a href="operation-details/gallbladder-removal.html">
                                    Gallbladder Removal
                                </a>
                            </li>
                            <li>
                                <a href="operation-details/mini-gastric-bypass.html">Mini Gastric Bypass</a>
                            </li>
                            <li>
                                <a href="operation-details/laparoscopic-hernia-repair.html">
                                    Laparoscopic Hernia Repair
                                </a>
                            </li>
                            <li>
                                <a href="operation-details/laparoscopic-extraperitoneal-abdominoplasty.html">
                                    Laparoscopic Extraperitoneal abdominoplasty
                                </a>
                            </li>
                            <li>
                                <a href="operation-details/classic-gastric-bypass.html">
                                    Classic Gastric Bypass
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Social Media</h3>
                        <ul class="social">
                            <li><a target="_blank" href="https://www.tiktok.com/@DrAlMunifi"><i
                                        class="fab fa-tiktok"></i></a></li>
                            <li>
                                <a target="_blank" href="https://x.com/DrAlMunifi">
                                    <i class="fa-brands fa-x-twitter"></i>
                                </a>
                            </li>
                            <li><a target="_blank" href="https://www.youtube.com/@DrAlMunifi"><i
                                        class="fab fa-youtube"></i></a></li>
                            <li><a target="_blank" href="https://www.instagram.com/DrAlMunifi"><i
                                        class="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="copyright-area">
                <p>Copyright © 2026 Dr. Abdullah ALMUNIFI - All Rights Reserved.</p>
            </div>
        </div>
    </section>
    <!-- End Footer Area -->

    <div class="go-top">
        <i class="fas fa-chevron-up"></i>
    </div>
    `
                }}
            />

            {/* jQuery Min JS */}
            <Script src="/assets/js/jquery.min.js" strategy="beforeInteractive" />
            {/* Bootstrap Min JS */}
            <Script
                src="/assets/js/bootstrap.bundle.min.js"
                strategy="beforeInteractive"
            />
            {/* Owl Carousel Min JS */}
            <Script src="/assets/js/owl.carousel.min.js" strategy="afterInteractive" />
            {/* Slick Min JS */}
            <Script src="/assets/js/slick.min.js" strategy="afterInteractive" />
            {/* Mean Menu JS */}
            <Script src="/assets/js/jquery.meanmenu.js" strategy="afterInteractive" />
            {/* Appear Min JS */}
            <Script src="/assets/js/jquery.appear.min.js" strategy="afterInteractive" />
            {/* Parallax Min JS */}
            <Script src="/assets/js/parallax.min.js" strategy="afterInteractive" />
            {/* Magnific Popup Min JS */}
            <Script
                src="/assets/js/jquery.magnific-popup.min.js"
                strategy="afterInteractive"
            />
            {/* Nice Select Min JS */}
            <Script src="/assets/js/jquery.nice-select.min.js" strategy="afterInteractive" />
            {/* GSAP Min JS */}
            <Script src="/assets/js/gsap.min.js" strategy="afterInteractive" />
            {/* WOW Min JS */}
            <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
            {/* AjaxChimp Min JS */}
            <Script src="/assets/js/jquery.ajaxchimp.min.js" strategy="afterInteractive" />
            {/* SmoothScroll */}
            <Script src="/assets/js/SmoothScroll.js" strategy="afterInteractive" />
            {/* Main JS */}
            <Script src="/assets/js/magiccursor.js" strategy="afterInteractive" />
            <Script src="/assets/js/main.js" strategy="afterInteractive" />

            <Script id="inline-scripts" strategy="afterInteractive">
                {`
        $(document).ready(function() {
          // Feedback Carousel
          function initSlick() {
            var $imagesSlider = $(".feedback-slides .client-feedback>div"),
                $thumbnailsSlider = $(".client-thumbnails>div");
            
            if ($imagesSlider.length && $thumbnailsSlider.length && $.fn.slick) {
              // Destroy if already initialized to avoid conflicts
              if ($imagesSlider.hasClass('slick-initialized')) {
                $imagesSlider.slick('unslick');
              }
              if ($thumbnailsSlider.hasClass('slick-initialized')) {
                $thumbnailsSlider.slick('unslick');
              }

              // Initialize Thumbnails first
              $thumbnailsSlider.slick({
                  speed: 300,
                  slidesToShow: 5,
                  slidesToScroll: 1,
                  cssEase: 'linear',
                  autoplay: true,
                  centerMode: true,
                  draggable: false,
                  focusOnSelect: true,
                  asNavFor: ".feedback-slides .client-feedback>div",
                  prevArrow: '.client-thumbnails .prev-arrow',
                  nextArrow: '.client-thumbnails .next-arrow',
                  rtl: false // Ensure LTR for English
              });

              // Initialize Images
              $imagesSlider.slick({
                  speed: 300,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  cssEase: 'linear',
                  fade: true,
                  autoplay: true,
                  draggable: true,
                  asNavFor: ".client-thumbnails>div",
                  prevArrow: '.client-feedback .prev-arrow',
                  nextArrow: '.client-feedback .next-arrow',
                  rtl: false // Ensure LTR for English
              });
              
              var updateCaption = function(text) {
                  var $caption = $('.feedback-slides .caption');
                  if (!text) {
                      text = '&nbsp;';
                  }
                  $caption.html(text);
                  $caption.removeClass('hide');
              };

              var captionText = $('.client-feedback .slick-current img').attr('alt');
              updateCaption(captionText);
              
              $imagesSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                  $('.feedback-slides .caption').addClass('hide');
              });
              $imagesSlider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
                  var captionText = $('.client-feedback .slick-current img').attr('alt');
                  updateCaption(captionText);
              });
            } else if (!$.fn.slick) {
              // If slick not loaded yet, retry
              setTimeout(initSlick, 100);
            }
          }

          initSlick();

          // BMI Calculator
          const translations = {
              en: {
                  resultTitle: "Result",
                  underweight: "Weight loss",
                  healthy: "healthy",
                  overweight: "Overweight",
                  obese: "obese",
                  yourBmi: "Your BMI:",
                  categories: {
                      underweight: "Underweight",
                      healthy: "Healthy Weight",
                      overweight: "Overweight",
                      obese: "Obesity"
                  },
                  alert: "Please enter valid values for height and weight."
              }
          };

          function updateTranslations() {
              const lang = 'en';
              $('.result-text').text(translations[lang].resultTitle);
              $('.calc_info_line_underweight').text(translations[lang].underweight);
              $('.calc_info_line_healthy').text(translations[lang].healthy);
              $('.calc_info_line_overweight').text(translations[lang].overweight);
              $('.calc_info_line_obese').text(translations[lang].obese);
          }

          updateTranslations();

          $('#bmiForm').on('submit', function (e) {
              e.preventDefault();
              const lang = 'en';
              const heightInput = $('#height').val();
              const weightInput = $('#weight').val();

              if (!heightInput || !weightInput || heightInput <= 0 || weightInput <= 0) {
                  alert(translations[lang].alert);
                  return;
              }

              const heightInMeters = heightInput / 100;
              const bmi = (weightInput / (heightInMeters * heightInMeters)).toFixed(2);

              let categoryKey = '';
              let percentage = 0;

              if (bmi < 18.5) {
                  categoryKey = 'underweight';
                  percentage = (bmi / 18.5) * 25;
              } else if (bmi < 25) {
                  categoryKey = 'healthy';
                  percentage = 25 + ((bmi - 18.5) / 6.4) * 25;
              } else if (bmi < 30) {
                  categoryKey = 'overweight';
                  percentage = 50 + ((bmi - 25) / 5) * 25;
              } else if (bmi < 35) {
                  categoryKey = 'obese';
                  percentage = 75 + ((bmi - 30) / 5) * 25;
              } else {
                  categoryKey = 'obese';
                  percentage = 100;
              }

              percentage = Math.min(Math.max(percentage, 0), 100);
              var category = translations[lang].categories[categoryKey];

              $('.status').text("Your BMI: " + bmi + " - " + category);
              $('.status').css('background-color',
                  categoryKey === 'underweight' ? 'lightblue' :
                      categoryKey === 'healthy' ? 'lightgreen' :
                          categoryKey === 'overweight' ? 'yellow' :
                              'orange'
              );

              $('.layout').fadeIn();
              $('.calc_info_line_result_wrapper').css('left', percentage + '%');
          });

          $('.fa-xmark').on('click', function() {
              $('.layout').fadeOut();
              $('.calc_info_line_result_wrapper').css('left', '0');
          });

          $(document).on('click', function (e) {
              if ($('.layout').is(':visible') && !$('.result').is(e.target) && $('.result').has(e.target).length === 0) {
                  $('.layout').fadeOut();
                  $('.calc_info_line_result_wrapper').css('left', '0');
              }
          });
        });
        `}
            </Script>
        </>
    );
}
