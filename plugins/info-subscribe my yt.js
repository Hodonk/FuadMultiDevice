let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let imgr = flaaa.getRandom()
let text = `*Jangan Lupa Mampir....*`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'My Group', url: 'https://chat.whatsapp.com/EAR7T7H59vOJz8KcwMP179'}},
]
let tm = {
text: text,
footer: global.bottime,
templateButtons: templateButtons,
image: `${imgr + 'Script'}`,
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['myyt'] 
 handler.tags = ['info'] 
 handler.command = /^(myyt)$/i 
  
 export default handler
