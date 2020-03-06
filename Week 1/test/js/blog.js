document.querySelector("#blog h2").innerHTML = "Local Golf";
 var xhr = new XMLHttpRequest();

xhr.onload = function () {

     var data = JSON.parse(xhr.responseText);


     var coursesSection = document.querySelector('#blog');
     if (coursesSection) {
         let courses = '';
         for (let i=0; i < data.courses.length; i++){
             courses += '<article>';
             courses += '<p class="thumbnail"><img src="' + data.courses[i].image +
                 '"alt="' + data.courses[i].location + '"></p>';
             courses += '<h3>' + data.courses[i].location + '</h3>';
             courses += '<h4 class="location">' + data.courses[i].city + ', ' +
                 data.courses[i].state + '</h4>';
             courses += '<p>' + data.courses[i].description + '</p>';
             courses += '<p><meter min="0" max="5" value="' + data.courses[i].rating +
                '">' + data.courses[i].rating + 'out of 5</meter> <a href"/rate">Rate it</a></p>';

             courses += '<dl>';
             courses += '<dt>Hours Open</dt>';
             courses += '<dd>' + data.courses[i].hours + '</dd>';

             courses += '<dt>Rental Clubs</dt>';
             courses += '<dd>' + data.courses[i].rentalclubs + '</dd>';

            courses += '</dl>';

            courses += '<p><button onclick= goToLink("'+data.courses[i].link+'")>Read More</button></p>';

             courses += '</article>';

         }
         coursesSection.querySelector('h2').insertAdjacentHTML('afterend', courses);
     }
 }
 function goToLink (link)
 {
     window.location.href = link;
 }
 xhr.open('GET','https://detzler23.github.io/DerekEtzler_Portfolio3/golf.json',true);
 xhr.send(null);

//document.querySelector("#blog h2").innerHTML = "Local Golf";

/*var xhr = new XMLHttpRequest();

xhr.onload = function ()
{
    var data = JSON.parse(xhr.responseText);

    var coursesSection = document.querySelector('#blog');

    if (coursesSection)
    {
        var courses = '';

        for (var i = 0; i < data.courses.length;i++)
        {
            courses += '<article>';

            courses += '<h2>' + data.courses[i].location + '</h2>';

            courses += '<p class="thumbnail"><img src="' + data.courses[i].image +'"><\p>';

            courses += '<h3>' + data.courses[i].description + '</h3>';

            courses += '<h4 class="location">' + data.courses[i].city + ", " + data.locations[i].state + '</h4>';

            courses += '<p><meter min="0" max="5" value="' + data.courses[i].rating +
                '">' + data.courses[i].rating + 'out of 5</meter> <a href"/rate">Rate it</a></p>';

            courses += '<dl>';

            courses += '<dt>Hours Open</dt>';
            courses += '<dd>' + data.courses[i].hours + '<dd>';

            courses += '<dt>Rental Clubs</dt>';
            courses += '<dd>' + data.courses[i].rentalclubs + '<dd>';

            courses += '</dl>';

            courses += '</article>';

        }
        coursesSection.querySelector('h2').insertAdjacentHTML('afterend', courses);
    }

};
xhr.open('GET','https://detzler23.github.io/DerekEtzler_Portfolio3/golf.json', true);
xhr.send(null);*/
