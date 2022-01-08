function imgFill() {
  $('.imgFill').imgLiquid();
  $('.imgFill').each(function () {
    const $this = $(this),
          $picture = $this.find('picture'),
          $source = $picture.children('source');
    let src, srcset;
    let node, minmax, breakpoint;
    let windowWidth = window.innerWidth;
    if ( $this.find('img').data('src') != '' && $this.find('img').data('src') != undefined ) {
      src = $this.find('img').data('src');
    } else {
      src = $this.find('img').attr('src');
    }
    if ( $source.data('srcset') != '' && $source.data('srcset') != undefined ) {
      srcset = $source.data('srcset');
    } else {
      srcset = $source.attr('srcset');
    }
    if ($picture.length) {
      node = $source.attr('media').replace(/\(|\)| /g, '');
      minmax = node.split(':')[0];
      breakpoint = node.split(':')[1];
      if (minmax === 'min-width') {
        if (windowWidth >= parseFloat(breakpoint)) {
          $this.css('background-image', 'url("' + srcset + '")');
        } else {
          $this.css('background-image', 'url("' + src + '")');
        }
      } else if (minmax === 'max-width') {
        if (windowWidth <= parseFloat(breakpoint)) {
          $this.css('background-image', 'url("' + srcset + '")');
        } else {
          $this.css('background-image', 'url("' + src + '")');
        }
      } else if (minmax === 'orientation') {
        let wRatio = Math.abs(window.innerWidth / window.innerHeight);
        if (breakpoint === 'portrait' && wRatio <= 1) {
          $this.css('background-image', 'url("' + srcset + '")');
        } else if (breakpoint === 'portrait' && wRatio > 1) {
          $this.css('background-image', 'url("' + src + '")');
        }
        if (breakpoint === 'landscape' && wRatio > 1) {
          $this.css('background-image', 'url("' + srcset + '")');
        } else if (breakpoint === 'landscape' && wRatio <= 1) {
          $this.css('background-image', 'url("' + src + '")');
        }
      }
    }
  });
}
function addCart(arg) {
	Swal.fire({
		title: '成功加入購物車',
		showConfirmButton: true,
		showCancelButton: true,
		confirmButtonText: '結帳',
		cancelButtonText: '繼續逛逛',
		reverseButtons: true,
	});
}

function productRemove(arg) {
     Swal.fire({
        title: '您確認要刪除產品?',
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: '確認刪除',
        cancelButtonText: '取消',
    }).then(function(result) {
        if ( result.value ) {
            Swal.fire({
                icon: 'success',
                title: '刪除成功',
                showConfirmButton: false,
				timer: 2000,
            })
        }
    });
}

function addCreditCard2(arg){
    Swal.fire({
        title: '信用卡資訊已成功新增',
        confirmButtonText: '確定',
        customClass: {
            popup: 'small-btn'
        },
    }).then(function(result) {
        if ( result.value ) {
            $("form").submit();
        }
    });
}
function modifyEditor(arg){
    Swal.fire({
        title: '基本資料已修改',
        confirmButtonText: '確定',
        customClass: {
            popup: 'small-btn'
        },
    }).then(function(result) {
        if ( result.value ) {
            $("form").submit();
        }
    });
}
function modifyPassword(arg){
    Swal.fire({
        title: '密碼已修改',
        confirmButtonText: '確定',
        customClass: {
            popup: 'small-btn'
        },
    }).then(function(result) {
        if ( result.value ) {
            $("form").submit();
        }
    });
}

function deleteCard(arg){
     Swal.fire({
        title: '刪除信用卡資訊',
        html:`<p class="mb-0 mt-2 pt-1">資訊刪除後將無法回覆，確定刪除?</p>`,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: '確認刪除',
        cancelButtonText: '取消',
    }).then(function(result) {
        if ( result.value ) {
            Swal.fire({
                title: '信用卡資訊已成功刪除',
                showConfirmButton: true,
                confirmButtonText: '確定',
                customClass: {
                    popup: 'small-btn'
                },
            })
        }
    });
}
function deleteOrder(arg) {	
	Swal.fire({
        title: '取消訂單',
		html:`
            <div class="px-4 pt-2">
                <form class="form style-2 px-xl-3 mt-1 mb-md-3" action="">
                    <span class="d-block text-center">訂單編號 A123456789</span>
                    <div class="table style-1 deleteOrder mt-md-3 pt-md-1">
                        <div class="thead h60">
                            <div class="tr d-md-flex align-items-center fw-500 bg-grayF5 border-top-DCDCDC border-bottom-DCDCDC text-center h-100">
                                <div class="th">訂單日期</div>
                                <div class="th flex-grow-1">訂單內容</div>
                                <div class="th">訂單金額</div>
                            </div>
                        </div>
                        <div class="tbody">
                            <div class="tr d-md-flex">
                                <div class="td" data-th="訂單日期">
                                    <span class="Roboto d-block mt-1 mt-md-0">2021/09/12</span>
                                </div>
                                <div class="td flex-grow-1 text-start" data-th="訂單內容">
                                    <div class="mt-1 mt-md-0">
                                        <span class="d-block">男裝 亞麻混紡輕便長褲 x 4</span>
                                        <span class="d-block">防潑水多口袋連帽外套 x2</span>
                                        <span class="d-block">卡其短褲 (標準‧褲長24~27.5cm) x1</span>
                                    </div>
                                </div>
                                <div class="td" data-th="訂單金額">
                                    <span class="Roboto d-block mt-1 mt-md-0">NT$ 6,340</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-field">
                        <textarea name="reason" id="reason" rows="4" placeholder="請告訴我們取消的理由，您的回饋是我們進步的動力。"></textarea>
                    </div>
                </form>
            </div>
		`,
        customClass: {
            popup: 'small-btn'
        },
		showCancelButton: true,
		confirmButtonText: '送出',
		cancelButtonText: '取消',
	}).then(function(result) {
        if ( result.value ) {
            Swal.fire({
                title: '取消訂單',
                html:`
                
                    <p class="pt-2 mt-1">訂單已成功取消</p>
                    <div class="d-table d-sm-flex justify-content-center pt-3 mx-auto">
                        <a class="flex-center text-white bg-primary bg-hover-primaryHover w150 h60 mx-1 mb-2 mb-sm-0" href="">檢視訂單</a>
                        <a class="flex-center text-primary text-hover-white bg-hover-primaryHover border border-primary w150 h60 mx-1" href="">逛逛其他好物</a>
                    </div>
                `,
                showConfirmButton:false
            })
        }
    });
}
function returnOrder(arg) {	
	Swal.fire({
        title: '申請退貨',
		html:`
            <div class="px-4 pt-2">
                <form class="form style-2 px-xl-3 mt-1 mb-md-3" action="">
                    <span class="d-block text-center">訂單編號 A123456789</span>
                    <div class="table style-1 deleteOrder mt-md-3 pt-md-1">
                        <div class="thead h60">
                            <div class="tr d-md-flex align-items-center fw-500 bg-grayF5 border-top-DCDCDC border-bottom-DCDCDC text-center h-100">
                                <div class="th">訂單日期</div>
                                <div class="th flex-grow-1">訂單內容</div>
                                <div class="th">訂單金額</div>
                            </div>
                        </div>
                        <div class="tbody">
                            <div class="tr d-md-flex">
                                <div class="td" data-th="訂單日期">
                                    <span class="Roboto d-block mt-1 mt-md-0">2021/09/12</span>
                                </div>
                                <div class="td flex-grow-1 text-start" data-th="訂單內容">
                                    <div class="mt-1 mt-md-0">
                                        <span class="d-block">男裝 亞麻混紡輕便長褲 x 4</span>
                                        <span class="d-block">防潑水多口袋連帽外套 x2</span>
                                        <span class="d-block">卡其短褲 (標準‧褲長24~27.5cm) x1</span>
                                    </div>
                                </div>
                                <div class="td" data-th="訂單金額">
                                    <span class="Roboto d-block mt-1 mt-md-0">NT$ 6,340</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-field">
                        <textarea name="reason" id="reason" rows="4" placeholder="請告訴我們退貨的理由，您的回饋是我們進步的動力。"></textarea>
                    </div>
                </form>
            </div>
		`,
        customClass: {
            popup: 'small-btn'
        },
		showCancelButton: true,
		confirmButtonText: '送出',
		cancelButtonText: '取消',
	}).then(function(result) {
        if ( result.value ) {
            Swal.fire({
                title: '申請退貨',
                html:`
                
                    <p class="pt-2 mt-1">您的申請已成功送出，我們將儘速處理</p>
                    <div class="d-table d-sm-flex justify-content-center pt-3 mx-auto">
                        <a class="flex-center text-white bg-primary bg-hover-primaryHover w150 h60 mx-1 mb-2 mb-sm-0" href="">檢視訂單</a>
                        <a class="flex-center text-primary text-hover-white bg-hover-primaryHover border border-primary w150 h60 mx-1" href="">逛逛其他好物</a>
                    </div>
                `,
                showConfirmButton:false
            })
        }
    });
}

function bankInfo(arg){
	Swal.fire({
        title: '銀行轉帳資訊',
		html:`
            <div class="px-4 text-start pt-4">
                <div class="text-gray64 px-xl-3">
                    <div class="border-top-DCDCDC border-bottom-DCDCDC p-2">
                        <div class="d-md-flex align-items-center py-1">
                            <span class="d-block d-md-line me-md-4 mb-2 mb-md-0">付款金額：</span>
                            <span>NT$ 6,340</span>
                        </div>
                    </div>
                    <div class="border-bottom-DCDCDC p-2">
                        <div class="d-md-flex py-1">
                            <span class="d-block d-md-line me-md-4 mb-2 mb-md-0">付款期限：</span>
                            <span>2天23小時59分鐘25秒 / 在2021/10/20日 16:41到期</span>
                        </div>
                    </div>
                    <div class="border-bottom-DCDCDC p-2">
                        <div class="d-md-flex py-1">
                            <span class="d-block d-md-line me-md-4 mb-2 mb-md-0">付款資訊：</span>
                            <div>
                                <span class="d-block mb-md-2 pb-1">中國信託銀行</span>
                                <span class="d-block">帳戶號碼：</span>
                                <span class="d-block fz-30 mb-2" style="color:#FF8914;">9225 2001 3521 7270</span>
                                <span class="d-block">銀行代碼：</span>
                                <span class="d-block fz-30" style="color:#FF8914;">822</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-gray96 px-xl-3 pt-3">
                    <ul class="ns gray-dot-ul big-style">
                        <li class="mb-2">請使用網路銀行或實體ATM將金額轉入上述帳戶。</li>
                        <li class="mb-2">轉帳完成後30分鐘，可至訂單頁面查詢付款狀態，並請在入帳前保留轉帳收據。若轉帳後48小時仍末入帳請與客服聯繫查詢。</li>
                        <li class="mb-2">安全提醒：若第三方對您提出以下要求，請勿直接遵照他方指示。如：第三方要求您轉帳至私人帳號、在ATM解除分期付款等。</li>
                    </ul>
                </div>
            </div>
		`,
		confirmButtonText: '確定',
        customClass: {
            popup: 'small-btn'
        },
	});
}
function register(arg) {	
	Swal.fire({
		html:`                    
            <div class="text-gray32 text-start lh-base pt-md-3">
                <p class="fz-20 fw-bold text-center mb-1 mb-md-4 pb-2 mt-2">會員註冊</p>
                    <form class="form fix-label" action="">
                        <div class="border-bottom-DCDCDC px-4 px-md-5 pb-2 pb-md-4 mb-md-3">
                            <div class="px-md-3">
                                <div class="mb-3">
                                    <div class="form-field">
                                        <label for="">電子信箱(帳號)</label>
                                        <input type="email" id="email" name="email">
                                    </div>
                                    <div class="form-field">
                                        <label for="">設定密碼</label>
                                        <input type="password" id="password" name="password">
                                    </div>
                                    <div class="form-field">
                                        <label for="">再次輸入密碼</label>
                                        <input type="password" id="checkPassword" name="checkPassword">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-4 px-md-5 py-4">
                            <div class="px-md-3">
                                <div class="mb-2">
                                    <div class="form-field">
                                        <label for="name">姓名</label>
                                        <input type="text" id="name" name="name">
                                    </div>
                                    <div class="form-field">
                                        <label for="mobile">手機號碼</label>
                                        <input type="text" id="mobile" name="mobile">
                                    </div>
                                </div>
                            </div>    
                            <p class="text-gray64 pt-2 pt-md-4 mb-4">如建立帳戶，即代表同意本站的<a class="fw-bold text-primary text-hover-lightBlue text-decoration-underline" href="">會員權益</a>及<a class="fw-bold text-primary text-hover-lightBlue text-decoration-underline" href="">隱私權政策</a>。</p>
                            <div class="g-recaptcha-element position-relative d-table mx-auto">
                                <div id="recaptcha" class="g-recaptcha d-table mx-auto">
                                </div>
                            </div>
                            <button class="flex-center bg-primary bg-hover-primaryHover text-white w230 h60 mx-auto mt-4" type="submit">
                                會員登入
                            </button>
                        </div>
                    </form>
                </div>
            `,
        didOpen: () => {
            grecaptcha.render('recaptcha', {
            'sitekey': '6LdvplUUAAAAAK_Y5M_wR7s-UWuiSEdVrv8K-tCq'
            })
        },
		showConfirmButton: false,

	});
}


function numberElementEvent(){
	$(".number-element").find(".plus").click(function () {
		var $val = parseInt($(this).parents(".number-element").find("input").val());
		$(this).parents(".number-element").find("input[type=number]").val($val + 1);
		$(this).parents(".number-element").find("input[type=number]").blur();
	});
	$(".number-element").find(".minus").click(function () {
		var $val = parseInt($(this).parents(".number-element").find("input").val());
		if ($val > 0) {
			$(this).parents(".number-element").find("input[type=number]").val($val - 1)
		}

	});
}