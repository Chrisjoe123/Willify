document.addEventListener('DOMContentLoaded', function() {

    var listenNowButton = document.getElementById('listenNowButton');
    var AllSongsButton = document.getElementById('AllSongsButton');
    
    if (listenNowButton) {
        listenNowButton.addEventListener('click', function() {
            window.location.href = "/HTML/SongsDetailPageList/SongsDetailPage_Espresso.html";
        });
    }

    
    if (AllSongsButton) {
        AllSongsButton.addEventListener('click', function() {
            window.location.href = "/HTML/SongsPage.html";
        });
    }
});