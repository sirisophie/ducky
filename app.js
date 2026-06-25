const categories = [
  {
    id: "food",
    title: "Food & Water",
    short: "",
    accent: "var(--green)",
    icon: "FW",
    cards: [
      {
        title: "Overview",
        items: [
          "Food and treats are in Ducky's wicker chest by the fireplace.",
          {
            text: "Quantity: 1.5-2 cups of Purina Pro Plan, split across 3 meals.",
            children: [
              "Purina Pro Plan is the black bag in the chest."
            ]
          }
        ]
      },
      {
        title: "Breakfast - 6/7am",
        items: [
          "After his morning potty, he is usually ready for breakfast.",
          {
            text: "Give 1/2-3/4 cup.",
            children: [
              "Optional bonus: We usually hand feed him breakfast - it's very cute and good for bonding if you want to do it. He likes to sit on the couch with you or on the red chairs outside and eat from your hand, if you're into that. Or give it to him in a slow feeder bowl."
            ]
          }
        ]
      },
      {
        title: "Lunch - 12pm",
        items: [
          {
            text: "Lunch is flexible.",
            children: [
              "Give up to 1/2 cup of food, or replace some/all of it with training treats. Meal mixers in the red bag are good treats for this if you're not feeding him a real lunch - the rest are more like “junk food”.",
              "If you're on the go, frequent treats can count as lunch."
            ]
          }
        ]
      },
      {
        title: "Dinner - 6/7pm",
        items: [
          {
            text: "Give 1/2-3/4 cup.",
            children: [
              "Use the snuffle mat or slow feeder bowl so it takes him a while."
            ]
          }
        ]
      },
      {
        title: "Treats",
        items: [
          {
            text: "Keep the treat bag on you always!",
            children: [
              "Reward good behavior, especially whenever he responds to “come” or “Ducky”.",
              "Use treats to trade him if he picks up something bad - say “drop it”."
            ]
          },
          {
            text: "Favorites: freeze dried chicken in the white box, meal mixers in the red bag, or real chicken / strawberries / blueberries / little peach slices."
          }
        ]
      },
      {
        title: "Settle Down Treats",
        items: [
          {
            text: "Special treats for when you want Ducky to occupy himself for a bit - best to deploy one at a time:",
            children: [
              {
                text: "Freezer",
                children: [
                  "Green pupsicle: load with pupsicle balls or orange/purple ice cubes",
                  "Red kong with frozen filling, or non-frozen Greek yogurt + Purina in a pinch",
                  "Frozen chew toy stick thing",
                  "Lick mat"
                ]
              },
              {
                text: "Chest",
                children: [
                  "Yak chew",
                  "Bully stick",
                  "Cow hoof",
                  "Benebone",
                  "Dental chews in the white bag"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Water",
        items: [
          "Keep water available in his pen.",
          "For outings, use the to-go bowl and water bottle in the Ducky tote."
        ]
      }
    ]
  },
  {
    id: "schedule",
    title: "Schedule",
    short: "A recipe for a perfect Ducky is lots of sleep and plenty of mental stimulation and fun while awake. General rule of thumb is 1-2 hours awake to 2-4 hours napping in the crate. Biting/craziness usually means time for nap.",
    accent: "var(--blue)",
    icon: "SC",
    cards: [
      {
        title: "Early Riser",
        items: [
          {
            text: "6/7am",
            children: [
              "Wake up / potty / breakfast / training and/or play / settle down",
              "Back to sleep for 3-4 hours",
              "Close crate cover for better sleep"
            ]
          },
          {
            text: "11/12pm, or whenever he asks to be let out",
            children: [
              "Wake up / potty / training and play / lots of treats / settle down",
              "Back to sleep for 2-4 hours"
            ]
          },
          {
            text: "4/5pm",
            children: [
              "Wake up / potty / fun outing",
              "Ideas: Ashbury Park, the canyon, or town",
              "Settle down / back to sleep for 1-2 hours"
            ]
          },
          {
            text: "6/7pm",
            children: [
              "Hang out with you until bedtime",
              "Maybe do a short neighborhood walk or fetch session if he seems energetic"
            ]
          },
          {
            text: "9/10pm",
            children: [
              "Bedtime",
              "Potty right before putting him in the crate for the last time",
              "Close crate cover and curtains on the glass doors so he'll sleep longer",
              "Turn on baby monitor in bedroom so you can hear him in case he has an accident overnight"
            ]
          }
        ]
      },
      {
        title: "Sleep-In Edition",
        items: [
          {
            text: "6/7am",
            children: [
              "Wake up / potty / back in crate to sleep more. He might cry a bit but he's fine with going back to bed if you want to sleep more."
            ]
          },
          {
            text: "8/9am",
            children: [
              "Wake up / commence day!",
              "Similar schedule to above"
            ]
          }
        ]
      },
      {
        title: "Helpful Notes",
        items: [
          "This is a typical work day schedule, but when you're on the go, he is usually good at napping in the crate in the car while you're driving and will be pooped from all the activity. He gets overheated really easily so don't leave him in the car <3",
          "He will probably sleep for ~8 hours after you put him to bed, so you can adapt the schedule as needed. For example, if you put him to bed at midnight, he probably will sleep until 7:30/8 as long as you shut the blackout curtains."
        ]
      }
    ]
  },
  {
    id: "potty",
    title: "Potty",
    short: "",
    accent: "var(--rust)",
    icon: "PT",
    cards: [
      {
        title: "Good-to-knows about Ducky's potty training",
        items: [
          "Always take him out after he wakes up from a nap.",
          "He can go outside to potty without the leash on, but if you want him to act swiftly, it's better to have the leash on.",
          "He sometimes needs a few minutes to poop.",
          {
            text: "He occasionally pees in the house / play pen.",
            children: [
              "Usually when he's overtired or upset that he's locked up",
              "Best way to avoid this is to give him enough physical and mental stimulation during the day"
            ]
          },
          {
            text: "If he has an accident:",
            children: [
              "Enzyme cleaner is under the sink in the white spray bottle",
              "Little Green Machine is in the laundry room if needed",
              "Or throw whatever it is in the wash"
            ]
          },
          "Recommend turning on the baby monitor in your room in case he has an accident overnight and starts crying. It's only happened twice since we got him, but just in case!"
        ]
      }
    ]
  },
  {
    id: "training",
    title: "Training",
    short: "Things to practice to stimulate Ducky's brain and keep him from going crazy.",
    accent: "var(--gold)",
    icon: "TR",
    cards: [
      {
        title: "Commands to Practice",
        items: [
          "Ducky",
          "Come (always reward!!)",
          "Sit",
          "Down",
          "Paw",
          "Touch",
          "Place",
          "Wait (before going through doorways and giving him meals)",
          "Stay",
          "Leave it",
          "Drop it",
          "Go to bed (use high value treat)",
          "Spin",
          "Center"
        ]
      },
      {
        title: "Other Things to Practice",
        items: [
          "Not jumping to greet people",
          "Loose leash walking",
          "Off leash walking in the yard",
          "Fetch",
          "Settling: tether him to something and let him fuss, then chill out"
        ]
      }
    ]
  },
  {
    id: "knows",
    title: "Good to Knows",
    short: "",
    accent: "var(--rose)",
    icon: "GK",
    cards: [
      {
        title: "In the House",
        items: [
          "Don't let him roam free unsupervised. If he's roaming, supervise and keep the green leash on him so you can grab him more easily if he gets into trouble.",
          "He can run free around the deck / fenced front area, but should be supervised. Watch out for him eating fruit tree soil.",
          "When he's awake, give him frequent opportunities to go potty.",
          "He loves to sit on the couch with you. A chew toy is helpful, but put him back in his play pen if he gets too rowdy.",
          "Sometimes he gets the zoomies, and zoomies can lead to potty accidents. If he gets zoomy, a few minutes of fetch outside are a good solution, or put him in the pen.",
          "Keep anything you don't want chewed / explored up high so he can't reach."
        ]
      },
      {
        title: "In the Car",
        items: [
          "For long drives, and short drives too, best if you can bring the travel crate so he can nap. Try to secure it so it won't tip.",
          "Potty break before car rides to prevent accidents.",
          "For short drives, he can sit in your lap or on the floor up front. He luvs it.",
          "He overheats quick, so be careful with hot cars.",
          "Don't let him rush out of the car. He should wait for your “ok”, and be careful not to let him jump from too high."
        ]
      },
      {
        title: "Fun Things to Do",
        items: [
          "Go to Ashford Park and let him run around in the big open space. Avoid the dog park for now. Use the blue long leash so you can catch him if needed, and practice recall with lots of treats.",
          "Play fetch in the back yard or front yard.",
          "Go for short neighborhood or trail walks. Watch out for foxtails / hot pavement.",
          "Fill up the kiddy pool and throw toys in there, especially if it's hot out."
        ]
      },
      {
        title: "Vet",
        items: [
          "Auburn Pet Clinic: (530) 888-7387"
        ]
      }
    ]
  },
  {
    id: "gallery",
    title: "Art Gallery",
    short: "Upload weekend photos of Ducky.",
    accent: "var(--green)",
    icon: "AG",
    gallery: true
  }
];

const app = document.querySelector("#app");

function getCurrentPage() {
  const id = window.location.hash
    .replace(/^#\/?/, "")
    .split("?")[0];
  return categories.find((category) => category.id === id) || null;
}

function header(page) {
  return `
    <header class="topbar">
      ${page ? `<button class="back-button" type="button" aria-label="Back to home" data-route="home">&#8249;</button>` : ""}
      <div class="brand-mark"><img src="assets/ducky.jpg" alt="Ducky"></div>
      <div class="title-block">
        <p class="eyebrow">Ducky</p>
        <h1>Ducky's Babysitter Guide</h1>
        <p class="version">Version: 17 Weeks Old</p>
      </div>
    </header>
  `;
}

function renderHome() {
  app.innerHTML = `
    ${header(null)}
    <main>
      <div class="hero-photo">
        <img src="assets/ducky.jpg" alt="Ducky sitting outside by a river">
      </div>
      <nav class="category-grid" aria-label="Ducky guide categories">
        ${categories.map((category) => `
          <button class="category-button" type="button" data-route="${category.id}">
            <span class="category-icon" style="background: ${category.accent}">${category.icon}</span>
            <span>
              <span class="category-title">${category.title}</span>
            </span>
            <span class="chevron" aria-hidden="true">&#8250;</span>
          </button>
        `).join("")}
      </nav>
    </main>
  `;
}

function renderInfoPage(page) {
  app.innerHTML = `
    ${header(page)}
    <main>
      <section class="page-heading">
        <h2>${page.pageTitle || page.title}</h2>
        ${page.short ? `<p>${page.short}</p>` : ""}
      </section>
      <div class="info-list">
        ${page.cards.map((card) => `
          <article class="info-card">
            <h3>${card.title}</h3>
            <ul>
              ${card.items.map(renderListItem).join("")}
            </ul>
          </article>
        `).join("")}
      </div>
    </main>
  `;
}

function renderListItem(item) {
  if (typeof item === "string") {
    return `<li>${item}</li>`;
  }

  if (!item.children?.length) {
    return `<li>${item.text}</li>`;
  }

  return `
    <li>
      ${item.text}
      <ul>
        ${item.children.map(renderListItem).join("")}
      </ul>
    </li>
  `;
}

const dbName = "ducky-gallery";
const storeName = "photos";

function openGalleryDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore(storeName, { keyPath: "id" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getPhotos() {
  const db = await openGalleryDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readonly");
    const request = tx.objectStore(storeName).getAll();
    request.onsuccess = () => resolve(request.result.sort((a, b) => b.createdAt - a.createdAt));
    request.onerror = () => reject(request.error);
  });
}

async function savePhoto(file) {
  const db = await openGalleryDb();
  const record = {
    id: crypto.randomUUID(),
    createdAt: Date.now(),
    name: file.name,
    type: file.type,
    blob: file
  };

  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readwrite");
    tx.objectStore(storeName).put(record);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
}

async function clearPhotos() {
  const db = await openGalleryDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readwrite");
    tx.objectStore(storeName).clear();
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
}

async function renderGalleryPage(page) {
  app.innerHTML = `
    ${header(page)}
    <main>
      <section class="page-heading">
        <h2>${page.title}</h2>
        <p>${page.short}</p>
      </section>
      <div class="gallery-actions">
        <label class="upload-button" for="photo-upload">Upload Photo</label>
        <button class="secondary-button" type="button" data-action="clear-gallery">Clear</button>
        <input class="hidden" id="photo-upload" type="file" accept="image/*" multiple>
      </div>
      <div id="gallery-content" class="gallery-grid" aria-live="polite"></div>
    </main>
  `;
  await refreshGallery();
}

async function refreshGallery() {
  const content = document.querySelector("#gallery-content");
  if (!content) return;

  const photos = await getPhotos();
  if (!photos.length) {
    content.className = "empty-gallery";
    content.textContent = "No photos yet. Upload Ducky's weekend masterpieces here.";
    return;
  }

  content.className = "gallery-grid";
  content.innerHTML = photos.map((photo) => {
    const src = URL.createObjectURL(photo.blob);
    return `
      <figure class="photo-tile">
        <img src="${src}" alt="${photo.name || "Ducky gallery photo"}">
      </figure>
    `;
  }).join("");
}

async function render() {
  const page = getCurrentPage();
  if (!page) {
    renderHome();
    return;
  }

  if (page.gallery) {
    await renderGalleryPage(page);
    return;
  }

  renderInfoPage(page);
}

app.addEventListener("click", async (event) => {
  const routeTarget = event.target.closest("[data-route]");
  if (routeTarget) {
    const route = routeTarget.dataset.route;
    window.location.hash = route === "home" ? "" : `#/${route}`;
    return;
  }

  const actionTarget = event.target.closest("[data-action='clear-gallery']");
  if (actionTarget) {
    await clearPhotos();
    await refreshGallery();
  }
});

app.addEventListener("change", async (event) => {
  if (event.target.id !== "photo-upload") return;
  const files = [...event.target.files].filter((file) => file.type.startsWith("image/"));
  await Promise.all(files.map(savePhoto));
  event.target.value = "";
  await refreshGallery();
});

window.addEventListener("hashchange", render);
render();
