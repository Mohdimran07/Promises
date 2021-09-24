const posts = [
    {title: 'post one', body: 'this is post one'},
    {title: 'post two', body: 'this is post two'}
];
function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`; 
        });
        document.body.innerHTML = output;
    }, 2000);
}
// getPosts();

function createPosts(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 1000);
}

createPosts({title: 'post three', body: 'this is post three'},getPosts);

function create4thPosts(post, callback1){
    setTimeout(() => {
        posts.push(post);
         callback1();
    }, 1000);
}

create4thPosts({title: 'post four', body: 'this is post four'}, getPosts);
// .then(getPosts)
// .catch(err => console.log(err));


// document.getElementById("app").innerHTML = `<h1></h1>`;
function deletePost(post){
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              posts.pop(post); 
            //   const error = false;
              if(posts.length > 0){
                  resolve();
              } else {
                  reject('Error: Array is Empty');
              }
          }, 1000)
      });
}
 deletePost();
deletePost();
deletePost();
deletePost().catch(err => console.log(err));


// function lastEditedInSecoundAgo(){
//     var count = 0;
//     var timerId = setInterval(() => {
//         count++;
//         // console.log'last edited (count)
//         document.getElementById("app").innerHTML = `<h1> ${count} </h1>`;
//     }, 1000);
// }
// lastEditedInSecoundAgo();

function deletePost(){
    return new Promise((resolve, reject) =>{
        if(posts.length > 0){
            setTimeout(() => {
                resolve();
            }, 1000);
        } else {
            reject("error: Array is Empty now");
        }
    });
}
const timerId = setInterval(() => {
    deletePost()
    .then(() => {
        posts.pop();
        let lastPost = document.querySelector('body').lastChild;
        lastPost.parentNode.removeChild(lastPost);
    })
    .catch(err=>{
        console.log(err);
        clearInterval(timerId);
    })
}, 4000);

// //promise.all
// // const promise1 = Promise.resolve("hello world");
// // const promise2 = 10;
// // const promise3 = new Promise((resolve, reject) => 
// // setTimeout(resolve, 2000, 'Goodboy'));

// // Promise.all([promise1, promise2, promise3]).then((
// //     (values) => console.log(values)))

// const posts = [
//     {title: 'post one', body: 'this is post one'},
//     {title: 'post two', body: 'this is post two'}
// ];
// function getPosts(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let output = '';
//             posts.forEach((post, index) => {
//                 output += `<li>${post.title}</li>`; 
//             });
//             document.body.innerHTML = output;
//             resolve();
//         }, 1000);
        
//     })
  
// }
// // getPosts();
// function updateLastUserActivityTime(){
//     console.log("updated last User")
// }

// function createPosts(post){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post);
//             resolve();
//             // callback();
//         }, 2000);
//     })
   
// }

// createPosts({title: 'post three', body: 'this is post three'})
//     .then(() => {
//         getPosts().then(() => {
//             updateLastUserActivityTime();
//         });
//     })