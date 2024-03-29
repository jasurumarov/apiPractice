const users = document.querySelector(".cards-section__content")
const heading = document.querySelector("h1")
const nothing = document.querySelector(".nothing")


let wishes = JSON.parse(localStorage.getItem("wishes"))
if (wishes.length > 0) {
    heading.style.display = "none"
    nothing.style.display = "none"
}

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
                        Dislike
                    </button>
                </div>
            </div>
        `
        fragment.appendChild(card)
    });
    users.appendChild(fragment)
}
createUser(wishes)

const removeWishes = (id) => {
    let filterData = wishes.filter(el => el.id !== +id)
    localStorage.setItem("wishes", JSON.stringify(filterData))
    
    window.location.reload()
    createUser(filterData) 
}

users.addEventListener("click", (e)=>{
    if (e.target.name === "product-wish") {
        let id = e.target.closest("[data-id]").dataset.id;
        removeWishes(id)
    }
})

// ============= Navbar toggle START ================
const navbarCollection = document.querySelector(".navbar__list")
const navbarMenu = document.querySelector(".navbar__menu")

navbarMenu.addEventListener("click", () => {
    navbarCollection.classList.toggle('show')
})
// ============= Navbar toggle END ==================