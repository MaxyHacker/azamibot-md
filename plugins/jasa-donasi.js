let handler =  m => m.reply(`
╭─「 🧚🏻‍♂️ *DONASI* 」
│
├ PULSA / OVO / DANA / GOPAY :
├ • *50941411147*
│
├ SAWERIA
├ _https://saweria.co/clicknetcafe_
│
├ Ownerku
├ _wa.me/50947477839_
│
╰───「 ${packname} 」
`.trim()) // Tambah sendiri kalo mau

handler.menugroup = ['donasi']
handler.tagsgroup = ['group']
handler.command = /^(dona(te|si))$/i

export default handler