const SideMenu = document.querySelector("aside");
const CloseBtn = document.querySelector(".close");
const MenuBtn = document.querySelector('button');
const Link = document.querySelectorAll('.sidebar a');
const ThemeTog = document.querySelector('.theme');



MenuBtn.addEventListener('click', () => {
    SideMenu.style.display = 'block';
});

CloseBtn.addEventListener('click', () => {
    SideMenu.style.display = 'none';
});

Link.forEach(Atag =>{
    Atag.addEventListener('mouseover', () =>{
        Atag.classList.add('active');
        // console.log('mouseoo')
    
    })
    Atag.addEventListener('mouseleave', () =>{
        Atag.classList.remove('active');
        // console.log('mouseleave')
    
    })
})

ThemeTog.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variable');

    // ThemeTog.querySelector('span:nth-child(0)').classList.toggle('active');
    ThemeTog.querySelector('span:nth-child(1)').classList.toggle('active');
    ThemeTog.querySelector('span:nth-child(2)').classList.toggle('active');



});

