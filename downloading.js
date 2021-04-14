var button = document.getElementById("canvas");
var button2 = document.getElementById('Zapisz');
var k = 0;
var getCanvas;
function addCanvas() {
    removeElementsByClass('kanwa');
    if (k == 0) {
        html2canvas(document.querySelector("#html_download")).then(canvas => {

            canvas.className = 'kanwa';

            //button.appendChild(canvas);
            var a = document.createElement('a');
            a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
            a.download = 'tab.jpg';

            a.click();
        });
    }

}
function changeImage() {
    document.getElementById('img').addEventListener('change', readURL, true);

    function readURL() {
        var file = document.getElementById("img").files[0];
        var reader = new FileReader();

        reader.onloadend = function () {

            $('.html_download').css('background-image', "url(" + reader.result + ")");
        }
        if (file) {
            reader.readAsDataURL(file);
        } else {
        }
    }
}


function removeElementsByClass(className) {
    var elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}