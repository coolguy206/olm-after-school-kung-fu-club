var $ = require('jquery');



$(document).ready(function () {

    var faqs = [
        {
            q: `How much is the<br class="mobile"> kung fu class?`,
            a: `The kung fu class is <b>FREE</b><br class="mobile"> for OLM students who are in CLUBHOUSE.`
        },
        {
            q: `When and where is the<br class="mobile"> kung fu class?`,
            a: `Classes will be held after school at OLM on Tuesdays from 3pm-4pm. On nice days the class will be held outside in the lower yard. On rainy days the class will be held inside the<br class="mobile"> old club house room.`
        },
        {
            q: `What is the age limit?`,
            a: `The Age limit is 9 and up`
        },
        {
            q: `Will there be OLM staff onsite?`,
            a: `OLM STAFF will be nearby because of OLM after care clubhouse.`
        },
        {
            q: `Will my child get hurt?<br class="mobile"> Is it safe?`,
            a: `The chances of injury are low but still possible. When practicing martial arts we teach to have a level of control to not injure yourself and or your partner.`
        },
        {
            q: `Can i watch the class?`,
            a: `Yes`
        },
        {
            q: `What equipment will there be?`,
            a: `The class will not require any equipment except for maybe a<br class="mobile"> focus pad.`
        },
        {
            q: `Will there be sparring?`,
            a: `Sparring is reserved for intermediate and advanced level students that requires a level of control and trust to not injure your partner. The children will not be sparring until they have achieved that level of control and trust.`
        },
        {
            q: `What should my child wear for class?`,
            a: `The child should wear loose comfortable clothes like athletic wear or sweats and gym shoes`
        },
        {
            q: `Can my child quit<br class="mobile"> at anytime?`,
            a: `Yes`
        },
        {
            q: `Will there be weapons?`,
            a: `Baat Ying Baat Fut does have various traditional weapons but the children will not be learning<br class="mobile"> any weapons.`
        },
    ];

    $(faqs).each(function (i, val) {
        // console.log(i);
        // console.log(val);

        var li = `<li><a href="#q${i + 1}">${val.q}</a></li>`;
        $('#faqs nav ul').append(li);

        var article = ` <article id="q${i + 1}">
                        <h3>${val.q}</h3>
                        <p>
                        ${val.a}
                        </p>
                    </article>`;

        $('#faqs div').append(article);
    });

    $(window).scroll(function () {
        // console.log(window.scrollY);
        if(window.scrollY > 5000){
            $('.cta').hide();
        } else if(window.scrollY < 5000){
            $('.cta').show();
        }

        if (window.scrollY > 216) {
            $('.wrap header nav').addClass('fixed');
            $('#mobile-title').addClass('fixed mobile-title');
            $('.fa-bars').addClass('center-vertical');
            $('#mobile-title h2, #mobile-title img').css('display', 'block');
        } else if (window.scrollY < 216) {
            $('.wrap header nav').removeClass('fixed');
            $('#mobile-title').removeClass('fixed mobile-title');
            $('.fa-bars').removeClass('center-vertical');
            $('#mobile-title h2, #mobile-title img').css('display', 'none');
        } 
    });

    var moveTo = function (elem1, elem2) {
        $(elem1).click(function (e) {

            e.preventDefault();

            var name = $(this).attr('href').replace(/#/g, '');
            var theElem = `${elem2}${name}`;
            var position = $(theElem).position();
            // console.log(name);
            // console.log(theElem);
            // console.log(position);

            var theClass = $(this).closest('nav').attr('class');
            var theHref = $(this).attr('href');
            // console.log(theClass);
            // console.log(theHref);

            if (theHref == `#register`) {
                $('#register').show();
            } else if (theClass !== undefined && theClass.indexOf('active') !== -1) {

                var y = position.top - 120;
                // console.log(`var y = ${y}`);
                window.scrollTo(0, y);
                $('.wrap header nav').removeClass('open-close active');

            } else {
                var y = position.top - 120;
                // console.log(`var y = ${y}`);
                window.scrollTo(0, y);
            }



        });
    };

    moveTo('.wrap header nav ul li a', '.wrap section#');
    moveTo('#faqs nav ul li a', '#faqs div article#');

    $('.fa-bars').click(function (e) {
        $('.wrap header nav').addClass('open-close active');
    });

    $('header .fa-times-circle-o').click(function (e) {
        $('.wrap header nav').removeClass('open-close active');
    });

    $('#register .fa-times-circle-o').click(function (e) {
        $('#register').hide();
    });

    $('.cta').click(function (e) {
        e.preventDefault();
        $('#register').show();
    });

});













































