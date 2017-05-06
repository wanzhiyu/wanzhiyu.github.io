if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {             
    var winHeight = document.documentElement.clientHeight;
    var winWidth = document.documentElement.clientWidth;
    if (winWidth < 400) {
        var el = document.getElementById('main');
        el.style.backgroundImage = 'none';
        el.style.backgroundColor = 'rgba(240,240,240,.7)';
    }
}