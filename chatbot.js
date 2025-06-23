import { renderBubble, removeLoadingBubble } from "./ui"

export class Chatbot {
    constructor(apiKey) {
        this.apiKey = apiKey
        this.history = []
    }
    async sendMessage(userInput) {
        this.history.push({role: "user", content: userInput})
        renderBubble("user", userInput)
        renderBubble("assistant", "Typing...", { loading: true })
        try {
            const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${this.apiKey}`
                },
                body: JSON.stringify({
                    model: "gpt-4o-mini",
                    messages: this.history
                })
            })
            const data = await response.json()
            const aiText = data.choices[0].message.content

            this.history.push({ role: "assistant", content: aiText })
            removeLoadingBubble()
            renderBubble("assistant", aiText)

        } catch (error) {
            removeLoadingBubble()
            renderBubble("assistant", `Something went wrong: ${error}`)
            console.log(error)
        }
    }
}
