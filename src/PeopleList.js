import CardItem from "./Card"



export default function PeopleList(){
let peopleList =[{id:'1',name:'kostas'},{id:'2',name:'panos'},{id:'3',name:"makis"}]
    return(
<div>
    {
        peopleList.map((person,index )=> <CardItem key={person.id} name={person.name}/> )
    }
</div>
    )
}