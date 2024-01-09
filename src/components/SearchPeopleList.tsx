import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Person } from '../data/people'

interface SearchPeopleListProps {
    people: Person[]
}

const SearchPeopleList = ({people} : SearchPeopleListProps) => {
    const [reactions, setReactions] = useState<string[]>([]);

    useEffect(() => {
        const foundReactions : string[] = [];
        people.forEach(person => {
            if(!foundReactions.includes(person.reaction)) {
                foundReactions.push(person.reaction);
            }
        })
        setReactions(foundReactions);
    }, [people]);

    if(!people.length) {
        return <Text>No people found...</Text>
    }

  return (
    <>
        {reactions.map(reaction => (
            <View className='mt-2' key={reaction}>
                <Text>Reacted with {reaction}:</Text>
                {people.filter(person => person.reaction == reaction).map(person => (
                    <View className='flex flex-row mx-2 p-4' key={people.indexOf(person)}>
                        <Image
                            source={{ uri: person.image }}
                            style={{ width: 75, height: 75 }}
                            className='rounded-full'
                        />
                        <View className='flex flex-column p-2'>
                            <Text className='font-bold'>{person.firstName} {person.lastName}</Text>
                            <Text>{person.bio}</Text>
                        </View>
                    </View>
                ))}
            </View>
        ))}
    </>
  )
}

export default SearchPeopleList