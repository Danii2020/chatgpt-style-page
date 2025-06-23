const chatContent = document.getElementById("chat-content")
const chatList = document.getElementById("chat-list")

export function renderBubble(sender, message, { loading = false } = {}) {
    const bubble = document.createElement("div")
    bubble.classList.add("chat-bubble", sender)
    bubble.textContent = message
     if (loading) bubble.dataset.loading = "true"
    chatContent.appendChild(bubble)
    chatContent.scrollTop = chatContent.scrollHeight
}

export function removeLoadingBubble() {
    const lastBubble = [...chatContent.querySelectorAll(".chat-bubble.assistant")]
        .reverse()
        .find(bubble => bubble.dataset.loading === "true")
    if (lastBubble) lastBubble.remove()
}

export function renderSidebar(chats) {
    chatList.innerHTML = ""
    chats.forEach((chatName) => {
        const li = document.createElement("li")
        li.textContent = chatName // <li>Chat 1</li>
        chatList.appendChild(li) // <ul><li>Chat 1</li>...</ul>
    })
}
