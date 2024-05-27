document.addEventListener("DOMContentLoaded", () => {
  const scrollerInner = document.querySelector(".scroller__inner");

  // Fetch initial sponsor data from JSON file
  fetch("../data/sponsors.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Fetched initial data:", data); // Log the fetched data
      populateScroller(data.sponsors);
    })
    .catch((error) => console.error("Error fetching sponsors:", error));

  const scroller = document.querySelector(".scroller");
  scroller.addEventListener("mouseover", () => {
    scrollerInner.style.animationPlayState = "paused";
  });

  scroller.addEventListener("mouseout", () => {
    scrollerInner.style.animationPlayState = "running";
  });

  // Periodically update the scroller content
  setInterval(updateScrollerContent, 30000); // Update every 30 seconds

  function populateScroller(sponsors) {
    console.log("Populating scroller with sponsors:", sponsors); // Log sponsors

    // Clear existing content
    while (scrollerInner.firstChild) {
      scrollerInner.removeChild(scrollerInner.firstChild);
    }

    // Add new items
    sponsors.forEach((sponsor) => {
      const item = document.createElement("a");
      item.href = sponsor.link;
      item.className = "flex items-center px-12 py-4";
      item.innerHTML = `<img src="${sponsor.image}" alt="${sponsor.name}" class="h-16">`;
      scrollerInner.appendChild(item);

      // Clone items to create an infinite loop effect
      const clone = item.cloneNode(true);
      scrollerInner.appendChild(clone);
    });
  }

  function updateScrollerContent() {
    // Fetch new content (for example, via an API call)
    fetch("../data/sponsors.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched updated data:", data); // Log the fetched data
        populateScroller(data.sponsors);
      })
      .catch((error) => console.error("Error fetching sponsors:", error));
  }
});
