const contentData = [
  {
    id: "lucifer",
    title: "Lucifer",
    image: "../Assests/WebSeries/Lucifer.jpeg",
    alt: "Lucifer WebSeries Poster",
    tags: ["Dark Fantasy", "Crime Drama"],
    rating: "⭐ 8.4",
    description: `Lucifer is a dark fantasy crime drama television series created by
    Roberto Aguirre-Sacasa. It stars Tom Holland as Detective Gabriel "Gabi" Stanton,
    a homicide detective assigned to a case involving Lucifer Morningstar.`
  },
  {
    id: "breaking_bad",
    title: "Breaking Bad",
    image: "../Assests/WebSeries/BreakingBad.jpeg",
    alt: "Breaking Bad Poster",
    tags: ["Crime", "Thriller"],
    rating: "⭐ 9.5",
    description: `A high school chemistry teacher turned methamphetamine producer
    navigates the dangers of the criminal underworld.`
  }
];



function createContentCard(data) {
  const card = document.createElement("div");
  card.className = "content-card";
  card.id = data.id;

  // Image wrapper
  const imageWrapper = document.createElement("div");
  imageWrapper.className = "content-image-wrapper";

  const img = document.createElement("img");
  img.className = "content-image";
  img.src = data.image;
  img.alt = data.alt;

  const overlay = document.createElement("div");
  overlay.className = "content-overlay";

  imageWrapper.append(img, overlay);

  // Content section
  const content = document.createElement("div");
  content.className = "content-content";

  const title = document.createElement("h2");
  title.className = "content-title";
  title.textContent = data.title;

  const info = document.createElement("div");
  info.className = "content-info";

  data.tags.forEach(tagText => {
    const tag = document.createElement("span");
    tag.className = "content-tag";
    tag.textContent = tagText;
    info.appendChild(tag);
  });

  const rating = document.createElement("span");
  rating.className = "imdb-rating";
  rating.textContent = data.rating;
  info.appendChild(rating);

  const description = document.createElement("p");
  description.className = "content-description";
  description.textContent = data.description;

  content.append(title, info, description);

  card.append(imageWrapper, content);
  return card;
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector(".content_container");
  if (container) {
    const fragment = document.createDocumentFragment();

    contentData.forEach(item => {
      const card = createContentCard(item);
      fragment.appendChild(card);
    });

    container.appendChild(fragment);
  } else {
    console.error("Container .content_container not found");
  }
});

