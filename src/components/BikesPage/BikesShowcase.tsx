import Link from 'next/link'
import React from 'react'

const BikesShowcase = () => {

  const bikes = [
    {
      id: 1,
      title: "BMW S1000RR",
      cc: "999cc",
      price: "$12,000",
      image: "https://i.pinimg.com/736x/ae/3f/77/ae3f77c63ad852a57ad1180603c08621.jpg"
    },
    {
      id: 2,
      title: "Kaawsaki Ninja H2",
      cc: "998cc",
      price: "$34,000",
      image: "https://i.pinimg.com/736x/9e/5d/75/9e5d758c42702ee891f127ed243812d0.jpg"
    },
    {
      id: 3,
      title: "Ducati Panigale V4 R",
      cc: "998cc",
      price: "$45,000",
      image: "https://i.pinimg.com/736x/0a/b3/60/0ab360d3c3d1456a53fa8c9cefbc1ec0.jpg"
    }
  ]
  return (
    <div>
      <h1>Bike Showcase</h1>

      <div className='flex flex-col mt-5 gap-8'>
        {bikes.map((bike) => (
          <Link 
            key={bike.id}
            href={`/bikes/${bike.id}`}
          >
          
            <div>
              <img 
                src={bike.image}
                alt={bike.title}
                className='w-[10rem] h-[10rem] object-cover object-center transition-transform duration-500 group-hover:scale-105'
                />

                <h1>{bike.title}</h1>

            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BikesShowcase