// const $ = require("jquery");
let data = [
    {
        imgUrl: "images/cart1.jpg",
        title: "Iphone 12 Pro",
        rate: 5,
        watch: 686,
        price: 999,
        year: 2020,
        description: "6.1 inch Display.128GB."
    },
    {
        imgUrl: "images/card4.jpg",
        title: "MI Note 10 Lite",
        rate: 4,
        watch: 554,
        price: 420,
        year: 2018,
        description: "64GB.Glas Corning.5602mAp. "
    },
    {
        imgUrl: "images/cart12.jpg",
        title: "SAMSUNG S12",
        rate: 4.5,
        watch: 489,
        price: 750,
        year: 2018,
        description: "48d Camera.600mAp.256GB."
    },
    {
        imgUrl: "images/card8.jpg",
        title: "SAMSUNG S20",
        rate: 4,
        watch: 789,
        price: 400,
        year: 2018,
        description: "Triple Camera.3.500mAp."
    },
    {
        imgUrl: "images/cart18.jpg",
        title: "SAMSUNG Z Fold2",
        rate: 4.5,
        watch: 1489,
        price: 900,
        year: 2020,
        description: "360 camera.Dual SIM.256GB."
    },
    {
        imgUrl: "images/card7.jpeg",
        title: "Huawei P40 Pro",
        rate: 4.5,
        watch: 259,
        price: 880,
        year: 2019,
        description: "5GB chipset.Dual SIM.256GB."
    },
    {
        imgUrl: "images/cart21.jpg",
        title: "Nokia 5.4",
        rate: 2.5,
        watch: 89,
        year: 2016,
        price: 200,
        description: "Full CameraDual SIM.156GB."
    },
    {
        imgUrl: "images/card9.webp",
        title: "Sony Xperia 11",
        rate: 4,
        watch: 239,
        price: 300,
        year: 2018,
        description: ".5GB chipset.Earphones for free. "
    },
    {
        imgUrl: "images/card16.jpeg",
        title: "Huawei P30",
        rate: 3.8,
        watch: 309,
        price: 499,
        year: 2019,
        description: "5GB chipset.Dual SIM.256GB."
    },

    {
        imgUrl: "images/iphone.jpg",
        title: "Iphone 11",
        rate: 3.9,
        watch: 359,
        price: 510,
        year: 2019,
        description: "4GB chipset.Dual SIM.64GB."
    },
    {
        imgUrl: "images/card10.jpg",
        title: "Huawei P40",
        rate: 4.3,
        watch: 219,
        price: 499,
        year: 2020,
        description: "5GB chipset.Dual SIM.256GB."
    },
    {
        imgUrl: "images/card11.jpg",
        title: "Sony L1",
        rate: 3.8,
        watch: 489,
        price: 319,
        year: 2019,
        description: "5GB chipset.Dual SIM.256GB."
    },
    {
        imgUrl: "images/card14.jpg",
        title: "Nokia 7.5",
        rate: 3.8,
        watch: 189,
        price: 199,
        year: 2019,
        description: "5GB chipset.Dual SIM.256GB."
    },
    {
        imgUrl: "images/card13.jpg",
        title: "Nokia mini",
        rate: 3.8,
        watch: 189,
        price: 380,
        year: 2020,
        description: "5GB chipset.Dual SIM.256GB."
    },
    {
        imgUrl: "images/card15.webp",
        title: "SAMSUNG S5",
        rate: 3.8,
        watch: 189,
        price: 380,
        year: 2017,
        description: "5GB chipset.Dual SIM.256GB."
    },




];

$(document).ready(function () {
    buildProductView(data);
});
// low to high sort
$(".lowToHigh").on("click", () => {
    let lowToHigh = data.sort((a, b) => a.price - b.price);
    buildProductView(lowToHigh);
});
// high to low sort
$(".highToLow").on("click", () => {
    let highToLow = data.sort((a, b) => b.price - a.price);
    buildProductView(highToLow);
});
// sort by most viewed
$(".mostViewed").on("click", () => {
    let mostViewed = data.sort((a, b) => b.watch - a.watch);
    buildProductView(mostViewed);
});
// sort by top rated
$(".topRated").on("click", () => {
    let topRated = data.sort((a, b) => b.rate - a.rate);
    buildProductView(topRated);
});
//  sort by new products
$(".newproducts").on("click", () => {
    let newproducts = data.sort((a, b) => b.year - a.year);
    buildProductView(newproducts);
});

// Filter
for (let i = 0; i < $(".brands").length; i++) {
    $(".brands")[i].addEventListener("click", function () {
        let titleName = this.innerHTML;
        brandFilter(titleName);
    });
}
function brandFilter(titleName) { // Apple
    let titlePro = [];
    if (titleName === 'All') {
        titlePro = data;
    } else {
        titlePro = data.filter((elem) => {
            if (elem.title.includes(titleName)) {
                return true;
            } else {
                return false;
            }
        });
    }
    buildProductView(titlePro)

}

function buildProductView(products) {

    let fullCardContainer = products.map((elem) => {
        let product = '<div class="col-md-4 col-sm-12  no-gutters mt-2" data-aos="zoom-in">' +
            '<div class="card booking-card border border-secondary m-2 m-sm-0  " style="max-width:280px;max-height:500px;">' +
            '<div class="view overlay hvr-wooble top" style="max-height:290px;">' +
            '<img class="card-img-top" src="' + elem.imgUrl + '" alt="Card image cap"style= "height:250px">' +
            '<a href="#!">' +
            '<div class="mask rgba-white-slight"></div>' +
            '</a>' +
            '</div>' +
            '<div class="card-body text-dark">' +

            '<h4 class="card-title font-weight-bold"><a>' + elem.title + '</a></h4>' +
            '<ul class="list-unstyled list-inline rating mb-0">' +
            '<li class="list-inline-item mr-0"><i class="fas fa-star amber-text"> </i></li>' +
            '<li class="list-inline-item mr-0"><i class="fas fa-star amber-text"></i></li>' +
            '<li class="list-inline-item mr-0"><i class="fas fa-star amber-text"></i></li>' +
            '<li class="list-inline-item mr-0"><i class="fas fa-star amber-text"></i></li>' +
            '<li class="list-inline-item"><i class="fas fa-star-half-alt amber-text"></i></li>' +
            '<li class="list-inline-item">' +
            '<p class="text-dark">' + elem.rate + '</p>' +
            '</li>' +
            '<li>' +
            '<i class="fas fa-eye "></i>' + elem.watch +
            '</li>' +
            '<li>' +
            '<p class="card-text text-dark font-weight-bold">' + elem.year + '</p>' +
            '</li>' +

            '</ul>' +
            '<p class="mb-2 ">Price $' + elem.price + '</p>' +
            '<p class="card-text text-dark font-weight-bold">' + elem.description + '</p>' +

            '<a class="btn-floating btn-sm "><i class="fas fa-star"></i></a>' +
            '<a class="btn-floating btn-sm "><i class="fas fa-shopping-cart"></i></a>' +
            '<hr>' +

            '</div>' +

            '</div>' +
            '</div>';
        return product;
    }).join('');
    $("#products").empty();
    $("#products").append(fullCardContainer);
}