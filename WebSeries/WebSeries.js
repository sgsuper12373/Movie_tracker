
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

async function loadLocalData() {
  try {
    const container = document.querySelector(".content_container");
    if (!container) {
      console.error("Container .content_container not found");
      return;
    }

    const response = await fetch('./data.json');
    if (!response.ok) {
      throw new Error("Could not fetch the data file");
    }

    const data = await response.json();

    const fragment = document.createDocumentFragment();
    data.forEach(item => {
      const card = createContentCard(item);
      fragment.appendChild(card);
    });

    container.appendChild(fragment);

  } catch (error) {
    console.error("Error loading JSON:", error);
  }
}

document.addEventListener('DOMContentLoaded', loadLocalData);