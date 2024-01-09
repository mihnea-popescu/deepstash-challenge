import { View, Text } from 'react-native'
import React from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { PeopleFilters } from '../screens/SearchPeopleScreen';

interface SearchPeopleFiltersProps {
    filters: PeopleFilters,
    setFilters: React.Dispatch<React.SetStateAction<PeopleFilters>>
}

const SearchPeopleFilters = ({filters, setFilters} : SearchPeopleFiltersProps) => {
    const changeFilter = (keyword: string, value: any) => {
        setFilters({
            ...filters,
            [keyword] : value
        });
    }

    const requireBioCheckboxText = () => (
        <Text className='mx-2 font-semibold'>
            Require people with bio
        </Text>
    );

  return (
    <View className='w-100 mx-10 mb-5 flex flex-row'>
        <BouncyCheckbox 
            onPress={checked => changeFilter('requireBio', checked)}
            size={25}
            fillColor='black'
            textComponent={requireBioCheckboxText()}
            isChecked={filters.requireBio}
        />
    </View>
  )
}

export default SearchPeopleFilters