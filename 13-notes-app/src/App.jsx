import React,{useState} from 'react'


const App = () => {

  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')
  const [task, settask] = useState([])


const submithandler = (e) => {
  e.preventDefault();

  settask([...task, { title, details }]);

  settitle('');
  setdetails('');
};
  const deleteNote = (idx) =>{
    const copyTask=[...task];
    
    copyTask.splice(idx,1)
    settask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>{
      submithandler(e)
      }
        } className='lg:w-1/2 gap-4 p-10 bg-[url("https://i.pinimg.com/736x/c1/70/f0/c170f0f7edfbda34cfe57f7645c21886.jpg")] items-start  flex  flex-col bg-cover'>
        
        {/* PEHLA INPUT FOR HEADING */}
         <input 
        type="text" 
        placeholder='Enter Notes Heading' 
        className='px-5 w-full py-2 border-2 rounded-xl outline-none border-red-950 text-black'
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)

        }}
        />

        {/* DETAILED INPUT */}
        <textarea
        placeholder='Enter Details' 
        value={details}
        className='px-5 h-30 py-2 w-full border-2 rounded-xl
        outline-none border-red-950 text-black
        flex items-start flex-row'
        onChange={(e)=>{
          setdetails(e.target.value)
        }}
        name=""
        id=""

        />
        <button 
        className='px-5  py-2 w-full border-2 rounded-xl bg-white text-black active:bg-gray-600'>
          
          Add Notes
          </button>
       
      
      </form>
       <div className=' p-10 lg:border-l  lg:w-1/2 bg-[url("https://i.pinimg.com/736x/03/e5/d4/03e5d42e33d7e518bc46ad7cab552946.jpg")]'>
        <h1 className='text-5xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto'>
          {task.map(function(elem,idx){
            return <div key={idx}
              className='relative h-52 w-42 p-2 rounded-2xl text-black bg-cover bg-[url("https://i.pinimg.com/736x/9e/53/ac/9e53aca5c9f29f5204206b18a740434f.jpg")] flex flex-col'
>
             <div className="flex-1 overflow-auto">
                <h3 className='leading-tight text-xl font-bold px-3'>
                  {elem.title}
                </h3>

                <p className='px-3 break-words'>
                  {elem.details}
                </p>
              </div>
            <button
                onClick={() => deleteNote(idx)}
                className='mt-auto w-full bg-black py-1 text-xs rounded font-bold text-white cursor-pointer active:scale-95'
              >
                Delete
              </button>
            </div>
          })}
          

        </div>
          
        </div>
       
      
    </div>
  )
}

export default App
