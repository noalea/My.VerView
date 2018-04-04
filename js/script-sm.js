$(document).ready(function () {

  /*  -----------------
      FILEPOND SETTINGS
      -----------------   */
  FilePond.parse(document.body);

  // Set default server location
  FilePond.setOptions({
      server: 'php/'
  });
  // Create ponds on the page
  var pond = FilePond.create( document.querySelector('input[type="file"]') );

  /*  ------------------
      FORM FUNCTIONALITY
      ------------------  */
  function getAllUrlParams(url) {

    // get query string from url (optional) or window
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

    // we'll store the parameters here
    var obj = {};

    // if query string exists
    if (queryString) {

      // stuff after # is not part of query string, so get rid of it
      queryString = queryString.split('#')[0];

      // split our query string into its component parts
      var arr = queryString.split('&');

      for (var i=0; i<arr.length; i++) {
        // separate the keys and the values
        var a = arr[i].split('=');

        // in case params look like: list[]=thing1&list[]=thing2
        var paramNum = undefined;
        var paramName = a[0].replace(/\[\d*\]/, function(v) {
          paramNum = v.slice(1,-1);
          return '';
        });

        // set parameter value (use 'true' if empty)
        var paramValue = typeof(a[1])==='undefined' ? true : a[1];

        // (optional) keep case consistent
        paramName = paramName.toLowerCase();
        paramValue = paramValue.toLowerCase();

        // if parameter name already exists
        if (obj[paramName]) {
          // convert value to array (if still string)
          if (typeof obj[paramName] === 'string') {
            obj[paramName] = [obj[paramName]];
          }
          // if no array index number specified...
          if (typeof paramNum === 'undefined') {
            // put the value on the end of the array
            obj[paramName].push(paramValue);
          }
          // if array index number specified...
          else {
            // put the value at that index number
            obj[paramName][paramNum] = paramValue;
          }
        }
        // if param name doesn't exist yet, set it
        else {
          obj[paramName] = paramValue;
        }
      }
    }

    return obj;
  }

  var posArr = [], packageType = '';

  $(".submit-section .wrapper").addClass("showSubmit");
  $("ul li").removeClass('notactive').addClass("active");
  $(".submit-section").addClass("mobile");
  $("<div class='alert-box hidecss'><p class='alert-msg'></p></div>").appendTo(".showSubmit .inner-wrapper");

  $(window).on('scroll', function () {

    posArr.push($('#section-1')[0].getBoundingClientRect().top + window.scrollY);
    posArr.push($('#section-2')[0].getBoundingClientRect().top + window.scrollY);
    posArr.push($('#section-3')[0].getBoundingClientRect().top + window.scrollY);
    posArr.push($('#section-4')[0].getBoundingClientRect().top + window.scrollY);
    posArr.push($('#section-5')[0].getBoundingClientRect().top + window.scrollY);
    posArr.push($('#section-6')[0].getBoundingClientRect().top + window.scrollY);
    posArr.push($('#section-7')[0].getBoundingClientRect().top + window.scrollY);
    posArr.push($('#section-8')[0].getBoundingClientRect().top + window.scrollY);
    posArr.push($('#section-9')[0].getBoundingClientRect().top + window.scrollY);
    posArr.push($('#section-10')[0].getBoundingClientRect().top + window.scrollY);

  });
  $(window).trigger('scroll');

  $("button[name='submit']").on("click", function (e) {
    e.preventDefault();
    validateForm();
  });

  $("button[type='button']").on("click", function (e) {
    e.preventDefault();
    var section, sectionNum = 0, yPos = 0, dec = 0.20;
    section = e.currentTarget.parentElement.parentElement.id;
    sectionNum = parseInt(section.split('-')[1]);
  });

  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });

  // Next section on Enter
  $("input").on('keyup', function (e) {
    e.preventDefault();
    var section, sectionNum = 0;
    if (e.keyCode == 13) {
      section = e.currentTarget.parentElement.parentElement.id;
      sectionNum = parseInt(section.split('-')[1]);
      $("#section-" + (sectionNum + 1) + " .wrapper > input:first-of-type").focus();
    }
  });

  function setPackageType() {
    $("select[name='program-type'].mobile").css("display", "flex");
    $("select[name='program-type'] option:selected", this).remove();
    var url = (window.location != window.parent.location)
            ? document.referrer
            : document.location.href;
    packageType = getAllUrlParams(url).type;

    switch (packageType) {
      case 'pro':
        $("select[name='program-type'] option[value=Pro]").attr('selected','selected');
        packageType = "Pro";
        break;
      case 'enterprise':
        $("select[name='program-type'] option[value=Enterprise]").attr('selected','selected');
        packageType = "Enterprise";
        break;
      case 'custom':
        $("select[name='program-type'] option[value=Custom]").attr('selected','selected');
        packageType = "Custom";
        break;
      default:
        $("select[name='program-type'] option[value=Essential]").attr('selected','selected');
        packageType = "Essential";
    }
  }
  setPackageType();

  function scrollToInput(sectionNum) {
    var yPos = 0, dec = 0.20;

    if ($(window).height() >= 830) {
      dec = 0.30;
    }

    if ($(window).height() <= 500) {
      dec = 0.15;
    }

    yPos = posArr[sectionNum] - $(window).height() * dec;
    $("#container").css("margin-top", "-"+(yPos + 200)+"px");
    $('html, body').animate({scrollTop:yPos},'0');
  }

  function ShowDialogBox(msg) {
      $(".alert-box").removeClass("hidecss").addClass("showcss");
      $(".alert-box .alert-msg").html(msg);
  }


  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  function validateForm() {
    $(".alert-box").removeClass("showcss").addClass("hidecss");
    var business, website, email;
    business = $("form input[name='business']");
    website = $("form input[name='website']");
    email = $("form input[name='email']");

    // Checks is business, website and email are empty
		if (business.val() === "" || business.val() === undefined || business.val() === null || !(/\S/.test(business.val()))) {
      business.css("border-color", "red");
      ShowDialogBox("Make sure to fill in your Business Name.");
		}
    else if (website.val() === "" || website.val() === undefined || website.val() === null || !(/\S/.test(website.val()))) {
      website.css("border-color", "red");
      business.css("border-color", "transparent");
      ShowDialogBox("Make sure to enter in your Website Link.");
    }
    else if (email.val() === "" || email.val() === undefined || email.val() === null || !(/\S/.test(email.val()))) {
      email.css("border-color", "red");
      business.css("border-color", "transparent");
      website.css("border-color", "transparent");
      ShowDialogBox("Make sure to fill in your Email Address.");
    }
    // If none empty, validate if email is an email and if yes submit form
    else {
      if (isEmail(email.val())) {
        email.css("border-color", "transparent");
        business.css("border-color", "transparent");
        website.css("border-color", "transparent");
        submitForm(business, website, email);
      } else {
        email.css("border-color", "red");
        business.css("border-color", "transparent");
        website.css("border-color", "transparent");
        ShowDialogBox("Make sure your Email Address is valid.");
      }
    }
  }

  function submitForm(business, website, email) {
    var phone, address, country, postal, province, package_type, images = [], data = {};
    phone = $("form input[name='phone']");
    address = $("form input[name='address']");
    country = $("form input[name='country']");
    postal = $("form input[name='postal']");
    province = $("form input[name='province']");
    package_type = $("select[name='program-type']").val();

    $('.filepond--file-wrapper legend').each(function(i, obj) {
      var fileTitle = $(obj).html(), fileURL;
      fileTitle = encodeURIComponent(fileTitle.trim());
      fileURL = "https://fs.go.iopw.com/FileServer/customforms/my.verview/php/tmp/1/" + fileTitle;
      images.push(fileURL);
    });

    data = JSON.stringify({
      business: business.val(),
      website: website.val(),
      email: email.val(),
      phone: phone.val(),
      address: address.val(),
      country: country.val(),
      postal: postal.val(),
      province: province.val(),
      images: images,
      package_type: package_type
    });

    $.ajax({
      url: "https://fs.go.iopw.com/FileServer/customforms/my.verview/php/signup.php",
      type: "POST",
      data: data,
      success: function(response) {
        window.open("https://myverview-form.go.iopw.com/page/thank-you", "_parent");
      },
      error: function(jqXHR, textStatus, errorThrown) {
        $(".failmsg").addClass("on");
      }
    });
  }

});
