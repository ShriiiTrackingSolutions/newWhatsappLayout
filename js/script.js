  //  Header script

  // Debounce function to limit how often the event handler executes
  function debounce(func, delay) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  }

  // Header scroll handler
  function handleScroll() {
    const header = document.getElementById("main-header");
    const headerOffset = header.offsetTop;
    const headerHeight = header.offsetHeight;
    const belowContent = document.getElementById("headBelowContent");
    const belowContentOffset = belowContent.offsetTop;
    const belowContentHeight = belowContent.offsetHeight;

    if (window.pageYOffset > headerOffset + headerHeight + 5) {
      header.classList.add("sticky-header", "visible");
      header.classList.remove("headerAnimate");

      if (window.matchMedia("(max-device-width:991.98px)").matches) {
        document
          .getElementById("navbarSupportedContent")
          .setAttribute(
            "style",
            "max-height: calc(100vh - 112px); overflow-y: auto;"
          );
      } else {
        if (window.matchMedia("(max-device-width:1199.98px)").matches) {
          document
            .getElementById("navbarSupportedContent")
            .setAttribute("style", "");
        }
      }
    } else {
      if (
        window.pageYOffset <
        belowContentOffset + belowContentHeight + 4
      ) {
        header.classList.remove("sticky-header", "visible");
        header.classList.add("headerAnimate");
      }
    }
  }

  // Attach debounced scroll event
  window.addEventListener("scroll", debounce(handleScroll, 0));


  
  // function show(groupNumber, element) {
  //   // Hide all groups except the one being toggled
  //   if (window.matchMedia("(max-width: 991.98px)").matches) {
  //     document.querySelectorAll("[class^='group']").forEach((group) => {
  //       if (!group.classList.contains(`group${groupNumber}`)) {
  //         group.classList.add("d-none");
  //       }
  //     });

  //     // Remove 'active' class from all headings
  //     document.querySelectorAll(".megaHeding").forEach((heading) => {
  //       heading.classList.remove("active");
  //     });

  //     // Toggle the visibility of the selected group
  //     const selectedGroup = document.querySelector(`.group${groupNumber}`);
  //     selectedGroup.classList.toggle("d-none");

  //     // Add 'active' class to the clicked heading if the group is now visible
  //     if (!selectedGroup.classList.contains("d-none")) {
  //       element.classList.add("active");
  //     }
  //   }
  // }

  
  $(function () {
    // WhatsApp URLs for desktop and mobile
    var hrefs = [
      "https://web.whatsapp.com/send?phone=8511179667", // Desktop
      "https://api.whatsapp.com/send?phone=8511179667" // Mobile
    ];
  
    // Function to update hrefs
    function updateWhatsAppHref() {
      var isMobile = $(window).width() < 767.98; // Check if width is less than 768px
      $(".set-url-target").attr("href", hrefs[isMobile ? 1 : 0]); // Update href
    }
  
    // Attach resize event with debounce
    $(window)
      .on("resize", function () {
        clearTimeout(this.resizeTimer); // Clear previous timer
        this.resizeTimer = setTimeout(updateWhatsAppHref, 200); // Debounce
      })
      .trigger("resize"); // Trigger on page load
  });
  