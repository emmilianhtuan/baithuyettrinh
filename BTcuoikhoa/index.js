let data = [{
        img: "https://kidsplaza-1.cdn.vccloud.vn/media/catalog/product/cache/1/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/a/o/ao-dai-tay-so-sinh-kiza-in-hinh-chuot-th-0-3m-1.jpg",
        name: "Áo dài tay sơ sinh in hình chuột",
        price: 20000
    },
    {
        img: "https://kidsplaza-1.cdn.vccloud.vn/media/catalog/product/cache/1/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/a/o/ao-dai-tay-so-sinh-kiza-in-hinh-huou-cao-co-0-3m-trang-vang-1.jpg",
        name: "Áo dài tay sơ sinh in hình huơu",
        price: 20000
    },
    {
        img: "https://kidsplaza-1.cdn.vccloud.vn/media/catalog/product/cache/1/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/a/o/ao-so-sinh-dai-tay-kiza-in-hinh-ca-heo-0-3m-trang-xanh-1_1.jpg",
        name: "Áo dài tay sơ sinh in hình cá heo",
        price: 20000
    },
    {
        img: "https://kidsplaza-1.cdn.vccloud.vn/media/catalog/product/cache/1/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/a/o/ao-so-sinh-dai-tay-kiza-in-su-tu-trang-cam-0-3m-1_1.jpg",
        name: "Áo dài tay sơ sinh in hình sư tử",
        price: 20000
    },
    {
        img: "https://kidsplaza-1.cdn.vccloud.vn/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/a/o/ao-so-sinh-kiza-coc-in-hinh-tho-trang-hong-0-3m-1_1_1_1_1_1.jpg",
        name: "Áo cộc tay sơ sinh in hình chú thỏ",
        price: 20000
    },
    {
        img: "https://kidsplaza-1.cdn.vccloud.vn/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/a/o/ao-coc-tay-so-sinh-kidsplaza-in-hinh-ca-heo-tx_1.jpg",
        name: "Áo cộc tay sơ sinh in hình cá heo",
        price: 20000
    },
    {
        img: "https://kidsplaza-1.cdn.vccloud.vn/media/catalog/product/cache/1/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/q/u/quan-dai-so-sinh-kiza-in-hinh-chuot-mickey-trang-hong-0-3m-1.jpg",
        name: "Quần dài sơ sinh in hình huơu",
        price: 30000
    },
    {
        img: "https://kidsplaza-1.cdn.vccloud.vn/media/catalog/product/cache/1/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/q/u/quan-dai-so-sinh-kiza-in-hinh-huou-cao-co-0-3m-trang-vang-1.jpg",
        name: "Áo cộc tay sơ sinh in hình cá heo",
        price: 30000
    },
    {
        img: "https://kidsplaza-1.cdn.vccloud.vn/media/catalog/product/cache/1/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/q/u/quan-dai-so-sinh-kiza-in-ca-heo-trang-xanh-0-3m-1_1.jpg",
        name: "Quần dài sơ sinh in hình cá heo",
        price: 30000
    },
    {
        img: "https://kidsplaza-1.cdn.vccloud.vn/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/q/u/quan-so-sinh-coc-kiza-in-hinh-ca-heo-trang-xanh-0-3m-1_1_1_2.jpg",
        name: "Quần cộc sơ sinh in hình cá heo",
        price: 30000
    },
    {
        img: "https://kidsplaza-1.cdn.vccloud.vn/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/q/u/quan-so-sinh-coc-kiza-in-hinh-chu-tho-trang-hong-0-3m-1_1_1_1.jpg",
        name: "Quần cộc sơ sinh in hình chú thỏ",
        price: 30000
    },
    {
        img: "https://kidsplaza-1.cdn.vccloud.vn/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/q/u/quan-so-sinh-coc-kiza-in-hinh-huou-cao-co-trang-vang-0-3m-1_1_1_1.jpg",
        name: "Quần cộc sơ sinh in hình hươu",
        price: 30000
    },
]

let showIteam1 = (d) => {

    let dom = document.querySelector('.cai1')
    dom.innerHTML = ''
    for (let i of d) {
        let html = `<li class="splide__slide">
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${i.img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${i.name}</h5>
        <p class="card-text">${i.price}</p>
        <a href="file:///C:/Users/ADMIN/OneDrive/M%C3%A1y%20t%C3%ADnh/tuan/coding/C4EJS103/Day%209/index1.html" class="btn btn-primary">Xem chi tiết</a>
      </div>
    </li>`
        dom.innerHTML += html
    }
}

showIteam1(data)



let form = document.querySelector('#search-a')
form.onsubmit = (e) => {
    e.preventDefault()

    let inputSearch = form.search.value

    let result = data.filter(a => a.name.toLowerCase().includes(inputSearch.toLowerCase()))
    showIteam1(result)

    // .filter(country =>
    //     country.name.toLowerCase().includes(search_term.toLowerCase())
    // )
    // .forEach(country => {


}