const btn = document.querySelector('.menu_bars');
let sidebar = document.querySelector('.sidebar');
btn.onclick = () => {
    sidebar.classList.toggle('sidebar_show');
}