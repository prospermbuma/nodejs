const posts = [
    { id: 1, title: 'Node and MongoDB' },
    { id: 2, title: 'RestAPI Development' }
];

/*###################################################
# ESModule Exporting
###################################################*/
// const getPosts = () => posts.forEach(post => { console.log(`Id: ${post.id} \nTitle: ${post.title}`); });
const getPosts = () => posts.map((post) => (console.log(`Id: ${post.id} \nTitle: ${post.title}`)));

// Exporting as default
export default getPosts;

// Exporting non-default function
const getPostsLength = () => `Posts Length: ${posts.length}`;
export { getPostsLength };

