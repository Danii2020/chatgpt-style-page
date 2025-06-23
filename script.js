import { Chatbot } from "./chatbot.js"
import { renderBubble, renderSidebar } from "./ui.js"


// const botReplies = [
//     "Hello there!",
//     "How can I help today?",
//     "Thanks for reaching out!",
//     "Here’s a random fact: JavaScript powers the web!",
//     "Welcome to my page!",
//     "Coding Temple rocks!"
// ]



const inputBox = document.getElementById("chat-input")
const sendButton = document.getElementById("send-button")

const chats = ["Chat 1", "Chat 2", "Chat 3", "Chat 4"]

// function getRandomReply() {
//     const index = Math.floor(Math.random() * botReplies.length)
//     return botReplies[index]
// }

const chatBot = new Chatbot("your-key)


function handleSend() {
    const userMessage = inputBox.value.trim()
    if (userMessage === "") return
    inputBox.value = ""
    chatBot.sendMessage(userMessage)
    if (chatBot.history.length === 1) {
        chats.push(chatBot.history[0].content)
        renderSidebar(chats)
    }
}

sendButton.addEventListener("click", handleSend)
inputBox.addEventListener("keydown",  (e) => {
    if (e.key === "Enter") {
        handleSend()
    }
})

document.addEventListener("DOMContentLoaded", () => {
    renderSidebar(chats)
    renderBubble("assistant", "Welcome! Type a message to begin...")
})


