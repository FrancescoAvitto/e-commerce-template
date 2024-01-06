document.addEventListener('scroll', function(){
    const navbar = document.querySelector('#navbar-presto')
    const nav_link = document.querySelectorAll('.nav-link')
    if(window.scrollY > 50){
        navbar.classList.add('background-w')
        }
        else{
            navbar.classList.remove('background-w')
        }
    }
)

const toggler = document.querySelector('.navbar-toggler-icon')

toggler.addEventListener('click', function(){
    toggler.classList.toggle('fa-rotate-90')
})

let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


function populateCategories(){

    let categories =[
        {'name': 'Moto' , 'icon': 'fas fa-motorcycle', 'img':'./media/categorie/moto.jpeg'},
        {'name': 'Auto', 'icon':'fas fa-car', 'img':'./media/categorie/auto.jpeg'},
        {'name': 'Libri', 'icon': 'fas fa-book','img':'./media/categorie/libri.jpeg'},
        {'name': 'Telefonia','icon': 'fas fa-mobile-alt ','img':'./media/categorie/telefono.jpeg'},
        {'name': 'Computer', 'icon': 'fas fa-laptop','img':'./media/categorie/computer.jpeg'},
        {'name': 'Immobili', 'icon': 'far fa-building','img':'./media/categorie/immobili.jpeg'},
        {'name': 'Giochi','icon':'fas fa-gamepad','img':'./media/categorie/giochi.jpeg'},
        {'name': 'Casa', 'icon': 'fas fa-home','img':'./media/categorie/casa.jpeg'},
        {'name': 'Bici', 'icon': 'fas fa-bicycle','img':'./media/categorie/bici.jpeg'},
        {'name': 'Viaggi', 'icon': 'fas fa-globe-europe','img':'./media/categorie/viaggi.jpeg'},
        {'name': 'Abbigliamento', 'icon': 'fas fa-tshirt','img':'./media/categorie/abbigliamento.jpeg'},
        {'name': 'Musica', 'icon': 'fas fa-music','img':'./media/categorie/musica.jpeg'}
    ]
    
    
    const categoriesWrapper = document.querySelector('#categories-wrapper')
    if(!categoriesWrapper){
        return
    }
    
    categories.forEach(category =>{
        let card = document.createElement('div');
        card.classList.add('col-12','col-sm-6', 'col-lg-3')
        card.innerHTML = 
        `
        <div class="card-category text-center">
        <img class='img-fluid img-categoria' src="${category.img}" alt="">
        <h3 class="fw-bold mb-4 main-c mt-3 titolo-categoria"><i class="${category.icon} main-c me-3"></i> ${category.name}
        </h3>
    <button class="btn-categoria fw-bold mx-auto">Vai alla categoria</button>
     
    </div>
    
        `
        categoriesWrapper.appendChild(card)
    
    
    })
}

function generateLastAdsCarousel(){

    // swiper js
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        slidesPerView: 3,
            spaceBetween: 30,
      
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            300: {
            slidesPerView: 1,
              spaceBetween: 10,
                
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          },
      
      });
}

function populateLastAds(){

    let products = [
        {
            "id":1,
            "name":"Huawei X5",
            "category":"Telefonia",
            "price":"120.12"
        },
        {
          "id":2,
          "name":"Triumph",
          "category":"Moto",
          "price":"3220,00"
      },
      {
          "id":3,
          "name":"Mercedes A",
          "category":"Auto",
          "price":"38000,00"
      },
      {
          "id":4,
          "name":"L'alchimista",
          "category":"Paolo Coelho",
          "price":"12,00"
      },
      {
          "id":5,
          "name":"Stendino",
          "category":"Casa",
          "price":"20,12"
      },
      {
          "id":6,
          "name":"Locale 80mq",
          "category":"Immobili",
          "price":"120000,00"
      },
      {
          "id":7,
          "name":"E-bike",
          "category":"Bici",
          "price":"300,00"
      },
      {
          "id":8,
          "name":"Thailandia",
          "category":"Viaggi",
          "price":"3500,00"
      },
      {
          "id":9,
          "name":"Disorder",
          "category":"Musica",
          "price":"39,99"
      },
      {
          "id":10,
          "name":"MacBook Pro",
          "category":"Computer",
          "price":"1200,00"
      },
      {
          "id":11,
          "name":"Camicia",
          "category":"Abbigliamento",
          "price":"20.12"
      },
      {
          "id":12,
          "name":"Locale 90mq",
          "category":"Telefonia",
          "price":"220000,00"
      },
    ]
    
    
    const swiperWrapper = document.querySelector('.swiper-last-prod-wrapper')
    if(!swiperWrapper){
        return
    }
    
    products.forEach(prod =>{
      let slide = document.createElement('div')
      slide.classList.add('swiper-slide')
      slide.innerHTML = 
      `
      <div class="card-product">
         <img class="img-fluid border-bottom-custom" src="https://picsum.photos/300" alt="">
         <div class="card-product-body main-c">
            <div class="d-flex flex-wrap justify-content-between align-items-center">
                <h3 class="mb-0 titolo-annuncio-carosello">${prod.name}</h3>
                <i class="far fa-heart favourite fs-3 icona-cuore"></i>
                <a class="white-co w-100 text-start categoria-carosello" href="">${prod.category}</a>
           </div>
             <p class="fs-3 text-end">${prod.price}</p>
        </div>
    
     </div>
    
      `
      swiperWrapper.appendChild(slide)
    
    
    })
    
}

function generateFavouriteBtn(){
  let favouriteBtns = document.querySelectorAll('.favourite')

favouriteBtns.forEach(btn =>{
    btn.addEventListener('click', function(){
        btn.classList.toggle('fas')
        btn.classList.toggle('far')
    })
})  
}


populateCategories()
populateLastAds()
generateLastAdsCarousel()
generateFavouriteBtn()

  








