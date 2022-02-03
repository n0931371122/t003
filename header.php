<header class="position-fixed w-100 z-3">
	<div class="mask" onClick="$('html').removeClass('menuOpen searchOpen')"></div>
	<div class="h-100 blank px-md-4">
		<div class="d-flex justify-content-between align-items-center max1700 h-100 mx-auto">
			<div class="d-flex align-items-center pe-5 me-5">
				<button onClick="$('html').addClass('menuOpen')" type="button" class="menu-toggle d-flex align-items-center cursor">
					<span class="toggle d-block position-relative">
						<span class="bar d-block"></span>
						<span class="bar d-block"></span>
					</span>
					<span class="d-none d-md-block fw-bold les2 ps-3 ms-1">MENU</span>
				</button>
				<div class="search text-hover-red ps-md-4 ms-3 ms-md-2 pe-md-3 pt-1">
					<button type="button" onClick="$('html').addClass('searchOpen')">
						<i class="icon-search"></i>
					</button>
				</div>
			</div>
			<a class="logo-wrapper d-block absolute-center" href="./">
				<span class="logo position-relative d-table mx-auto">
					<img src="styles/images/common/logo-white.svg" alt="">
					<img class="absolute-center" src="styles/images/common/logo-red.svg" alt="">
				</span>
				<img class="slogan d-none d-md-block position-absolute" src="styles/images/common/logo-slogan.svg" alt="">
			</a>
			<div class="d-flex align-items-center">
				<a class="contact fw-bold" href="/contact">
					<i class="icon-mail d-md-none"></i>
					<span class="d-none d-md-block">CONTACT</span>
				</a>
				<div class="d-none d-md-flex ps-3 ps-lg-4">
					<a class="flex-center text-hover-red mx-1 mx-lg-2" href="#" target="_blank">
						<i class="icon-fb"></i>
					</a>
					<a class="flex-center text-hover-red mx-1 mx-lg-2" href="#" target="_blank">
						<i class="icon-ig"></i>
					</a>
					<a class="flex-center text-hover-red ms-1 ms-lg-2" href="#" target="_blank">
						<i class="icon-line"></i>
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="menu-section bg-white position-absolute z-1 pe-md-5">
		<button onClick="$('html').removeClass('menuOpen')" class="close d-flex align-items-center text-black mb-4 mb-xl-0" type="button">
			<i class="icon-close me-1 me-md-3"></i>
			<span class="fw-bold les1 ps-1">CLOSE</span>
		</button>
		<div class="scrollbarY">
			<div class="d-flex">
				<div class="number-block d-none d-xl-block">
					<div class="text-center text-black">
						<span class="writing-vertical Jost fw-500 h-100">
							<span class="now py-2">1</span>
							<span class="py-2">5</span>
						</span>
					</div>
				</div>
				<ul class="menu ns position-relative text-uppercase ps-2">
					<li>
						<a class="d-block d-md-flex align-items-end" href="/news">
							<span class="ch d-block NotoSerifTC order-md-2 mb-2 mb-md-1">最新消息</span>
							<span class="en news d-block fz-60 lh-09 me-md-2 mb-1 mb-md-0">
								<span class="tlt_menu">Hot</span>
								<span class="tlt_menu">News</span>
							</span>

						</a>
					</li>
					<li>
						<a class="d-block d-md-flex align-items-end" href="/about">
							<span class="ch d-block NotoSerifTC order-md-2 mb-2 mb-md-1">關於潤居</span>
							<span class="en about d-block fz-60 lh-09 me-md-2 mb-1 mb-md-0">
								<span class="tlt_menu">About</span>
								<span class="tlt_menu">Zoku</span>
								<span class="tlt_menu">Sumi</span>
							</span>
						</a>
					</li>
					<li>
						<a class="d-block d-md-flex align-items-end" href="/cases">
							<span class="ch d-block NotoSerifTC order-md-2 mb-2 mb-md-1">服務案例</span>
							<span class="en projects d-block fz-60 lh-09 me-md-2 mb-1 mb-md-0">
								<span class="tlt_menu">Projects</span>
							</span>
						</a>
					</li>
					<li>
						<a class="d-block d-md-flex align-items-end" href="/services">
							<span class="ch d-block NotoSerifTC order-md-2 mb-2 mb-md-1">服務項目</span>
							<span class="en services d-block fz-60 lh-09 me-md-2 mb-1 mb-md-0">
								<span class="tlt_menu">Service</span>
							</span>
						</a>
					</li>
					<li>
						<a class="d-block d-md-flex align-items-end" href="/contact">
							<span class="ch d-block NotoSerifTC order-md-2 mb-2 mb-md-1">聯絡我們</span>
							<span class="en contact-span d-block fz-60 lh-09 me-md-2 mb-1 mb-md-0">
								<span class="tlt_menu">Contact</span>
								<span class="tlt_menu">Us</span>
							</span>

						</a>
					</li>
				</ul>
			</div>
		</div>
		<div>
			<div class="society d-flex mt-xl-5 pt-4 pt-md-5 ps-xl-4 ms-xl-1 pb-4 mb-3">
				<a class="flex-center rounded-circle" href="#" target="_blank">
					<i class="icon-fb"></i>
				</a>
				<a class="flex-center rounded-circle" href="#" target="_blank">
					<i class="icon-ig"></i>
				</a>
				<a class="flex-center rounded-circle" href="#" target="_blank">
					<i class="icon-line"></i>
				</a>
			</div>
			<a href="#" target="_blank" class="recruit-link-mobile d-flex d-md-none justify-content-between align-items-center bg-red text-white ps-5 pe-4">
				<span class="fw-500">人力招募</span>
				<img class="d-table ms-2 ps-1" src="styles/images/common/plus.png" alt="">
			</a>
		</div>
	</div>
	<div class="search-section  bg-white position-absolute z-1">
		<button onClick="$('html').removeClass('searchOpen')" class="close d-flex align-items-center text-black mb-4 mb-xl-0" type="button">
			<i class="icon-close me-1 me-md-3"></i>
			<span class="fw-bold les1 ps-1">CLOSE</span>
		</button>
		<div class="wrapper text-center w-100 max580">
			<span class="title d-block fz-48 fw-500 text-black les2 lh-1 mb-2">SEARCH PROJECTS</span>
			<span class="sub d-block position-relative fz-22 fw-600 text-black les2 pb-3 mb-3">案例搜尋</span>
			<p class="descript NotoSansTC pt-1 pb-3">請於下方的搜尋欄輸入欲查詢的關鍵字</p>
			<form action="result" class=" d-flex bg-grayF7 text-black px-4 py-3">
				<input class="flex-grow-1 NotoSansTC text-black" type="text" placeholder="請輸入關鍵字">
				<button class="text-hover-red" type="submit">
					<i class="icon-search"></i>
				</button>
		</div>
	</div>
	</div>
</header>