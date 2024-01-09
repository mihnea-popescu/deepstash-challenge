import { TextInput } from 'react-native'
import React from 'react'

interface SearchPeopleBoxProps {
    keyword: string,
    setKeyword: React.Dispatch<React.SetStateAction<string>>,
}

const SearchPeopleBox = ({keyword, setKeyword} : SearchPeopleBoxProps) => {
  return (
    <TextInput 
        onChangeText={text => setKeyword(text)} 
        maxLength={40}
        value={keyword}
        placeholder='Search for a person...'
        placeholderTextColor={"#fff"}
        className='w-100 h-15 p-4 border mx-10 my-5'
    />
  )
}

export default SearchPeopleBox