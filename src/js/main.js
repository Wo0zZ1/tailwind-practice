const toggleMenu = () => {
  const burger = document.querySelector("#burger");
  const menu = document.querySelector("#mobile-menu");
  const body = document.querySelector("body");

  burger.addEventListener("click", () => {
    window.scrollTo(0, 0);
    burger.classList.toggle("active");
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
    body.classList.toggle("overflow-hidden");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 767.99) {
      menu.classList.add("hidden");
      menu.classList.remove("flex");
      burger.classList.remove("active");
      body.classList.remove("overflow-hidden");
    }
  });
};

toggleMenu();

// Tabs

const toggleTabs = (tabsTriggerClass, tabsContentClass) => {
  const tabsTriggers = document.querySelectorAll(tabsTriggerClass);
  const tabsContent = document.querySelectorAll(tabsContentClass);

  tabsTriggers.forEach((trigger, index) => {
    trigger.addEventListener("click", () => {
      tabsTriggers.forEach((tab) => tab.classList.remove("active"));
      trigger.classList.add("active");

      tabsContent.forEach((content) => content.classList.add("hidden"));
      tabsContent[index].classList.remove("hidden");
    });
  });
  tabsTriggers[0].click();
};

toggleTabs(".tab-trigger", ".tab-content");

// Accordion

const accordion = () => {
  const items = document.querySelectorAll(".accordion-trigger");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      const parent = item.parentNode; // accordion-item

      if (parent.classList.contains("active"))
        parent.classList.remove("active");
      else {
        document.querySelectorAll(".accordion-item").forEach((child) => {
          child.classList.remove("active");
        });

        parent.classList.add("active");
      }
    });
  });
};

accordion();

const setCopyrightDate = () => {
  const year = new Date().getFullYear();
  const copyright = document.querySelector("#copyright");
  copyright.textContent = year.toString() + copyright.textContent;
};

setCopyrightDate();
