document.addEventListener('DOMContentLoaded', () => {

    const elements = document.querySelectorAll('[data-mask="phone"]')
    if (!elements) return
    const phoneOptions = { 
      mask: '+{7}(000)000-00-00' 
    }
    elements.forEach(el => {
      IMask(el, phoneOptions) 
    })
  })

  var form = document.querySelector('.form')
  var validateBtn = form.querySelector('.form__button')
  var from = form.querySelector('.form__name')
  var num = form.querySelector('.form__number')
  var fields = form.querySelectorAll('.field')



  
      form.addEventListener('submit', function (event) {
        event.preventDefault()

        var errors = form.querySelectorAll('.error')

        for (var i = 0; i < errors.length; i++) {
          errors[i].remove()
        }
      

        for (var i = 0; i < fields.length; i++) {
            if (!fields[i].value) {
              console.log('field is blank', fields[i])
              var error = document.createElement('div')
              error.className = 'error'
              error.style.color = 'red'
              error.innerHTML = 'Cannot be blank'
              form[i].parentElement.insertBefore(error, fields[i])
            }
          }
        })







        const slider = document.querySelector('.slide');
        const sliderItems = Array.from(slider.children);
        const btnNext = document.querySelector('.columnOne__btnPrev');
        const btnPrev = document.querySelector('.columnOne__btnNext');
        
        sliderItems.forEach(function (slide, index) {
            // Скрываем все слайды, кроме первого
            if (index !== 0) slide.classList.add('hidden');
        
            // Добавляем индексы
            slide.dataset.index = index;
        
            // Добавляем data атрибут active для первого / активного слайда
            sliderItems[0].setAttribute('data-active', '');
        
            // Клик по слайдам
            slide.addEventListener('click', function () {
                showNextSlide('next');
            });
        });
        
        btnNext.onclick = function () {
            console.log('Next Slide');
            showNextSlide('next');
        };
        
        btnPrev.onclick = function () {
            console.log('Prev Slide');
            showNextSlide('prev');
        };
        
        function showNextSlide(direction) {
            // Скрываем текущий слайд
            const currentSlide = slider.querySelector('[data-active]');
            const currentSlideIndex = +currentSlide.dataset.index;
            currentSlide.classList.add('hidden');
            currentSlide.removeAttribute('data-active');
        
            // Рассчитываем след индекс в зависимости от направления движения
            let nextSlideIndex;
            if (direction === 'next') {
                nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
            } else if (direction === 'prev') {
                nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
            }
        
            // Показываем след слайд
            const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
            nextSlide.classList.remove('hidden');
            nextSlide.setAttribute('data-active', '');
        }
      


        document.querySelectorAll('#column').forEach(e => {
            e.draggable = true;
            e.ondragstart = e => {
              e.dataTransfer.setData("id", e.target.id);
              e.target.classList.add('dragging');
            }
            e.ondragover = e => {
              let old = document.querySelector('.over');
              old && old.classList.remove('over')
              e.target.classList.add('over');
              e.preventDefault();
            };
            e.ondrop = e => {
              let old = document.querySelector('.dragging');
              old && old.classList.remove('dragging')
              old = document.querySelector('.over');
              old && old.classList.remove('over');
              let v = e.target.innerHTML;
              let fromEl = document.querySelector('#'+e.dataTransfer.getData('id'));
              e.target.innerHTML = fromEl.innerHTML;
              fromEl.innerHTML = v;
            };
          })