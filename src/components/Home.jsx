import React, { useState } from 'react';
import {v4 as uuidV4} from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();

  const [roomId, setRoomId] = useState('');
  const [userName, setUserName] = useState('');
  
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success('Room created successfully!');
  }

  const joinRoom = () => {
    
    if(!roomId && !userName) {
      toast.error('Please enter ROOM ID & USER NAME!');
      return;
    }

    if(!roomId) {
      toast.error('Please enter ROOM ID');
      return;
    }
    else if(!userName) {
      toast.error('Please enter USER NAME!');
      return;
    }
    //REDIRECT  

    navigate(`/editor/${roomId}`, {
      state:{
        userName,
      },
    });

    toast.success('You have joined the room successfully!');
  }
  
  const handleInputEnter = (e) => {
    if(e.key === 'Enter') {
      joinRoom();
    }
  }

  return (
    <div className='w-full h-screen bg-[#000000] flex flex-col justify-center items-center text-white relative'>
      <div className='flex flex-col w-96 max-w-[90%] bg-[#16171C] rounded-lg p-5 justify-center items-center '>
        <img className='w-[90%]' src="/logo.png" alt="code-logo" />
        <div className='w-full py-2 flex flex-col justify-center'>
          <h4 className='text-start font-semibold text-xl mb-2'>Paste invitation ROOM ID</h4>
          <input value={roomId} onChange={(e) => setRoomId(e.target.value)} onKeyUp={handleInputEnter} className='px-4 py-2 mt-3 w-full bg-[#1f2025] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition duration-200 ease-in-out'  type="text" placeholder='ROOM ID'  />
          <input value={userName} onChange={(e) => setUserName(e.target.value)} onKeyUp={handleInputEnter} className='px-4 py-2 mt-2 w-full bg-[#1f2025] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition duration-200 ease-in-out' type="text" placeholder='USER NAME' />
        </div>
        <button onClick={joinRoom} className='w-24 py-1 font-semibold bg-[#505DB0] rounded-2xl mt-2 hover:bg-[#404a90]'>Join</button>
          <h5 className='text-sm mt-4'>
            If you don't have an invite &nbsp;
            <a href="#" onClick={createNewRoom} className='text-sm  text-[#505DB0] font-semibold hover:bg-[]'><u>New Room</u></a>
          </h5>
      </div>
      <footer className='absolute bottom-0 mb-2'>
        <h4>
          Built with love 💛 by <a className='text-[#505DB0]' href="#">Farhan Ahmad Tufail</a>
        </h4>
      </footer>
    </div>
  );
}

export default Home;

