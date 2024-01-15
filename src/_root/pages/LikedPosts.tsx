import GridPostList from '@/components/shared/GridPostList';
import LoaderImage from '@/components/shared/LoaderImage';
import { useGetCurrentUser } from '@/lib/react-query/queriesandMutations'


const LikedPosts = () => {
  const { data: currentUser, isLoading } = useGetCurrentUser();

  if (isLoading || !currentUser) {
    return (
      <div className='flex-center w-full h-fulls'>
        <LoaderImage />
      </div>
    )
  }

  console.log(currentUser.liked)
  return (
    <>
      {currentUser.liked.length === 0 && (
        <p className='text-light-4'>No liked posts</p>
      )}

      <GridPostList posts={currentUser.liked} showStats={false} />
    </>
  )
}

export default LikedPosts