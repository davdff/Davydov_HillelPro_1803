const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const link = button.dataset.link
        if (link.slice(0, 8) !== 'https://' && link.slice(0, 7) !== 'http://') {
            window.location.href = `http://${link}`
        } else {
            window.location.href = link;
        }
    })
})