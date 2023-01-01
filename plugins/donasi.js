import fs from 'fs';
let handler = async (m, { conn, text, usedPrefix }) => {

    let img = fs.readFileSync('./thumbnail.jpg');
    let img2 = `'https://telegra.ph/file/1020684c126be86362df5.jpg`
    return conn.sendButton(m.chat, 'Donasi Pm Owner Aja.\n❏  :v', 'Makasih, Thanks For You Donate...', img2, [["MENU", usedPrefix + "menu"], ["OWNER", usedPrefix + "owner"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://instagram.com/fuadxy99",
                mediaType: "VIDEO",
                title: 'Donasi To Fuad BoTz ',
                body: bottime,
                previewType: 0,
                thumbnail: img
            }
        }
    })
}
handler.help = ['donasi']

handler.tags = ['info']

handler.command = /^(donasi|donate)$/i


export default handler