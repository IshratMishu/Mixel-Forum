
//Let's Discuss Section Functionality

let viewAll = 101;
const discussionPosts = async(inputText) => {
  viewAll = inputText;
    const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${inputText}`);
    const data = await response.json();
    const allData = data.posts;
    
    const discussionPosts = document.getElementById('discussion-posts');

    //clear data before next search
    discussionPosts.textContent = '';

    allData.forEach((item) => {
        const div = document.createElement('div');
        div.innerHTML = `<div class="card card-side bg-base-100 shadow-xl flex flex-col lg:flex-row">
        <div class="indicator mt-10 lg:ml-5 mx-auto">
          <span id="active-test" class="indicator-item badge ${item.isActive ? 'badge-success' : 'badge-error'}"></span>
          <div class="grid w-20 h-20 bg-base-300 place-items-center"><img src="${item.image}" alt=""></div>
        </div>
        <div class="card-body p-1 lg:p-10">
          <div class="flex gap-3 lg:gap-10 font-medium text-sm text-color-gray80">
            <h5>#${item.category}</h5>
            <h5>Author : ${item.author.name}</h5>
          </div>
          <h2 class="font-bold text-black text-xl">${item.title}</h2>
          <p class="text-color-gray80 text-sm">${item.description}</p>
          <hr class="color-black border-t-2 border-dotted">

          <div class="flex justify-between">
            <div class="flex gap-4">
              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
                <p class="text-color-gray60">${item.comment_count}</p>
              </div>

              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
               <p class="text-color-gray60">${item.view_count}</p> 
              </div>

              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
               <p class="text-color-gray60">${item.posted_time}</p> 
              </div>
            </div>

          <div>
            <button class="btn btn-circle bg-success">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6 bg-success rounded-2xl p-0.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
              </svg>
            </button>
          </div>
          </div>
        </div>
      </div>`
      
      discussionPosts.appendChild(div);
      
    });

    toggleSpinner(false);
}


// Search Functionality
const searchCategory = () => {
  toggleSpinner(true);
  const inputField = document.getElementById('input-field');
  const inputText = inputField.value;
  inputField.value = '';
  discussionPosts(inputText);
}


// Loading Spinner Function
const toggleSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById('toggle-spinner');
    if(isLoading){
      loadingSpinner.classList.remove('hidden');
    }
    else{
      loadingSpinner.classList.add('hidden');
    }
  }
 
  searchCategory();
  discussionPosts(viewAll);







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