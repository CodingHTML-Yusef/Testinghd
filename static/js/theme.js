const themes = [
    'flamingo',
    'crimsion',
    'dark',
    'frost'
];

function changeTheme(theme) {
    if (themes.includes(theme)) {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    } else {
        alert('That is not a theme');
    }
}

window.addEventListener('load', function () {
    var theme = localStorage.getItem('theme');

    if (theme) {
        changeTheme(theme);
    } else {
        changeTheme('flamingo');
    }
});
