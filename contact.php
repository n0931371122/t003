<!doctype html>
<html lang="zh">

<head>
    <?php include "header-title.php"; ?>

</head>

<body>

    <?php include "header.php"; ?>
    <!-- main ======================================================================================= -->
    <main>
        <div id="contact" class="overflow-hidden">
            <h1 class="d-none">聯絡我們</h1>
            <div class="banner-section">
                <div class="jqimgFill position-fixed">
                    <img src="styles/images/contact/banner.jpg" alt="">
                </div>
                <div class="fw-600 text-white absolute-center text-center w-100 px-4 pb-5">
                    <span class="tlt d-block fz-160 les5 lh-09">CONTACT</span>
                    <span class="d-block NotoSerifTC fz-24 les2" data-aos="fade-up" data-aos-delay="100">聯絡我們</span>
                </div>
                <button class="mouse position-absolute" type="button">
                    <img src="styles/images/common/mouse.svg" alt="">
                </button>
            </div>
            <div class="position-relative bg-white">
                <div class="information-block position-relative z-1">
                    <div class="row g-0 justify-content-end align-items-center">
                        <div class="col-lg-7 col-xxxl-5 ps-4 ps-lg-5 pb-5 pt-5 pt-lg-0 pe-4 pe-lg-0">
                            <div class="ps-xl-5 ms-xl-4 pb-md-4">
                                <h2 class="information fz-90 fw-500 text-uppercase position-relative text-black les2 lh-1">
                                    <span class="tlt_2 d-block" data-aos="fade-up">Contact</span>
                                    <span class="tlt_2 d-block" data-aos="fade-up">Information</span>
                                </h2>
                                <div class="lh-175 pt-3 pt-md-4 pt-xl-5 mt-xl-5 ps-md-5 ms-md-3 ms-xl-5">
                                    <div class="ps-xl-3 pt-xl-3">
                                        <span class="d-block fz-30 fw-bold text-black mb-1 mt-xl-4" data-aos="fade-up">潤居實業股份有限公司</span>
                                        <ul class="ns Jost">
                                            <li data-aos="fade-up">
                                                <span class="d-block d-sm-inline fw-bold">A.</span>
                                                <a class="text-hover-red" href="https://goo.gl/maps/JqFACPY7WsgJ7cvZ7" target="_blank">
                                                    <span>114066 台北市內湖區堤頂大道一段1號1樓</span>
                                                    <i class="icon-address text-red"></i>
                                                </a>
                                            </li>
                                            <li data-aos="fade-up">
                                                <span class="d-block d-sm-inline">
                                                    <span class="fw-bold">T.</span>
                                                    <a class="text-hover-red me-4" href="tel:+886-2-27955801">+886 - 2 - 27955801</a>
                                                </span>
                                                <span class="d-block d-sm-inline">
                                                    <span class="fw-bold">F.</span>
                                                    <span>+886 - 2 - 27955363</span>
                                                </span>
                                            </li>
                                            <li data-aos="fade-up">
                                                <span class="fw-bold">E.</span>
                                                <a class="text-hover-red" href="mailto:runju909@gmail.com" target="_blank">runju909@gmail.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="img-inner col-lg-5 ps-xxl-5" data-aos="fade-left">
                            <img class="object-fit ps-xl-3" src="styles/images/contact/1.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="form-block text-black py-5 px-4">
                    <div class="max1052 mx-auto py-md-5 my-xl-5">
                        <h2 class="fz-90 fw-500 text-black  text-center mt-md-2 mb-md-4">
                            <span class="tlt_2 d-inline-block" data-aos="fade-up">HAVE</span>
                            <span class="tlt_2 d-inline-block" data-aos="fade-up">A</span>
                            <span class="tlt_2 d-inline-block" data-aos="fade-up">QUESTION?</span>
                        </h2>
                        <p class="text-center" data-aos="fade-up">若您對我們公司有興趣或疑問，歡迎隨時來信聯絡，我們會盡快回覆您。 </p>
                        <form id="contactForm" class="form pt-md-5 mt-4" action="contact.php">
                            <div class="row">
                                <div class="col-md-6 mb-3" data-aos="fade-up">
                                    <div class="form-field position-relative d-flex align-items-center">
                                        <label class="label" for="name">
                                            <span class="fw-600 les2">姓名</span>
                                            <span class="fw-500 text-red">*</span>
                                        </label>
                                        <input class="w-0 flex-grow-1 px-3" type="text" id="name" name="name">
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3" data-aos="fade-up">
                                    <div class="form-field position-relative d-flex align-items-center">
                                        <label class="label" for="tel">
                                            <span class="fw-600 les2">電話</span>
                                            <span class="fw-500 text-red">*</span>
                                        </label>
                                        <input class="w-0 flex-grow-1 px-3" type="text" id="tel" name="tel" placeholder="請填入手機或市話">
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3" data-aos="fade-up">
                                    <div class="form-field position-relative d-flex align-items-center">
                                        <label class="label" for="email">
                                            <span class="fw-600 les2">EMAIL</span>
                                            <span class="fw-500 text-red">*</span>
                                        </label>
                                        <input class="w-0 flex-grow-1 px-3" type="text" id="email" name="email">
                                    </div>
                                </div>
                                <div class="col-md-6 position-relative z-1 mb-3" data-aos="fade-up">
                                    <div class="form-field issue-field position-relative d-flex align-items-center">
                                        <label class="label" for="issue">
                                            <span class="fw-600 les2">主旨</span>
                                            <span class="fw-500 text-red">*</span>
                                        </label>
                                        <div class="select-element w-0 flex-grow-1 NotoSansTC ps-3">
                                            <select class="selectpicker firstHide" id="issue" name="issue">
                                                <option value="">請選擇主旨</option>
                                                <option value="1">土地評估</option>
                                                <option value="2">空間設計</option>
                                                <option value="3">物業管理</option>
                                                <option value="4">產品規劃</option>
                                                <option value="5">產品銷售</option>
                                                <option value="6">其他問題</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 mb-3" data-aos="fade-up">
                                    <div class="form-field content-field position-relative d-flex">
                                        <label class="label pt-2" for="content">
                                            <span class="fw-600 les2">內容</span>
                                            <span class="fw-500 text-red">*</span>
                                        </label>
                                        <textarea class="w-0 flex-grow-1 px-3" name="content" id="content" placeholder="請填入留言內容"></textarea>
                                    </div>
                                </div>
                                <div class="col-12 mb-3" data-aos="fade-up">
                                    <div class="form-field position-relative d-flex align-items-center">
                                        <label class="label" for="verificationCode">
                                            <span class="fw-600 les2">驗證碼</span>
                                            <span class="fw-500 text-red">*</span>
                                        </label>
                                        <input class="verificationCode-input w-0 flex-grow-1 px-3" type="text" id="verificationCode" name="verificationCode" placeholder="點擊圖片即可刷新驗證碼">
                                        <a class="ms-3" href="#">
                                            <img src="styles/images/contact/verificationCode.png" alt="">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="d-table mx-auto mt-3 mt-md-5" data-aos="fade-up">
                                <button class="submit text-black position-relative text-hover-white bg-hover-black" type="submit">
                                    <span>送出表單</span>
                                    <i class="icon-arrow d-none d-md-block text-black position-absolute"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <!-- main ======================================================================================= -->
    <div class="modal fade" id="sendModal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-4 p-sm-5">
                <div class="text-center bg-white p-4 p-sm-5">
                    <p class="fz-32 fw-500 text-black pt-4 mt-sm-2">信件已成功寄出</p>
                    <p class="fz-16 NotoSansTC lh-175">稍後您將會收到一封由系統自動寄出的確認信件。請耐心等候一些時間，我們將會盡速與您聯絡，謝謝！</p>
                    <button type="button" class="fz-16 fw-500 text-white bg-red bg-hover-black lh-125 py-2 py-sm-3 px-5 mt-4 mt-sm-5 mb-3 mb-sm-4" data-bs-dismiss="modal"><span class="d-block mx-sm-4 px-sm-2 my-1 my-sm-0">關閉</span></button>
                </div>
            </div>
        </div>
    </div>
    <?php include "footer.php"; ?>
    <?php include "footer-js.php"; ?>
</body>

</html>