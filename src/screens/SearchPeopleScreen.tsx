import { ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchPeopleBox from '../components/SearchPeopleBox';
import SearchPeopleFilters from '../components/SearchPeopleFilters';
import { Person } from '../data/people';
import getPeople from '../lib/getPeople';
import SearchPeopleList from '../components/SearchPeopleList';

export interface PeopleFilters {
    requireBio: boolean
}

const SearchPeopleScreen = () => {
    const [keyword, setKeyword] = useState<string>(''),
        [filters, setFilters] = useState<PeopleFilters>({
            requireBio: false
        }),
        [people, setPeople] = useState<Person[]>([]);

    useEffect(() => {
        setPeople(getPeople(keyword, filters));
    }, [keyword, filters]);

  return (
    <ScrollView className='flex-1 flex-column w-100 px-10'>
        <SearchPeopleBox keyword={keyword} setKeyword={setKeyword}/>
        <SearchPeopleFilters filters={filters} setFilters={setFilters} />
        <SearchPeopleList people={people}/>
    </ScrollView>
  )
}

export default SearchPeopleScreen