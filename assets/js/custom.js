window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll)
});
console.clear();
const app = (() => {
let body;
let menu;
let menuItems;

const init = () => {
    body = document.querySelector("body");
    menu = document.querySelector(".menu-icon");
    menuItems = document.querySelectorAll(".nav__list-item");

    applyListeners();
};

const applyListeners = () => {
    menu.addEventListener("click", () => toggleClass(body, "nav-active"));
};

const toggleClass = (element, stringClass) => {
    if (element.classList.contains(stringClass))
    element.classList.remove(stringClass);else
    element.classList.add(stringClass);
};

init();
})();

// Navigation menu end   


// header scroll Start 

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('.header').addClass("position-sticky");
    }
    else{
        $('.header').removeClass("position-sticky");
    }
});

// accordian 

$(".accordionTitle").click(function() {
    const $accordion_wrapper = $(this).parent();
    const $accordion_content = $(this).parent().find(".accordionContent");
    const $accordion_open = "accordion--open";

    // If this accordion is already open
    if ($accordion_wrapper.hasClass($accordion_open)) {
      $accordion_content.slideUp();                     // Close the content.
      $accordion_wrapper.removeClass($accordion_open);  // Remove the accordionm--open class.
    }
    // If this accordion is not already open
    else {
      $accordion_content.slideDown();                 // Show this accordion's content.
      $accordion_wrapper.addClass($accordion_open);   // Add the accordion--open class.
    }
  });
  