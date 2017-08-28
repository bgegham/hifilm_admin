(function() {

    if(!getCookie("hfu")){
        var randomUser = "_id_" + Math.random().toString(16).slice(2);
        window.hifilm_user = randomUser;
        document.cookie = "hfu="+randomUser+"; path=/;";
    } else {
        window.hifilm_user = getCookie("hfu");
    }

    function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    function getParameterByName(name) {
        name    = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex   = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    $(document).ready(function () {
        // append preLoader
        $("body").append("<div class='custom_loader'><p class='loading-cult'>Loading</p><div class='uil-cube-css' style='-webkit-transform:scale(0.23)'><div></div><div></div><div></div><div></div></div></div>");
    });

    var lang = getParameterByName('lang') || "en";
    // translation
    var TR = Object();
    TR.en = Object();
    TR.ru = Object();
    TR.am = Object();

    TR.en = {
        "reserved" : "Reserved",
        "available" : "Available",
        "price" : "Price",
        "map_info" : "Select seats on the map by tapping on the white squares. You can zoom in the map for more convenience",
        "pay" : "Pay",
        "currency" : "AMD",
        "payment" : "Payment",
        "row" : "Row",
        "seat" : "Seat",
        "creditCard" : "Credit Card",
        "payPerDelivery" : "Pay Per Delivery",
        "thanks" : "Thank You<br/>for purchase!",
        "sentToEmail" : "E-Ticket will be sent to your email",
        "backToHiFilm" : "Back to HiFilm",
        "tickets" : "Tickets",
        "yourEmail" : "YOUR EMAIL ADRESS",
        "telNumber" : "PHONE NUMBER",
        "deliveryAddress" : "DELIVERY ADDRESS",
        "next" : "Next",
        "total" : "TOTAL",
        "delivery" : "Delivery",
        "about" : "Our reviews are written by movie buffs, who love watching great movies. We watched and enjoyed every single movie presented in this section despite it's IMDb rating. New reviews appear on top of the old ones",
        "error_header" : "Payment failed",
        "error_text" : "Payment process could NOT be completed. Make sure that.",
        "erTextLine1" : "Internet connection is stable <br/> .",
        "erTextLine2" : "Credit card details filled in by you are correct <br/> .",
        "erTextLine3" : "You have enough funds on your credit card",
        "error_btn" : "Retry",
        "emailError" : "Invalid email",
        "telNumberError" : "Invalid phone number",
        "deliveryAddressError" : "Invalid address",
        "sentToAddress" : " Our partners at <b>Cult.am</b> will contact you for delivery.",
        "error_text_delivery" : "Your order was not accepted because of internet connection problem or wrong input data.",
        "backToMap" : "Back to previous page",
        "payError1" : "Unfortunately your Android version <br/>(",
        "payError11" : ") is not supported by our ticket selling partner’s websites.<br/>You can still order a delivery if showtime begins in more than 3 hours or update your Android to version.",
        "payError2" : "Unfortunately your Android version <br/>( ",
        "payError22" : " ) is not supported by our ticket selling partner’s websites. <br/> <button class='btn-order-other'>Order delivery</button>",
        "payError3" : "We can deliver you tickets only if there is <br/><b> MORE THAN 3 HOURS </b><br/> before the showtime of a movie.<br/> We will be happy to deliver you tickets for later showtimes.",
        "ucomKino" : "<b>UCOM KINO<b/>",
        "contacts" : "<b>HAVE QUESTIONS?<b/>",
        "ucomKinoText" : "Feature is in process of development and will be available soon.",
        "emailHelper" : "We will use this address just to send you e-tickets",
        "haveAQuestions" : "HAVE QUESTIONS?",
        "hiFilmNumber" : "<b>+(374 91) 55-35-35</b>",
        "hiFilmLosung" : "HiFilm APP LOVES your questions and provides FULL support through the process of your ticket purchase.",
        "notEnTime" : "NOT ENOUGH TIME",
        "" : ""
    };
    TR.ru = {
        "reserved" : "Занято",
        "available" : "Свободно",
        "price" : "Цена",
        "map_info" : "Выберите свободные места на карте,\n нажав пальцем на белые квадратики.\nВы можете увеличить карту для большего удобства.",
        "pay" : "Оплатить",
        "currency" : "AMD",
        "payment" : "Оплата",
        "row" : "Ряд",
        "seat" : "Место",
        "creditCard" : "Оплатить картой",
        "payPerDelivery" : "Доставка билетов",
        "thanks" : "Спасибо<br/>за покупку!",
        "sentToEmail" : "Электронный билет будет выслан на<br/>адрес вашей электронной почты",
        "backToHiFilm" : "Вернуться в HiFilm",
        "tickets" : "Билеты",
        "yourEmail" : "АДРЕС ВАШЕЙ ЭЛ. ПОЧТЫ",
        "telNumber" : "НОМЕР ТЕЛЕФОНА",
        "deliveryAddress" : "АДРЕС ДОСТАВКИ",
        "next" : "Далее",
        "total" : "ИТОГО",
        "delivery" : "Доставка",
        "about" : "О НАШИХ ОБЗОРАХ",
        "error_header" : "Произошла ошибка",
        "error_text" : "Не удалось завершить процесс оплаты. Пожалуйста проверьте:",
        "erTextLine1" : "Наличие Интернет соединения<br/> .",
        "erTextLine2" : "Данные кредитной карты заполненные верно<br/> .",
        "erTextLine3" : "Достаточно ли средств на кредитной карте",
        "error_btn" : "Повторить попытку",
        "emailError" : "Неверный адрес эл. почты",
        "telNumberError" : "Неправильный номер телефона",
        "deliveryAddressError" : "Неверный адрес",
        "sentToAddress" : "Оператор <b>Cult.am</b> свяжется с вами в течении нескольких минут",
        "error_text_delivery" : "Ваш заказ не был завершен из-за проблемы с интернетом или предоставленными данными.",
        "backToMap" : "Назад",
        "payError1" : "К сожалению операционные системы ниже версии Android 4.4 <br/>(у Вас установлена версия ",
        "payError11" : ")<br/> не поддерживаются нашими партнерами, которые предоставляют возможность продажи билетов.",
        "payError2" : "К сожалению операционные системы ниже версии Android 4.4 <br/>(у Вас установлена версия ",
        "payError22" : ") не поддерживаются нашими партнерами, которые предоставляют возможность продажи билетов.<br/> <button class='btn-order-other'>Заказать доставку</button>",
        "payError3" : "Мы не успеем доставить билеты если до начала сеанса осталось <br/><b> МЕНЬШЕ 3-х ЧАСОВ. </b><br/> Для данного сеанса возможность доставки уже недоступна. Однако, мы будем рады доставить Вам билеты на более поздние сеансы.",
        "ucomKino" : "<b>UCOM КИНО<b/>",
        "contacts" : "<b>ПО ВСЕМ ВОПРОСАМ:<b/>",
        "ucomKinoText" : "Возможность покупки 2х билетов по цене одного находится в процессе разработки.",
        "emailHelper" : "Нам нужен email, чтобы отправить купленные билеты",
        "haveAQuestions" : "НУЖНА ПОМОЩЬ?",
        "hiFilmNumber" : "<b>+(374 91) 55-35-35</b>",
        "hiFilmLosung" : "Команда HiFilm App ЛЮБИТ Ваши вопросы и предоставляет ПОЛНУЮ поддержку на всех стадиях процесса покупки билетов.",
        "notEnTime" : "Слишком Поздно!",
        "" : ""
    };
    TR.am = {
        "reserved" : "Զբվաղեցված է",
        "available" : "Ազատ է",
        "price" : "Գինը",
        "map_info" : "Ընտրեք ազատ տեղերից ցանկացածը՝ սեղմելով սպիտակ քառակուսիների վրա։ Դուք կարող եք խոշորացնել քարտեզը՝ առավել հարմարության համար",
        "pay" : "Վճարել",
        "currency" : "AMD",
        "payment" : "Վճարում",
        "row" : "Կարգ",
        "seat" : "Նստատեղ",
        "creditCard" : "Վճարել քարտով",
        "payPerDelivery" : "Տոմսերի առաքում",
        "thanks" : "Շնորհակալություն<br/>գնման համար",
        "sentToEmail" : "Էլեկտրոնային տոմսը<br/>ուղարկված է <br/>ձեր էլեկտրոնային հասցեին",
        "backToHiFilm" : "Վերադառնալ HiFilm",
        "tickets" : "Տոմսեր",
        "yourEmail" : "ՁԵՐ ԷԼ. ՓՈՍՏԻ ՀԱՍՑԵՆ",
        "telNumber" : "ՀԵՌԱԽՈՍԱՀԱՄԱՐ",
        "deliveryAddress" : "ԱՌԱՔՄԱՆ ՀԱՍՑԵ",
        "next" : "Անցնել առաջ",
        "total" : "ԸՆԴՀԱՆՈՒՐ",
        "delivery" : "Առաքում",
        "about" : "ԸՆՏՐԱՆՈՒ ՄԱՍԻՆ",
        "error_header" : "Անհաջող փորձ",
        "error_text" : "Վճարումը տեղի չի ունեցե։ Խնդրում ենք ստուգել՝",
        "erTextLine1" : "Ինտերնետ-կապի առկայությունը<br/> .",
        "erTextLine2" : "Հաշվեհամարի սվյալների ճշտությունը<br/> .",
        "erTextLine3" : "Ձեր հաշվեհամարին առկա են բավարար միջոցներ",
        "error_btn" : "Կրկնել փորձը",
        "emailError" : "Անվավեր էլ.փոստ",
        "telNumberError" : "Անվավեր հերախոսահամար",
        "deliveryAddressError" : "Անվավեր հասցե",
        "sentToAddress" : " Ձեր պատվերը ընդունված է։ <b>Cult.am</b> կազմակերպությունը կկապվի ձեր հետ՝ տոմսերի առաքումը կազմակերպելու համար",
        "error_text_delivery" : "Ձեր պատվերն ընդունված չէ կապի խափանման, կամ սխալ մուտքային տվյալների պատճառով։",
        "backToMap" : "Վերադառնալ",
        "payError1" : "Ձեր Android ",
        "payError11" : " օպերացիոն համակարգը չի սպասարկվում մեր տոմսերի վաճառքն իրականացնող գործընկերների կոցմից։ <br/>Դուք, ամեն դեպքում, կարող եք պատվիրել տոմսերի առաքում եւ վճարել տեղում, եթե ֆիլմի սկզբին մնացել է 3 ժամից ավելի։",
        "payError2" : "Ձեր Android (",
        "payError22" : ") օպերացիոն համակարգը չի սպասարկվում մեր տոմսերի վաճառքն իրականացնող գործընկերների կոցմից։ <br/> <button class='btn-order-other'>Պատվիրել առաքում</button>",
        "payError3" : "Տոմսերը չեն առաքվում, եթե ֆիլմի սկզբին մնացել է <br/><b> ԱՎԵԼԻ ՔԻՉ, ՔԱՆ 3 ԺԱՄ </b> <br/> Սիրով կառաքենք տոմսեր հաջորդող սեանսներից:",
        "ucomKino" : "<b>UCOM ԿԻՆՈ<b/>",
        "contacts" : "<b>ՀԱՐՑԵՐԻ ԴԵՊՔՈՒՄ`<b/>",
        "ucomKinoText" : "Ծառայությունը հասանելի կլինի շուտով։",
        "emailHelper" : "Մեզ պետք է Ձեր Էլ. հասցեն, որպեսզի ուղարկենք գնված տոմսերը",
        "haveAQuestions" : "ՈՒՆԵ՞Ք ՀԱՐՑԵՐ",
        "hiFilmNumber" : "<b>+(374 91) 55-35-35</b>",
        "hiFilmLosung" : "HiFilm App-ի թիմը Ս-Ի-Ի-Ի-ՐՈՒՄ է իր օգտատերերի հարցերը։ Մենք տրամադրում ենք ՖՈՒԼ աջակցություն տոմսերի գնման գործընթացում։",
        "notEnTime" : "Ուշացանք ...",
        "" : ""
    };
    // end translation

    // fix delivery price
    var _deliveryPrice = 500;

    if(window.jQuery){

        var _tr_  = Object();
        if(lang){
            switch(lang) {
                case "en":
                    _tr_ = TR.en;
                    break;
                case "am":
                    _tr_ = TR.am;
                    break;
                case "hy":
                    _tr_ = TR.am;
                    break;
                case "ru":
                    _tr_ = TR.ru;
                    break;
                default:
                    _tr_ = TR.en;
                    break;
            }
        } else {
            _tr_ = TR.en;
        }
        // start flow
        // page load event bind
        $(window).on('hallLoad', function(){
            // or check url params if payment
            setTimeout(function(){

                if ((getParameterByName('AWS_RESPCODE') && getParameterByName('AWS_RESPCODE') === "00") || (getParameterByName('state') && getParameterByName('state') === "success")) {
                    $.ajax({
                        type: "POST",
                        url: "https://dev.hifilmapp.com/api/1.0/hifilm/log/data/",
                        data: {
                            hfu : window.hifilm_user,
                            method : "card",
                            status : "success",
                            totalPrice : "",
                            email : "",
                            phone : "",
                            address : "",
                            id_schedule : getParameterByName("id_schedule"),
                            date_time : getParameterByName("date_time"),
                            theatre_name : getParameterByName("theatre_name"),
                            movie_name : getParameterByName("movie_name"),
                            price : getParameterByName("price").replace(/[^-0-9]/gim,'')
                        }
                    });
                    window.location.href = "inapp://successCard";
                    $('#client').hide();
                    $('body').append("<div class='success-purchase-control' style='padding-top: 30px;'>" +
                        "<div class='image-control'>" +
                        "<div></div>" +
                        "</div>" +
                        "<h1 style='letter-spacing: 1px;'>" +
                        _tr_.thanks +
                        "</h1>" +
                        "<p style='word-spacing: 1px;'>" +
                        _tr_.sentToEmail +
                        "</p>" +
                        "<br/>" +
                        "<div style='padding: 0 15px'>" +
                        "<button id='bachToApplication' class='successCard'>" +
                        _tr_.backToHiFilm +
                        "</button>" +
                        "</div>" +
                        "<div>" +
                        "<table class='info-table' style='width: 100%;margin-bottom: 15px;'>" +
                        "<tbody>" +
                        "<tr style='height: 10px;'>" +
                        "<td></td>" +
                        "</tr>" +
                        "<tr>" +
                        "<td class='text-td' style='color:#ffe100;text-align: center'>"+ _tr_.haveAQuestions +"</td>" +
                        "</tr>" +
                        "<tr>" +
                        "<td class='text-td' style='color: #fff;padding-right: 15px;text-align:center;vertical-align: middle;'><span style='line-height: 1;text-align:center;vertical-align: middle;font-size: 13px;display: block;width: 100%'>"+ _tr_.hiFilmLosung +"</span></td>" +
                        "</tr>" +
                        "<tr>" +
                        "<td class='text-td' style='color: #fff;padding-right: 15px;text-align:center;vertical-align: middle;'><span style='line-height: 1.5;text-align:center;vertical-align: middle;font-size: 14px;display: block;width: 100%'>"+ _tr_.hiFilmNumber +"</span></td>" +
                        "</tr>" +
                        "<tr style='height: 15px;'>" +
                        "<td></td>" +
                        "</tr>" +
                        "</tbody>" +
                        "</table>" +
                        "<br/>" +
                        "</div>" +
                        "</div>"
                    );

                } else if ((getParameterByName('AWS_RESPCODE') && getParameterByName('AWS_RESPCODE') !== "00") || (getParameterByName('state') && getParameterByName('state') === "cancel")) {
                    $.ajax({
                        type: "POST",
                        url: "https://dev.hifilmapp.com/api/1.0/hifilm/log/data/",
                        data: {
                            hfu : window.hifilm_user,
                            method : "card",
                            status : "error",
                            totalPrice : "",
                            email : "",
                            phone : "",
                            address : "",
                            id_schedule : getParameterByName("id_schedule"),
                            date_time : getParameterByName("date_time"),
                            theatre_name : getParameterByName("theatre_name"),
                            movie_name : getParameterByName("movie_name"),
                            price : getParameterByName("price").replace(/[^-0-9]/gim,'')
                        }
                    });
                    window.location.href = "inapp://errorCard";

                    $('#client').hide();
                    $('body').append("<div class='error-purchase-control'>" +
                        "<h1 style='letter-spacing: 1px;margin-top: 40px;'>" +
                        _tr_.error_header +
                        "</h1>" +
                        "<p style='word-spacing: 1px;'>" +
                        _tr_.error_text +
                        "</p>" +
                        "<p style='text-align: center;color:#ffe100;font-size: 13px;line-height: 0.7;margin-top: 30px;'>" + _tr_.erTextLine1 +
                        "</p>" +
                        "<p style='text-align: center;color:#ffe100;font-size: 13px;line-height: 0.7;'>" + _tr_.erTextLine2 +
                        "</p>" +
                        "<p style='text-align: center;color:#ffe100;font-size: 13px;margin-bottom: 30px;'>" + _tr_.erTextLine3 +
                        "</p>" +
                        "<table class='info-table' style='width: 100%;'>" +
                        "<tbody>" +
                        "<tr>" +
                        "<td class='text-td' style='color:#fff;text-align: center'>"+ _tr_.haveAQuestions +"</td>" +
                        "</tr>" +
                        "<tr>" +
                        "<td class='text-td' style='color: #fff;padding-right: 15px;text-align:center;vertical-align: middle;'><span style='line-height: 1.5;text-align:center;vertical-align: middle;font-size: 13px;display: block;width: 100%'>"+ _tr_.hiFilmNumber +"</span></td>" +
                        "</tr>" +
                        "</tbody>" +
                        "</table>" +
                        "<br/>" +
                        "<div style='padding: 0 15px'>" +
                        "<button id='hideErrorBlock'>" +
                        _tr_.error_btn +
                        "</button>" +
                        "<button id='bachToApplication'  class='errorCard'>" +
                        _tr_.backToHiFilm +
                        "</button>" +
                        "</div>" +
                        "</div>"
                    );
                }

                if(getParameterByName('cod') && getParameterByName('cod') == "1"){

                    $.ajax({
                        type: "POST",
                        url: "https://dev.hifilmapp.com/api/1.0/hifilm/log/data/",
                        data: {
                            hfu : window.hifilm_user,
                            method : "delivery",
                            status : "success",
                            totalPrice : "",
                            email : "",
                            phone : "",
                            address : "",
                            id_schedule : getParameterByName("id_schedule"),
                            date_time : getParameterByName("date_time"),
                            theatre_name : getParameterByName("theatre_name"),
                            movie_name : getParameterByName("movie_name"),
                            price : getParameterByName("price").replace(/[^-0-9]/gim,'')
                        }
                    });
                    window.location.href = "inapp://successDelivery";
                    $('#client').hide();
                    $('body').append("<div class='success-purchase-control'>" +
                        "<h1 style='letter-spacing: 1px;'>" +
                        _tr_.thanks +
                        "</h1>" +
                        "<div class='image-control'>" +
                        "<div></div>" +
                        "</div>" +
                        "<p style='word-spacing: 1px;'>" +
                        _tr_.sentToAddress +
                        "</p>" +
                        "<br/>" +
                        "<div style='padding: 0 15px'>" +
                        "<button id='bachToApplication' class='successDelivery'>" +
                        _tr_.backToHiFilm +
                        "</button>" +
                        "</div>" +
                        "</div>"
                    );

                } else if(getParameterByName('cod') && getParameterByName('cod') == "error" ){
                    $.ajax({
                        type: "POST",
                        url: "https://dev.hifilmapp.com/api/1.0/hifilm/log/data/",
                        data: {
                            hfu : window.hifilm_user,
                            method : "delivery",
                            status : "error",
                            totalPrice : "",
                            email : "",
                            phone : "",
                            address : "",
                            id_schedule : getParameterByName("id_schedule"),
                            date_time : getParameterByName("date_time"),
                            theatre_name : getParameterByName("theatre_name"),
                            movie_name : getParameterByName("movie_name"),
                            price : getParameterByName("price").replace(/[^-0-9]/gim,'')
                        }
                    });
                    window.location.href = "inapp://errorDelivery";

                    $('#client').hide();
                    $('body').append("<div class='error-purchase-control'>" +
                        "<h1 style='letter-spacing: 1px;'>" +
                        _tr_.error_header +
                        "</h1>" +
                        "<p style='word-spacing: 1px;'>" +
                        _tr_.error_text_delivery +
                        "</p>" +
                        "<table class='info-table' style='width: 100%;margin-bottom: 15px;'>" +
                        "<tbody>" +
                        "<tr>" +
                        "<td rowspan='2' class='icon-td mobile-icon' style='min-width: 60px;'></td>" +
                        "<td class='text-td' style='color:#fff;text-align: left'>"+ _tr_.contacts +"</td>" +
                        "</tr>" +
                        "<tr>" +
                        "<td class='text-td' style='color: #fff;padding-right: 15px;text-align:left;vertical-align: middle;'><span style='line-height: 1.5;text-align:left;vertical-align: middle;font-size: 13px;display: block;width: 100%'>"+ _tr_.hiFilmNumber +"</span></td>" +
                        "</tr>" +
                        "</tbody>" +
                        "</table>" +
                        "<div style='padding: 0 15px'>" +
                        "<button id='hideErrorBlock'>" +
                        _tr_.error_btn +
                        "</button>" +
                        "<button id='bachToApplication' class='errorDelivery'>" +
                        _tr_.backToHiFilm +
                        "</button>" +
                        "</div>" +
                        "</div>"
                    );
                }

            },500);

            // hide preLoader when window ready for show
            setTimeout(function () {
                // payment blocks actions
                $('#bachToApplication').on("click", function () {
                    window.location.href = "inapp://back";
                });
                $('#hideErrorBlock').on("click", function () {
                    $(".custom_loader").show();
                    window.location.href = window.location.href.replace(/\&AWS_RESPCODE.+/, '').replace(/\&state.+/, '').replace(/\&cod.+/, '')
                });

                $(".custom_loader").hide();
            },1000);


            // seats color info block
            $("<div class='rounded-info-block'>" +
                "<table>" +
                "<tr>" +
                "<td><span class='busy-round'></span><span>"+_tr_.reserved+"</span></td>" +
                "<td><span class='free-round'></span><span>"+_tr_.available+"</span></td>" +
                "</tr>" +
                "</table>"
            ).insertAfter("#client_info");


            // back buttons
            $("<div class='back-to-map'>" +
                "<button class='bachToMap'>" +
                _tr_.backToMap +
                "</button>"
            ).insertAfter("#visa");
            $("<div class='back-to-map'>" +
                "<button class='bachToMap'>" +
                _tr_.backToMap +
                "</button>"
            ).insertAfter("#cash_form");


            if($(window).height() < $(window).width()){
                $('.pay-btn-control').css({position:"relative"})
            }
            $(window).on("resize", function () {
                if($(window).height() < $(window).width()){
                    $('.pay-btn-control').css({position:"relative"});
                } else {
                    $('.pay-btn-control').css({position:"fixed"});
                }
            });




            if($("body").attr("start_date") && $("body").attr("start_date") != ""){

                Date.CultureInfo={name:"en-US",englishName:"English (United States)",nativeName:"English (United States)",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbreviatedDayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shortestDayNames:["Su","Mo","Tu","We","Th","Fr","Sa"],firstLetterDayNames:["S","M","T","W","T","F","S"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],abbreviatedMonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],amDesignator:"AM",pmDesignator:"PM",firstDayOfWeek:0,twoDigitYearMax:2029,dateElementOrder:"mdy",formatPatterns:{shortDate:"M/d/yyyy",longDate:"dddd, MMMM dd, yyyy",shortTime:"h:mm tt",longTime:"h:mm:ss tt",fullDateTime:"dddd, MMMM dd, yyyy h:mm:ss tt",sortableDateTime:"yyyy-MM-ddTHH:mm:ss",universalSortableDateTime:"yyyy-MM-dd HH:mm:ssZ",rfc1123:"ddd, dd MMM yyyy HH:mm:ss GMT",monthDay:"MMMM dd",yearMonth:"MMMM, yyyy"},regexPatterns:{jan:/^jan(uary)?/i,feb:/^feb(ruary)?/i,mar:/^mar(ch)?/i,apr:/^apr(il)?/i,may:/^may/i,jun:/^jun(e)?/i,jul:/^jul(y)?/i,aug:/^aug(ust)?/i,sep:/^sep(t(ember)?)?/i,oct:/^oct(ober)?/i,nov:/^nov(ember)?/i,dec:/^dec(ember)?/i,sun:/^su(n(day)?)?/i,mon:/^mo(n(day)?)?/i,tue:/^tu(e(s(day)?)?)?/i,wed:/^we(d(nesday)?)?/i,thu:/^th(u(r(s(day)?)?)?)?/i,fri:/^fr(i(day)?)?/i,sat:/^sa(t(urday)?)?/i,future:/^next/i,past:/^last|past|prev(ious)?/i,add:/^(\+|after|from)/i,subtract:/^(\-|before|ago)/i,yesterday:/^yesterday/i,today:/^t(oday)?/i,tomorrow:/^tomorrow/i,now:/^n(ow)?/i,millisecond:/^ms|milli(second)?s?/i,second:/^sec(ond)?s?/i,minute:/^min(ute)?s?/i,hour:/^h(ou)?rs?/i,week:/^w(ee)?k/i,month:/^m(o(nth)?s?)?/i,day:/^d(ays?)?/i,year:/^y((ea)?rs?)?/i,shortMeridian:/^(a|p)/i,longMeridian:/^(a\.?m?\.?|p\.?m?\.?)/i,timezone:/^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,ordinalSuffix:/^\s*(st|nd|rd|th)/i,timeContext:/^\s*(\:|a|p)/i},abbreviatedTimeZoneStandard:{GMT:"-000",EST:"-0400",CST:"-0500",MST:"-0600",PST:"-0700"},abbreviatedTimeZoneDST:{GMT:"-000",EDT:"-0500",CDT:"-0600",MDT:"-0700",PDT:"-0800"}};
                Date.getMonthNumberFromName=function(name){var n=Date.CultureInfo.monthNames,m=Date.CultureInfo.abbreviatedMonthNames,s=name.toLowerCase();for(var i=0;i<n.length;i++){if(n[i].toLowerCase()==s||m[i].toLowerCase()==s){return i;}}
                    return-1;};Date.getDayNumberFromName=function(name){var n=Date.CultureInfo.dayNames,m=Date.CultureInfo.abbreviatedDayNames,o=Date.CultureInfo.shortestDayNames,s=name.toLowerCase();for(var i=0;i<n.length;i++){if(n[i].toLowerCase()==s||m[i].toLowerCase()==s){return i;}}
                    return-1;};Date.isLeapYear=function(year){return(((year%4===0)&&(year%100!==0))||(year%400===0));};Date.getDaysInMonth=function(year,month){return[31,(Date.isLeapYear(year)?29:28),31,30,31,30,31,31,30,31,30,31][month];};Date.getTimezoneOffset=function(s,dst){return(dst||false)?Date.CultureInfo.abbreviatedTimeZoneDST[s.toUpperCase()]:Date.CultureInfo.abbreviatedTimeZoneStandard[s.toUpperCase()];};Date.getTimezoneAbbreviation=function(offset,dst){var n=(dst||false)?Date.CultureInfo.abbreviatedTimeZoneDST:Date.CultureInfo.abbreviatedTimeZoneStandard,p;for(p in n){if(n[p]===offset){return p;}}
                    return null;};Date.prototype.clone=function(){return new Date(this.getTime());};Date.prototype.compareTo=function(date){if(isNaN(this)){throw new Error(this);}
                    if(date instanceof Date&&!isNaN(date)){return(this>date)?1:(this<date)?-1:0;}else{throw new TypeError(date);}};Date.prototype.equals=function(date){return(this.compareTo(date)===0);};Date.prototype.between=function(start,end){var t=this.getTime();return t>=start.getTime()&&t<=end.getTime();};Date.prototype.addMilliseconds=function(value){this.setMilliseconds(this.getMilliseconds()+value);return this;};Date.prototype.addSeconds=function(value){return this.addMilliseconds(value*1000);};Date.prototype.addMinutes=function(value){return this.addMilliseconds(value*60000);};Date.prototype.addHours=function(value){return this.addMilliseconds(value*3600000);};Date.prototype.addDays=function(value){return this.addMilliseconds(value*86400000);};Date.prototype.addWeeks=function(value){return this.addMilliseconds(value*604800000);};Date.prototype.addMonths=function(value){var n=this.getDate();this.setDate(1);this.setMonth(this.getMonth()+value);this.setDate(Math.min(n,this.getDaysInMonth()));return this;};Date.prototype.addYears=function(value){return this.addMonths(value*12);};Date.prototype.add=function(config){if(typeof config=="number"){this._orient=config;return this;}
                    var x=config;if(x.millisecond||x.milliseconds){this.addMilliseconds(x.millisecond||x.milliseconds);}
                    if(x.second||x.seconds){this.addSeconds(x.second||x.seconds);}
                    if(x.minute||x.minutes){this.addMinutes(x.minute||x.minutes);}
                    if(x.hour||x.hours){this.addHours(x.hour||x.hours);}
                    if(x.month||x.months){this.addMonths(x.month||x.months);}
                    if(x.year||x.years){this.addYears(x.year||x.years);}
                    if(x.day||x.days){this.addDays(x.day||x.days);}
                    return this;};Date._validate=function(value,min,max,name){if(typeof value!="number"){throw new TypeError(value+" is not a Number.");}else if(value<min||value>max){throw new RangeError(value+" is not a valid value for "+name+".");}
                    return true;};Date.validateMillisecond=function(n){return Date._validate(n,0,999,"milliseconds");};Date.validateSecond=function(n){return Date._validate(n,0,59,"seconds");};Date.validateMinute=function(n){return Date._validate(n,0,59,"minutes");};Date.validateHour=function(n){return Date._validate(n,0,23,"hours");};Date.validateDay=function(n,year,month){return Date._validate(n,1,Date.getDaysInMonth(year,month),"days");};Date.validateMonth=function(n){return Date._validate(n,0,11,"months");};Date.validateYear=function(n){return Date._validate(n,1,9999,"seconds");};Date.prototype.set=function(config){var x=config;if(!x.millisecond&&x.millisecond!==0){x.millisecond=-1;}
                    if(!x.second&&x.second!==0){x.second=-1;}
                    if(!x.minute&&x.minute!==0){x.minute=-1;}
                    if(!x.hour&&x.hour!==0){x.hour=-1;}
                    if(!x.day&&x.day!==0){x.day=-1;}
                    if(!x.month&&x.month!==0){x.month=-1;}
                    if(!x.year&&x.year!==0){x.year=-1;}
                    if(x.millisecond!=-1&&Date.validateMillisecond(x.millisecond)){this.addMilliseconds(x.millisecond-this.getMilliseconds());}
                    if(x.second!=-1&&Date.validateSecond(x.second)){this.addSeconds(x.second-this.getSeconds());}
                    if(x.minute!=-1&&Date.validateMinute(x.minute)){this.addMinutes(x.minute-this.getMinutes());}
                    if(x.hour!=-1&&Date.validateHour(x.hour)){this.addHours(x.hour-this.getHours());}
                    if(x.month!==-1&&Date.validateMonth(x.month)){this.addMonths(x.month-this.getMonth());}
                    if(x.year!=-1&&Date.validateYear(x.year)){this.addYears(x.year-this.getFullYear());}
                    if(x.day!=-1&&Date.validateDay(x.day,this.getFullYear(),this.getMonth())){this.addDays(x.day-this.getDate());}
                    if(x.timezone){this.setTimezone(x.timezone);}
                    if(x.timezoneOffset){this.setTimezoneOffset(x.timezoneOffset);}
                    return this;};Date.prototype.clearTime=function(){this.setHours(0);this.setMinutes(0);this.setSeconds(0);this.setMilliseconds(0);return this;};Date.prototype.isLeapYear=function(){var y=this.getFullYear();return(((y%4===0)&&(y%100!==0))||(y%400===0));};Date.prototype.isWeekday=function(){return!(this.is().sat()||this.is().sun());};Date.prototype.getDaysInMonth=function(){return Date.getDaysInMonth(this.getFullYear(),this.getMonth());};Date.prototype.moveToFirstDayOfMonth=function(){return this.set({day:1});};Date.prototype.moveToLastDayOfMonth=function(){return this.set({day:this.getDaysInMonth()});};Date.prototype.moveToDayOfWeek=function(day,orient){var diff=(day-this.getDay()+7*(orient||+1))%7;return this.addDays((diff===0)?diff+=7*(orient||+1):diff);};Date.prototype.moveToMonth=function(month,orient){var diff=(month-this.getMonth()+12*(orient||+1))%12;return this.addMonths((diff===0)?diff+=12*(orient||+1):diff);};Date.prototype.getDayOfYear=function(){return Math.floor((this-new Date(this.getFullYear(),0,1))/86400000);};Date.prototype.getWeekOfYear=function(firstDayOfWeek){var y=this.getFullYear(),m=this.getMonth(),d=this.getDate();var dow=firstDayOfWeek||Date.CultureInfo.firstDayOfWeek;var offset=7+1-new Date(y,0,1).getDay();if(offset==8){offset=1;}
                    var daynum=((Date.UTC(y,m,d,0,0,0)-Date.UTC(y,0,1,0,0,0))/86400000)+1;var w=Math.floor((daynum-offset+7)/7);if(w===dow){y--;var prevOffset=7+1-new Date(y,0,1).getDay();if(prevOffset==2||prevOffset==8){w=53;}else{w=52;}}
                    return w;};Date.prototype.isDST=function(){console.log('isDST');return this.toString().match(/(E|C|M|P)(S|D)T/)[2]=="D";};Date.prototype.getTimezone=function(){return Date.getTimezoneAbbreviation(this.getUTCOffset,this.isDST());};Date.prototype.setTimezoneOffset=function(s){var here=this.getTimezoneOffset(),there=Number(s)*-6/10;this.addMinutes(there-here);return this;};Date.prototype.setTimezone=function(s){return this.setTimezoneOffset(Date.getTimezoneOffset(s));};Date.prototype.getUTCOffset=function(){var n=this.getTimezoneOffset()*-10/6,r;if(n<0){r=(n-10000).toString();return r[0]+r.substr(2);}else{r=(n+10000).toString();return"+"+r.substr(1);}};Date.prototype.getDayName=function(abbrev){return abbrev?Date.CultureInfo.abbreviatedDayNames[this.getDay()]:Date.CultureInfo.dayNames[this.getDay()];};Date.prototype.getMonthName=function(abbrev){return abbrev?Date.CultureInfo.abbreviatedMonthNames[this.getMonth()]:Date.CultureInfo.monthNames[this.getMonth()];};Date.prototype._toString=Date.prototype.toString;Date.prototype.toString=function(format){var self=this;var p=function p(s){return(s.toString().length==1)?"0"+s:s;};return format?format.replace(/dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?/g,function(format){switch(format){case"hh":return p(self.getHours()<13?self.getHours():(self.getHours()-12));case"h":return self.getHours()<13?self.getHours():(self.getHours()-12);case"HH":return p(self.getHours());case"H":return self.getHours();case"mm":return p(self.getMinutes());case"m":return self.getMinutes();case"ss":return p(self.getSeconds());case"s":return self.getSeconds();case"yyyy":return self.getFullYear();case"yy":return self.getFullYear().toString().substring(2,4);case"dddd":return self.getDayName();case"ddd":return self.getDayName(true);case"dd":return p(self.getDate());case"d":return self.getDate().toString();case"MMMM":return self.getMonthName();case"MMM":return self.getMonthName(true);case"MM":return p((self.getMonth()+1));case"M":return self.getMonth()+1;case"t":return self.getHours()<12?Date.CultureInfo.amDesignator.substring(0,1):Date.CultureInfo.pmDesignator.substring(0,1);case"tt":return self.getHours()<12?Date.CultureInfo.amDesignator:Date.CultureInfo.pmDesignator;case"zzz":case"zz":case"z":return"";}}):this._toString();};
                Date.now=function(){return new Date();};Date.today=function(){return Date.now().clearTime();};Date.prototype._orient=+1;Date.prototype.next=function(){this._orient=+1;return this;};Date.prototype.last=Date.prototype.prev=Date.prototype.previous=function(){this._orient=-1;return this;};Date.prototype._is=false;Date.prototype.is=function(){this._is=true;return this;};Number.prototype._dateElement="day";Number.prototype.fromNow=function(){var c={};c[this._dateElement]=this;return Date.now().add(c);};Number.prototype.ago=function(){var c={};c[this._dateElement]=this*-1;return Date.now().add(c);};(function(){var $D=Date.prototype,$N=Number.prototype;var dx=("sunday monday tuesday wednesday thursday friday saturday").split(/\s/),mx=("january february march april may june july august september october november december").split(/\s/),px=("Millisecond Second Minute Hour Day Week Month Year").split(/\s/),de;var df=function(n){return function(){if(this._is){this._is=false;return this.getDay()==n;}
                    return this.moveToDayOfWeek(n,this._orient);};};for(var i=0;i<dx.length;i++){$D[dx[i]]=$D[dx[i].substring(0,3)]=df(i);}
                    var mf=function(n){return function(){if(this._is){this._is=false;return this.getMonth()===n;}
                        return this.moveToMonth(n,this._orient);};};for(var j=0;j<mx.length;j++){$D[mx[j]]=$D[mx[j].substring(0,3)]=mf(j);}
                    var ef=function(j){return function(){if(j.substring(j.length-1)!="s"){j+="s";}
                        return this["add"+j](this._orient);};};var nf=function(n){return function(){this._dateElement=n;return this;};};for(var k=0;k<px.length;k++){de=px[k].toLowerCase();$D[de]=$D[de+"s"]=ef(px[k]);$N[de]=$N[de+"s"]=nf(de);}}());Date.prototype.toJSONString=function(){return this.toString("yyyy-MM-ddThh:mm:ssZ");};Date.prototype.toShortDateString=function(){return this.toString(Date.CultureInfo.formatPatterns.shortDatePattern);};Date.prototype.toLongDateString=function(){return this.toString(Date.CultureInfo.formatPatterns.longDatePattern);};Date.prototype.toShortTimeString=function(){return this.toString(Date.CultureInfo.formatPatterns.shortTimePattern);};Date.prototype.toLongTimeString=function(){return this.toString(Date.CultureInfo.formatPatterns.longTimePattern);};Date.prototype.getOrdinal=function(){switch(this.getDate()){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th";}};
                (function(){Date.Parsing={Exception:function(s){this.message="Parse error at '"+s.substring(0,10)+" ...'";}};var $P=Date.Parsing;var _=$P.Operators={rtoken:function(r){return function(s){var mx=s.match(r);if(mx){return([mx[0],s.substring(mx[0].length)]);}else{throw new $P.Exception(s);}};},token:function(s){return function(s){return _.rtoken(new RegExp("^\s*"+s+"\s*"))(s);};},stoken:function(s){return _.rtoken(new RegExp("^"+s));},until:function(p){return function(s){var qx=[],rx=null;while(s.length){try{rx=p.call(this,s);}catch(e){qx.push(rx[0]);s=rx[1];continue;}
                    break;}
                    return[qx,s];};},many:function(p){return function(s){var rx=[],r=null;while(s.length){try{r=p.call(this,s);}catch(e){return[rx,s];}
                    rx.push(r[0]);s=r[1];}
                    return[rx,s];};},optional:function(p){return function(s){var r=null;try{r=p.call(this,s);}catch(e){return[null,s];}
                    return[r[0],r[1]];};},not:function(p){return function(s){try{p.call(this,s);}catch(e){return[null,s];}
                    throw new $P.Exception(s);};},ignore:function(p){return p?function(s){var r=null;r=p.call(this,s);return[null,r[1]];}:null;},product:function(){var px=arguments[0],qx=Array.prototype.slice.call(arguments,1),rx=[];for(var i=0;i<px.length;i++){rx.push(_.each(px[i],qx));}
                    return rx;},cache:function(rule){var cache={},r=null;return function(s){try{r=cache[s]=(cache[s]||rule.call(this,s));}catch(e){r=cache[s]=e;}
                    if(r instanceof $P.Exception){throw r;}else{return r;}};},any:function(){var px=arguments;return function(s){var r=null;for(var i=0;i<px.length;i++){if(px[i]==null){continue;}
                    try{r=(px[i].call(this,s));}catch(e){r=null;}
                    if(r){return r;}}
                    throw new $P.Exception(s);};},each:function(){var px=arguments;return function(s){var rx=[],r=null;for(var i=0;i<px.length;i++){if(px[i]==null){continue;}
                    try{r=(px[i].call(this,s));}catch(e){throw new $P.Exception(s);}
                    rx.push(r[0]);s=r[1];}
                    return[rx,s];};},all:function(){var px=arguments,_=_;return _.each(_.optional(px));},sequence:function(px,d,c){d=d||_.rtoken(/^\s*/);c=c||null;if(px.length==1){return px[0];}
                    return function(s){var r=null,q=null;var rx=[];for(var i=0;i<px.length;i++){try{r=px[i].call(this,s);}catch(e){break;}
                        rx.push(r[0]);try{q=d.call(this,r[1]);}catch(ex){q=null;break;}
                        s=q[1];}
                        if(!r){throw new $P.Exception(s);}
                        if(q){throw new $P.Exception(q[1]);}
                        if(c){try{r=c.call(this,r[1]);}catch(ey){throw new $P.Exception(r[1]);}}
                        return[rx,(r?r[1]:s)];};},between:function(d1,p,d2){d2=d2||d1;var _fn=_.each(_.ignore(d1),p,_.ignore(d2));return function(s){var rx=_fn.call(this,s);return[[rx[0][0],r[0][2]],rx[1]];};},list:function(p,d,c){d=d||_.rtoken(/^\s*/);c=c||null;return(p instanceof Array?_.each(_.product(p.slice(0,-1),_.ignore(d)),p.slice(-1),_.ignore(c)):_.each(_.many(_.each(p,_.ignore(d))),px,_.ignore(c)));},set:function(px,d,c){d=d||_.rtoken(/^\s*/);c=c||null;return function(s){var r=null,p=null,q=null,rx=null,best=[[],s],last=false;for(var i=0;i<px.length;i++){q=null;p=null;r=null;last=(px.length==1);try{r=px[i].call(this,s);}catch(e){continue;}
                    rx=[[r[0]],r[1]];if(r[1].length>0&&!last){try{q=d.call(this,r[1]);}catch(ex){last=true;}}else{last=true;}
                    if(!last&&q[1].length===0){last=true;}
                    if(!last){var qx=[];for(var j=0;j<px.length;j++){if(i!=j){qx.push(px[j]);}}
                        p=_.set(qx,d).call(this,q[1]);if(p[0].length>0){rx[0]=rx[0].concat(p[0]);rx[1]=p[1];}}
                    if(rx[1].length<best[1].length){best=rx;}
                    if(best[1].length===0){break;}}
                    if(best[0].length===0){return best;}
                    if(c){try{q=c.call(this,best[1]);}catch(ey){throw new $P.Exception(best[1]);}
                        best[1]=q[1];}
                    return best;};},forward:function(gr,fname){return function(s){return gr[fname].call(this,s);};},replace:function(rule,repl){return function(s){var r=rule.call(this,s);return[repl,r[1]];};},process:function(rule,fn){return function(s){var r=rule.call(this,s);return[fn.call(this,r[0]),r[1]];};},min:function(min,rule){return function(s){var rx=rule.call(this,s);if(rx[0].length<min){throw new $P.Exception(s);}
                    return rx;};}};var _generator=function(op){return function(){var args=null,rx=[];if(arguments.length>1){args=Array.prototype.slice.call(arguments);}else if(arguments[0]instanceof Array){args=arguments[0];}
                    if(args){for(var i=0,px=args.shift();i<px.length;i++){args.unshift(px[i]);rx.push(op.apply(null,args));args.shift();return rx;}}else{return op.apply(null,arguments);}};};var gx="optional not ignore cache".split(/\s/);for(var i=0;i<gx.length;i++){_[gx[i]]=_generator(_[gx[i]]);}
                    var _vector=function(op){return function(){if(arguments[0]instanceof Array){return op.apply(null,arguments[0]);}else{return op.apply(null,arguments);}};};var vx="each any all".split(/\s/);for(var j=0;j<vx.length;j++){_[vx[j]]=_vector(_[vx[j]]);}}());(function(){var flattenAndCompact=function(ax){var rx=[];for(var i=0;i<ax.length;i++){if(ax[i]instanceof Array){rx=rx.concat(flattenAndCompact(ax[i]));}else{if(ax[i]){rx.push(ax[i]);}}}
                    return rx;};Date.Grammar={};Date.Translator={hour:function(s){return function(){this.hour=Number(s);};},minute:function(s){return function(){this.minute=Number(s);};},second:function(s){return function(){this.second=Number(s);};},meridian:function(s){return function(){this.meridian=s.slice(0,1).toLowerCase();};},timezone:function(s){return function(){var n=s.replace(/[^\d\+\-]/g,"");if(n.length){this.timezoneOffset=Number(n);}else{this.timezone=s.toLowerCase();}};},day:function(x){var s=x[0];return function(){this.day=Number(s.match(/\d+/)[0]);};},month:function(s){return function(){this.month=((s.length==3)?Date.getMonthNumberFromName(s):(Number(s)-1));};},year:function(s){return function(){var n=Number(s);this.year=((s.length>2)?n:(n+(((n+2000)<Date.CultureInfo.twoDigitYearMax)?2000:1900)));};},rday:function(s){return function(){switch(s){case"yesterday":this.days=-1;break;case"tomorrow":this.days=1;break;case"today":this.days=0;break;case"now":this.days=0;this.now=true;break;}};},finishExact:function(x){x=(x instanceof Array)?x:[x];var now=new Date();this.year=now.getFullYear();this.month=now.getMonth();this.day=1;this.hour=0;this.minute=0;this.second=0;for(var i=0;i<x.length;i++){if(x[i]){x[i].call(this);}}
                    this.hour=(this.meridian=="p"&&this.hour<13)?this.hour+12:this.hour;if(this.day>Date.getDaysInMonth(this.year,this.month)){throw new RangeError(this.day+" is not a valid value for days.");}
                    var r=new Date(this.year,this.month,this.day,this.hour,this.minute,this.second);if(this.timezone){r.set({timezone:this.timezone});}else if(this.timezoneOffset){r.set({timezoneOffset:this.timezoneOffset});}
                    return r;},finish:function(x){x=(x instanceof Array)?flattenAndCompact(x):[x];if(x.length===0){return null;}
                    for(var i=0;i<x.length;i++){if(typeof x[i]=="function"){x[i].call(this);}}
                    if(this.now){return new Date();}
                    var today=Date.today();var method=null;var expression=!!(this.days!=null||this.orient||this.operator);if(expression){var gap,mod,orient;orient=((this.orient=="past"||this.operator=="subtract")?-1:1);if(this.weekday){this.unit="day";gap=(Date.getDayNumberFromName(this.weekday)-today.getDay());mod=7;this.days=gap?((gap+(orient*mod))%mod):(orient*mod);}
                        if(this.month){this.unit="month";gap=(this.month-today.getMonth());mod=12;this.months=gap?((gap+(orient*mod))%mod):(orient*mod);this.month=null;}
                        if(!this.unit){this.unit="day";}
                        if(this[this.unit+"s"]==null||this.operator!=null){if(!this.value){this.value=1;}
                            if(this.unit=="week"){this.unit="day";this.value=this.value*7;}
                            this[this.unit+"s"]=this.value*orient;}
                        return today.add(this);}else{if(this.meridian&&this.hour){this.hour=(this.hour<13&&this.meridian=="p")?this.hour+12:this.hour;}
                        if(this.weekday&&!this.day){this.day=(today.addDays((Date.getDayNumberFromName(this.weekday)-today.getDay()))).getDate();}
                        if(this.month&&!this.day){this.day=1;}
                        return today.set(this);}}};var _=Date.Parsing.Operators,g=Date.Grammar,t=Date.Translator,_fn;g.datePartDelimiter=_.rtoken(/^([\s\-\.\,\/\x27]+)/);g.timePartDelimiter=_.stoken(":");g.whiteSpace=_.rtoken(/^\s*/);g.generalDelimiter=_.rtoken(/^(([\s\,]|at|on)+)/);var _C={};g.ctoken=function(keys){var fn=_C[keys];if(!fn){var c=Date.CultureInfo.regexPatterns;var kx=keys.split(/\s+/),px=[];for(var i=0;i<kx.length;i++){px.push(_.replace(_.rtoken(c[kx[i]]),kx[i]));}
                    fn=_C[keys]=_.any.apply(null,px);}
                    return fn;};g.ctoken2=function(key){return _.rtoken(Date.CultureInfo.regexPatterns[key]);};g.h=_.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2]|[1-9])/),t.hour));g.hh=_.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2])/),t.hour));g.H=_.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/),t.hour));g.HH=_.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3])/),t.hour));g.m=_.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/),t.minute));g.mm=_.cache(_.process(_.rtoken(/^[0-5][0-9]/),t.minute));g.s=_.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/),t.second));g.ss=_.cache(_.process(_.rtoken(/^[0-5][0-9]/),t.second));g.hms=_.cache(_.sequence([g.H,g.mm,g.ss],g.timePartDelimiter));g.t=_.cache(_.process(g.ctoken2("shortMeridian"),t.meridian));g.tt=_.cache(_.process(g.ctoken2("longMeridian"),t.meridian));g.z=_.cache(_.process(_.rtoken(/^(\+|\-)?\s*\d\d\d\d?/),t.timezone));g.zz=_.cache(_.process(_.rtoken(/^(\+|\-)\s*\d\d\d\d/),t.timezone));g.zzz=_.cache(_.process(g.ctoken2("timezone"),t.timezone));g.timeSuffix=_.each(_.ignore(g.whiteSpace),_.set([g.tt,g.zzz]));g.time=_.each(_.optional(_.ignore(_.stoken("T"))),g.hms,g.timeSuffix);g.d=_.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1]|\d)/),_.optional(g.ctoken2("ordinalSuffix"))),t.day));g.dd=_.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1])/),_.optional(g.ctoken2("ordinalSuffix"))),t.day));g.ddd=g.dddd=_.cache(_.process(g.ctoken("sun mon tue wed thu fri sat"),function(s){return function(){this.weekday=s;};}));g.M=_.cache(_.process(_.rtoken(/^(1[0-2]|0\d|\d)/),t.month));g.MM=_.cache(_.process(_.rtoken(/^(1[0-2]|0\d)/),t.month));g.MMM=g.MMMM=_.cache(_.process(g.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"),t.month));g.y=_.cache(_.process(_.rtoken(/^(\d\d?)/),t.year));g.yy=_.cache(_.process(_.rtoken(/^(\d\d)/),t.year));g.yyy=_.cache(_.process(_.rtoken(/^(\d\d?\d?\d?)/),t.year));g.yyyy=_.cache(_.process(_.rtoken(/^(\d\d\d\d)/),t.year));_fn=function(){return _.each(_.any.apply(null,arguments),_.not(g.ctoken2("timeContext")));};g.day=_fn(g.d,g.dd);g.month=_fn(g.M,g.MMM);g.year=_fn(g.yyyy,g.yy);g.orientation=_.process(g.ctoken("past future"),function(s){return function(){this.orient=s;};});g.operator=_.process(g.ctoken("add subtract"),function(s){return function(){this.operator=s;};});g.rday=_.process(g.ctoken("yesterday tomorrow today now"),t.rday);g.unit=_.process(g.ctoken("minute hour day week month year"),function(s){return function(){this.unit=s;};});g.value=_.process(_.rtoken(/^\d\d?(st|nd|rd|th)?/),function(s){return function(){this.value=s.replace(/\D/g,"");};});g.expression=_.set([g.rday,g.operator,g.value,g.unit,g.orientation,g.ddd,g.MMM]);_fn=function(){return _.set(arguments,g.datePartDelimiter);};g.mdy=_fn(g.ddd,g.month,g.day,g.year);g.ymd=_fn(g.ddd,g.year,g.month,g.day);g.dmy=_fn(g.ddd,g.day,g.month,g.year);g.date=function(s){return((g[Date.CultureInfo.dateElementOrder]||g.mdy).call(this,s));};g.format=_.process(_.many(_.any(_.process(_.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/),function(fmt){if(g[fmt]){return g[fmt];}else{throw Date.Parsing.Exception(fmt);}}),_.process(_.rtoken(/^[^dMyhHmstz]+/),function(s){return _.ignore(_.stoken(s));}))),function(rules){return _.process(_.each.apply(null,rules),t.finishExact);});var _F={};var _get=function(f){return _F[f]=(_F[f]||g.format(f)[0]);};g.formats=function(fx){if(fx instanceof Array){var rx=[];for(var i=0;i<fx.length;i++){rx.push(_get(fx[i]));}
                    return _.any.apply(null,rx);}else{return _get(fx);}};g._formats=g.formats(["yyyy-MM-ddTHH:mm:ss","ddd, MMM dd, yyyy H:mm:ss tt","ddd MMM d yyyy HH:mm:ss zzz","d"]);g._start=_.process(_.set([g.date,g.time,g.expression],g.generalDelimiter,g.whiteSpace),t.finish);g.start=function(s){try{var r=g._formats.call({},s);if(r[1].length===0){return r;}}catch(e){}
                    return g._start.call({},s);};}());Date._parse=Date.parse;Date.parse=function(s){var r=null;if(!s){return null;}
                    try{r=Date.Grammar.start.call({},s);}catch(e){return null;}
                    return((r[1].length===0)?r[0]:null);};Date.getParseFunction=function(fx){var fn=Date.Grammar.formats(fx);return function(s){var r=null;try{r=fn.call({},s);}catch(e){return null;}
                    return((r[1].length===0)?r[0]:null);};};Date.parseExact=function(s,fx){return Date.getParseFunction(fx)(s);};


                var endDate     = Date.parseExact($("body").attr("start_date"), "yyyy-MM-dd HH:mm:ss").getTime();
                var _now        = new Date();
                var k           = 1/(1000*60*60);
                var resultRange = endDate - _now;


                var androidVString = getParameterByName('androidVersionPreview');
                // &androidVersion=25&androidVersionPreview=5.2.2
                if(getParameterByName('androidVersion') && parseInt(getParameterByName('androidVersion')) < 19 && resultRange<=3 ){


                    $('#client').hide();
                    $('body').append("<div class='error-purchase-control'>" +
                        "<h1 style='letter-spacing: 1px;'>" +
                        "</h1>" +
                        "<p style='word-spacing: 1px;'>" +
                        _tr_.payError1 + androidVString + _tr_.payError11 +
                        "</p>" +
                        "<br/>" +
                        "<div style='padding: 0 15px'>" +
                        "<button id='bachToApplication' class='errorDelivery'>" +
                        _tr_.backToHiFilm +
                        "</button>" +
                        "</div>" +

                        "<table class='info-table' style='width: 100%;margin-bottom: 15px;'>" +
                        "<tbody>" +
                        "<tr>" +
                        "<td rowspan='2' class='icon-td mobile-icon' style='min-width: 60px;'></td>" +
                        "<td class='text-td' style='color:#fff;text-align: left'>"+ _tr_.contacts +"</td>" +
                        "</tr>" +
                        "<tr>" +
                        "<td class='text-td' style='color: #fff;padding-right: 15px;text-align:left;vertical-align: middle;'><span style='line-height: 1.5;text-align:left;vertical-align: middle;font-size: 13px;display: block;width: 100%'>"+ _tr_.hiFilmNumber +"</span><span style='line-height: 1.5;text-align:left;vertical-align: middle;font-size: 13px;display: block;width: 100%'>"+_tr_.cultNumber+"</span></td>" +
                        "</tr>" +
                        "</tbody>" +
                        "</table>" +


                        "</div>"
                    );

                }

                if(getParameterByName('androidVersion') && parseInt(getParameterByName('androidVersion')) < 19 && resultRange > 3 ){

                    $("#visa").hide();
                    $("#tab1").find(".total-tickets-view").hide();
                    $("#tab1").find(".selected-film-name").hide();
                    $("#tab1").find(".back-to-map button").css({margin: "0px auto"});

                    // bach buttons
                    $("<div class='bad-icon'><span></span></div><p class='three-hours-error'><p class='three-hours-error'>" +
                        _tr_.payError2 + androidVString + _tr_.payError22 +
                        "</p>").insertBefore("#visa");
                }

                if(resultRange > 0){
                    var hourRange = (Math.abs(resultRange)*k).toFixed(2);
                    if(hourRange <= 3){

                        $("#cash_form").hide();
                        $("#tab2").find(".total-tickets-view").hide();
                        $("#tab2").find(".selected-film-name").hide();

                        // back buttons
                        $("<div class='bac-icon-time'><span></span><p style='color:#431e75'>" + _tr_.notEnTime +
                            "</p></div><p class='three-hours-error'>" +
                            _tr_.payError3 +
                            "</p>").insertBefore("#cash_form");

                    }
                } else {
                    $("#cash_form").hide();
                    $("#tab2").find(".total-tickets-view").hide();
                    $("#tab2").find(".selected-film-name").hide();

                    // back buttons
                    $("<div class='bac-icon-time'><span></span><p style='color:#431e75'>" + _tr_.notEnTime +
                        "</p></div><p class='three-hours-error'>" +
                        _tr_.payError3 +
                        "</p>").insertBefore("#cash_form");
                }
            }

            // remove default zoom buttons
            // $('#in_zoom').removeClass();
            // $('#out_zoom').removeClass();
            // add custom zoom buttons
            $('#zoom_cont').append("<div id='_in_zoom'></div>");
            $('#zoom_cont').append("<div id='_out_zoom' class='passive'></div>");

            $('#_in_zoom').on("click touchstart", function () {
                $('#in_zoom').trigger('click');
                setTimeout(function () {
                    if($('#in_zoom').hasClass("passive")){
                        $('#_in_zoom').addClass("passive");
                        $('#_out_zoom').removeClass("passive");
                    } else {
                        $('#_in_zoom').removeClass("passive");
                        $('#_out_zoom').addClass("passive");
                    }
                },50);
            });
            $('#_out_zoom').on("click touchstart", function () {
                $('#out_zoom').trigger('click');
                setTimeout(function () {
                    if($('#out_zoom').hasClass("passive")){
                        $('#_out_zoom').addClass("passive");
                        $('#_in_zoom').removeClass("passive");
                    } else {
                        $('#_out_zoom').removeClass("passive");
                        $('#_in_zoom').addClass("passive");
                    }
                },50);
            });

            // insert email helper
            $("#visa").find('label').after("<p class='email-helper'>"+_tr_.emailHelper+"</p>");

            // close keyboard when user toch in other side
            $(document).on('touchend', function (e) {
                if (!$(e.target).is('#email') && $('#email').is(':focus')) {
                    document.activeElement.blur();
                }
                if (!$(e.target).is('#phone') && $('#phone').is(':focus')) {
                    document.activeElement.blur();
                }
                if (!$(e.target).is('#address') && $('#address').is(':focus')) {
                    document.activeElement.blur();
                }
            });

            // price cont block control
            $('.price_color').remove();

            var oldValue = $('.price_cont').html();
            $('#buy_event_date').append("<span> ("+ oldValue +")</span>");

            // seats color info block
            $("<div class='price-info-block'>" +
                "<p>"+_tr_.map_info+"</p>" +
                "<br/>" +
                "<table class='info-table' style='width: 100%;margin-bottom: 15px;'>" +
                "<tbody>" +
                "<tr style='height: 10px;'>" +
                "<td></td>" +
                "</tr>" +
                "<tr>" +
                "<td class='text-td' style='color:#ffe100;text-align: center'>"+ _tr_.haveAQuestions +"</td>" +
                "</tr>" +
                "<tr>" +
                "<td class='text-td' style='color: #fff;padding-right: 15px;text-align:center;vertical-align: middle;'><span style='line-height: 1;text-align:center;vertical-align: middle;font-size: 13px;display: block;width: 100%'>"+ _tr_.hiFilmLosung +"</span></td>" +
                "</tr>" +
                "<tr>" +
                "<td class='text-td' style='color: #fff;padding-right: 15px;text-align:center;vertical-align: middle;'><span style='line-height: 1.5;text-align:center;vertical-align: middle;font-size: 14px;display: block;width: 100%'>"+ _tr_.hiFilmNumber +"</span></td>" +
                "</tr>" +

                "<tr style='height: 15px;'>" +
                "<td></td>" +
                "</tr>" +

                "</tbody>" +
                "</table>" +
                "</div>").insertAfter("#client_cont");

            $('form').find('input[type=submit]').attr('disabled','disabled');

            // bind seats click or touch
            $('#circle_cont a').on("click touchstart", function(){
                //remove table thead
                $('.selected-seats').find('thead').remove();

                if($('#selected_seats_table_body').find('tr').length != 0){
                    // if we have a selected seats
                    $('.price-info-block').fadeOut("fast");
                    var totalPrice = $('#ticket_note').find('.selected-seat-price').html();

                    if($(".pay-btn-control").length){
                        $(".pay-btn-control").fadeIn();
                        $(".pay-btn-control").find('button').html(_tr_.pay + " ("+totalPrice+" "+_tr_.currency+")");
                    }else {
                        $("<div class='pay-btn-control'>" +
                            "<button id='purchase'> "+_tr_.pay+" (" +
                            totalPrice +
                            " " +_tr_.currency +")" +
                            "</button>" +
                            "</div>").insertAfter(".selected-seats");

                        $('#purchase').on("click", function(e){
                            e.stopPropagation();
                            // hide all element for purchase block view
                            $('#client_info').hide();
                            $('.rounded-info-block').hide();
                            $('#client_cont').hide();
                            $('.table-cont').hide();
                            $('#client').css({background:'#e6e6e6'});

                            $( "html body" ).scrollTop(0);

                            $('.btn-order-other').on("click", function () {
                                var t = "#tab2";
                                $('#purchase_tabs li a').addClass('inactive');
                                $("#t_ppd").removeClass('inactive');
                                $('.purchase-container').hide();
                                $(t).fadeIn('fast');
                            });

                            // calculate
                            $('#t_payment').html(_tr_.payment);
                            $('#t_MasterCard').html(_tr_.creditCard);
                            $('#t_ppd').html(_tr_.payPerDelivery);
                            $('.selected-film-name').html($('#buy_event_title').html());
                            $('#t_tickets2').html(_tr_.tickets);
                            $('#t_tickets').html(_tr_.tickets);
                            $('.ticketCount').html($('#selected_seats_table_body').find('tr').length + "x " + parseInt($('#ticket_note').find('.selected-seat-price').html(), 10)/$('#selected_seats_table_body').find('tr').length);
                            $('.totalPrice').html("AMD " + $('#ticket_note').find('.selected-seat-price').html());
                            $('#t_total').html(_tr_.total);
                            $('#t_total2').html(_tr_.total);
                            $('#t_delivery').html(_tr_.delivery);
                            $('.totalPriceLast').html("AMD " + $('#ticket_note').find('.selected-seat-price').html());
                            $('#t_emailAddress').html(_tr_.yourEmail);
                            $('#email').attr('placeholder','username@example.com');
                            $('#phone').attr('placeholder','+374 ');
                            $('#address').attr('placeholder','Address ');
                            $('#t_phoneNum').html(_tr_.telNumber);
                            $('#t_delAddress').html(_tr_.deliveryAddress);
                            $('#footer-info').html(
                                "<strong>Cult.am</strong> " +
                                "will process the payment and the payment is supported by " +
                                "<strong>Ameria Bank</strong>" +
                                " and is secure"
                            );
                            $('.ui-btn-r').addClass("continue-purchase");
                            var _submitInput = $('.ui-btn-r').find('input');
                            $('.ui-btn-r').html(_tr_.next + _submitInput);
                            $('form').find('input[type=submit]').attr("value", _tr_.next);
                            // calculate end

                            $('.deliveryPrice').html("AMD " + _deliveryPrice);
                            $('.totalPriceLastPPD').html("AMD " + (parseInt($('#ticket_note').find('.selected-seat-price').html(), 10)+_deliveryPrice));

                            // view purchase block
                            $(".purchase-flow").fadeIn("slow");
                            $('.purchase-container').hide();
                            $('.purchase-container:first').show();
                            $('#purchase_tabs li a:last').addClass('inactive');
                            $('#purchase_tabs li a:first').removeClass('inactive');


                            $('#purchase_tabs li a').click(function(){
                                var t = $(this).attr('href');
                                $('#purchase_tabs li a').addClass('inactive');
                                $(this).removeClass('inactive');
                                $('.purchase-container').hide();
                                $(t).fadeIn('fast');
                                return false;
                            });
                        });
                    }
                }else {
                    // if its first seat
                    $('.price-info-block').fadeIn("fast");
                    $(".pay-btn-control").fadeOut();
                }


                // change table style
                $('#selected_seats_table_body').find('tr').each(function() {
                    if(!$( this ).hasClass("used")){
                        var oldValRow   = this.cells[0].innerHTML;
                        var oldValSeat  = this.cells[1].innerHTML;
                        this.cells[0].innerHTML = _tr_.row + " "+oldValRow;
                        this.cells[1].innerHTML = _tr_.seat + " "+oldValSeat;
                        this.cells[2].innerHTML = "<a href='#' class='removeOne'></a>";
                    }
                    $( this ).addClass("used");
                });

                // init remove seat function
                removeOne();

            });

            // remove seat function custom
            function removeOne(){
                $('#selected_seats_table_body').find('td').find('.removeOne').on("click", function(){
                    setTimeout(function(){

                        if($('#selected_seats_table_body').find('tr').length != 0){
                            // if we have a selected seat
                            $('.price-info-block').fadeOut("fast");

                            var totalPrice = $('#ticket_note').find('.selected-seat-price').html();

                            if($(".pay-btn-control").length != 0){
                                $(".pay-btn-control").find('button').html("");
                                $(".pay-btn-control").find('button').html(_tr_.pay + " ("+totalPrice+" "+_tr_.currency+")");
                            }else {
                                $("<div class='pay-btn-control'>" +
                                    "<button id='purchase'>" +_tr_.pay+ " (" +
                                    totalPrice +
                                    _tr_.currency+ " )" +
                                    "</button>" +
                                    "</div>").insertAfter(".selected-seats");
                            }
                        }else {
                            // if don't have a seat selected
                            $('.price-info-block').fadeIn("fast");
                            $('.pay-btn-control').fadeOut("slow");
                        }
                    },50);
                });
            }


            // hide purchase flow and show main page
            $('.bachToMap').on("click", function(e){
                // hide purchase modal and show other view
                $('.rounded-info-block').show();
                $('#client_cont').show();
                $('.table-cont').show();
                $('#client').css({ background : '#0e101c'});
                $(".purchase-flow").fadeOut("slow");
                $(window).trigger("resize");
                e.stopPropagation();
            });


            $('#email').blur(function () {
                var email = $(this).val();
                var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (re.test(email)) {
                    $("#t_emailAddress").html(_tr_.yourEmail);
                    $("#visa #email").css({"border" : "solid 1px green"});
                    $("#t_emailAddress").css({"color" : "green"});
                } else {
                    $("#visa #email").css({"border" : "solid 1px red"});
                    $("#t_emailAddress").css({"color" : "red"});
                    $("#t_emailAddress").html(_tr_.emailError);
                }
                $('#visa').find('input[type=submit]').prop('disabled', false);
            });

            $('#phone').blur(function () {
                var phone = $(this).val();
                if (phone == "" || phone == " ") {
                    $("#t_phoneNum").html(_tr_.telNumberError);
                    $("#cash_form #phone").css({"border" : "solid 1px red"});
                    $("#t_phoneNum").css({"color" : "red"});
                } else {
                    $("#t_phoneNum").html(_tr_.telNumber);
                    $("#t_phoneNum").css({"color" : "green"});
                    $("#cash_form #phone").css({"border" : "solid 1px green"});
                }
                $('#cash_form').find('input[type=submit]').prop('disabled', false);
            });

            $('#address').blur(function () {
                var address = $(this).val();
                if (address == "" || address == " ") {
                    $("#t_delAddress").html(_tr_.deliveryAddressError);
                    $("#cash_form #address").css({"border" : "solid 1px red"});
                    $("#t_delAddress").css({"color" : "red"});
                } else {
                    $("#t_delAddress").html(_tr_.deliveryAddress);
                    $("#t_delAddress").css({"color" : "green"});
                    $("#cash_form #address").css({"border" : "solid 1px green"});
                }
            });

            $("#visa").on("submit", function(e){
                e.preventDefault();
                var totalPrice = $(".totalPriceLast").html();
                var _mail = $("#email").val();
                // id_schedule
                // date_time
                // theatre_name
                // movie_name
                // price
                // lang
                $.ajax({
                    type: "POST",
                    url: "https://dev.hifilmapp.com/api/1.0/hifilm/log/data/",
                    data: {
                        hfu : window.hifilm_user,
                        method : "card",
                        status : "inProgress",
                        totalPrice : totalPrice.replace(/[^-0-9]/gim,''),
                        email : _mail,
                        phone : "",
                        address : "",
                        id_schedule : getParameterByName("id_schedule"),
                        date_time : getParameterByName("date_time"),
                        theatre_name : getParameterByName("theatre_name"),
                        movie_name : getParameterByName("movie_name"),
                        price : getParameterByName("price").replace(/[^-0-9]/gim,'')
                    }
                });
            });

            $("#cash_form").on("submit", function(e){
                e.preventDefault();
                var totalPrice = $(".totalPriceLastPPD").html();
                var _phone = $("#phone").val();
                var _address = $("#address").val();

                $.ajax({
                    type: "POST",
                    url: "https://dev.hifilmapp.com/api/1.0/hifilm/log/data/",
                    data: {
                        hfu : window.hifilm_user,
                        method : "delivery",
                        status : "inProgress",
                        totalPrice : totalPrice.replace(/[^-0-9]/gim,''),
                        email : "",
                        phone : _phone,
                        address : _address,
                        id_schedule : getParameterByName("id_schedule"),
                        date_time : getParameterByName("date_time"),
                        theatre_name : getParameterByName("theatre_name"),
                        movie_name : getParameterByName("movie_name"),
                        price : getParameterByName("price").replace(/[^-0-9]/gim,'')
                    }
                });
            });

        });


    } else {
        // return to application if jquery is not defined
        window.location.redirect = "inapp://back";
    }
})();