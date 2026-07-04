import React from 'react'
import Card from './components/Card.jsx'
import {Bookmark} from 'lucide-react'
const App = () => {

const jobs = [
  {
    img: "https://thumbs.dreamstime.com/b/icons-sample-psost-setting-428651105.jpg",
    name: "Amazon",
    position: "Software Engineer",
    type: "Full-time",
    level: "Mid Level",
    location: "Seattle, WA",
    price: "$19.99/hour",
    updateTime: "2 days ago",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-4JLg5ed8s4-q92qInPz7eaJhVJnBHg676pKRqboiAelRttp4KnPlCk&s=10",
    name: "Google",
    position: "Frontend Developer",
    type: "Internship",
    level: "Junior Level",
    location: "Mountain View, CA",
    price: "$24.99/hour",
    updateTime: "5 days ago",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLD-_Ld4z-DUjeX6P7nRLK91nuNAlvM6xouZjSGGK9rA&s=10",
    name: "Microsoft",
    position: "Backend Engineer",
    type: "Full-time",
    level: "Senior Level",
    location: "Redmond, WA",
    price: "$22.99/hour",
    updateTime: "1 week ago",
  },
  {
    img: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    name: "Apple",
    position: "iOS Developer",
    type: "Full-time",
    level: "Mid Level",
    location: "Cupertino, CA",
    price: "$23.00/hour",
    updateTime: "3 days ago",
  },
  {
    img: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
    name: "Meta",
    position: "Backend Engineer",
    type: "Full-time",
    level: "Senior Level",
    location: "Menlo Park, CA",
    price: "$24.50/hour",
    updateTime: "6 days ago",
  },
  {
    img: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
    name: "Netflix",
    position: "Platform Engineer",
    type: "Full-time",
    level: "Senior Level",
    location: "Los Gatos, CA",
    price: "$26.00/hour",
    updateTime: "2 weeks ago",
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/020/190/699/non_2x/nvidia-logo-nvidia-icon-free-free-vector.jpg",
    name: "NVIDIA",
    position: "AI Engineer",
    type: "Full-time",
    level: "Mid Level",
    location: "Santa Clara, CA",
    price: "$25.50/hour",
    updateTime: "4 days ago",
  },
  {
    img: "https://static.cdnlogo.com/logos/a/90/adobe.png",
    name: "Adobe",
    position: "UI Engineer",
    type: "Full-time",
    level: "Junior Level",
    location: "San Jose, CA",
    price: "$20.00/hour",
    updateTime: "1 day ago",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEfjP3pri_6zNQZmNH5LzdIuq5QTFNwiHwlAo-jbRqwIOJ0tE6TnUEeARU&s=10",
    name: "Oracle",
    position: "Java Developer",
    type: "Full-time",
    level: "Mid Level",
    location: "Austin, TX",
    price: "$19.75/hour",
    updateTime: "10 days ago",
  },
];
  return (
    <div className="parent">
      {jobs.map((job, index) => (
        <Card
          key={index}
          img={job.img}
          name={job.name}
          position={job.position}
          type={job.type}
          level={job.level}
          price={job.price}
          updatetime={job.updateTime}
          location={job.location}
        />
      ))}
    </div>
  )
}

export default App
