"use client"

import { ChatButton } from "../ui/chat-component";

export function ChatComponentDemo() {
  return (
    <div className="relative w-full h-full">
      <div className="fixed bottom-0 right-0 p-4 z-50">
        <ChatButton>
          <MessageSection />
        </ChatButton>
      </div>
    </div>
  )
}


export function MessageSection() {

  return (
    <div className="p-6">
        <h5 className="font-bold text-lg">Chat with BloxAI</h5>
        <span className="text-sm">comming soon!! </span>
    </div>
  )
}
