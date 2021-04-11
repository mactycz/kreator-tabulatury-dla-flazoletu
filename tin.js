tabs = document.getElementById("html_download");
function sprawdz() {
    var tekst = document.getElementById("input").value;
    removeElementsByClass('tune');
    var board = document.getElementById("board");
    var dlugosc = tekst.length;
    for (i = 0; i < dlugosc; i++) {
        var image = new Image();
        switch (tekst.charAt(i)) {
            case "a":

                image.src = '/tinwhistle/tabs/tabs2/_a.png';
                break;

            case "b":

                image.src = '/tinwhistle/tabs/tabs2/_b.png';
                break;

            case "c":

                image.src = '/tinwhistle/tabs/tabs2/_c.png';
                break;

            case "d":

                image.src = '/tinwhistle/tabs/tabs2/_d.png';
                break;

            case "e":

                image.src = '/tinwhistle/tabs/tabs2/_e.png';
                break;

            case "f":

                image.src = '/tinwhistle/tabs/tabs2/_f.png';
                break;
            case "g":

                image.src = '/tinwhistle/tabs/tabs2/g.png';
                break;
            default: break;
        }








        image.className = 'tune';
        image.id = 't' + i;
        //  document.body.appendChild(image);

        tabs.appendChild(image);

    }
}
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
            document.getElementById('html_download').style.backgroundImage = "url(" + reader.result + ")";
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