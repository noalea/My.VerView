$(document).ready(function () {

  if($("#thankyou").length === 1) {
    var business = getUrlParameter('business');
    var name = getUrlParameter('name');
    var website = getUrlParameter('website');
    var email = getUrlParameter('email');
    var phone = getUrlParameter('phone');
    var address = getUrlParameter('address');
    var country = getUrlParameter('country');
    var postal = getUrlParameter('postal');
    var province = getUrlParameter('province');
    var hear = getUrlParameter('hear');
    var images = getUrlParameter('images');
    var packageType = getUrlParameter('packageType');
    var locData = getUrlParameter('locData');

    var data = JSON.stringify({
      business: business,
      fullname: name,
      website: website,
      email: email,
      phone: phone,
      address: address,
      country: country,
      postal: postal,
      province: province,
      hear: hear,
      images: images,
      packageType: packageType,
      locData: locData
    });

    $.ajax({
      url: "https://fs.go.iopw.com/FileServer/customforms/my.verview/php/signup.php",
      type: "POST",
      data: data,
      success: function(response) {
        sendAutoResponder(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        $(".failmsg").addClass("on");
      }
    });

  }

  function getUrlParameter(sParam) {
      var sPageURL = decodeURIComponent(window.location.search.substring(1)),
          sURLVariables = sPageURL.split('&'),
          sParameterName,
          i;

      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');

          if (sParameterName[0] === sParam) {
              return sParameterName[1] === undefined ? true : sParameterName[1];
          }
      }
  }

  function sendAutoResponder(data) {
    $.ajax({
      url: "https://fs.go.iopw.com/FileServer/customforms/my.verview/php/customerEmail.php",
      type: "POST",
      data: data,
      success: function(response) {
        console.log(response);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        $(".failmsg").addClass("on");
      }
    });
  }

});
