import { Models } from "appwrite";

import { GridPostList, Loader } from "@/components/shared";
import { useGetCurrentUser } from "@/lib/react-query/queries";

const Saved = () => {
  const { data: currentUser } = useGetCurrentUser();

  const savePosts = currentUser?.save
    .map((savePost: Models.Document) => ({
      ...savePost.post,
      creator: {
        $id: currentUser.$id,
        imageUrl: currentUser.imageUrl,
      },
    }))
    .reverse();

  return (
    <>
      
      {!currentUser ? (
        <div className="flex-center w-full h-full">
        <Loader />
      </div>
      ) : (
        <>
          {savePosts.length === 0 ? (
            <p className="text-light-4">No available posts</p>
          ) : (
            <GridPostList posts={savePosts} showStats={false} />
          )}
        </>
      )}
    </>
  );
};

export default Saved;
