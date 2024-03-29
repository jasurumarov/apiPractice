const loading = document.querySelector(".loading")
const users = document.querySelector(".cards-section__content")

// ============= Loading START =============
const createLoading = () => {
    let arr = Array(9).fill("")
    let fragment = document.createDocumentFragment()
    arr.forEach(() => {
        let loadingCard = document.createElement("div")
        loadingCard.classList.add("cards-section__card")
        loadingCard.innerHTML = `
            <div class="cards-section__card-image"></div>
            <h2 class="cards-section__card-title"></h2>
            <p class="cards-section__card-desc"></p>
            <div class="cards-section__card-btns">
                <button></button>
                <button></button>
            </div>
        `
        fragment.appendChild(loadingCard)
    })
    loading.appendChild(fragment)
}
createLoading()
// ============= Loading END =============

// ============= API START =============
const API_URL = "https://fakestoreapi.com/users"

async function fetchData(api) {
    let getData = await fetch(api)
    getData
        .json()
        .then(res => createUser(res))
        .catch(err => console.log(err))
        .finally(() => loading.style.display = "none")
}
fetchData(API_URL)
// ============= API END =============

// ============= User cards START =============
function createUser(data) {
    let fragment = document.createDocumentFragment()
    data.forEach(user => {
        while (users.firstChild) {
            users.firstChild.remove()
        }
        let card = document.createElement("div")
        card.classList.add("cards-section__card")
        card.innerHTML = ` 
            <div data-id=${user.id}>
                <div name="user-image" class="cards-section__card-image"></div>
                <h2 class="cards-section__card-title">${user.name.firstname.charAt(0).toUpperCase() + user.name.firstname.slice(1)} ${user.name.lastname.charAt(0).toUpperCase() + user.name.lastname.slice(1)}</h2>
                <p class="cards-section__card-desc" title="Email: ${user.email}    Phone: ${user.phone}"><span>Email:</span> ${user.email} <br> <span>Phone:</span> ${user.phone}</p>
                <div class="cards-section__card-btns">
                    <button>
                        Adress
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                        </svg>
                    </button>
                    <button name="product-wish">
                        Like
                    </button>
                </div>
            </div>
        `
        fragment.appendChild(card)
    });
    users.appendChild(fragment)
}
// ============= User cards END =============

// ============= Move to single user START =============
const singleRoate = (id) => {
    window.open(`/pages/singleCard.html?id=${id}`, "_self")
}

const  setWish = async(id) => {
    let getData = await fetch(`${API_URL}/${id}`)
    getData
        .json()
        .then(res => {
            let wishes = JSON.parse(localStorage.getItem("wishes")) || []
            let index = wishes.findIndex((el => el.id === +id)) 
            if (index < 0) {
                localStorage.setItem("wishes", JSON.stringify([...wishes, res]))
            }
        })
        .catch(err => console.log(err))
    
}

users.addEventListener("click", (e)=>{
    if (e.target.className == "cards-section__card-image") {
        let id = e.target.closest("[data-id]").dataset.id
        singleRoate(id)
    }else if (e.target.name == "product-wish") {
        let id = e.target.closest("[data-id]").dataset.id
        setWish(id)
    }
})
// ============= Move to single user END =============

// ============= Navbar toggle START ================
const navbarCollection = document.querySelector(".navbar__list")
const navbarMenu = document.querySelector(".navbar__menu")

navbarMenu.addEventListener("click", () => {
    navbarCollection.classList.toggle('show')
})
// ============= Navbar toggle END ==================