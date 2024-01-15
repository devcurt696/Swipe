import { Models } from 'appwrite';
import React from 'react'
import LoaderImage from './LoaderImage';
import GridPostList from './GridPostList';

type SearchResultsProps = {
    isSearchFetching: boolean;
    searchedPosts: Models.Document[];
}

const SearchResults = ({ isSearchFetching, searchedPosts }: SearchResultsProps) => {
    if (isSearchFetching) return <LoaderImage />;

    if (searchedPosts && searchedPosts.documents.length > 0) {
        return (
            <GridPostList posts={searchedPosts.documents}/>
        );
    }
  return (
    <p className='text-light-4 text-center w-full'>No results found</p>
  )
}

export default SearchResults