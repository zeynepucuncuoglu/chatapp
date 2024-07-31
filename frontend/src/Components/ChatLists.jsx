import React, { useEffect, useRef } from 'react'

const ChatLists = ({chats}) => {
    const endOfMessages = useRef()
    const user = localStorage.getItem('user')
    function SenderChat({message, username, avatar}){
        return(
            <div className='chat_sender'>
                <img src={avatar} alt="" />
                <p>
                    <strong>{username}</strong> <br/>
                    {message}
                </p>
            </div>
        )
    }

    function ReceiverChat({message, username, avatar}){
        return(
            <div className='chat_receiver'>
                <img src={avatar} alt="" />
                <p>
                    <strong>{username}</strong><br/>
                    {message}
                </p>
            </div>
        )
    }

    useEffect(() => {
        scrollToBottom()
    }, [chats])

    const scrollToBottom = () => {
        endOfMessages.current?.scrollIntoView({behavior: "smooth"})
    }
  return (
    <div className='chats_list'>
        {
            chats.map((chat, index) => {
                if(chat.user === user){
                    return <SenderChat 
                    key = {index} 
                    message = {chat.message}
                    username = {chat.user}
                    avatar = {chat.avatar}/>
                }
                else {return <ReceiverChat 
                    key = {index} 
                    message = {chat.message}
                    username = {chat.user}
                    avatar = {chat.avatar}/>
                }

            })
        }
      
      <ReceiverChat />
    </div>
  )
}

export default ChatLists
