import { ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchPeopleBox from '../components/SearchPeopleBox';
import SearchPeopleFilters from '../components/SearchPeopleFilters';

export interface PeopleFilters {
    requireBio: boolean
}

const SearchPeopleScreen = () => {
    const [keyword, setKeyword] = useState<string>(''),
        [filters, setFilters] = useState<PeopleFilters>({
            requireBio: false
        });

    useEffect(() => {
        console.log(keyword, filters);
    }, [keyword, filters]);

  return (
    <ScrollView className='flex-1 flex-column w-100'>
        <SearchPeopleBox keyword={keyword} setKeyword={setKeyword}/>
        <SearchPeopleFilters filters={filters} setFilters={setFilters} />

    </ScrollView>
  )
}

export default SearchPeopleScreen