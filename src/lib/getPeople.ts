import { PEOPLE } from "../data/people";
import { PeopleFilters } from "../screens/SearchPeopleScreen";

export default function (keyword: string, filters: PeopleFilters) {
    let foundPeople = PEOPLE;

    keyword = keyword.toLowerCase().trim();

    // Search by keyword through firstName, lastName, reaction and bio
    if(keyword) {
        foundPeople = foundPeople.filter(person => 
            person.firstName.toLowerCase().includes(keyword) || 
            person.lastName.toLowerCase().includes(keyword) ||
            person.reaction.toLowerCase().includes(keyword) ||
            (person.bio && person.bio.toLowerCase().includes(keyword))
        )
    }

    if(filters.requireBio) {
        foundPeople = foundPeople.filter(person => person.bio)
    }

    return foundPeople;
}