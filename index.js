const sections = document.querySelectorAll('.hidden');

const MyObserve = new IntersectionObserver((entries) => {
  entries.forEach((item) => {
    if(item.isIntersecting) {
      item.target.classList.add('show')
    } else {
      item.target.classList.remove('show')
    }
  })
})

sections.forEach((section) => {
  MyObserve.observe(section)
})