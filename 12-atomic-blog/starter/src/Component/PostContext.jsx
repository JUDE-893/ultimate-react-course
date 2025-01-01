import {useContext,createContext} from 'react';

const PostContext = createContext();

function PostsProvider({children}) {

  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  return (
    <PostsContext.Privider
    value={{
      posts:searchedPosts,
      onAddPost:handleAddPost,
      searchQuery:searchQuery,
      setSearchQuery:setSearchQuery
    }}>
    {children}
    </PostsContext.Privider>
  )
}

const usePosts = function(){
  const context = useContext('PostContext');
  context === undefined && throw new Error('the usePosts hook was used outside of its Provider\'s scoop')
  return context;
}

export {PostsProvider,usePosts}
