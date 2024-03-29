const logout = document.querySelector(".logout-btn") 

let isLogin = localStorage.getItem("token");

function checkLogin() {
    if (!isLogin) {
        window.location.replace("/pages/login.html")
    }
}
checkLogin()

logout.addEventListener("click", ()=>{
    localStorage.removeItem("token")
    window.open("/pages/login.html", "_self")
})

// ============= Navbar toggle START ================
const navbarCollection = document.querySelector(".navbar__list")
const navbarMenu = document.querySelector(".navbar__menu")

navbarMenu.addEventListener("click", () => {
    navbarCollection.classList.toggle('show')
})
// ============= Navbar toggle END ==================