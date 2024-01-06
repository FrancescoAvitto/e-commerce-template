fetch('./prodotti.json').then(data=> data.json()).then(data=>{

    
function generateFavouriteBtn(){
    let favouriteBtns = document.querySelectorAll('.favourite')
  
  favouriteBtns.forEach(btn =>{
      btn.addEventListener('click', function(){
          let id = btn.getAttribute('prod-id');

          let storage = sessionStorage.getItem('favourite').split(',')

          if(storage.includes(id)){
              storage = storage.filter(el => el != id)

          }else{
              storage.push(id)

          }

        
          sessionStorage.setItem('favourite', storage)

        
          btn.classList.toggle('fas')
          btn.classList.toggle('far')
      })
  })  
  }

  
  function populateAds(data){
        const prodWrapper = document.querySelector('#prod-wrapper')

        function truncateTitle(title){
            let splitted = title.split(' ')
            if(splitted.length > 1){
                return `${splitted[0]}..`
            }else{
                return splitted[0]
            }
        }

        function setFavourite(id){
            if(sessionStorage.getItem('favourite')){

                let storage = sessionStorage.getItem('favourite').split(',')
      
                if(storage.includes(id.toString())){
                            return `fas`
                }else{
                     return `far`
      
                }
            }else{
                sessionStorage.setItem('favourite', '')
                return `far`
            }


        }



        prodWrapper.innerHTML = ""
        data.forEach((prod, i) =>{
            let card = document.createElement('div')
            card.classList.add('col-12', 'col-sm-6', 'col-lg-4','mb-4')
            card.innerHTML=
            `
            <div class="card-product"
                        data-aos="fade-zoom-in"
                        data-aos-offset="50"
                        data-aos-delay="80"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center"
            
            >
                                <img class="img-fluid border-bottom-custom" src="https://picsum.photos/300" alt="">
                                <div class="card-product-body main-c">
                                   <div class="d-flex flex-wrap justify-content-between align-items-center">
                                    <div class="position-relative flex-grow-1 title-box">
                                    <span class="p-tooltip">${prod.name}</span>
                                    <h3 class="mb-0 titolo-annuncio-carosello">${truncateTitle(prod.name)}</h3>
                                    </div>
                                       <i prod-id="${prod.id}" class="${setFavourite(prod.id)} fa-heart favourite fs-3 icona-cuore"></i>
                                       <a class="white-co w-100 text-start categoria-carosello" href="">${prod.category}</a>
                                  </div>
                                    <p class="fs-3 text-end">${prod.price}</p>
                               </div>
    
            `
    
            prodWrapper.appendChild(card)
        })
        generateFavouriteBtn()

    }

    
    
    
    function populateCategoryFilter(){
        let categories = Array.from(new Set(data.map(prod => prod.category)))

        categories.forEach((category,i) =>{
            let wrapper = document.querySelector('#wrapper-category-radio')
            let input = document.createElement('div')
            input.classList.add('form-check')
            input.innerHTML=
            `
            <input class="form-check-input filter-category" type="radio" name="flexRadioDefault" id="flexRadioDefault${i}" data-filter="${category}">
            <label class="form-check-label" for="flexRadioDefault${i}">
            ${category}
            </label>
            </div>
            
            `
            
            wrapper.appendChild(input)
            
            
        })
    }

    function filterByCategoryRadio(){
        let radios = document.querySelectorAll('.filter-category')
        radios.forEach(radio => {
            radio.addEventListener('input', function(){
                let selected = radio.getAttribute('data-filter')

                if(selected === 'all'){
                    populateAds(data)
                }else{

                let filtered = data.filter(prod => prod.category === selected)
                populateAds(filtered)
                }
                
            })
        })


    }

    function filterBySearch(){
        let input = document.querySelector('#search-input')
        input.addEventListener('keydown', function(e){

            if(e.code == 'Enter'){

                let filtered = data.filter(prod => prod.name.toLowerCase().includes(input.value.toLowerCase()) )
                populateAds(filtered)
            }
        })

    }

    function populatePriceFilter(){
        let minInput = document.querySelector('#min-price-filter')
        let minLabel = document.querySelector('#min-price-label')
        let maxInput = document.querySelector('#max-price-filter')
        let maxLabel = document.querySelector('#max-price-label')

        let max = data.map(prod => prod.price).sort((a,b) => b - a)[0]

        // inizializzo il massimo e l'attributo max 
        maxLabel.innerHTML = `${Math.ceil(max)} €`

        minInput.max = max
        maxInput.max= max
        maxInput.value = max

       
    


        minInput.addEventListener('input', function(e){
            if((Number(maxInput.value) - 200) <= Number(minInput.value)){
                minInput.value = Number(maxInput.value) - 200
            }
            minLabel.innerHTML =`${minInput.value} €`

        })

        maxInput.addEventListener('input', function(e){
            
            if((Number(maxInput.value) - 200) <= Number(minInput.value)){
                maxInput.value = Number(minInput.value) + 200
            }
            maxLabel.innerHTML =`${maxInput.value} €`
        })


    }

    function filterByPrice(){
        let minInput = document.querySelector('#min-price-filter')
        let maxInput = document.querySelector('#max-price-filter')

        function filterAds(){
            let filtered = data.filter(prod => Number(prod.price) > Number(minInput.value) && Number(prod.price) <= Number(maxInput.value)+1)
            populateAds(filtered)
        }

        minInput.addEventListener('change', filterAds)

        maxInput.addEventListener('change', filterAds)
    

    }



    
    populateAds(data)
    populateCategoryFilter()
    filterByCategoryRadio()
    filterBySearch()
    populatePriceFilter()
    filterByPrice()


})


