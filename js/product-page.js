/**  Increment and Decrement input Number **/
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const totalItems = document.getElementById('totalItems')

plus.addEventListener('click', () => {
  totalItems.value++
})

minus.addEventListener('click', () => {
  totalItems.value--
  if (totalItems.value == 0 || totalItems.value < 0) {
    totalItems.value = 1
  }
})

totalItems.addEventListener('change', () => {
  if (totalItems.value == 0 || totalItems.value < 0) {
    totalItems.value = 1
  }
})

/** change emphasis product Picture **/

const smallpictures = document.querySelectorAll('.smallpictures')
const emphasisPicture = document.getElementById('emphasisPicture')

smallpictures.forEach(picture => {
  picture.addEventListener('click', (e) => {
    const src = picture.src.replace('-thumbnail', '')
    const currentActivePicture = document.querySelector('.active')

    currentActivePicture.classList.remove('active')
    picture.classList.add('active')


    emphasisPicture.src = src
  })
})
/**  opens carousel if window innerWidth is greater then 600px **/

if (window.innerWidth >= 600) {
	emphasisPicture.addEventListener('click', () => {
	  document.getElementById('wrapper').classList.remove('hide')
	})
  }
  
  
  /** add product to cart **/
  
  document.querySelector('#btn').addEventListener('click', () => {
	let totalItems = document.getElementById('totalItems').value
  
	let Sneakers = {
	  name: 'Fall Limited Edition Sneakers',
	  value: 125.00,
	  amount: totalItems,
	  src: './images/image-product-1-thumbnail.jpg',
	  id: 1
	}
  
	localStorage.setItem('cart', JSON.stringify(Sneakers))
  
	showItemOnCart()
  
  })
  
  function showItemOnCart() {
  
	let cart = localStorage.getItem("cart")
  
	if (cart !== null && cart !== "") {
	  document.getElementById('cartDiv').classList.remove('empty')
	  let cartBoxProducts = document.getElementById('products')
	  cartBoxProducts.classList.remove('empty')
	  cartBoxProducts.innerHTML = ''
  
	  let checkout = document.getElementById('checkout')
	  checkout.classList.remove('hide')
	  let cartProduct = JSON.parse(localStorage.getItem("cart"))
  
	  // product Div
	  let productDiv = document.createElement('div')
	  productDiv.className = 'product'
  
	  // Description Div Start
	  let descriptionDiv = document.createElement('div')
	  descriptionDiv.className = 'description'
  
	  let img = document.createElement('img')
	  img.className = 'productImg'
	  img.src = cartProduct.src
  
	  // info Div Start
  
	  let infoDiv = document.createElement('div')
	  infoDiv.className = 'info'
  
	  let productTitle = document.createElement('h3')
	  productTitle.innerHTML = cartProduct.name
  
	  let singleValue = document.createElement('span')
	  singleValue.className = 'singleValue'
	  singleValue.innerHTML = `$${cartProduct.value.toFixed(2)} `
  
	  let amount = document.createElement('span')
	  amount.className = 'amount'
	  amount.innerHTML = `x ${cartProduct.amount} `
  
	  let finalValue = document.createElement('span')
	  finalValue.className = 'finalValue'
	  finalValue.innerHTML = `$${(cartProduct.value * cartProduct.amount).toFixed(2)}`
  
	  infoDiv.appendChild(productTitle)
	  infoDiv.appendChild(singleValue)
	  infoDiv.appendChild(amount)
	  infoDiv.appendChild(finalValue)
  
	  // info Div end
  
	  // remove Div start
  
	  let removeDiv = document.createElement('div')
	  removeDiv.className = 'remove'
	  removeDiv.innerHTML = '<img src="./images/icon-delete.svg">'
  
	  removeDiv.addEventListener('click', () => {
		localStorage.setItem("cart", "")
		document.getElementById('products').innerHTML = ''
		showItemOnCart()
	  })
  
	  // remove Div end
  
	  descriptionDiv.appendChild(img)
	  descriptionDiv.appendChild(infoDiv)
	  descriptionDiv.appendChild(removeDiv)
  
  
	  // Description Div End
  
	  productDiv.appendChild(descriptionDiv)
  
	  cartBoxProducts.appendChild(productDiv)
  
	  document.querySelector('#cartDiv').setAttribute('data-content', cartProduct.amount)
  
  
	} else {
  
	  document.getElementById('cartDiv').classList.add('empty')
  
	  let cartBoxProducts = document.getElementById('products')
	  cartBoxProducts.classList.add('empty')
	  cartBoxProducts.innerHTML = ''
	  let checkout = document.getElementById('checkout')
	  checkout.classList.add('hide')
  
	  let span = document.createElement('span')
	  span.className = 'emptyCart'
  
	  span.innerHTML = 'Your cart is empty.'
  
	  cartBoxProducts.appendChild(span)
	}
  
  }
  
  let cart = document.getElementById('cartIcon')
  
  cart.addEventListener('click', () => {
	let cartBox = document.getElementById('cart-box')
	cartBox.classList.toggle('hide')
	cartBox.addEventListener('mouseleave', () => {
	  cartBox.classList.add('hide')
	})
	showItemOnCart()
  })
  
  window.addEventListener('load', () => {
	showItemOnCart()
  })
  
  /** mobile menu **/
  
  document.getElementById('hamburger').addEventListener('click', () => {
	document.getElementById('navItems').classList.add('show')
  })
  
  document.getElementById('closeIcon').addEventListener('click', () => {
	document.getElementById('navItems').classList.remove('show')
  })
  
  /** carousel **/
  
  // gets all the buttons of the carousel
  const buttons = document.querySelectorAll('[data-carousel-button]')
  
  //gets all the small pictures under the carousel
  const smallCarouselPictures = document.querySelectorAll('.smallCarouselPicture')
  
  buttons.forEach(button => {
	button.addEventListener('click', () => {
	  // check what dataset does the carousel button have
	  const offset = button.dataset.carouselButton === 'next' ? 1 : -1
	  // gets the div carousel then it gets the ul list
	  const slides = button.closest('[data-carousel]').querySelector('[data-slides]')
	  // select the active slide
	  const activeSlide = slides.querySelector("[data-active]")
	  // it converts all the slides to an array then it gets the new index depending on the offset
	  let newIndex = [...slides.children].indexOf(activeSlide) + offset;
  
	  // goes to the last img if the current newIndex is less then 0
	  if (newIndex < 0) newIndex = slides.children.length - 1
  
	  // if the newIndex is equal to the last img index then it return to the index 0
	  if (newIndex >= slides.children.length) newIndex = 0
  
	  // it adds the data-active atribute to the new current slide
	  slides.children[newIndex].dataset.active = true
  
	  // it deletes the data-active atribute of the previous slide
	  delete activeSlide.dataset.active
  
  
	  // it gets the current small picture that contains the class active
	  const currentActivePicture = document.querySelector('.smallCarouselPicture.active')
  
	  // removes the current small picture active class
	  currentActivePicture.classList.remove('active')
  
	  // it adds the class active to the small picture that contains the same newIndex as the carousel
	  smallCarouselPictures[newIndex].classList.add('active')
  
  
	})
  })
  
  smallCarouselPictures.forEach(picture => {
	picture.addEventListener('click', (e) => {
	  const src = picture.src.replace('-thumbnail', '')
	  const currentActivePicture = document.querySelector('.smallCarouselPicture.active')
  
	  currentActivePicture.classList.remove('active')
	  picture.classList.add('active')
  
	  // ul list
	  const slides = document.querySelector('#wrapper [data-carousel]').querySelector('[data-slides]')
	  // array of slides
	  const slidesArray = [...slides.children];
	  // current active slide on carousel
	  const activeSlide = slides.querySelector("#wrapper [data-active]")
  
  
	  slidesArray.forEach(slide => {
		if (slide.children[0].src == src) {
		  slide.dataset.active = true
		  delete activeSlide.dataset.active
		}
	  })
  
	})
  })
  
  /** close carousel on icon click  **/
  document.getElementById('carouselClose').addEventListener('click', () => {
	document.getElementById('wrapper').classList.add('hide')
  })




// ------------san pham goi y -----
$(document).ready(function () {
	$(".carousel").carousel({
		interval: 4000,
		pause: 'false',
		fade: 'true'
	});
});

$(document).ready(function () {
	setTimeout(function () {
		$('#pop-up').show("slow");
	}, 3000);
	$("#btn-close").click(function () {
		$("#pop-up").hide("slow");
	});
});

function initMap() {
	// your code
}

function openNav() {
	document.getElementById("mySidenav").style.width = "70%";
	document.body.style.overflowY = "hidden";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.body.style.overflowY = "auto";
}

//$(document).ready(function () {
//	$('#content').click(function (e) {
//		$('.sidenav').addClass('side-nav-hide');
//	});
//});

$("#leftside-navigation .sub-menu > a").click(function (e) {
	$("#leftside-navigation ul ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
		e.stopPropagation()
})

$(document).ready(function () {
	var width = $("#item-1").width();
	$("#btn-left").click(function () {
		var scrollPosition = $("#top-items").scrollLeft();
		var scroll = scrollPosition - width;
		$("#top-items").animate({
			scrollLeft: scroll
		}, 800);
		if (scrollPosition === 0) {
			$("#btn-left").prop("disabled", true);
		} else {
			$("#btn-right").prop("disabled", false);
		};
	});
	$("#btn-right").click(function () {
		$("#btn-left").prop("disabled", false);
		var scrollPosition = $("#top-items").scrollLeft() + 0.5;
		var scroll = scrollPosition + width;
		$("#top-items").animate({
			scrollLeft: scroll
		}, 800);
		var widthScroll = $("#top-items").prop("scrollWidth") - $("#top-items").width();;
		if (scroll >= widthScroll) {
			$("#btn-right").prop("disabled", true);
		};
	});
});

$(document).ready(function () {
	$(".custom-select.arrow").click(function () {
		$(this).toggleClass("custom-select-arrow");
	});
	$(".custom-select.triangle").click(function () {
		$(this).toggleClass("custom-select-triangle");
	});
	$(".product").click(function () {
		$(this).toggleClass("product-focus");
	});
});

$(document).ready(function () {
	$("#inlineRadio1").click(function () {
		$("#company-name").fadeOut(500);
		$("#company-name input").prop("required", false);
	});
	$("#inlineRadio2").click(function () {
		$("#company-name").fadeOut(500);
		$("#company-name input").prop("required", false);
	});
	$("#inlineRadio3").click(function () {
		$("#company-name").fadeIn(500);
		$("#company-name input").prop("required", true);
	});
});

$(document).ready(function () {
	$("#shipping-check").click(function () {
		if ($(this).attr("aria-expanded") === "false") {
			$("#first-address input").prop("disabled", true);
			$("#first-address select").prop("disabled", true);
		} else {
			$("#first-address input").prop("disabled", false);
			$("#first-address select").prop("disabled", false);
		};
	});
});

//$(document).ready(function () {
//	$("#product-dropdown").click(function () {
//		$("#dropdown-hover").toggleClass("dropdown-hover-show");
//		$("#product-dropdown a").toggleClass("product-dropdown-a");
//		$(".fa-caret-down").toggleClass("product-dropdown-icon");
//	});
//});

$(document).ready(function () {
	$("#product-dropdown").mouseenter(function () {
		$("#dropdown-hover").addClass("dropdown-hover-show");
		$("#product-dropdown a").css("color", "#00AFEF");
		$(".fa-caret-down").css("transition", ".3s");
		$(".fa-caret-down").css("transform", "rotate(180deg)");
	});
	$("#dropdown-hover").mouseleave(function () {
		$("#dropdown-hover").removeClass("dropdown-hover-show");
		$("#product-dropdown a").css("color", "#FFFFFF");
		$(".fa-caret-down").css("transition", ".3s");
		$(".fa-caret-down").css("transform", "rotate(0deg)");
	});
	$(".nav-link").mouseenter(function () {
		$("#dropdown-hover").removeClass("dropdown-hover-show");
		$("#product-dropdown a").css("color", "#FFFFFF");
		$(".fa-caret-down").css("transition", ".3s");
		$(".fa-caret-down").css("transform", "rotate(0deg)");
	});
});

$(document).ready(function () {
	$("#type").on('change', function () {
		var type = $("#type option:selected").val();
		if (type != "") {
			$("#year").prop("disabled", false);
		} else {
			$("#year").prop("disabled", true);
			$("#make").prop("disabled", true);
			$("#model").prop("disabled", true);
			$("#engine").prop("disabled", true);
			$("#btn-search-vehicle").prop("disabled", true);
		}
	});
	$("#year").on('change', function () {
		var year = $("#year option:selected").val();
		if (year != "") {
			$("#make").prop("disabled", false);
		} else {
			$("#make").prop("disabled", true);
			$("#model").prop("disabled", true);
			$("#engine").prop("disabled", true);
			$("#btn-search-vehicle").prop("disabled", true);
		}
	});
	$("#make").on('change', function () {
		var make = $("#make option:selected").val();
		if (make != "") {
			$("#model").prop("disabled", false);
		} else {
			$("#model").prop("disabled", true);
			$("#engine").prop("disabled", true);
			$("#btn-search-vehicle").prop("disabled", true);
		}
	});
	$("#model").on('change', function () {
		var model = $("#model option:selected").val();
		if (model != "") {
			$("#engine").prop("disabled", false);
		} else {
			$("#engine").prop("disabled", true);
			$("#btn-search-vehicle").prop("disabled", true);
		}
	});
	$("#engine").on('change', function () {
		var engine = $("#engine option:selected").val();
		if (engine != "") {
			$("#btn-search-vehicle").prop("disabled", false);
		} else {
			$("#btn-search-vehicle").prop("disabled", true);
		}
	});
});

$(document).ready(function () {
	$("#seeMore").click(function () {
		$("#seeMore[aria-expanded='false']").html("See less");
		$("#seeMore[aria-expanded='true']").html("See more");
	});
});

$(".add-vehicle").click(function () {
	$('html, body').animate({
		scrollTop: $("#search-vehicle").offset().top - 50
	}, 1000);
	setTimeout(function () {
		$('#search-vehicle').addClass("border border-warning");
	}, 1200);
	$("#search-vehicle").click(function () {
		$(this).removeClass("border border-warning");
	});
});

$(document).ready(function () {
	$(".category #checkAllCategory").click(function () {
		$(".category .form-check-input").prop('checked', $(this).prop('checked'));
	});
	$(".brand #checkAllBrand").click(function () {
		$(".brand .form-check-input").prop('checked', $(this).prop('checked'));
	});
});

$(document).ready(function () {
	$(".switch-button-background").click(function () {
		$(".switch-button-button").toggleClass("checked");
	});
});

$(document).ready(function () {
	$("#btn-seeMore-Category").click(function () {
		if ($(".seeMore-Category.collapse").hasClass("show")) {
			$("#btn-seeMore-Category").html("See more");
		} else {
			$("#btn-seeMore-Category").html("See less");
		};
	});
	$("#btn-seeMore-Brand").click(function () {
		if ($(".seeMore-Brand.collapse").hasClass("show")) {
			$("#btn-seeMore-Brand").html("See more");
		} else {
			$("#btn-seeMore-Brand").html("See less");
		};
	});
});

$(document).ready(function () {
	$(".btn.btn-expand").click(function () {
		if ($(this).hasClass("collapsed")) {
			$(this).html('-');
		} else {
			$(this).html('+');
		};
	});
});

$(document).ready(function () {
	$(".listView").click(function () {
		$(".listView").addClass("activeView");
		$("#listView").addClass("show");
		$(".gridView").removeClass("activeView");
		$("#gridView").removeClass("show");
	});
	$(".gridView").click(function () {
		$(".gridView").addClass("activeView");
		$("#gridView").addClass("show");
		$(".listView").removeClass("activeView");
		$("#listView").removeClass("show");
	});
});

$(document).ready(function () {
	if ($("#back-to-top").length) {
		var scrollTrigger = 300, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$("#back-to-top").addClass("show");
				} else {
					$("#back-to-top").removeClass("show");
				}
			};
		backToTop();
		$(window).on("scroll", function () {
			backToTop();
		});
		$("#back-to-top").on("click", function (e) {
			e.preventDefault();
			$("html, body").animate({
				scrollTop: 0
			}, 1000);
		});
	}
});


var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '300px;',
		width: '100%',
		videoId: 'DvA4O3jdD6o',
		//		events: {
		//			'onReady': onPlayerReady,
		//			'onStateChange': onPlayerStateChange
		//		}
	});
}

//function onPlayerReady(event) {
//	event.target.playVideo();
//}
//
//var done = false;
//
//function onPlayerStateChange(event) {
//	if (event.data == YT.PlayerState.PLAYING && !done) {
//		setTimeout(stopVideo, 6000);
//		done = true;
//	}
//}
//
//function stopVideo() {
//	player.stopVideo();
//}


function myFunction() {
	var x = document.getElementById("password");
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
}

$(document).ready(function () {
	$("#cart-show").click(function () {
		$("#cart").show("slow");
	});
	$("#btn-closeCart").click(function () {
		$("#cart").hide("slow");
	});
	$("#btn-removeItem").click(function () {
		$("#item").css("visibility", "hidden");
	});
});


//$(document).ready(function () {
//	var quantityCount = 0;
//	$("#btn-addToCart").click(function () {
//			$("#quantity option:selected").change(function () {
//				var quantity = parseInt($(this).val());
//				quantityCount += quantity;
//				$("#cart-quantity").text("Cart " + "(" + quantityCount + ")");
//			});
//		})
//		.trigger("change");
//});
