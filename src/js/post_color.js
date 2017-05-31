(function() {
    var el = document.getElementsByTagName('html')[0];
    var className = 'post-color';
    var hasClass = false;
    var random7 = Math.floor(Math.random() * 7) + 1;
    if (el.classList) {
        hasClass = el.classList.contains(className);
        if (hasClass) {
            el.classList.add('post-color'+random7);
        }
    }
    else {
        el.className += ' ' + 'post-color'+random7;
    }
    
})();