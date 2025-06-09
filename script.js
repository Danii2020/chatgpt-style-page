const chats = ["Chat 1", "Chat 2", "Chat 3", "Chat 4"]
const chatHistory = []

const botReplies = [
    "Hello there!",
    "How can I help today?",
    "Thanks for reaching out!",
    "Here’s a random fact: JavaScript powers the web!",
    "Welcome to my page!",
    "Coding Temple rocks!"
]

const chatList = document.getElementById("chat-list")
const chatContent = document.getElementById("chat-content")
const inputBox = document.getElementById("chat-input")
const sendButton = document.getElementById("send-button")

function renderSidebar() {
    chats.forEach((chatName) => {
        const li = document.createElement("li")
        li.textContent = chatName // <li>Chat 1</li>
        chatList.appendChild(li) // <ul><li>Chat 1</li>...</ul>
    })
}

function getRandomReply() {
    const index = Math.floor(Math.random() * botReplies.length)
    return botReplies[index]
}

function renderBubble(sender, message) {
    const bubble = document.createElement("div")
    bubble.classList.add("chat-bubble", sender)
    bubble.textContent = message
    chatContent.appendChild(bubble)
}

function handleSend() {
    const userMessage = inputBox.value.trim()
    if (userMessage === "") return
    renderBubble("user", userMessage)
    inputBox.value = ""
    chats.push(`Chat - ${userMessage}`) //Chat - how are you?
    setTimeout(() => {
        const reply = getRandomReply()
        renderBubble("assistant", reply)
    }, 500)
    chatList.textContent = ""
    renderSidebar()
}

sendButton.addEventListener("click", handleSend)
inputBox.addEventListener("keydown",  (e) => {
    if (e.key === "Enter") {
        handleSend()
    }
})

document.addEventListener("DOMContentLoaded", () => {
    renderSidebar()
    renderBubble("assistant", "Welcome! Type a message to begin...")
})


