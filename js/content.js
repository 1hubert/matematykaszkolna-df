var images = document.getElementsByTagName('img');
const l = images.length;

for (var i = l; i > 0; i--) {
    if (images[i] != undefined) {
        if (images[i].src.startsWith("https://matematykaszkolna.pl/forum/emots/")) {
            images[i].remove()
        }
    }
}
