document.addEventListener('DOMContentLoaded', function() {

    var listenNowButton = document.getElementById('listenNowButton');
    if (listenNowButton) {
        listenNowButton.addEventListener('click', function() {
            window.location.href = "/HTML/SongsDetailPageList/SongsDetailPage_Espresso.html";
        });
    }
});