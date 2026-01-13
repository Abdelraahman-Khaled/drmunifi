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
   

    <!-- Start Main Banner Area -->
    <div class="main-banner-video">
        <video playsinline list loop muted autoplay class="background-video">
            <source src="/assets/img/banner-video.mov" type="video/mp4">
        </video>
        <div class="main-banner">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="main-banner-content">
                            <h1>جراحة السمنة طريقك للرشاقة والجمال</h1>
                            <p>
                                جراحة السمنة هي الخيار الأمثل لتحقيق الرشاقة والجمال بطريقة آمنة وفعّالة، بفضل التقنيات
                                المتطورة والإشراف الطبي المتخصص
                                يمكنك الآن التخلص من الوزن الزائد والتمتع بحياة أكثر صحة وحيوية.
                            </p>

                            <div class="btn-box">
                                <a href="contact.html" class="btn btn-primary">
                                    حدد موعداً
                                    <i class="fas fa-bell"></i>
                                </a>
                                <a href="types-of-operations.html" class="btn btn-light">
                                    أنواع جراحات السمنة
                                    <i class="fas fa-arrow-left"></i></a>
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
                <span><img src="/assets/img/favicon.png" alt="icon">ارتجاع مريئي</span>
                <span><img src="/assets/img/favicon.png" alt="icon">استئصال المرارة</span>
                <span><img src="/assets/img/favicon.png" alt="icon">جراحات الفتاق</span>
                <span><img src="/assets/img/favicon.png" alt="icon">السمنة</span>
                <span><img src="/assets/img/favicon.png" alt="icon">ارتجاع مريئي</span>
                <span><img src="/assets/img/favicon.png" alt="icon">استئصال المرارة</span>
                <span><img src="/assets/img/favicon.png" alt="icon">جراحات الفتاق</span>
                <span><img src="/assets/img/favicon.png" alt="icon">السمنة</span>
                <span><img src="/assets/img/favicon.png" alt="icon">ارتجاع مريئي</span>
                <span><img src="/assets/img/favicon.png" alt="icon">استئصال المرارة</span>
                <span><img src="/assets/img/favicon.png" alt="icon">جراحات الفتاق</span>
                <span><img src="/assets/img/favicon.png" alt="icon">السمنة</span>
            </div>

            <div class="scrolling-content">
                <span><img src="/assets/img/favicon.png" alt="icon">ارتجاع مريئي</span>
                <span><img src="/assets/img/favicon.png" alt="icon">استئصال المرارة</span>
                <span><img src="/assets/img/favicon.png" alt="icon">جراحات الفتاق</span>
                <span><img src="/assets/img/favicon.png" alt="icon">السمنة</span>
                <span><img src="/assets/img/favicon.png" alt="icon">ارتجاع مريئي</span>
                <span><img src="/assets/img/favicon.png" alt="icon">استئصال المرارة</span>
                <span><img src="/assets/img/favicon.png" alt="icon">جراحات الفتاق</span>
                <span><img src="/assets/img/favicon.png" alt="icon">السمنة</span>
                <span><img src="/assets/img/favicon.png" alt="icon">ارتجاع مريئي</span>
                <span><img src="/assets/img/favicon.png" alt="icon">استئصال المرارة</span>
                <span><img src="/assets/img/favicon.png" alt="icon">جراحات الفتاق</span>
                <span><img src="/assets/img/favicon.png" alt="icon">السمنة</span>
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
                    <span>مسيرة مهنية غنية بالخبرة والإنجازات</span>
                    <h2>الدكتور عبد الله بن مساعد المنيفي، تاريخ من الإبداع والتميز</h2>
                    <ul>
                        <li>
                            <i class="flaticon-check-mark"></i>
                            التخصص: الجراحة العامة
                        </li>
                        <li>
                            <i class="flaticon-check-mark"></i>
                            التخصص الدقيق: جراحة السمنة والمناظير المتقدمة والروبوت
                        </li>
                        <li>
                            <i class="flaticon-check-mark"></i>
                            بكالوريوس في الطب والجراحة، جامعة الملك سعود، الرياض، المملكة العربية السعودية (2010)
                        </li>
                        <li>
                            <i class="flaticon-check-mark"></i>
                            دبلوم عالٍ في جراحة السمنة والأمراض الاستقلابية، جامعة كوت دازور، نيس، فرنسا (2016)
                        </li>
                        <li>
                            <i class="flaticon-check-mark"></i>
                            دبلوم عالٍ في جراحة المناظير المتقدمة للجهاز الهضمي، جامعة باريس XI، مدرسة الجراحة،
                            باريس، فرنسا (2016)
                        </li>

                        <li>
                            <i class="flaticon-check-mark"></i>
                            البورد الفرنسي في الجراحة العامة وجراحة الجهاز الهضمي، جامعة كوت دازور، نيس، فرنسا
                            (2018)
                        </li>

                        <li>
                            <i class="flaticon-check-mark"></i>
                            الزمالة الكندية في جراحة السمنة والمناظير المتقدمة وجراحة الرجل الآلي، مونتريال، كندا
                            (2022)
                        </li>
                    </ul>

                    <a href="about.html" class="btn btn-primary">اكتشف التفاصيل الآن
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
                        <span class="sub-title">مزايا فريدة</span>
                        <h2>اكتشف فوائد جراحة السمنة وابدأ رحلتك نحو التغيير</h2>
                        <p>
                            تقدم جراحة علاج السمنة مجموعة متنوعة من الفوائد لمن يعانون من السمنة، بما في ذلك تحسين الصحة
                            وزيادة القدرة على الحركة
                            وتعزيز احترام الذات بالإضافة إلى:
                        </p>

                        <ul>
                            <li>
                                <div class="icon">
                                    <i class="fi fi-rr-doctor"></i>
                                </div>
                                <span>تعزيز الصحة والوقاية</span>
                                تقليل المخاطر الصحية المزمنة وتحقيق حياة أكثر صحة.
                            </li>

                            <li>
                                <div class="icon">
                                    <i class="fi fi-rr-muscle"></i>
                                </div>
                                <span>استعادة النشاط والحيوية</span>
                                زيادة القدرة على الحركة والتمتع بطاقة يومية عالية.
                            </li>

                            <li>
                                <div class="icon">
                                    <i class="fi fi-rr-user-trust"></i>
                                </div>
                                <span>رفع الثقة بالنفس</span>
                                تغيير المظهر وزيادة شعور الرضا عن الذات.
                            </li>

                            <li>
                                <div class="icon">
                                    <i class="fi fi-rr-head-side-medical"></i>
                                </div>
                                <span>تحقيق الاستقرار النفسي</span>
                                التخفيف من التوتر وتحقيق توازن نفسي أفضل.
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

        <div class="shape3"><img src="/assets/img/shape/2.png" alt="image"></div>
    </section>
    <!-- End Our Mission Area -->

    <!-- Start Our Mission Area -->
    <section class="our-mission-area pb-lg-0 pt-lg-0 ptb-100">
        <div class="container-fluid p-0">
            <div class="row m-0 flex-sm-row-reverse">
                <div class="col-lg-6 col-md-12 p-0">
                    <div class="our-mission-content">
                        <span class="sub-title">أهمية جراحة السمنة</span>
                        <h2>دور جراحة السمنة في تحسين الصحة</h2>
                        <p>
                            لا تعالج جراحة إنقاص الوزن مرض السمنة فحسب بل تعالج أيضاً حالات أخرى مثل مرض السكري وأمراض
                            القلب وارتفاع ضغط الدم
                            والتهاب المفاصل والارتجاع الحمضي بالإضافة إلى ذلك تقلل الجراحة بشكل كبير من خطر الوفاة بسبب
                            السرطان والسكري وأمراض القلب
                            وأمراض أخرى.
                        </p>

                        <ul>
                            <li>
                                <div class="icon">
                                    <i class="fi fi-rr-heart-rate"></i>
                                </div>
                                <span>تحسين صحة القلب</span>
                                تقليل ضغط الدم والكوليسترول لتحسين صحة القلب.
                            </li>

                            <li>
                                <div class="icon">
                                    <i class="fi fi-rr-arrow-comparison"></i>
                                </div>
                                <span>زيادة تدفق الأوكسجين</span>
                                تحسين وصول الأوكسجين إلى الأنسجة والعضلات.
                            </li>

                            <li>
                                <div class="icon">
                                    <i class="fi fi-rr-laptop-medical"></i>
                                </div>
                                <span>دعم صحة الشرايين</span>
                                تقليل تراكم الدهون وتحسين تدفق الدم.
                            </li>

                            <li>
                                <div class="icon">
                                    <i class="flaticon-laboratory"></i>
                                </div>
                                <span>خفض مستويات الدهون الضارة</span>
                                تقليل الدهون المشبعة والكوليسترول الضار لتحسين صحة القلب.
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

        <div class="shape4"><img src="/assets/img/shape/3.png" alt="image"></div>
    </section>
    <!-- End Our Mission Area -->

    <!-- Page Video Gallery Start -->
    <div class="page-video-gallery ptb-100 bg-f4f9fd">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">مجموعة الفيديوهات المميزة</span>
                <h2>محتوى متخصص بجراحة السمنة</h2>
                <p>
                    استكشف كل ما تحتاج معرفته عن جراحة السمنة من خلال فيديوهاتنا المميزة!
                </p>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="video-gallery-image" data-cursor-text="تشغيل">
                        <a href="https://www.youtube-nocookie.com/embed/4Olc7KZLKEc?rel=0&modestbranding=1&autoplay=1"
                            class="popup-video">
                            <figure>
                                <img src="/assets/img/video-thumbnails/1.png" alt="video">
                            </figure>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="video-gallery-image" data-cursor-text="تشغيل">
                        <a href="https://www.youtube-nocookie.com/embed/4Olc7KZLKEc?rel=0&modestbranding=1&autoplay=1"
                            class="popup-video">
                            <figure>
                                <img src="/assets/img/video-thumbnails/2.webp" alt="video">
                            </figure>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="video-gallery-image" data-cursor-text="تشغيل">
                        <a href="https://www.youtube-nocookie.com/embed/4Olc7KZLKEc?si=XrMBk_ZpPSNaruZ6?rel=0&modestbranding=1&autoplay=1"
                            class="popup-video">
                            <figure>
                                <img src="/assets/img/video-thumbnails/3.webp" alt="video">
                            </figure>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="video-gallery-image" data-cursor-text="تشغيل">
                        <a href="https://www.youtube-nocookie.com/embed/kVbs8IwkqIk?si=hBvq0q5WYh1Chl02?rel=0&modestbranding=1&autoplay=1"
                            class="popup-video">
                            <figure>
                                <img src="/assets/img/video-thumbnails/4.webp" alt="video">
                            </figure>
                        </a>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="more-services-btn">
                        <a href="https://www.youtube.com/@DrAlMunifi" target="_blank" class="btn btn-primary">مزيد من
                            الفيديوهات <i class="flaticon-right-chevron"></i></a>
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
                    رحلة صحية تبدأ بخطوة وقرار
                </span>
                <h2>
                    دليلك نحو حياة صحية أفضل
                </h2>
                <p>
                    ابدأ الآن لأن صحتك تستحق بداية جديدة
                </p>
            </div>
            <!-- gallery section start -->
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="video-gallery-image" data-cursor-text="مشاهدة">

                        <a href="/assets/img/Infographic/01.pdf" class="popup-video Infographic">
                            <figure>
                                <img src="/assets/img/Infographic/Thumbnail/Infographic Thumbnail 01.webp" alt="video">
                            </figure>
                        </a>

                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="video-gallery-image" data-cursor-text="مشاهدة">
                        <a href="/assets/img/Infographic/03.pdf" class="popup-video Infographic">
                            <figure>
                                <img src="/assets/img/Infographic/Thumbnail/Infographic Thumbnail 03.webp" alt="video">
                            </figure>
                        </a>

                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="video-gallery-image" data-cursor-text="مشاهدة">

                        <a href="/assets/img/Infographic/04.pdf" class="popup-video Infographic">
                            <figure>
                                <img src="/assets/img/Infographic/Thumbnail/Infographic Thumbnail 04.webp" alt="video">
                            </figure>
                        </a>

                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="video-gallery-image" data-cursor-text="مشاهدة">

                        <a href="/assets/img/Infographic/05.pdf" class="popup-video Infographic">
                            <figure>
                                <img src="/assets/img/Infographic/Thumbnail/Infographic Thumbnail 05.webp" alt="video">
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
                        <span class="sub-title">مؤشر كتلة الجسم (BMI) | دليلك لفهم وزنك وصحتك بشكل أفضل</span>
                        <h2 class="hc-about-head">اكتشف وضعك الصحي بسرعة باستخدام مؤشر كتلة الجسم BMI</h2>
                        <p class="hc-paragraph">
                            يتم حساب مؤشر كتلة الجسم باستخدام وزنك وطولك (وزنك مقسوماً على طولك مربعاً)، جنباً إلى جنب
                            مع العديد من العوامل الأخرى،
                            مثل ضغط الدم والكوليسترول ويمكن أن يساعد مؤشر كتلة الجسم في تقدير خطر الإصابة بنوبة قلبية أو
                            سكتة دماغية.
                        </p>
                        <form class="form" id="bmiForm">
                            <input type="number" id="height" class="form-control" placeholder="اكتب طولك (سم)"
                                required="">
                            <input type="number" id="weight" class="form-control" placeholder="اكتب وزنك (كغ)"
                                required="">
                            <button type="submit" class="form-control">احسب</button>
                        </form>
                    </div>
                </div>
                <div class="bmi-table">
                    <div class="bmi-head">
                        <i class="fas fa-tachometer-alt"></i> أقسام مؤشرات الكتلة
                    </div>
                    <ul class="mk-list bmi-list">
                        <li>أقل من 18.5</li>
                        <li>وزن ناقص</li>
                        <li>من 18.5 إلى 24.9</li>
                        <li>وزن صحي</li>
                        <li>من 25 إلى 29.9</li>
                        <li>وزن زائد</li>
                        <li>من 30 إلى 34.9</li>
                        <li>سمنة من الدرجة الأولى
                        </li>
                        <li>من 35 إلى 39.9</li>
                        <li>سمنة من الدرجة الثانية
                        </li>
                        <li>من 40 أو أكثر</li>
                        <li>سمنة من درجة ثالثة
                        </li>
                    </ul>
                    <p class="text-center">ملاحظة: الجدول الخاص بـ مؤشرات يبقى ثابتاً</p>
                </div>
                <div class="layout" style="display: none;">
                    <div class="result">
                        <i class="fa-solid fa-xmark"></i>
                        <div class="result-text">
                            النتيجة
                        </div>
                        <span class="status">

                        </span>
                        <div class="calc_info_line">
                            <div class="calc_info_line_result_wrapper" style="left: 0;">
                                <div class="calc_info_line_result">
                                    أنت
                                </div>
                            </div>
                            <div class="calc_info_line_underweight calc">
                                نقص في الوزن </div>
                            <div class="calc_info_line_healthy calc">
                                صحيح </div>
                            <div class="calc_info_line_overweight calc">
                                الوزن زائد </div>
                            <div class="calc_info_line_obese calc">
                                بدين </div>
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
                <span>جراحات السمنة</span>
                <h2>اكتشف أحدث أنواع جراحات السمنة وابدأ رحلة التحول الصحي</h2>
                <p>
                    استعرض جميع أنواع جراحة السمنة وتعرف على كل التفاصيل المتعلقة بكل خيار!
                </p>
            </div>

            <div class="row gy-4">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-services-box bg-1">

                        <div class="icon">
                            <img src="/assets/img/icons/تكميم المعدة.webp" alt="icon">
                        </div>

                        <h3>
                            <a href="operation-details/تكميم-المعدة.html">تكميم المعدة</a>
                        </h3>

                        <p>
                            تكميم المعدة واحدة من أكثر جراحات السمنة شيوعاً في العالم وتتميز بفعاليتها الكبيرة في إنقاص
                            الوزن ويتم فيها استئصال جزء...
                        </p>

                        <a href="operation-details/تكميم-المعدة.html" class="read-more-btn">اقرأ المزيد
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-services-box bg-1">

                        <div class="icon">
                            <img src="/assets/img/icons/ربط المعدة.webp" alt="icon">
                        </div>

                        <h3>
                            <a href="operation-details/عملية-استئصال-المرارة.html">
                                عملية استئصال المرارة
                            </a>
                        </h3>

                        <p>
                            استئصال المرارة هو إجراء جراحي يُستخدم لإزالة المرارة عند تكوّن الحصوات التي تسبب ألماً أو
                            التهابات متكررة.
                        </p>

                        <a href="operation-details/عملية-استئصال-المرارة.html" class="read-more-btn">اقرأ المزيد <i
                                class="fas fa-arrow-right"></i></a>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-services-box bg-1">
                        <div class="icon">
                            <img src="/assets/img/icons/تحويل المسار المصغر.webp" alt="icon">
                        </div>
                        <h3>
                            <a href="operation-details/تحويل-المسار-المصغر.html">تحويل المسار المصغر</a>
                        </h3>
                        <p>
                            تحويل المسار المصغر هو إجراء أبسط من تحويل المسار التقليدي ولكنه يوفر نتائج مماثلة في إنقاص
                            الوزن ويتم فيه...
                        </p>

                        <a href="operation-details/تحويل-المسار-المصغر.html" class="read-more-btn">اقرأ المزيد
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>


            <a href="types-of-operations.html" class="btn btn-primary">
                اطلع على خيارات الجراحة الأخرى
                <i class="flaticon-right-chevron"></i>
            </a>
        </div>
    </section>
    <!-- End Services Area -->

    <!-- Start Feedback Area -->
    <section id="feedbacks" class="feedback-area ptb-100 bg-f4f9fd">
        <div class="container">
            <div class="section-title">
                <span>آراء العملاء</span>
                <h2>تقييمات تعكس تميزنا</h2>
                <p>
                    اكتشف تجارب حقيقية من عملائنا الذين اختاروا رحلتهم نحو التحول معنا، آراء صادقة تعكس نجاحاتهم وثقتهم
                    في رعايتنا.
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
                                <h3>رنيم العتيق</h3>
                                <p>
                                    "خدمة ممتازة، التزام بالمواعيد واهتمام كبير بالتفاصيل. شكرًا لكم على جودة العمل"
                                </p>
                            </div>
                        </div>

                        <div class="item">
                            <div class="single-feedback">
                                <h3>عبدالعزيز القحطاني</h3>
                                <p>
                                    "تسلم أياديكم على الشغل الممتاز. نظافة، دقة، والتزام كامل بالموعد. شكرًا لكم."
                                </p>
                            </div>
                        </div>
                    </div>
                    <button class="prev-arrow slick-arrow">
                        <i class='flaticon-left-arrow'></i>
                    </button>

                    <button class="next-arrow slick-arrow">
                        <i class='flaticon-arrow-pointing-to-right'></i>
                    </button>

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
                        <span class="sub-title">الأسئلة الأكثر شيوعاً</span>
                        <h2>تعرف على كل ما يهمك حول جراحة السمنة!</h2>

                        <ul class="accordion">
                            <li class="accordion-item">
                                <a class="accordion-title active" href="javascript:void(0)">
                                    <i class="fas fa-plus"></i>
                                    من لا يصلح لجراحة إنقاص الوزن؟
                                </a>

                                <p class="accordion-content show">
                                    الأفراد الذين لا يستوفون معايير مؤشر كتلة الجسم لا يصلحون عادة لجراحة السمنة، قد
                                    يستوفي شخص ما معايير مؤشر كتلة الجسم،
                                    ولكن بعد مقابلة الجراح، يمكن تحديد أن المخاطر الفردية أكبر من الفائدة المحتملة
                                    للجراحة، هذه المواقف نادرة ويتم مناقشتها
                                    بشكل فردي مع فريق الرعاية الخاص بك.
                                </p>
                            </li>

                            <li class="accordion-item">
                                <a class="accordion-title" href="javascript:void(0)">
                                    <i class="fas fa-plus"></i>
                                    كم تكلفة جراحة السمنة؟
                                </a>

                                <p class="accordion-content">
                                    تعتمد تكاليف الإجراء على المريض والجراحة وأي صعوبات قد تحدث بعد الجراحة، في كثير من
                                    الحالات، تغطي شركات التأمين تكلفة
                                    الجراحة لأن السمنة المفرطة يمكن أن تكون حالة تهدد الحياة، يجب عليك التحدث مع شركة
                                    التأمين الخاصة بك للتأكد من تغطية
                                    الجراحة وأي نفقات ذات صلة.
                                </p>
                            </li>

                            <li class="accordion-item">
                                <a class="accordion-title" href="javascript:void(0)">
                                    <i class="fas fa-plus"></i>
                                    هل يمكن إجراء الجراحة بالمنظار حتى لو أجريت جراحة بطن مفتوحة من قبل؟
                                </a>

                                <p class="accordion-content">
                                    سيقوم الجراح بتقييمك على أساس فردي، من الممكن إجراء عملية تحويل مسار المعدة بالمنظار
                                    بعد إجراء جراحة بطن مفتوحة أو
                                    إجراءات بطنية بالمنظار الأخرى، يعتقد جراحونا أن لكل مريض الحق في الحصول على فرصة
                                    اختيار الجراحة الأقل توغلاً كخيار.
                                </p>
                            </li>

                            <li class="accordion-item">
                                <a class="accordion-title" href="javascript:void(0)">
                                    <i class="fas fa-plus"></i>
                                    ماذا يحدث للمعدة، هل تنكمش؟
                                </a>
                                <p class="accordion-content">
                                    تصبح المعدة المتبقية أصغر حجماً بمرور الوقت لأنها لم تعد تتمدد بالطعام والشراب،
                                    ولكنها لا تزال تؤدي غرض أساسي في إنتاج
                                    حمض المعدة والإنزيمات لمساعدتك على هضم الطعام.
                                </p>
                            </li>

                            <li class="accordion-item">
                                <a class="accordion-title" href="javascript:void(0)">
                                    <i class="fas fa-plus"></i>
                                    كم من الوقت سأبقى في غرفة العمليات؟
                                </a>

                                <p class="accordion-content">
                                    تتراوح أوقات عملية جراحة السمنة بين 30 دقيقة إلى ساعتين.
                                </p>
                            </li>

                            <li class="accordion-item">
                                <a class="accordion-title" href="javascript:void(0)">
                                    <i class="fas fa-plus"></i>
                                    هل يجب أن أكون بصحة جيدة حتى أتمكن من الخضوع للجراحة؟
                                </a>

                                <p class="accordion-content">
                                    يعاني العديد من مرضى السمنة المفرطة من سوء الصحة بسبب الأمراض الناجمة عن السمنة
                                    وتشمل هذه الأمراض مرض السكري وارتفاع ضغط
                                    الدم ومشاكل القلب ومشاكل الرئة وصعوبات الكلى، يجب أن يكون المرضى مؤهلين طبياً وأن
                                    يكونوا قادرين على الخضوع للتخدير
                                    العام.
                                </p>
                            </li>

                            <li class="accordion-item">
                                <a class="accordion-title" href="javascript:void(0)">
                                    <i class="fas fa-plus"></i>
                                    كيف أعرف الإجراء الأفضل بالنسبة لي؟
                                </a>

                                <p class="accordion-content">
                                    تتم مناقشة كل إجراء بالتفصيل في جلساتنا الإرشادية، حتى تتمكن من محاولة تحديد الإجراء
                                    المناسب لك كما ستناقش هذه الإجراءات
                                    مع الجراح في استشارتك الأولية.
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
                <span>المدونة وآخر المقالات</span>
                <h2>اقرأ مقالاتنا المميزة الآن</h2>
                <p>
                    اطلع على أسرار نجاح جراحات السمنة، تصفح مقالاتنا الآن وابدأ رحلتك نحو حياة أكثر صحة وثقة.
                </p>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="post-image">
                            <a href="blog/تجلط-الأوردة-العميقة.html">
                                <img src="/assets/img/blog/1.webp" alt="image">
                            </a>
                        </div>

                        <div class="post-content">
                            <h3>
                                <a href="blog/تجلط-الأوردة-العميقة.html">
                                    تجلط الأوردة العميقة
                                </a>
                            </h3>
                            <p>
                                هي حالة طبية خطيرة تحدث عندما تتشكل جلطة دموية في الأوردة العميقة، غالبًا تكون في
                                الأطراف السفلية مثل...
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="more-services-btn">
                        <a href="blogs.html" class="btn btn-primary">المزيد من المقالات
                            <i class="flaticon-right-chevron"></i></a>
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
                            <a href="./"><img src="/assets/img/logo.png" alt="image"></a>
                            <p>
                                بخبرة الدكتور عبد الله المنيفي، استعد لتحقيق التحول الذي طالما حلمت به، اختر جراحة
                                السمنة المثالية لك وابدأ رحلتك نحو حياة صحية وجسم مثالي.

                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget pl-5">
                        <h3>الروابط السريعة</h3>
                        <ul class="departments-list">
                            <li><a href="./">الرئيسية</a></li>
                            <li><a href="about.html">عن الدكتور</a></li>
                            <li><a href="blogs.html">المدونة</a></li>
                            <li><a href="#calc">حساب مؤشر كتلة الجسم</a></li>
                            <li><a href="#feedbacks">آراء العملاء</a></li>
                            <li><a href="contact.html">تواصل معنا</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget pl-5">
                        <h3>العمليات</h3>

                        <ul class="links-list">
                            <li><a href="operation-details/تكميم-المعدة.html">تكميم المعدة</a></li>
                            <li><a href="operation-details/عملية-استئصال-المرارة.html">عملية استئصال المرارة</a>
                            </li>
                            <li><a href="operation-details/تحويل-المسار-المصغر.html">تحويل المسار المصغر</a></li>
                            <li><a href="operation-details/إجراءات-إصلاح-الفتق-بالمنظار.html">إجراءات إصلاح الفتق
                                    بالمنظار</a>
                            <li><a href="operation-details/إصلاح-الانفصال-العضلي.html">إصلاح الانفصال العضلي</a></li>
                            <li><a href="operation-details/تحويل-مسار-المعدة-الكلاسيكي.html">تحويل مسار
                                    المعدة الكلاسيكي</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>التواصل الاجتماعي</h3>
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
                <p>جميع الحقوق محفوظة © 2026 للدكتور عبدالله المنيفي.</p>
            </div>
        </div>
    </section>
    <!-- End Footer Area -->

    <div class="go-top">
        <i class="fas fa-chevron-up"></i>
    </div>
          `,
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
        // Feedback Carousel
        $(document).ready(function() {
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
                  rtl: true,
                  focusOnSelect: true,
                  asNavFor: ".feedback-slides .client-feedback>div",
                  prevArrow: '.client-thumbnails .prev-arrow',
                  nextArrow: '.client-thumbnails .next-arrow',
              });

              // Initialize Images
              $imagesSlider.slick({
                  speed: 300,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  cssEase: 'linear',
                  fade: true,
                  rtl: true,
                  autoplay: true,
                  draggable: true,
                  asNavFor: ".client-thumbnails>div",
                  prevArrow: '.client-feedback .prev-arrow',
                  nextArrow: '.client-feedback .next-arrow'
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

          // Translation object
          const translations = {
              en: {
                  resultTitle: "Result",
                  underweight: "Underweight",
                  healthy: "Healthy",
                  overweight: "Overweight",
                  obese: "Obese",
                  yourBmi: "Your BMI:",
                  categories: {
                      underweight: "Underweight",
                      healthy: "Healthy Weight",
                      overweight: "Overweight",
                      obese: "Obesity"
                  },
                  alert: "Please enter valid values for height and weight."
              },
              ar: {
                  resultTitle: "النتيجة",
                  underweight: "وزن ناقص",
                  healthy: "وزن طبيعي",
                  overweight: "وزن زائد",
                  obese: "سمنة",
                  yourBmi: "مؤشر كتلة جسمك:",
                  categories: {
                      underweight: "وزن ناقص",
                      healthy: "وزن طبيعي",
                      overweight: "وزن زائد",
                      obese: "سمنة"
                  },
                  alert: "الرجاء إدخال قيم صحيحة للطول والوزن."
              }
          };

          function getCurrentLang() {
              return $('body').hasClass('arabic') ? 'ar' : 'en';
          }

          function updateTranslations() {
              const lang = getCurrentLang();
              $('.result-text').text(translations[lang].resultTitle);
              $('.calc_info_line_underweight').text(translations[lang].underweight);
              $('.calc_info_line_healthy').text(translations[lang].healthy);
              $('.calc_info_line_overweight').text(translations[lang].overweight);
              $('.calc_info_line_obese').text(translations[lang].obese);
          }

          updateTranslations();

          $('#bmiForm').on('submit', function (e) {
              e.preventDefault();
              const lang = getCurrentLang();
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

              $('.status').text(\`\${translations[lang].yourBmi} \${bmi} - \${category}\`);
              $('.status').css('background-color',
                  categoryKey === 'underweight' ? 'lightblue' :
                      categoryKey === 'healthy' ? 'lightgreen' :
                          categoryKey === 'overweight' ? 'yellow' :
                              'orange'
              );

              $('.layout').fadeIn();
              $('.calc_info_line_result_wrapper').css('right', \`\${percentage}%\`);
          });

          $('.fa-xmark').on('click', function() {
              $('.layout').fadeOut();
              $('.calc_info_line_result_wrapper').css('right', '0');
          });
          
          $(document).on('click', function (e) {
              if ($('.layout').is(':visible') && !$('.result').is(e.target) && $('.result').has(e.target).length === 0) {
                  $('.layout').fadeOut();
                  $('.calc_info_line_result_wrapper').css('right', '0');
              }
          });
        });
        `}
            </Script>
        </>
    );
}
