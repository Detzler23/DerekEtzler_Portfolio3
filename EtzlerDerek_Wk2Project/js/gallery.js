//Make 3 arrays hosting img in 1 and descrip in another and title
document.querySelector('#gallery h2').innerHTML = "Beautiful Golf <strong> Courses </strong>";
var imageArray = [];
imageArray[0] = "https://theclubatsavannahharbor.com/golf/proto/theclubatsavannahharbor/images/gallery/the%20club/the_club01.jpg";
imageArray[1] = "https://www.hiltonheadnational.com/wp-content/uploads/sites/5748/2016/04/HHN2-2.jpg";
imageArray[2] = "https://www.seapines.com/image-gallery/images/hole-by-hole/harbour-town-golf-links/4.jpg";
imageArray[3] = "https://www.amateurgolf.com/images/uploads/00051372.jpg";
imageArray[4] = "https://golfadvisor.brightspotcdn.com/dims4/default/f4f927a/2147483647/strip/true/crop/1000x597+0+34/resize/2880x1720!/format/jpg/quality/90/?url=https%3A%2F%2Fgolfadvisor.brightspotcdn.com%2Fe5%2F2a%2Ff27f3d9e73d3bd9361046c8299aa%2Fp.php";

var titleArray = [];
titleArray[0] = "The Club at Savannah Harbor";
titleArray[1] = "Hilton Head National";
titleArray[2] = "Harbour Town Golf Links"
titleArray[3] = "Augusta National";
titleArray[4] = "TPC Sawgrass";

var textArray = [];
textArray[0] = "Location in downtown Savannah, Georgia";
textArray[1] = "Location in Beaufort County, South Carolina";
textArray[2] = "Location in Hilton Head, South Carolina";
textArray[3] = "Located in Augusta, Georgia";
textArray[4] = "Located in Vedra Beach, Florida";

var counter = 0;

var buttons = document.querySelectorAll('#gallery button');

var image = document.querySelector('#gallery img');
image.setAttribute('src', imageArray[counter]);

var title = document.querySelector('#gallery h3');
title.innerHTML = titleArray[counter];

var desc = document.querySelectorAll('#gallery p')[1];
desc.innerHTML = textArray[counter];

buttons[0].addEventListener('click', prevImage);
buttons[1].addEventListener('click', nextImage);

function nextImage(event) {
    counter++;

    if (counter === imageArray.length) {
        counter = 0;
    }
    //console.log(counter + " " + imageArray.length);
    image.setAttribute('src', imageArray[counter]);
    title.innerHTML = titleArray[counter];
    desc.innerHTML = textArray[counter];
}

function prevImage(event) {
    counter--;

    if (counter < 0) {
        counter = imageArray.length - 1;

    }
    image.setAttribute('src', imageArray[counter]);
    title.innerHTML = titleArray[counter];
    desc.innerHTML = textArray[counter];
}