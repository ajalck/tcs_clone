/* Description: Custom JS file */


(function($) {
    "use strict"; 
	
    /* Navbar Scripts */
    // jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 60) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });
    
	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
    });

    // offcanvas script from Bootstrap + added element to close menu on click in small viewport
    $('[data-toggle="offcanvas"], .navbar-nav li a:not(.dropdown-toggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })

    // hover in desktop mode
    function toggleDropdown (e) {
        const _d = $(e.target).closest('.dropdown'),
            _m = $('.dropdown-menu', _d);
        setTimeout(function(){
            const shouldOpen = e.type !== 'click' && _d.is(':hover');
            _m.toggleClass('show', shouldOpen);
            _d.toggleClass('show', shouldOpen);
            $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
        }, e.type === 'mouseleave' ? 300 : 0);
    }
    $('body')
    .on('mouseenter mouseleave','.dropdown',toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);


    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
	});
	

    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });


	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

 
})(jQuery);
// Submit form


   // Form validation 
   var enqueryForm = document.getElementById("gform")
   var customerName = document.getElementById("nameError");
   var customerEmail = document.getElementById("emailError");
   var customerMessage = document.getElementById("messageError");

   enqueryForm.addEventListener('submit',function(event){
        event.preventDefault()
   })

   function validateName(){

      var name = document.getElementById('cname').value;

      
      if(!name.match(/^[a-zA-Z\s]+$/)){
          customerName.style.color= 'red'
          customerName.innerHTML= "Invalid name !";
          return false;
      }
       else{
          customerName.style.color= 'green'
          customerName.innerHTML="Valid";
          return true;
       } 
   }
   function validateEmail(){   
       var email = document.getElementById('cemail').value

      

       if(!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
       ))
    
       {
        customerEmail.style.color= 'red'
        customerEmail.innerHTML= "Invalid email address !"
        return false;
       }
       else{
        customerEmail.style.color= 'green'
        customerEmail.innerHTML= "valid"
        return true;
       }
   }
   function validateMessage(){
        var message = document.getElementById('cmessage').value;
        var required= 30;
        var left= required - message.length

        if(left>0){
            customerMessage.style.color='red'
            customerMessage.innerHTML= left+'more characters required !'
            return false
        }
        else{
            customerMessage.style.color='green'
            customerMessage.innerHTML='Now you can send the message'
            return true
        }
   }
// function namecheck()
//     {
//         let name=document.getElementById("name").value
//         let nm=null
//          nm = name.trim()
//        var letters = /^[A-Za-z]+$/;
//        var spc=/^[!@#$%^&()_+\-=\[\]{};':"\\|,.<>\/?]+[A-Za-z]$/;
//         document.getElementById("name").value = nm;
//         if(nm==""||name==null)
//         {
//             document.getElementById("nmlabel").style.display="block"
//             return false
//         }
//         else if(!isNaN(nm[0]))
//         {
//             document.getElementById("nmlabel").style.display="none"
//             document.getElementById("nmlabel-01").style.display="block"
//             return false
//         }
//         else if(nm.match(spc))
//         {
//             document.getElementById("nmlabel").style.display="none" 
//             document.getElementById("nmlabel-01").style.display="none"  
//             document.getElementById("nmlabel-02").style.display="block"
//             return false
//         }
//         else{
//             document.getElementById("nmlabel").style.display="none" 
//             document.getElementById("nmlabel-01").style.display="none" 
//             document.getElementById("nmlabel-02").style.display="none"
//             return true
    
//         }
//     }
    
    
//     function emailcheck()
//     {
//         var val=document.getElementById("email").value
//         var v=null
//          v = val.trim()
//         document.getElementById("email").value = v;
//         if(v==""||val==null)
//         {
//             document.getElementById("el").style.display="block"
//             return false
//         }
//         else if(!isNaN(v[0]))
//         {
//             document.getElementById("el-01").style.display="block"
//             return false
//         }
    
    
//         else if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(v))
//       {
//         document.getElementById("el-02").style.display="block"
//         return false
//       }
//         // alert("You have entered an invalid email address!")
//         // return (false)
    
    
    
    
    
//         else{
//             document.getElementById("el").style.display="none" 
//             document.getElementById("el-01").style.display="none"
//             document.getElementById("el-02").style.display="none" 
//             return true
    
//         }
//     }
    
//     function msgcheck()
//     {
    
//         var val=document.getElementById("msg").value
//         var v=null
//          v = val.trim()
//         document.getElementById("msg").value = v;
//         var n=v.length
//         console.log(n)
//         if(v==""||val==null)
//         {
//             document.getElementById("ml").style.display="block"
//             return false
//         }
//         else if(50>=n)
//         {
//             console.log(v.length)
//             document.getElementById("ml-01").style.display="block"  
//             return false      
//         }
//         else{
//             document.getElementById("ml").style.display="none" 
//             document.getElementById("ml-01").style.display="none"   
//             return true
    
//         }
//     }