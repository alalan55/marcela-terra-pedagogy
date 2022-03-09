const btnFacebook = document.querySelector('.facebook')
const btnInstagram = document.querySelector('.instagram')
const btnyt = document.querySelector('.yt')
const btnWp = document.querySelector('.wp')


btnFacebook.addEventListener('click', () =>{
    window.location.href = 'https://www.facebook.com/marcelaterrapsicopedagoga/'
})
btnInstagram.addEventListener('click', () =>{
    window.location.href = 'https://instagram.com/marcelapsicopedagoga'
})
btnyt.addEventListener('click', () =>{
    window.location.href = 'https://www.youtube.com/channel/UC4u7nJReSRHYgTTVsKn5now'
})
btnWp.addEventListener('click', () =>{
    window.location.href = 'https://api.whatsapp.com/send?1=pt_BR&phone=55024992848055'
})