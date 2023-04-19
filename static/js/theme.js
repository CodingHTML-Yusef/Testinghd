const themes = [
    'flamingo',
    'crimsion',
    'dark',
    'frost'
];
const snow = document.getElementsByClassName("snow");

function changeTheme(theme) {
    if (themes.includes(theme)) {
        document.body.setAttribute('data-theme', theme);
        document.snow.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    } else {
        alert('That is not a theme');
    }
}

setTimeout(() => {
    var theme = localStorage.getItem('theme');

    if (theme) {
        changeTheme(theme);
    } else {
        changeTheme('flamingo');
    }
}, 100);
