console.log('Its Working')

let themeButton = document.getElementsByClassName('themes_button')

for (var i=0; themeButton.length > i;i++){
    themeButton[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('Option Clicked:', mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme_style').href = '{% static "css/main.css"%}'
        let theme = "{% static 'css/main.css'%}"
        console.log(theme)
    }
    if(mode == 'dark'){
        let theme = "{% static 'css/dark.css'%}"
        console.log(theme)
    }
}
