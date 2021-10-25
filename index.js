/*

Linguo by ⸸𖤐𝐀𝐒𝐌𝐎𝐃𝐄𝐎𖤐⸸ᴼᶠᶜ

*/

const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    rugaapi,
    GroupSettingChange
} = require('@adiwajshing/baileys');

/***𝘼𝙍𝘾𝙃𝙄𝙑𝙊𝙎***/
const { color, bgcolor } = require('./lib/color')
const { destraba } = require('./src/destraba')
const { chentai } = require('./src/chentai')
const { gbin } = require('./src/gbin')
const { bahasa } = require('./src/bahasa')
const { negara } = require('./src/negara')
const { wait, pegatinas, musica, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
/***𝙁𝙄𝙉 𝘿𝙀 𝘼𝙍𝘾𝙃𝙄𝙑𝙊𝙎***/

/***𝙋𝘼𝙌𝙐𝙀𝙏𝙀𝙎 𝙉𝙋𝙈***/
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const { cekvip } = require('./src/cekvip')
const { TobzApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const { VthearApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const lolis = require('lolis.life')
const loli = new lolis()
const speed = require('performance-now')
/***𝙁𝙄𝙉 𝘿𝙀 𝙋𝘼𝙌𝙐𝙀𝙏𝙀𝙎 𝙉𝙋𝙈***/

/***𝙅𝙎𝙊𝙉***/
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const apivhtear = 'apivhtear';
const apibarbar = 'apibarbar';
const tobzkey = 'apitobz';
const user = JSON.parse(fs.readFileSync('./database/json/user.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/json/leveling.json'))
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
const _level = JSON.parse(fs.readFileSync('./database/json/level.json'))
/***𝙁𝙄𝙉 𝘿𝙀 𝙅𝙎𝙊𝙉***/

/***𝙈𝙀𝙉𝙐́𝙎***/
const { help } = require('./src/help')
const { logomaker } = require('./database/menu/logomaker')
const { nsfwmenu } = require('./src/nsfwmenu')
const { version } = require('./src/version')

/***𝙁𝙄𝙉 𝘿𝙀 𝙈𝙀𝙉𝙐́𝙎***/

/***𝙑𝘾𝘼𝙍𝘿***/
const vcard = 'BEGIN:VCARD\n' // Tarjeta de contacto
            + 'VERSION:3.0\n' 
            + 'FN:⸸𖤐𝐀𝐒𝐌𝐎𝐃𝐄𝐎𖤐⸸ᴼᶠᶜ\n' // Nombre
            + 'ORG:⸸𖤐𝐀𝐒𝐌𝐎𝐃𝐄𝐎𖤐⸸ᴼᶠᶜ;\n' // Propietario
            + 'TEL;type=CELL;type=VOICE;waid=5491155607911:+54 9 11 5560 7911\n' // ID de WhatsApp + número de teléfono
            + 'END:VCARD'
/***𝙁𝙄𝙉 𝘿𝙀 𝙑𝘾𝘼𝙍𝘿***/

prefix = '/'
blocked = []

/***𝙁𝙐𝙉𝘾𝙄𝙊𝙉𝙀𝙎***/
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }
	
const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
        }

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Escanea el codigo QR es temporal no te tardes Rapido!!!  '))
	})

	fs.existsSync('./Nazwa.json') && client.loadAuthInfo('./Nazwa.json')
	client.on('connecting', () => {
		start('2', 'Desconectado. Utiliza npm start Para conectarte')
	})
	client.on('open', () => {
		success('2', 'Conectado')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Nazwa.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `𝙃𝙤𝙡𝙖 ◤◢ @${num.split('@')[0]} ◤◢◣\n𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙@ 𝙖𝙡 𝙜𝙧𝙪𝙥𝙤:\n━━❰･ *${mdata.subject}* ･❱━━\n\n𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙢𝙞𝙧𝙖 𝙡𝙖𝙨 𝙧𝙚𝙜𝙡𝙖𝙨\n 𝙋𝙧𝙚𝙨𝙚́𝙣𝙩𝙖𝙩𝙚 🤗`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `𝙎𝙚 𝙛𝙪𝙚 ➢@${num.split('@')[0]} 𝙉𝙤 𝙩𝙚 𝙫𝙖𝙢𝙤𝙨 𝙖 𝙚𝙭𝙩𝙧𝙖𝙣̃𝙖𝙧 𝙩𝙧𝙤𝙡@ 👋🏻`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

		client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('chat-update', async (mek) => {
		try {
                        if (!mek.hasNewMessage) return
                        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Buenos_Aires').format('HH:mm:ss')
			const date = moment.tz('America/Buenos_Aires').format('DD/MM/YY')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
            var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined
			const isCmd = body.startsWith(prefix)

			mess = {
				wait: '❗Por favor no hagas spam👏❗\n\nProcesando... 🔁🛐',
				success: '✔️ Listo ✔️',
                                levelon: '❬ ✅ ❭ *Level activado*',
				leveloff: ' ❬ ✅ ❭  *Level desactivado*',
				levelnoton: '❬ ❎ ❭ *Level no esta activado*',
				levelnol: '*Nivel* 0 ',
				error: {
					stick: '[❌] Falló, se produjo un error al convertir la imagen en sticker',
					Iv: '❌ Link inválido ❌'
				},
				only: {
					group: '[❗] Este comando es solo para grupos!',
					premium: '[❗] Este comando es solo para *USUARIOS PREMIUM* contacta al propietario si deseas serlo',
					ownerG: '[❗] Este comando solo puede ser utilizado por los admins del grupo!',
					ownerB: '[❗] Este comando solo puede ser usado por ⸸𖤐𝐀𝐒𝐌𝐎𝐃𝐄𝐎𖤐⸸ᴼᶠᶜ',
					admin: '[❗] Este comando solo puede ser utilizado por los admins del grupo!',
					Badmin: '[❗] Este comando solo se puede usar cuando el bot se convierte en administrador!',
                                        pegatina: 'Creando sticker ✔️\n\n*Recuerda los stickers animados hasta 10 segundos 🛐',
					imgs: 'Recuerda solo sirve para stickers❗\n\n*Convirtiendo de sticker a imagen 🛐',
					mpcancion: 'Convirtiendo de MP4 a MP3🔄*\n\nNo hagas spam 🙏🏼',
					mpa: 'Buscando y descargando canción*\n\nAguarda un momento sin hacer spam 🙏🏼',
					mpv: 'Buscando y descargando video*\n\nAguarda un momento sin hacer spam 🙏🏼',
					musica: 'Buscando y descargando canción*\n\nAguarda un momento sin hacer spam 🙏🏼\n\n*Recuerda colocar bien el nombre o el link del video de youtube❗',
					musica2: 'Buscando y descargando canción*\n\nAguarda un momento sin hacer spam 🙏🏼\n\n*Recuerda colocar bien el nombre o el link del video de youtube❗',
					daftarB: `No estas registrado, por favor regístrate \n\nComando : ${prefix}daftar Nombre\nEjemplo : ${prefix}daftar asm`,
				}
			}
    			const apakah = ['Si','No']
		        const kapankah = ['Otro día','Otra semana','Otro mes','Otro año']
			const botNumber = client.user.jid
			const ownerNumber = ["5491155607911@s.whatsapp.net"] // replace this with your number
			const premium = ["5491155607911@s.whatsapp.net","5492323313621@s.whatsapp.net","593961618258@s.whatsapp.net","51967114272@s.whatsapp.net","50242391519@s.whatsapp.net","5491131390034@s.whatsapp.net","5492665039424@s.whatsapp.net","51987786320@s.whatsapp.net","5491162935210@s.whatsapp.net"]
			const nomorOwner = [ownerNumber]
			const isGroup = from.endsWith('@g.us')
			const totalchat = await client.chats.all()
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
                        const isAntiLink = isGroup ? antilink.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isPremium = premium.includes(sender)
                        const isUser = user.includes(sender)
                        const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
                        const NomerOwner = '5491155607911@s.whatsapp.net'
                        /***𝘼𝙋𝙄𝙆𝙀𝙔***/
                        const BarBarKey = 'Mn2Bf58QHQ8kABoLq80g'
                        /***𝙁𝙄𝙉 𝘿𝙀 𝘼𝙋𝙄𝙆𝙀𝙔***/

			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}

	        //𝙉𝙄𝙑𝙀𝙇𝘼𝘾𝙄𝙊́𝙉 𝘿𝙀 𝙁𝙐𝙉𝘾𝙄𝙊𝙉𝙀𝙎
            if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`*「 LEVEL UP 」*\n\n➸ *Nombre*: ${sender}\n➸ *XP*: ${getLevelingXp(sender)}\n➸ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nFelicidades!! 🎉🎉`)
                }
            } catch (err) {
                console.error(err)
            }
        }

		    if (messagesC.includes("https://")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('Si eres admin, no serás eliminado por tus links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link detectado: ${sender.split("@")[0]} Serás expulsado por compartir un link ❌`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("1 BYE BYE 👋")
		}, 0)
	}

		    if (messagesC.includes("http://")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('Si eres admin, no serás eliminado por tus links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link detectado: ${sender.split("@")[0]} Serás expulsado por compartir un link ❌`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("1 BYE BYE 👋")
		}, 0)
	}

		if (messagesC.includes("bot")){
			client.updatePresence(from, Presence.composing)
			reply("Estan hablando de mi??🤨🤔️")
	}

		if (messagesC.includes("linguo")){
			client.updatePresence(from, Presence.composing)
			reply("Que queres trol@?? 😑")
	}

			if (messagesC.includes("tobi")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/tobi.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}

			if (messagesC.includes("asmodeo")){
			client.updatePresence(from, Presence.composing) 
	     	const d = fs.readFileSync('./stickers/asmodeo.webp');
            client.sendMessage(from, d, sticker, {quoted: mek})
    }

			if (messagesC.includes("resi")){
			client.updatePresence(from, Presence.composing) 
	     	const d = fs.readFileSync('./stickers/resi.webp');
            client.sendMessage(from, d, sticker, {quoted: mek})
    }

			if (messagesC.includes("rafa")){
			client.updatePresence(from, Presence.composing) 
	     	const d = fs.readFileSync('./stickers/rafa.webp');
            client.sendMessage(from, d, sticker, {quoted: mek})
    }

			if (messagesC.includes("sami")){
			client.updatePresence(from, Presence.composing) 
	     	const d = fs.readFileSync('./stickers/sami.webp');
            client.sendMessage(from, d, sticker, {quoted: mek})
    }

			if (messagesC.includes("tony")){
			client.updatePresence(from, Presence.composing) 
	     	const d = fs.readFileSync('./stickers/tony.webp');
            client.sendMessage(from, d, sticker, {quoted: mek})
    }

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
 
       /***𝙁𝙄𝙉 𝘿𝙀 𝙁𝙐𝙉𝘾𝙄𝙊𝙉𝙀𝙎***/

			switch(command) {
	  case 'help':
	  case 'menu':
		client.sendMessage(from, help(prefix), text)
		break
	  case 'code':
		client.sendMessage(from, negara(prefix, sender), text, {quoted: mek})
		break
	  case 'idiomas':
		client.sendMessage(from, bahasa(prefix, sender), text, {quoted: mek})
		break
	  case 'nsfwmenu11':
		client.sendMessage(from, nsfwmenu(prefix, sender), text, {quoted: mek})
		break
	  case 'version':
          case 'versión':
		client.sendMessage(from, version(prefix, sender), text, {quoted: mek})
		break
          case 'degradar':
		if (!isGroup) return reply(mess.only.group)
		if (!isGroupAdmins) return reply(mess.only.admin)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
		if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Menciona a la persona que deseas degradar')
		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		if (mentioned.length > 1) {
		teks = ''
		for (let _ of mentioned) {
		teks += `Pedido recibido✅\n\nRetirando cargo como administrador :\n`
		teks += `@_.split('@')[0]`
		}
		mentions(teks, mentioned, true)
		client.groupDemoteAdmin(from, mentioned)
		} else {
		mentions(`Pedido recibido✅\n\nRetirando cargo como administrador @${mentioned[0].split('@')[0]}\n*${groupMetadata.subject}*_`, mentioned, true)
		client.groupDemoteAdmin(from, mentioned)
		}
		break
          case 'promover':
		client.updatePresence(from, Presence.composing) 
		if (!isGroup) return reply(mess.only.group)
		if (!isGroupAdmins) return reply(mess.only.admin)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
		if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Menciona a la persona que deseas promover')
		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		if (mentioned.length > 1) {
		teks = 'Pedido recibido✅\n\nAgregando cargo como administrador :\n'
		for (let _ of mentioned) {
		teks += `@${_.split('@')[0]}\n`
		}
		mentions(teks, mentioned, true)
		client.groupMakeAdmin(from, mentioned)
		} else {
		mentions(`Pedido recibido✅\n\nAgregando cargo como administrador : @${mentioned[0].split('@')[0]}`, mentioned, true)
		client.groupMakeAdmin(from, mentioned)
		}
		break
	  case 'wa.me':
	  case 'wame':
                client.updatePresence(from, Presence.composing) 
                options = {
                text: `「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nSu link de Whatsapp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*O ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
                contextInfo: { mentionedJid: [sender] }
                }
                client.sendMessage(from, options, text, { quoted: mek } )
		break
	  case 'owner':
                client.sendMessage(from, {displayname: "⸸𖤐𝐀𝐒𝐌𝐎𝐃𝐄𝐎𖤐⸸ᴼᶠᶜ", vcard: vcard}, MessageType.contact, { quoted: mek})
		client.sendMessage(from, 'wa.me/5491155607911 :)\n\n❗Este es el numero del propietario del bot❗',MessageType.text, { quoted: mek} )
                break
	  case 'hidetag':
                client.updatePresence(from, Presence.composing) 
                if (!isGroup) return reply(mess.only.group)
		if (!isGroupAdmins) return reply(mess.only.admin)
                teks = body.slice(9)
                group = await client.groupMetadata(from);
                member = group['participants']
                jids = [];
                member.map( async adm => {
                jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
                })
                options = {
                text: teks,
                contextInfo: {mentionedJid: jids},
                quoted: mek
                }
                await client.sendMessage(from, options, text)
                break
          case 'ytmp3':
		if (args.length < 1) return reply('Donde esta la URL?')
		if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
		reply(mess.only.mpa)
		anu = await fetchJson(`https://api.zeks.me/api/ytmp3?apikey=${apikey}&url=${args[0]}`, {method: 'get'})
		if (anu.error) return reply(anu.error)
		teks = `*DESCARGA EXITOSA ✅*\n◉ *Título* : ${anu.title}\n\n*ESPERE ENVIANDO SU ARCHIVO MP3 ⚠*`
		thumb = await getBuffer(anu.thumb)
		client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
		buffer = await getBuffer(anu.result)
		client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
		break
	  case 'ytmp4':
		if (args.length < 1) return reply('Donde esta la URL?')
		if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
		reply(mess.only.mpv)
		anu = await fetchJson(`https://api.zeks.me/api/ytmp4?apikey=${apikey}&url=${args[0]}`, {method: 'get'})
		if (anu.error) return reply(anu.error)
		teks = `*DESCARGA EXITOSA ✅*\n◉ *Título* : ${anu.title}\n\n*ESPERE ENVIANDO SU ARCHIVO MP4 ⚠*`
		thumb = await getBuffer(anu.thumb)
		client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
		buffer = await getBuffer(anu.result)
		client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
		break
	  case 'tts':
	        client.updatePresence(from, Presence.recording) 
	        if (args.length < 1) return client.sendMessage(from, 'Cual es el código de idioma?', text, {quoted: mek})
		const gtts = require('./lib/gtts')(args[0])
		if (args.length < 2) return client.sendMessage(from, 'Donde está el texto?', text, {quoted: mek})
		dtt = body.slice(8)
		ranm = getRandom('.mp3')
		rano = getRandom('.ogg')
		dtt.length > 600
		? reply('No querés que te lea un libro también?')
		: gtts.save(ranm, dtt, function() {
		exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
		fs.unlinkSync(ranm)
		buff = fs.readFileSync(rano)
		if (err) return reply('Gagal om:(')
		client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
		fs.unlinkSync(rano)
		})
		})
		break
	  case 'admins':
		client.updatePresence(from, Presence.composing) 
		if (!isGroup) return reply(mess.only.group)
		teks = `Lista De Admins Del Grupo*${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
		no = 0
		for (let admon of groupAdmins) {
		no += 1
		teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
		}
		mentions(teks, groupAdmins, true)
		break
	  case 'setprefix':
		client.updatePresence(from, Presence.composing) 
		if (args.length < 1) return
		if (!isOwner) return reply(mess.only.ownerB)
		prefix = args[0]
		reply(`El prefijo se ha cambiado correctamente a : ${prefix}`)
		break
	  case 'setppbot':
		client.updatePresence(from, Presence.composing) 
	        if (!isQuotedImage) return reply(`Etiqueta una imagen`)
		if (!isOwner) return reply(mess.only.ownerB)
		enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		media = await client.downloadAndSaveMediaMessage(enmedia)
		await client.updateProfilePicture(botNumber, media)
		reply('Gracias por el nuevo perfil')
		break
          case 'clonar':
		if (!isGroup) return reply(mess.only.group)
		if (!isOwner) return reply(mess.only.ownerB)
		if (args.length < 1) return reply('Mencione a la persona que desea clonar\n\n*EXEMPLO:* clone @')
		if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
		let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
		try {
		pp = await client.getProfilePicture(id)
		buffer = await getBuffer(pp)
		client.updateProfilePicture(botNumber, buffer)
		mentions(`Foto de perfil actualizada con éxito, usando la foto de perfil de @${id.split('@')[0]}`, [jid], true)
		} catch (e) {
		reply('Falló, esta persona debe estar sin foto 😔')
		}
		break
	  case 'bc':
		client.updatePresence(from, Presence.composing) 
		if (!isOwner) return reply(mess.only.ownerB)
		if (args.length < 1) return reply('.......')
		anu = await client.chats.all()
		if (isMedia && !mek.message.videoMessage || isQuotedImage) {
		const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		buff = await client.downloadMediaMessage(encmedia)
		for (let _ of anu) {
		client.sendMessage(_.jid, buff, image, {caption: `*「 TRANSMISIÓN 」*\n\n${body.slice(4)}`})
		}
		reply('')
		} else {
		for (let _ of anu) {
		sendMess(_.jid, `*「 ⸸𖤐𝐀𝐒𝐌𝐎𝐃𝐄𝐎𖤐⸸ᴼᶠᶜ 」*\n\n${body.slice(4)}`)
		}
		reply('Transmisión exitosa')
		}
		break
          case 'leave':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                setTimeout( () => {
		client.groupLeave (from) 
	        }, 2000)
                setTimeout( () => {
		client.updatePresence(from, Presence.composing) 
		client.sendMessage(from, 'Bye Bye 👋🏻', text) // ur cods
		}, 0)
                break
	  case 'ownergp':
                client.updatePresence(from, Presence.composing) 
                options = {
                text: `Este grupo es de:@${from.split("-")[0]}`, 
                contextInfo: { mentionedJid: [from] }
                }
                client.sendMessage(from, options, text, { quoted: mek } )
		break
          case 'kickerr':
	  case 'banerrr':
		client.updatePresence(from, Presence.composing) 
		if (!isGroup) return reply(mess.only.group)
		if (!isGroupAdmins) return reply(mess.only.admin)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
		if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marca al que vamos a funar')
		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		if (mentioned.length > 1) {
		teks = 'Pedido recibido, se eliminó con éxito a :\n'
		for (let _ of mentioned) {
		teks += `@${_.split('@')[0]}\n`
		}
		mentions(teks, mentioned, true)
		client.groupRemove(from, mentioned)
		} else {
		mentions(`Pedido recibido, se eliminó con éxito a : @${mentioned[0].split('@')[0]}`, mentioned, true)
		client.groupRemove(from, mentioned)
		client.sendMessage(mentioned, 'Chao gord@ 👋🏻', text)
		}
		break
          case 'linkgp':
	        client.updatePresence(from, Presence.composing) 
		if (!isGroup) return reply(mess.only.group)
		if (!isGroupAdmins) return reply(mess.only.admin)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
		linkgc = await client.groupInviteCode (from)
		yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink Del Grupo *${groupName}*`
		client.sendMessage(from, yeh, text, {quoted: mek, detectLinks: false})
		break
          case 'closegc':
		client.updatePresence(from, Presence.composing) 
		if (!isGroup) return reply(mess.only.group)
		if (!isGroupAdmins) return reply(mess.only.admin)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
		var nomor = mek.participant
		const close = {
		text: `Grupo cerrado por el administrador @${nomor.split("@s.whatsapp.net")[0]}\nAhora *solo administradores* pueden enviar mensajes`,
		contextInfo: { mentionedJid: [nomor] }
		}
		client.groupSettingChange (from, GroupSettingChange.messageSend, true);
		reply(close)
		break
          case 'opengc':
		client.updatePresence(from, Presence.composing) 
		if (!isGroup) return reply(mess.only.group)
		if (!isGroupAdmins) return reply(mess.only.admin)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
		open = {
		text: `Grupo abierto por el administrador @${sender.split("@")[0]}\nAhora *todos los participantes* pueden enviar mensajes`,
		contextInfo: { mentionedJid: [sender] }
		}
		client.groupSettingChange (from, GroupSettingChange.messageSend, false)
		client.sendMessage(from, open, text, {quoted: mek})
		break
	  case 's':
	  case 'stk':
	  case 'stiker':
	  case 'sticker':
		if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		const media = await client.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.webp')
		await ffmpeg(`./${media}`)
		.input(media)
		.on('start', function (cmd) {
		console.log(`Started : ${cmd}`)
		})
		.on('error', function (err) {
		console.log(`Error : ${err}`)
		fs.unlinkSync(media)
		reply(mess.error.stick)
		})
		.on('end', function () {
		console.log('Finish')
		client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
		fs.unlinkSync(media)
		fs.unlinkSync(ran)
		})
		.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		.toFormat('webp')
		.save(ran)
		} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		const media = await client.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.webp')
		reply(mess.only.pegatina)
		await ffmpeg(`./${media}`)
		.inputFormat(media.split('.')[1])
		.on('start', function (cmd) {
		console.log(`Started : ${cmd}`)
		})
		.on('error', function (err) {
		console.log(`Error : ${err}`)
		fs.unlinkSync(media)
		tipe = media.endsWith('.mp4') ? 'video' : 'gif'
		reply(`❌ Falla al momento de convertir en sticker ❌`)
		})
		.on('end', function () {
		console.log('Finish')
		client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
		fs.unlinkSync(media)
		fs.unlinkSync(ran)
		})
		.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		.toFormat('webp')
		.save(ran)
		} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
		const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		const media = await client.downloadAndSaveMediaMessage(encmedia)
		ranw = getRandom('.webp')
		ranp = getRandom('.png')
		reply(mess.wait)
		keyrmbg = 'Your-ApiKey'
		await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
		fs.unlinkSync(media)
		let buffer = Buffer.from(res.base64img, 'base64')
		fs.writeFileSync(ranp, buffer, (err) => {
		if (err) return reply('❌ Ocurrió un error, intente mas tarde ❌')
		})
		exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
		fs.unlinkSync(ranp)
		if (err) return reply(mess.error.stick)
		client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
		})
		})
		/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
		const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		const media = await client.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.webp')
		await ffmpeg(`./${media}`)
		.on('start', function (cmd) {
		console.log('Started :', cmd)
	        })
		.on('error', function (err) {
		fs.unlinkSync(media)
		console.log('Error :', err)
		})
		.on('end', function () {
		console.log('Finish')
		fs.unlinkSync(media)
		client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
		fs.unlinkSync(ran)
		})
		.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
	        .toFormat('webp')
		.save(ran)*/
		} else {
		reply(`Envíe una imagen con el comando ${prefix}s o etiqueta a una imagen que ya se haya enviado`)
		}
		break
          case 'tomp3':
               	client.updatePresence(from, Presence.composing) 
		if (!isQuotedVideo) return reply('❌ Solo videos ❌')
		reply(mess.only.mpcancion)
		encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		media = await client.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.mp4')
	        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
		fs.unlinkSync(media)
		if (err) return reply('❌ No se pudo convertir el video a mp3 ❌')
		buffer = fs.readFileSync(ran)
		client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
		fs.unlinkSync(ran)
		})
		break
          case 'play':   
	        if (args.length < 1) return reply('Donde esta el nombre de la canción?')
                reply(mess.only.musica)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.me/api/ytplaymp3?q=${play}&apikey=hamilton50`)
                if  (anu.error) return reply(anu.error)
                infomp3 = `*Canción encontrada!!!*\nTítulo : ${anu.result.title}\nFuente : ${anu.result.source}\nTamaño : ${anu.result.size}\n\n*ESPERE ENVIANDO ARCHIVO, NO HAGAS SPAM GORD@ 🛐*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                break
          case 'play2':   
	        if (args.length < 1) return reply('Donde esta el nombre de la canción?')
                reply(mess.only.musica2)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.me/api/ytplaymp3?q=${play}&apikey=shanduy50`)
                if  (anu.error) return reply(anu.error)
                infomp3 = `*Canción encontrada!!!*\nTítulo : ${anu.result.title}\nFuente : ${anu.result.source}\nTamaño : ${anu.result.size}\n\n*ESPERE ENVIANDO ARCHIVO, NO HAGAS SPAM GORD@ 🛐*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                break
          case 'daftar':
		client.updatePresence(from, Presence.composing)
		if (isUser) return reply('Ya estas registrad@ 🙄')
		if (args.length < 1) return reply(`Incorrecto \nCommand : ${prefix}daftar Nombre\nComando : ${prefix}daftar ⸸𖤐𝐀𝐒𝐌𝐎𝐃𝐄𝐎𖤐⸸ᴼᶠᶜ`)
		var reg = body.slice(8)
		var nombre = reg.split("|")[0];
                user.push(sender)
		fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
		client.sendMessage(from, `\`\`\`Registrado con exito ✔️\`\`\`\n\n\`\`\`Hora: ${time}\`\`\`\n\n\`\`\`Fecha: ${date}\`\`\`\n\n\`\`\`[Usuario]: ${nombre}\`\`\`\n\`\`\`[Número]: wa.me/${sender.split("@")[0]}\`\`\`\n\`\`\`Para usar el bot\`\`\`\n\`\`\`Por favor\`\`\`\n\`\`\`enviar ${prefix}help\`\`\`\n\`\`\`\nTotal de usuários ${user.length}\`\`\``, text, {quoted: mek})
		break
          case 'bienvenida':
		if (!isGroup) return reply(mess.only.group)
		if (!isGroupAdmins) return reply(mess.only.Badmin)
	        if (args.length < 1) return reply('Para activar está funcion coloca 1')
		if (Number(args[0]) === 1) {
		if (isWelkom) return reply('Ya esta activada!!!')
		welkom.push(from)
		fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
		reply('❬ ✅ ❭ La funcion de bienvenida esta habilitada en este grupo')
		} else if (Number(args[0]) === 0) {
		welkom.splice(from, 1)
		fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
		reply('❬ ✅ ❭ La funcion de bienvenida esta deshabilitada en este grupo')
		} else {
		reply('Escribe 1 para activarlo y 0 para desactivarlo')
		}
		break
          case 'nsfw11':
		if (!isGroup) return reply(mess.only.group)
		if (!isGroupAdmins) return reply(mess.only.admin)
		if (args.length < 1) return reply('Digita 1 para activar')
		if (Number(args[0]) === 1) {
		if (isNsfw) return reply('Recursos Activados ✅')
		nsfw.push(from)
		fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
		reply('❬ EXITO ❭ NSFW habilitado en este grupo')
	        } else if (Number(args[0]) === 0) {
		nsfw.splice(from, 1)
		fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
		reply('❬ ✅ ❭ NSFW deshabilitado en este grupo')
		} else {
		reply('Digite 1 para activarlo, 0 para desactivarlo')
		}
		break						
          case 'delete':
	  case 'del':
		if (!isGroup)return reply(mess.only.group)
		if (!isGroupAdmins)return reply(mess.only.admin)
		client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
		break
          case 'level':
                if (!isLevelingOn) return reply(mess.levelnoton)
                if (!isGroup) return reply(mess.only.group)
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
                sem = sender.replace('@s.whatsapp.net','')
                resul = `◪ *⬆LEVEL⬆*\n  ├─ ❏ *Nombre* : ${sem}\n  ├─ ❏ *XP* : ${userXp}\n  └─ ❏ *Level* : ${userLevel}`
                client.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                console.error(err)
                await reply(`Error!\n${err}`)
                })
                break
          case 'leveling':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('Digita 1 para ativar el recurso')
                if (args[0] === '1') {
                if (isLevelingOn) return reply('*La función de nivel ya estaba activa*')
                _leveling.push(groupId)
                fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                reply(mess.levelon)
                } else if (args[0] === '0') {
                _leveling.splice(groupId, 1)
                fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                reply(mess.leveloff)
                } else {
                reply(` *Digita el comando 1 para activar, 0 para desactivar *\n * Ejemplo: ${prefix}leveling 1*`)
                }
                break
	  case 'nsfwboobs11': 
		try {
		if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
		res = await fetchJson(`https://meme-api.herokuapp.com/gimme/biganimetiddies`, {method: 'get'})
		buffer = await getBuffer(res.url)
		client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Tetas 🍊🍊'})
		} catch (e) {
		console.log(`Error :`, color(e,'red'))
		reply('❌ *ERROR* ❌')
		}
		break
	  case 'nsfwsideboobs11':
		try {
		if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
		res = await fetchJson(`https://meme-api.herokuapp.com/gimme/sideoppai`, {method: 'get'})
		buffer = await getBuffer(res.url)
		client.sendMessage(from, buffer, image, {quoted: mek, caption: '🔥🛐'})
		} catch (e) {
		console.log(`Error :`, color(e,'red'))
		reply('❌ *ERROR* ❌')
		}
	        break
	  case 'nsfwahegao11':
		try {
		if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
		res = await fetchJson(`https://meme-api.herokuapp.com/gimme/ahegao`, {method: 'get'})
		buffer = await getBuffer(res.url)
		client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Joder 🥴🔥🛐'})
		} catch (e) {
		console.log(`Error :`, color(e,'red'))
		reply('❌ *ERROR* ❌')
		}
		break
	  case 'nsfwthighs11':
		try {
		if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
		res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animethighss`, {method: 'get'})
		buffer = await getBuffer(res.url)
		client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Muslos? 🤤'})
		} catch (e) {
		console.log(`Error :`, color(e,'red'))
		reply('❌ *ERROR* ❌')
		}
		break
	  case 'nsfwfeets11':
		try {
		if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
		res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animefeets`, {method: 'get'})
		buffer = await getBuffer(res.url)
		client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Mmmm... Patas 🤤'})
		} catch (e) {
		console.log(`Error :`, color(e,'red'))
		reply('❌ *ERROR* ❌') 
		}
		break
	  case 'nsfwarmpits11':
		try {
		if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
		res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animearmpits`, {method: 'get'})
		buffer = await getBuffer(res.url)
		client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Axilas 🤨'})
		} catch (e) {
		console.log(`Error :`, color(e,'red'))
		reply('❌ *ERROR* ❌')
		}
		break
          case 'ping':    
                const timestamp = speed();
                const latensi = speed() - timestamp
                client.updatePresence(from, Presence.composing) 
                uptime = process.uptime()
                client.sendMessage(from, `Velocidad: *${latensi.toFixed(4)} _Seconds_*\nDispositivo: *SAMSUNG S8+*\nRAM: *4GB*\nData: *35GB*\nConectividad: *WI-FI*\nEstado: *En estado de ebriedad*`, text, { quoted: mek})
                break
	  case 'toimg':
		if (!isQuotedSticker) return reply('{ ❗ } *Etiquete la imagen*')
		reply(mess.wait)
		encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		media = await client.downloadAndSaveMediaMessage(encmedia)
		ran = getRandom('.png')
        	exec(`ffmpeg -i ${media} ${ran}`, (err) => {
		fs.unlinkSync(media)
		if (err) return reply('❌ Falló la conversión del sticker en imagen ❌')
		buffer = fs.readFileSync(ran)
		client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
		fs.unlinkSync(ran)
		})
		break
	  case 'simi':
		if (args.length < 1) return reply('Donde está el texto??')
                if (!isPremium) return reply(mess.only.premium)
		teks = body.slice(5)
		anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
		//if (anu.error) return reply('Simi ga tau kak')
		reply(anu)
		break
 	  case 'simih':
		if (!isOwner) return reply(mess.only.ownerB)
		if (!isGroup) return reply(mess.only.group)
		if (args.length < 1) return reply('Khaaaa?')
		if (Number(args[0]) === 1) {
		if (isSimi) return reply('El modo simih esta activado')
		samih.push(from)
		fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
		reply('Activado con éxito el modo simih en este grupo 🙂️')
		} else if (Number(args[0]) === 0) {
		samih.splice(from, 1)
		fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
		reply('Desactivado con éxito el modo simih en este grupo 😐️')
		} else {
		reply('1 para activar, 0 para desactivar, pedazo de animal')
		}
		break
	  case 'setfoto':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                media = await client.downloadAndSaveMediaMessage(mek)
                await client.updateProfilePicture (from, media)
                reply('Se cambió con éxito la foto del grupo')
                break
          case 'setdesc':
         	if (!isGroup) return reply(mess.only.group)
	        if (!isGroupAdmins) return reply(mess.only.admin)
	        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
	        client.groupUpdateDescription(from, `${body.slice(9)}`)
	        client.sendMessage(from, 'Descripción cambiada con éxito', text, {quoted: mek})
	        break
          case 'setname':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
	        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Nombre del grupo cambiado con éxito', text, {quoted: mek})
                break
	  case 'marcar':
		if (!isGroup) return reply(mess.only.group)
		if (!isGroupAdmins) return reply(mess.only.admin)
        	members_id = []
		teks = (args.length > 1) ? body.slice(8).trim() : ''
		teks += '\n\n'
		for (let mem of groupMembers) {
		teks += `*#* @${mem.jid.split('@')[0]}\n`
		members_id.push(mem.jid)
		}
        	mentions(teks, members_id, true)
		break
                case 'marcar2':
		if (!isGroup) return reply(mess.only.group)
		if (!isGroupAdmins) return reply(mess.only.admin)
		members_id = []
		teks = (args.length > 1) ? body.slice(8).trim() : ''
		teks += '\n\n'
		for (let mem of groupMembers) {
		teks += `╠➥ @${mem.jid.split('@')[0]}\n`
		members_id.push(mem.jid)
		}
		reply(teks)
		break
          case 'marcar3':
		if (!isGroup) return reply(mess.only.group)
		if (!isGroupAdmins) return reply(mess.only.admin)
	        members_id = []
		teks = (args.length > 1) ? body.slice(8).trim() : ''
		teks += '\n\n'
		for (let mem of groupMembers) {
		teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
		members_id.push(mem.jid)
		}
		client.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
		break
          case 'onichan':
                tujuh = fs.readFileSync('./assets/onichan.mp3');
                client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                break
          case 'yamete':
                tujuh = fs.readFileSync('./assets/yamete.mp3');
                client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                break
          case 'hentaisom':
                tujuh = fs.readFileSync('./assets/somhentai.mp3');
                client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                break
          case 'antilink':
                if (!isGroup) return reply(mess.only.group)
		if (!isGroupAdmins) return reply(mess.only.admin)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
		if (args.length < 1) return reply('Digite 1 para activar ')
        	if (Number(args[0]) === 1) {
		if (isAntiLink) return reply('Modo anti-link ya está activado')
		antilink.push(from)
		fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
		reply('Modo anti-link activado con éxito en este grupo ✔️')
		client.sendMessage(from,`Atención todos los miembros de este grupo modo anti-link. *ACTIVADO* si compartes un link seras expulsado`, text)
         	} else if (Number(args[0]) === 0) {
		if (isAntiLink) return reply('Modo anti-link desactivado con éxito en este grupo ✔')
		var ini = anti.clientOf(from)
		antilink.splice(ini, 1)
		fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
		reply('Modo anti-link desactivado con éxito en este grupo ✔️')
		} else {
		reply('1 para activar, 0 para desactivar ')
		}
	        break
       	  case 'cekvip': 
	        if (!isPremium) return reply(mess.only.premium)
		me = client.user
		uptime = process.uptime()
		client.sendMessage(from,  `*──────────────────*\n*Nombre del bot:* ╚»★𝗟𝗶𝗻𝗴𝘂𝗼★«╝\n*─────────────────*\n『 *𝐕𝐈𝐏 𝐔𝐒𝐄𝐑*』\n*──────────────────*\n*•Número:* *${sender.split("@s.whatsapp.net")[0]}*\n*•Estado:* *ACTIVO*\n*──────────────────*\n*Estado del Bot:* *${kyun(uptime)}*\n\n*ERES UN MIEMBRO PREMIUM, FELICIDADES! 👌🏼😌* \n*──────────────────*` , text, { quoted: mek, })
		break
          case 'gbin':
                if (!isPremium) return reply(mess.only.premium)
                if (isGroup) return  reply( '❌NO PUEDES USAR ESTE COMANDO EN GRUPOS❌')
                client.sendMessage(from, gbin(prefix), text, { quoted: mek })
                break
          case 'destraba':
                if (!isPremium) return reply(mess.only.premium)
		if (!isGroup) return reply(mess.only.group)
		if (!isGroupAdmins) return reply(mess.only.admin)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                client.sendMessage(from, destraba(prefix), text, { quoted: mek })
                break
          case 'chentai':
                if (!isPremium) return reply(mess.only.premium)
                client.sendMessage(from, chentai(prefix), text, { quoted: mek })
                break
          case 'cons':		
	        if (args.length < 1) return reply('Donde esta su consulta?')
		rate = body.slice(1)
		const ti =['𝙎𝙞','𝙉𝙤','𝗧𝗮𝗹 𝗩𝗲𝘇']
		const kl = ti[Math.floor(Math.random() * ti.length)]
		client.sendMessage(from, '*'+rate+'*:\n\n➛ '+ kl+'', text, { quoted: mek })
		break
          case 'gay':		
                if (!isGroup) return reply(mess.only.group)
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (args.length < 0) return reply('Menciona a alguien')
                pisk = await client.getProfilePicture(mentioned[0])
                foto = await getBuffer(pisk)
                var porcentagemcpsgay = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7%`, `8%`, `9%`, `10%`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `18%`, `19%`, `20%`, `21%`, `22%`, `23%`, `24%`, `25%`, `26%`, `27%`, `28%`, `27%`, `28%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `38%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `48%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `58%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `68%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `78%`, `79%`, `80%`, `81%`, `82%`, `85%`, `84%`, `85%`, `86%`, `87%`, `88%`, `89%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `98%`, `99%`, `100%`]
                const pcptgay = porcentagemcpsgay[Math.floor(Math.random() * porcentagemcpsgay.length)]
		client.sendMessage(from, foto, MessageType.image, {quoted: mek, caption: `𝙎𝙪 𝙥𝙤𝙧𝙘𝙚𝙣𝙩𝙖𝙟𝙚 𝙙𝙚 𝙜𝙖𝙮 𝙚𝙨: ${pcptgay}`})
                break
          case 'fiel':
                if (!isGroup) return reply(mess.only.group)
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (args.length < 0) return reply('Menciona a alguien')
                pisk = await client.getProfilePicture(mentioned[0])
                foto = await getBuffer(pisk)
                var porcentagemcpsfiel = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7%`, `8%`, `9%`, `10%`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `18%`, `19%`, `20%`, `21%`, `22%`, `23%`, `24%`, `25%`, `26%`, `27%`, `28%`, `27%`, `28%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `38%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `48%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `58%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `68%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `78%`, `79%`, `80%`, `81%`, `82%`, `85%`, `84%`, `85%`, `86%`, `87%`, `88%`, `89%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `98%`, `99%`, `100%`]
                const pcptfiel = porcentagemcpsfiel[Math.floor(Math.random() * porcentagemcpsfiel.length)]                
                client.sendMessage(from, foto, MessageType.image, {quoted: mek, caption: `𝙀𝙨𝙩𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 𝙚𝙨: ${pcptfiel} 𝙛𝙞𝙚𝙡`})
                break
          case 'cogible':
                if (!isGroup) return reply(mess.only.group)
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (args.length < 0) return reply('Menciona a alguien')
                pisk = await client.getProfilePicture(mentioned[0])
                foto = await getBuffer(pisk)
                var porcentagemcpscog = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7%`, `8%`, `9%`, `10%`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `18%`, `19%`, `20%`, `21%`, `22%`, `23%`, `24%`, `25%`, `26%`, `27%`, `28%`, `27%`, `28%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `38%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `48%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `58%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `68%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `78%`, `79%`, `80%`, `81%`, `82%`, `85%`, `84%`, `85%`, `86%`, `87%`, `88%`, `89%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `98%`, `99%`, `100%`]
                const pcptcog = porcentagemcpscog[Math.floor(Math.random() * porcentagemcpscog.length)]                
                client.sendMessage(from, foto, MessageType.image, {quoted: mek, caption: `𝙎𝙪 𝙥𝙤𝙧𝙘𝙚𝙣𝙩𝙖𝙟𝙚 𝙙𝙚 𝙘𝙤𝙜𝙞𝙗𝙡𝙚 𝙚𝙨: ${pcptcog}`})
                break
          case 'cornudo':
          case 'cornuda':
                if (!isGroup) return reply(mess.only.group)
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (args.length < 0) return reply('Menciona a alguien')
                pisk = await client.getProfilePicture(mentioned[0])
                foto = await getBuffer(pisk)
                var porcentagemcpscrn = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7%`, `8%`, `9%`, `10%`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `18%`, `19%`, `20%`, `21%`, `22%`, `23%`, `24%`, `25%`, `26%`, `27%`, `28%`, `27%`, `28%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `38%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `48%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `58%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `68%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `78%`, `79%`, `80%`, `81%`, `82%`, `85%`, `84%`, `85%`, `86%`, `87%`, `88%`, `89%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `98%`, `99%`, `100%`]
                const pcptcrn = porcentagemcpscrn[Math.floor(Math.random() * porcentagemcpscrn.length)]                
                client.sendMessage(from, foto, MessageType.image, {quoted: mek, caption: `𝙎𝙪 𝙥𝙤𝙧𝙘𝙚𝙣𝙩𝙖𝙟𝙚 𝙙𝙚 𝙘𝙤𝙧𝙣𝙪𝙙@ 𝙚𝙨: ${pcptcrn} andá a limarte las astas`})
                break
          case 'puta':
                if (!isGroup) return reply(mess.only.group)
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (args.length < 0) return reply('Menciona a alguien')
		ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
		} catch {
		ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		}
                var porcentagemcps = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7%`, `8%`, `9%`, `10%`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `18%`, `19%`, `20%`, `21%`, `22%`, `23%`, `24%`, `25%`, `26%`, `27%`, `28%`, `27%`, `28%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `38%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `48%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `58%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `68%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `78%`, `79%`, `80%`, `81%`, `82%`, `85%`, `84%`, `85%`, `86%`, `87%`, `88%`, `89%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `98%`, `99%`, `100%`]
                const pcpt = porcentagemcps[Math.floor(Math.random() * porcentagemcps.length)]                
                client.sendMessage(from, foto, MessageType.image, {quoted: mek, caption: `𝙎𝙪 𝙥𝙤𝙧𝙘𝙚𝙣𝙩𝙖𝙟𝙚 𝙙𝙚 𝙥𝙪𝙩𝙖 𝙚𝙨: ${pcpt}`})
                break
          case 'ship':
	        if (!isGroup) return reply(mess.only.group)
		membr = []
		const suamae11 = groupMembers
		const suamae21 = groupMembers
		const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
		const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
		var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7%`, `8%`, `9%`, `10%`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `18%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `28%`, `27%`, `28%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `38%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `48%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `58%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `68%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `78%`, `79%`, `80%`, `81%`, `82%`, `85%`, `84%`, `85%`, `86%`, `87%`, `88%`, `89%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `98%`, `99%`, `100%`]
		const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
		teks = `*𝘾𝙖𝙡𝙘𝙪𝙡𝙖𝙣𝙙𝙤 𝙉𝙪𝙚𝙫𝙤 𝙎𝙝𝙞𝙥 𝙀𝙣𝙩𝙧𝙚...💘💘*\n\n1= @${teupai11.jid.split('@')[0]}\n                  𝙔\n2= @${teupai21.jid.split('@')[0]}\n\n𝙎𝙪 𝙥𝙤𝙧𝙘𝙚𝙣𝙩𝙖𝙟𝙚 𝙚𝙨: ${shipted}`
		membr.push(teupai11.jid)
		membr.push(teupai21.jid)
		mentions(teks, membr, true)
	        break
          case 'simp':
                if (!isGroup) return reply(mess.only.group)
                membr = []
                const simp12 = groupMembers
                const simpb12 = simp12[Math.floor(Math.random() * simp12.length)]
                reply(`*💖😏🅓🅔🅣🅔🅒🅣🅞🅡 🅓🅔 🅢🅘🅜🅟😏💖*\n\n*𝙏𝙐 𝙎𝙄𝙈𝙋 𝙀𝙎:\n\n@${simpb12.jid.split('@')[0]}*\n\n*🔥    🖤𝙀𝙉𝙑𝙄𝘼𝙇𝙀 𝙏𝙐 𝙋𝘼𝘾𝙆🖤    🔥*\n\n*`)
                membr.push(simp12.jid)
                mentions(teks, membr, true)
                break
          case 'pns':
	        if (!isGroup) return reply(mess.only.group)
		membr = []
		const pauz1 = groupMembers
		const pauz2 = groupMembers
		const pauz3 = groupMembers
		const paus1 = pauz1[Math.floor(Math.random() * pauz1.length)]
		const paus2 = pauz2[Math.floor(Math.random() * pauz2.length)]
		const paus3 = pauz3[Math.floor(Math.random() * pauz3.length)]
		var pcpau1 = ["𝙈𝙞𝙣𝙪́𝙨𝙘𝙪𝙡𝙤 🤣🤏🏼", `𝙈𝙖𝙣𝙞́ 🤣`, `𝙋𝙚𝙦𝙪𝙚𝙣̃𝙤 😂`, `𝙈𝙚𝙙𝙞𝙖𝙣𝙤 👌🏼`, `𝙋𝙤𝙧 𝙚𝙣𝙘𝙞𝙢𝙖 𝙙𝙚 𝙡𝙖 𝙢𝙚𝙙𝙞𝙖 👍🏻`, `𝙂𝙧𝙖𝙣𝙙𝙚 😮👍🏻`, `𝙂𝙞𝙜𝙖𝙣𝙩𝙚 😎👍🏼🥒`]
		var pcpau2 = ["𝙈𝙞𝙣𝙪́𝙨𝙘𝙪𝙡𝙤 🤣🤏🏼", `𝙈𝙖𝙣𝙞́ 🤣`, `𝙋𝙚𝙦𝙪𝙚𝙣̃𝙤 😂`, `𝙈𝙚𝙙𝙞𝙖𝙣𝙤 👌🏼`, `𝙋𝙤𝙧 𝙚𝙣𝙘𝙞𝙢𝙖 𝙙𝙚 𝙡𝙖 𝙢𝙚𝙙𝙞𝙖 👍🏻`, `𝙂𝙧𝙖𝙣𝙙𝙚 😮👍🏻`, `𝙂𝙞𝙜𝙖𝙣𝙩𝙚 😎👍🏼🥒`]
		var pcpau3 = ["𝙈𝙞𝙣𝙪́𝙨𝙘𝙪𝙡𝙤 🤣🤏🏼", `𝙈𝙖𝙣𝙞́ 🤣`, `𝙋𝙚𝙦𝙪𝙚𝙣̃𝙤 😂`, `𝙈𝙚𝙙𝙞𝙖𝙣𝙤 👌🏼`, `𝙋𝙤𝙧 𝙚𝙣𝙘𝙞𝙢𝙖 𝙙𝙚 𝙡𝙖 𝙢𝙚𝙙𝙞𝙖 👍🏻`, `𝙂𝙧𝙖𝙣𝙙𝙚 😮👍🏻`, `𝙂𝙞𝙜𝙖𝙣𝙩𝙚 😎👍🏼🥒`]
		const pc1 = pcpau1[Math.floor(Math.random() * pcpau1.length)]
		const pc2 = pcpau2[Math.floor(Math.random() * pcpau2.length)]
		const pc3 = pcpau3[Math.floor(Math.random() * pcpau3.length)]
		teks = `𝙀𝙨𝙩𝙤𝙨 𝙨𝙤𝙣 𝙡𝙤𝙨 𝙥𝙞𝙩𝙤𝙨 𝙘𝙤𝙧𝙩𝙤𝙨 𝙮 𝙙𝙤𝙩𝙖𝙙𝙤𝙨 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤::\n\n${groupName}\n\n@${paus1.jid.split('@')[0]} ➢${pc1}\n@${paus2.jid.split('@')[0]} ➢${pc2}\n@${paus3.jid.split('@')[0]} ➢${pc3}`
		membr.push(paus1.jid)
		membr.push(paus2.jid)
		membr.push(paus3.jid)
		mentions(teks, membr, true)
		break
          case 'pinterest':
                tels = body.slice(10)
		client.updatePresence(from, Presence.composing) 
		data = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=${tels}`, {method: 'get'})
		reply(mess.wait)
		n = JSON.parse(JSON.stringify(data));
		nimek =  n[Math.floor(Math.random() * n.length)];
		pok = await getBuffer(nimek)
                reply('Encontrada 👌🏼')
		client.sendMessage(from, pok, image, { quoted: mek, caption: `Resultado de Búsqueda: ${tels}`})
                await limitAdd(sender)
		break
          case 'playstore':
                ps = `${body.slice(11)}`
                anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/playstore?q=${ps}`, {method: 'get'})
                store = '❥❥❥❥❥❥❥❥❥❥❥❥❥❥❥❥❥❥❥❥❥❥❥❥❥❥❥❥\n'
                for (let ply of anu.result){
                store += `• *🅝🅞🅜🅑🅡🅔 🅓🅔 🅐🅟🅚:* ${ply.app.name}\n• *🅘🅓:* ${ply.app.id}\n• *🅛🅘🅝🅚 🅓🅔 🅐🅟🅚:* ${ply.app.url}\n❥❥❥❥❥❥❥❥❥❥❥❥❥❥❥❥❥❥❥°]\n\n`
                }
                reply(store.trim())
                break
	  case 'playstore':
		kuji = body.slice(7)
		reply(mess.wait)
		anu = await getBuffer(`https://api.vhtear.com/playstore?query={kuji}&apikey=Aris komtol`, {method: 'get'})
		capty = `*➸ title :* ${anu.title}\n*➸ app_id :* ${anu.app_id}\n*➸ description :* ${anu.description}\n*➸ developer_id :* ${anu.developer_id}\n*➸ developer :* ${anu.developer}\n*➸ score :* ${anu.score}\n*➸ full_price :* ${anu.full_price}\n*➸ price :* ${anu.price}\n*➸ free :* ${anu.free}`
		client.sendMessage(from, anu, image, {quoted: mek, caption: capty})
		break
          case 'text3d':
                if (args.length < 1) return reply('Donde está el texto??')
                teks = `${body.slice(8)}`
                if (teks.length > 10) return client.sendMessage(from, 'Solo hasta 10 caracteres, sorry', text, {quoted: mek})
                buff = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
                client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
	        break
                              default:
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
