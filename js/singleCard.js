const singleCard = document.querySelector(".product__single")
const loading = document.querySelector(".loader")
const notFound = document.querySelector(".singleProduct__not-found")
const API_URL = "https://fakestoreapi.com/users"

async function fetchData(api) {
    let path = new URLSearchParams(window.location.search)
    let id = path.get("id")

    let getData = await fetch(`${api}/${id}`)
    getData
        .json()
        .then(res => createSingle(res))
        .catch(err => notFound.style.display = "block")
        .finally(()=>loading.style.display = "none")
}
fetchData(API_URL)

function createSingle(data) {
    singleCard.innerHTML = `
        <div class="product__image">
            <img src="" alt="">
        </div>
        <div class="product__content">
            <h1>${data.name.firstname.charAt(0).toUpperCase() + data.name.firstname.slice(1)} ${data.name.lastname.charAt(0).toUpperCase() + data.name.lastname.slice(1)}</h1>
            <h3>Email: ${data.email}</h3>
            <h3>Phone: ${data.phone}</h3>
            <h3>Username: ${data.username}</h3>
            <p>Adress <br> 
                City: ${data.address.city} <br>
                Street: ${data.address.street} <br>
                Number: ${data.address.number}
            </p>
        </div>
    `
}

// ============= Navbar toggle START ================
const navbarCollection = document.querySelector(".navbar__list")
const navbarMenu = document.querySelector(".navbar__menu")

navbarMenu.addEventListener("click", () => {
    navbarCollection.classList.toggle('show')
})
// ============= Navbar toggle END ==================