const cloaks = {
    'google': {
        icon: '/static/assets/cloaks/Google.ico',
        title: 'Google'
    },
    'canvas': {
        icon: '/static/assets/cloaks/Canvas.ico',
        title: 'Dashboard'
    },
    'drive': {
        icon: '/static/assets/cloaks/Drive.ico',
        title: 'My Drive - Google Drive'
    },
    'gmail': {
        icon: '/static/assets/cloaks/Gmail.ico',
        title: 'Inbox (1)'
    },
    'default': {
        icon: '/favicon.ico',
        title: 'Polaris'
    }
};

function setCloak(name) {
    if (cloaks[name]) {
        document.title = cloaks[name].title;

        const favicon = document.querySelector('link[rel="shortcut icon"]') || document.createElement('link');
        favicon.href = cloaks[name].icon;
        favicon.rel = 'shortcut icon';

        if (!document.querySelector('link[rel="shortcut icon"]')) {
            document.head.appendChild(favicon);
        }

        localStorage.setItem('cloak', name);
    } else {
        alert(`${name} is not a valid cloak`);
    }
}


function resetCloak() {
    localStorage.setItem('cloak', 'default');
    location.reload();
}

const cloakData = localStorage.getItem('cloak');

if (cloakData) {
    setCloak(cloakData);
} else {
    setCloak('default');
    location.reload();
}
