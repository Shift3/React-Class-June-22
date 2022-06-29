import axios from 'axios';
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
const usersUrl = 'https://jsonplaceholder.typicode.com/users';

function getPosts(){
  axios.get(postsUrl)
    .then(response => console.log('Posts', response.data[0]))
    .catch(err => console.log('Error:', err));
}

getPosts();

async function getPostsAsync(){
  try{
    const response = await axios.get(usersUrl);
    console.log('Users using async/await:', response.data[0]);
  } catch(err) {
      console.log('Error:', err);
  }
}

getPostsAsync();

function resolveAfter2Seconds(){
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      resolved('Resolved');
    }, 2000)
  });
}

resolveAfter2Seconds().then(data => console.log('Resolve after 2 seconds:', data));

async function getAsyncData(){
  const data = await resolveAfter2Seconds();
  console.log('Getting async data:', data);
}

getAsyncData();