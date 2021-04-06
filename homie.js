const Discord = require('discord.js')
const client = new Discord.Client()
const fetch = require('node-fetch')
const ms = require('ms')
const api = require("imageapi.js")

const gaali = [
    "madarchod", "bhenchod", "bhosdika", "fuck off", "chutia", "ullu ki jhaat", "chutiye ka pattha", "haramzyada", "bc", "mc",
    "haram ka pilla", "jhaatu", "kamine ka pattha", "kutte ka goo", "fuck", "gaandu", "gandu", "lavde", "randi", "gaand", "lavda", "rande",
    "chod", "lawde", "gandu", "mc", "bc", "bisi", "jhatu", "madarchod", "randi", "randwe", "loda", "bhen ka", "lode", "chutiye",
    "lund", "bsdk", "bhnchd", "bsdk", "m a d a r c h o d", "b h e n ch od", "Bhosdiwalo", "Fck", "B c", "M c", "B.   C", "B. C", "M.   C", "B.   C", "Madarchid", "F u c k", "Fffccckkk", "fkcuk"
    , "chuda", "bhen", "madar", "fcuk", "Fkuck", "Beesee", "B‎C", "fk", "B.  C.", "bhsdk", "Bc", "bc", "Mc", "mc"
]

const pollReactions = message => {
    message.react('👍')

    setTimeout(() => {
        message.react('👎')
    }, 100)
}

client.on('ready', async () => {
    console.log("Connected as " + client.user.tag)

    client.user.setActivity("the мσση", { type: 'WATCHING' })

    client.guilds.cache.forEach((guild) => {
        console.log(guild.name)
        guild.channels.cache.forEach((channel) => {
        })
    })
})

client.on('message', async (message) => {

    //h#g
    const random = Math.floor(Math.random() * gaali.length);
    mention = message.mentions.users.first()
    if (message.author == client.user) {
        return
    }
    if (message.content.startsWith("h#g")) {
        if (message.channel.id == "816736709004754984" || message.channel.id == "823056732589654026" || message.channel.id == "825080879159836703") {
            if (mention == null) {
                message.channel.send(`**${gaali[random]}** ${message.author}; You didn't asked me to say this to someone. It therefore gets deliverd to you !`)
            }
            if (mention.id == "824976751431516173") {
                message.channel.send(`**Meri Shakal Mai Chutia Likha Hai ${message.author} ??**`)
            }
            else {
                if (message.content.includes("del")) {
                    message.channel.send(`**${gaali[random]}** ${mention}`)
                    message.delete()
                }
                else
                    message.channel.send(`**${gaali[random]}** ${mention}`)
            }
        }
        else {
            message.channel.send(`${message.author}, you can only use this in   **│⭒𒌋𒄶︰ƚσxιƈ-ƈԋαƚ**   and   **│⭒𒌋𒄶︰ɢɛռɛʀǟʟ-15** !`)
        }
    }

    //h#h
    if (message.content.startsWith("h#h")) {
        const helpCommand = new Discord.MessageEmbed()
            .setColor('#0008ff')
            .setTitle('Help Command:')
            .setAuthor('Homie', 'https://cdn.discordapp.com/attachments/774279357576511509/825041729353678878/Screenshot_2021-03-26_at_3.40.56_PM.png')
            .setThumbnail('https://cdn.discordapp.com/attachments/774279357576511509/825041729353678878/Screenshot_2021-03-26_at_3.40.56_PM.png')
            .addFields(
                { name: 'h#h', value: 'Outputs the Help Command !' },
                { name: '**          **', value: "**          **" },
                { name: 'h#g @MentionAnyUser', value: 'Delivers Gaali to mentioned user !' },
                { name: '**          **', value: "**          **" },
                { name: 'h#g @MentionAnyUser del', value: 'Delivers Gaali to mentioned user ; Your message will be deleted !' },
                { name: '**          **', value: "**          **" },
                { name: 'h#s @MentionAnyUser something', value: "Sends 'something' to the mentioned user privately !" },
                { name: '**          **', value: "**          **" },
                { name: 'h#pQ', value: "Gives you a True/False question !" },
                { name: '**          **', value: "**          **" },
                { name: 'h#e something', value: "Sends an embed of your message while your command gets deleted !" },
                { name: '**          **', value: "**          **" },
                // { name: 'h#Tmute(space)@someone(noSpace)Xs/m/h/days/y', value: "Mutes @someone for 'X' seconds/minutes/hours/days/years !" },
                // { name: '**          **', value: "**          **" },
                { name: 'h#poll', value: "Creates a poll with ```Thumbs Up and Thumbs Down Reactions``` for last sent message !" },
                { name: '**          **', value: "**          **" },
                { name: 'h#meme', value: "Delivers you a meme from 'r/memes'" },
                { name: '**          **', value: "**          **" },
                { name: 'h#meme I', value: "Delivers you a sort of indian meme from 'r/indianmemer'" },
                { name: '**          **', value: "**          **" },
                { name: 'h#pics', value: "Delivers you a random pic from 'r/pics'" },
                { name: '**          **', value: "**          **" },
                { name: 'h#pics space', value: "Delivers you a space related pic from 'r/SpacePorn'" },
                { name: '**          **', value: "**          **" },
                { name: 'h#mute @someone', value: "Mutes @someone !" },
                { name: '**          **', value: "**          **" },
                { name: 'h#unmute', value: "Unmutes @someone !" },
                { name: '**          **', value: "**          **" },
            )
            .setImage('https://i.imgur.com/wSTFkRMhttps://cdn.discordapp.com/attachments/774279357576511509/825041729353678878/Screenshot_2021-03-26_at_3.40.56_PM.png.png')
            .setTimestamp()
        message.channel.send(helpCommand);
    }

    //h#s
    if (message.content.startsWith("h#s")) {
        if (mention == null) {
            message.channel.send(`चूतिए ${message.author}: You didn't tell me the user you want to send it`)
        }
        else {
            mentionMessage = message.content.slice(4)
            mention.send(mentionMessage)
            message.channel.send("```I sent it !```")
        }
    }

    //h#pQ
    if (message.author.bot) return;
    if (message.content.startsWith('h#pQ')) {
        {
            const response = await fetch('https://opentdb.com/api.php?amount=5&category=18&category=18&type=boolean')
            const data = await response.json()
            var length = data.results.length
            var randomNumber = Math.floor(Math.random() * length)
            var randomQuestion = data.results[randomNumber]
            var question = randomQuestion.question
            var correctAnswer = randomQuestion.correct_answer

            const quizCommand = new Discord.MessageEmbed()
                .setColor('#0008ff')
                .setTitle('Quiz:')
                .setAuthor('Homie', 'https://cdn.discordapp.com/attachments/774279357576511509/825041729353678878/Screenshot_2021-03-26_at_3.40.56_PM.png')
                .setThumbnail('https://cdn.discordapp.com/attachments/774279357576511509/825041729353678878/Screenshot_2021-03-26_at_3.40.56_PM.png')
                .addFields(
                    { name: 'Instruction: ', value: "Answer - True or False" },
                    { name: '** **', value: "** **" },
                    { name: '** Question **', value: `${question}` },
                )
                .setFooter('You Have 20 seconds')
                .setImage('https://i.imgur.com/wSTFkRMhttps://cdn.discordapp.com/attachments/774279357576511509/825041729353678878/Screenshot_2021-03-26_at_3.40.56_PM.png.png')
            message.channel.send(quizCommand);

            const filter = m => m.author.id === message.author.id
            const answer = await message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time', 'max'] })
            const ans = answer.first()

            if (ans.content.toLowerCase() === correctAnswer.toLowerCase()) {
                message.channel.send(`Hey ${message.author}: THAT IS **CORRECT** !`)
            }
            else {
                message.channel.send(`Hey ${message.author}: THAT IS **INCORRECT** !`)
            }
        }
    }

    //bad words
    if (message.channel.id == "816736709004754984" || message.channel.id == "823056732589654026" || message.channel.id == "825080879159836703" || message.content == "Chutia" || message.content == "chutia" || message.content == " Chutia " || message.content == " chutia " || message.content == "chutia " || message.content == "Chutia " || message.content == " chutia" || message.content == " Chutia") {
        return
    }
    else {
        let foundInText = false;
        for (var i in gaali) {
            if (message.content.toLowerCase().includes(gaali[i].toLowerCase())) foundInText = true;
        }
        if (foundInText) {
            message.delete();
            (await message.channel.send(`${message.author}** used a bad word, you cant send it here !!! Send it in '│⭒𒌋𒄶︰ɢɛռɛʀǟʟ-15' or '│⭒𒌋𒄶︰ƚσxιƈ-ƈԋαƚ'**`)).delete({ timeout: 5000 })
        }
    }

    //h#mute
    if (message.content.startsWith("h#mute")) {
        const target = message.mentions.users.first()
        if (target) {
            if (message.author == target) { message.channel.send(`${message.author}, you cant mute yourself !`) }
            else {
                let muteRole = message.guild.roles.cache.find(role => role.name == "Muted")

                let memberTarget = message.guild.members.cache.get(target.id)
                memberTarget.roles.add(muteRole.id)
                message.channel.send(`<@${memberTarget.user.id}> has been muted !`)
            }
        }
        else {
            message.channel.send(`Abe paagl ${message.author}, **mute kise karu? Hawa mai mute kardu kya?**`)
        }
    }

    //h#unmute
    if (message.content.startsWith("h#unmute")) {
        const target = message.mentions.users.first()
        if (target) {
            let muteRole = message.guild.roles.cache.find(role => role.name == "Muted")

            let memberTarget = message.guild.members.cache.get(target.id)
            memberTarget.roles.remove(muteRole.id)
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted !`)
        }
        else {
            message.channel.send(`Abe paagl ${message.author}, **mute kise karu? Hawa mai unmute kardu kya?**`)
        }
    }

    // //h#Tmute
    // if (message.content.startsWith("h#Tmute")) {
    //     const target = message.mentions.users.first()
    //     let slice = target.id.split("").length + 13
    //     let time = message.content.slice(slice)

    //     if (target) {
    //         if (message.author == target) { message.channel.send(`${message.author}, you cant mute yourself !`) }
    //         else {
    //             let muteRole = message.guild.roles.cache.find(role => role.name == "Muted")
    //             let memberTarget = message.guild.members.cache.get(target.id)

    //             memberTarget.roles.add(muteRole.id)
    //             message.channel.send(`<@${memberTarget.user.id}> has been muted for ${time} !`)

    //             setTimeout(function () {
    //                 memberTarget.roles.remove(muteRole.id)
    //             }, ms(time))
    //         }
    //     }
    //     else {
    //         message.channel.send(`Abe paagl ${message.author}, **mute kise karu? Hawa mai mute kardu kya?**`)
    //     }
    // }

    //h#meme
    if (message.content.startsWith("h#meme")) {
        if (message.content.endsWith(" I")) {
            let subreddit = "indianmemer"
            let img = await api(subreddit)
            const meme = new Discord.MessageEmbed()
                .setTitle(`r/${subreddit}`)
                .setURL(`https://reddit.com/r/${subreddit}`)
                .setColor('RANDOM')
                .setImage(img)
            message.channel.send(meme)
        }
        else {
            let subreddit = "memes"
            let img = await api(subreddit)
            const meme = new Discord.MessageEmbed()
                .setTitle(`r/${subreddit}`)
                .setURL(`https://reddit.com/r/${subreddit}`)
                .setColor('RANDOM')
                .setImage(img)
            message.channel.send(meme)
        }
    }

    //h#pics
    if (message.content.startsWith("h#pics")) {
        if (message.content.endsWith(" space")) {
            let spaceimage = "SpacePorn"
            let img = await api(spaceimage)
            const image = new Discord.MessageEmbed()
                .setTitle(`An image related to Space !`)
                .setURL(`https://reddit.com/r/${spaceimage}`)
                .setColor('RANDOM')
                .setImage(img)
            message.channel.send(image)
        }

        else {
            let pic = "pics"
            let img = await api(pic)
            const image = new Discord.MessageEmbed()
                .setTitle(`A random Image !`)
                .setURL(`https://reddit.com/r/${pic}`)
                .setColor('RANDOM')
                .setImage(img)
            message.channel.send(image)
        }
    }

    //h#e
    if (message.author.bot) return;
    if (message.content.startsWith('h#e')) {
        let body = message.content.slice(3)
        const randomEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 128 }))
            .setDescription(`From: <@${message.author.id}>`)
            .addFields(
                { name: '** **', value: `** ${body}**` },
            )
        message.channel.send(randomEmbed);
        message.delete()
    }


    if (message.channel.id == "825667205689507881" || message.channel.id == "812678703649521735") {
        pollReactions(message)
    }

    if (message.content.startsWith('h#poll')) {
        message.delete()
        const fetched = await message.channel.messages.fetch({ limit: 1 })
        if (fetched && fetched.first()) {
            pollReactions(fetched.first())
        }
    }

})

client.login("ODI0OTc2NzUxNDMxNTE2MTcz.YF3NeA.zCdDsXGFPxrJcQqCijRABZsLzBY")