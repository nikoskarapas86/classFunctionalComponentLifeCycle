

export default function PeopleList(){
let peopleList =[{name:'kostas'},{name:'panos'},{name:"makis"}]
    return(
<ol>
    {
        peopleList.map((person,index )=> <li key={index}>{person.name}</li> )
    }
</ol>
    )
}