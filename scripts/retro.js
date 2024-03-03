// Search & Let's Discuss Section Functionality


















// Latest Posts Section Functionality
const latestPosts = async() => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');    
    const data = await response.json();

    const latestPost = document.getElementById('latest-post');
    data.forEach((item) => {
        const div = document.createElement('div');
        div.innerHTML = `<div class="card bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src="${item.cover_image}" alt="person" class="rounded-xl" />
        </figure>
        <div class="card-body items-start">
          <div class=" flex gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>
            <p class="text-color-gray80 ">${item.author?.posted_date || 'No Publish Date'}</p>
          </div>

          <h2 class="font-extrabold text-xl text-black">${item.title}</h2>
          <p class="text-color-gray80">${item.description.slice(0,98)}</p>
          
          <div class="flex gap-5 items-center mt-2">
            <div class="w-20"><img class="rounded-full" src="${item.profile_image}" alt=""></div>
            <div>
              <h3 class="font-extrabold text-xl text-black">${item.author.name}</h3>
              <p class="text-color-gray80 text-sm">${item.author?.designation || 'Unknown'}</p>
            </div>
          </div>
        </div>
      </div>`

      latestPost.appendChild(div);
    });
 }

latestPosts();