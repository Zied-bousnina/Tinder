import React, { useEffect, useState } from 'react'
import  {  useDispatch, useSelector } from 'react-redux'
import '../TinderCards.css'
import TinderCard from 'react-tinder-card'
import { SwipeableDrawer } from '@mui/material'
import axios from '../axios'
import { getAll } from '../features/tinder/tinderSlice'
function TinderCards() {
    const [lastDirection, setLastDirection] = useState()
    const [people1, setpeople] = useState([])

    
  const { people} = useSelector(state=>state.tinder)
  const dispatch = useDispatch()
  useEffect (_=>{
        dispatch(getAll())
    console.log("redux-toolikit ------------------------------------------")
    console.log(people)
    }, [dispatch])


    useEffect(()=>{
        async function fetchData() {
            const req= await axios.get('/tinder/card')
            setpeople(req.data)
            // console.log(people[0].imgUrl)

        }
        fetchData()


    }, [])
    const swiped= (direction, nameToDelete)=>{
        console.log('removing'+ nameToDelete)
        setLastDirection(direction)
    }
    const outOfFrame=()=>{}
  return (
    <div className="tinder-class">
        <div className="tinderCards_cardContainer">
        {people.map((person)=>(
<TinderCard 
 className='swipe'
 key={person._id}
 preventSwipe={['up', 'down']}
 onSwipe={(dir)=>swiped(dir, person.name)}
 onCardLeftScreen={()=>outOfFrame(person.name)}
 >

            {/* <img className="img-tinder" src={person.url} /> */}
            <div className="card" style={{backgroundImage:`url(${person.imgUrl})`}}  >

            <h3>{person.name}</h3>
            </div>
</TinderCard>
        ))}
        </div>

    </div>
  )
}

export default TinderCards