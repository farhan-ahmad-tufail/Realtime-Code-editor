import React, { useState } from 'react'
import Client from './Client';

import CodeEditor from './CodeEditor'
import { ChakraProvider, Box } from "@chakra-ui/react"
import theme from '../theme';

function EditorPage() {
const [clients, setClient] = useState(
  [
    { socketId:1,username:'Farhan Ahmad'},
    { socketId:2,username:'Aman Khan'},
    { socketId:3,username:'Honey'},
  ]
);

async function copyRoomId() {
  try {
      await navigator.clipboard.writeText(roomId);
      toast.success('Room ID has been copied to your clipboard');
  } catch (err) {
      toast.error('Could not copy the Room ID');
      console.error(err);
  }
}

function leaveRoom() {
  reactNavigator('/');
}

// if (!location.state) {
//   return <Navigate to="/" />;
// }

  return (
    <div className=' w-full h-screen flex '>

      {/* Left side */}
      <div className='p-4 w-[20%] bg-[#1c1e29] h-screen flex flex-col justify-between text-white' >

         <div>
            <img className='mb-2' src="/public/logo.png" alt="" />
              <hr className='font-sm' />
              <h3 className='font-semibold m-3 text-green-400'>Connected</h3>
              <div className=''>
                {clients.map((client) =>(
                  <Client key={client.socketId} username={client.username} />
                )
                )}
              </div>
         </div>

        <div className='flex gap-2 flex-col'>
            <button onClick={copyRoomId} className='bg-[#505DB0] font-semibold w-[100%] px-4 py-3 rounded-md text-center text-sm'>Copy RoomID</button>
            <button onClick={leaveRoom} className='bg-red-500 font-semibold w-[100%]  px-4 py-3 rounded-md text-center text-sm'>Leave Room</button>
        </div>
      </div>

      {/* Right Side */}
      
      <ChakraProvider theme={theme}>
        <Box className='bg-[#0f0a19] text-gray px-6 py-4 w-[80%]'>
            <CodeEditor 
                    // socketRef={socketRef}
                    // roomId={roomId}
                    // onCodeChange={(code) => {
                    //     codeRef.current = code;
                    // }} 
                />
        </Box>
      </ChakraProvider> 

    </div>  
  )
}

export default EditorPage;