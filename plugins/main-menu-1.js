import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
  const ultah = new Date('Maret 20 2023 00:0:00')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `*Hai Kak*
Saya Adalah Fuad BoTz Yang Dibuat Oleh FuadZy Pada Tanggal 1 1 2023.
Kalau Ada Yg Error Bisa Langsung Report Ke Owner.\n`,wm + '\n\n' + botdate, thumbdoc, [['Aʟʟ','.? all'],['Lɪsᴛ','.icikiwir']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: `Ultah Fuad🍀 : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `Join Grup`,          previewType: 0,
                        thumbnail: await (await fetch(`https://telegra.ph/file/1020684c126be86362df5.jpg`)).buffer(),
                        sourceUrl: 'https://chat.whatsapp.com/EAR7T7H59vOJz8KcwMP179'
                      }}
})
}


handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i
handler.register = true

export default handler