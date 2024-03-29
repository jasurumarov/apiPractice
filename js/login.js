const form = document.querySelector(".login-section__form")
const formUsername = document.querySelector(".form__username")
const formPassword = document.querySelector(".form__password")
const loading = document.querySelector(".loading iframe")

const API_URL = "https://fakestoreapi.com/auth/login"

form.addEventListener("submit", async(e)=>{
    e.preventDefault()
    loading.style.display = "block"
    let user = {
        username: formUsername.value,
        password: formPassword.value
    }
    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(res => {
        console.log(res.token)
        localStorage.setItem("token", res.token)
        window.open("/pages/admin.html", "_self")
    })
    .catch(err => alert("Username or password is incorrect"))
    .finally(()=> loading.style.display = "none")
})

// ============= Navbar toggle START ================
const navbarCollection = document.querySelector(".navbar__list")
const navbarMenu = document.querySelector(".navbar__menu")

navbarMenu.addEventListener("click", () => {
    navbarCollection.classList.toggle('show')
})
// ============= Navbar toggle END ==================