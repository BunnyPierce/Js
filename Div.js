class Div {
    constructor(tags, downloads, views, image) {
        this.tags = tags
        this.downloads = downloads
        this.views = views
        this.image = image
    }
    render(container) {
        //const divRow=document.querySelector()
        const div = document.createElement("div")
        div.className = "card w-1/4 px-4"
        div.innerHTML = `<img src=${this.image} class="card-img-top w-full object-cover" alt="...">
                    <div class="card-body p-4">
                        <h5 class="card-title text-xl font-semibold">Tags:${this.tags}</h5>
                        <p class="card-text mb-4">Downloads:${this.downloads}</p>
                        <p class="card-text mb-4">Views:${this.views}</p>
                        <a id="aid" href="#" class="btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Download</a>
                    </div>`
        container.append(div)
        const a = div.querySelector("#aid")
        const p = document.querySelector("#pid")
        a.addEventListener("click", () => {
            p.innerHTML = "This isn't available yet"
            setTimeout(() => { p.innerHTML = "" }, 1500)
        })
    }
}