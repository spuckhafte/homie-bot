const Discord = require("discord.js");
const client = new Discord.Client();
const fetch = require("node-fetch");
const ms = require("ms");
const api = require("imageapi.js");
const db = require('db')


const gaali = [
    "madarchod", "bhenchod", "bhosdika", "fuck off", "chutia", "ullu ki jhaat", "chutiye ka pattha", "haramzyada", "bc", "mc",
    "haram ka pilla", "jhaatu", "kamine ka pattha", "kutte ka goo", "fuck", "gaandu", "gandu", "lavde", "randi", "gaand", "lavda", "rande",
    "chod", "lawde", "gandu", "mc", "bc", "bisi", "jhatu", "madarchod", "randi", "randwe", "loda", "bhen ka", "lode", "chutiye", "lund", "bsdk",
    "bhnchd", "bsdk", "m a d a r c h o d", "b h e n ch od", "Bhosdiwalo", "Fck", "B c", "M c", "B.   C", "B. C", "M.   C", "B.   C", "Madarchid", "F u c k", "Fffccckkk", "fkcuk", "chuda", "bhen", "madar", "fcuk", "Fkuck", "Beesee", "B‎C", "fk", "B.  C.", "bhsdk", "Bc", "bc", "Mc", "mc"
]


const pollReactions = (message) => {
    message.react("👍");

    setTimeout(() => {
        message.react("👎");
    }, 100);
};


client.on("ready", async() => {
    console.log("Connected as " + client.user.tag);

    client.user.setActivity("the мσση", { type: "WATCHING" });

    client.guilds.cache.forEach((guild) => {
        console.log(guild.name);
        guild.channels.cache.forEach((channel) => {});
    });

    const memeChannel = client.channels.cache.get('812364674414018570');
    setInterval(async() => {
        let image = await api('memes');
        const memee = new Discord.MessageEmbed()
            .setTitle('r/memes')
            .setURL('https://reddit.com/r/memes')
            .setColor("RANDOM")
            .setImage(image);
        memeChannel.send(memee);
    }, 900000);
});



client.on("message", async(message) => {
    //h#g
    const random = Math.floor(Math.random() * gaali.length);
    mention = message.mentions.users.first();
    if (message.author == client.user) {
        return;
    }
    if (message.content.startsWith("h#g")) {
        if (
            message.channel.id == "816736709004754984" ||
            message.channel.id == "823056732589654026"
        ) {
            if (mention == null) {
                message.channel.send(
                    `**${gaali[random]}** ${message.author}; You didn't asked me to say this to someone. It therefore gets deliverd to you !`
                );
            }
            if (mention.id == "824976751431516173") {
                message.channel.send(
                    `**Meri Shakal Mai Chutia Likha Hai ${message.author} ??**`
                );
            } else {
                if (message.content.includes("del")) {
                    message.channel.send(`**${gaali[random]}** ${mention}`);
                    message.delete();
                } else message.channel.send(`**${gaali[random]}** ${mention}`);
            }
        } else {
            (
                message.channel.send(
                    `${message.author}, you can only use this in  **'│⭒𒌋𒄶︰big-bois' / '│⭒𒌋𒄶︰ƚσxιƈ-ƈԋαƚ'** !`
                )
            ).delete({ timeout: 5000 })
        }
    }


    if (message.content.startsWith("h#h")) {
        const helpCommand = new Discord.MessageEmbed()
            .setColor("#0008ff")
            .setTitle("Help Command:")
            .setAuthor(
                "Homie",
                "https://cdn.discordapp.com/attachments/774279357576511509/825041729353678878/Screenshot_2021-03-26_at_3.40.56_PM.png"
            )
            .setThumbnail(
                "https://cdn.discordapp.com/attachments/774279357576511509/825041729353678878/Screenshot_2021-03-26_at_3.40.56_PM.png"
            )
            .addFields({
                    name: "h#h",
                    value: "Outputs the Help Command !"
                }, {
                    name: "h#g @MentionAnyUser",
                    value: "Delivers Gaali to mentioned user !"
                }, {
                    name: "h#g @MentionAnyUser del",
                    value: "Delivers Gaali to mentioned user ; Your message will be deleted !"
                }, {
                    name: "h#s @MentionAnyUser something",
                    value: "Sends 'something' to the mentioned user privately !",
                }, {
                    name: "h#pQ",
                    value: "Gives you a True/False question !"
                }, {
                    name: "h#e something",
                    value: "Sends an embed of your message while your command gets deleted !",
                },

                // { name: 'h#Tmute(space)@someone(noSpace)Xs/m/h/days/y', value: "Mutes @someone for 'X' seconds/minutes/hours/days/years !" },
                // { name: '**          **', value: "**          **" },

                {
                    name: "h#rtsk any_task Xs/m/h/days/y",
                    value: "Reminds you for your **Any_Task** after 'X' seconds/minutes/hours/days/years !",
                }, {
                    name: "h#poll",
                    value: "Creates a poll with ```Thumbs Up and Thumbs Down Reactions``` for last sent message !",
                }, {
                    name: "h#meme",
                    value: "Delivers you a meme from 'r/memes'"
                }, {
                    name: "h#meme I",
                    value: "Delivers you a sort of indian meme from 'r/indianmemer'",
                }, {
                    name: "h#pics",
                    value: "Delivers you a random pic from 'r/pics'"
                }, {
                    name: "h#pics space",
                    value: "Delivers you a space related pic from 'r/SpacePorn'",
                }, {
                    name: "h#mute @someone",
                    value: "Mutes @someone !"
                }, {
                    name: "h#unmute @someone",
                    value: "Unmutes @someone !"
                }, {
                    name: "h#spam spam_count(eg.10) spam_message(any message)",
                    value: "Spams **'any message'** **'10'** times!"
                }, {
                    name: "h#warn @someone Reason",
                    value: "Warns @someone for a specific 'Reason'"
                }, {
                    name: "h#nick @someone NickName",
                    value: "Changes the nickname of @someone to 'NickName' !"
                }, {
                    name: "h#selfnick NickName",
                    value: "Changes the nickname of the author to 'NickName' !"
                }, {
                    name: "h#cal num(operation)num",
                    value: "Performs operations on number (add,sub,pro,div,remainder, toThePower)' !"
                }
            )
            .setImage(
                "https://i.imgur.com/wSTFkRMhttps://cdn.discordapp.com/attachments/774279357576511509/825041729353678878/Screenshot_2021-03-26_at_3.40.56_PM.png.png"
            )
            .setTimestamp();
        message.channel.send(helpCommand);
    }

    //h#s
    if (message.content.startsWith("h#s ")) {
        if (mention == null) {
            message.channel.send(
                `चूतिए ${message.author}: You didn't tell me the user you want to send it`
            );
        } else {
            mentionMessage = message.content.slice(4);
            mention.send(mentionMessage);
            message.channel.send("```I sent it !```");
        }
    }

    //h#pQ
    if (message.author.bot) return;
    if (message.content.startsWith("h#pQ")) {
        {
            const response = await fetch(
                "https://opentdb.com/api.php?amount=5&category=18&category=18&type=boolean"
            );
            const data = await response.json();
            var length = data.results.length;
            var randomNumber = Math.floor(Math.random() * length);
            var randomQuestion = data.results[randomNumber];
            var question = randomQuestion.question;
            var correctAnswer = randomQuestion.correct_answer;

            const quizCommand = new Discord.MessageEmbed()
                .setColor("#0008ff")
                .setTitle("Quiz:")
                .setAuthor(
                    "Homie",
                    "https://cdn.discordapp.com/attachments/774279357576511509/825041729353678878/Screenshot_2021-03-26_at_3.40.56_PM.png"
                )
                .setThumbnail(
                    "https://cdn.discordapp.com/attachments/774279357576511509/825041729353678878/Screenshot_2021-03-26_at_3.40.56_PM.png"
                )
                .addFields({ name: "Instruction: ", value: "Answer - True or False" }, { name: "** **", value: "** **" }, { name: "** Question **", value: `${question}` })
                .setFooter("You Have 20 seconds")
                .setImage(
                    "https://i.imgur.com/wSTFkRMhttps://cdn.discordapp.com/attachments/774279357576511509/825041729353678878/Screenshot_2021-03-26_at_3.40.56_PM.png.png"
                );
            message.channel.send(quizCommand);

            const filter = (m) => m.author.id === message.author.id;
            const answer = await message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ["time", "max"],
            });
            const ans = answer.first();

            if (ans.content.toLowerCase() === correctAnswer.toLowerCase()) {
                message.channel.send(`Hey ${message.author}: THAT IS **CORRECT** !`);
            } else {
                message.channel.send(`Hey ${message.author}: THAT IS **INCORRECT** !`);
            }
        }
    }

    //bad words
    if (
        message.channel.id == "816736709004754984" ||
        message.channel.id == "823056732589654026"
    ) {
        return;
    } else {
        let foundInText = false;
        for (var i in gaali) {
            if (message.content.toLowerCase().includes(gaali[i]))
                foundInText = true;
        }
        if (foundInText) {
            message.delete();
            (
                await message.channel.send(
                    `${message.author}** used a bad word, you cant send it here !!! Send it in **'│⭒𒌋𒄶︰big-bois' / '│⭒𒌋𒄶︰ƚσxιƈ-ƈԋαƚ'** !`
                )
            ).delete({ timeout: 5000 });
        }
    }

    //h#mute
    if (message.content.startsWith("h#mute")) {
        const target = message.mentions.users.first();
        if (target) {
            if (message.author == target) {
                message.channel.send(`${message.author}, you cant mute yourself !`);
            } else {
                let muteRole = message.guild.roles.cache.find(
                    (role) => role.name == "Muted"
                );

                let memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted !`);
            }
        } else {
            message.channel.send(
                `${message.author}, **who should I mute ?**`
            );
        }
    }

    //h#unmute
    if (message.content.startsWith("h#unmute")) {
        const target = message.mentions.users.first();
        if (target) {
            let muteRole = message.guild.roles.cache.find(
                (role) => role.name == "Muted"
            );

            let memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.roles.remove(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted !`);
        } else {
            message.channel.send(
                `Abe paagl ${message.author}, **mute kise karu? Hawa mai unmute kardu kya?**`
            );
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
            let subreddit = "indianmemer";
            let img = await api(subreddit);
            const meme = new Discord.MessageEmbed()
                .setTitle(`r/${subreddit}`)
                .setURL(`https://reddit.com/r/${subreddit}`)
                .setColor("RANDOM")
                .setImage(img);
            message.channel.send(meme);
        } else {
            let subreddit = "memes";
            let img = await api(subreddit);
            const meme = new Discord.MessageEmbed()
                .setTitle(`r/${subreddit}`)
                .setURL(`https://reddit.com/r/${subreddit}`)
                .setColor("RANDOM")
                .setImage(img);
            message.channel.send(meme);
        }
    }

    //h#pics
    if (message.content.startsWith("h#pics")) {
        if (message.content.endsWith(" space")) {
            let spaceimage = "SpacePorn";
            let img = await api(spaceimage);
            const image = new Discord.MessageEmbed()
                .setTitle(`An image related to Space !`)
                .setURL(`https://reddit.com/r/${spaceimage}`)
                .setColor("RANDOM")
                .setImage(img);
            message.channel.send(image);
        } else {
            let pic = "pics";
            let img = await api(pic);
            const image = new Discord.MessageEmbed()
                .setTitle(`A random Image !`)
                .setURL(`https://reddit.com/r/${pic}`)
                .setColor("RANDOM")
                .setImage(img);
            message.channel.send(image);
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
            .addFields({ name: '** **', value: `** ${body}**` }, )
        message.delete()
        message.channel.send(randomEmbed)
    }

    //Poll Reactions, Fun Reactions and Poll Command
    if (
        message.channel.id == "825667205689507881" ||
        message.channel.id == "812678703649521735"
    ) {
        pollReactions(message);
    }
    if (message.content.startsWith("h#poll")) {
        message.delete();
        const fetched = await message.channel.messages.fetch({ limit: 1 });
        if (fetched && fetched.first()) {
            pollReactions(fetched.first());
        }
    }

    //h#rtsk
    if (message.content.startsWith("h#rtsk")) {
        let timedArray = message.content.split(" ");
        let task = timedArray[1];
        let time = timedArray[2];
        if (timedArray.length == 3) {
            const taskEmbed = new Discord.MessageEmbed()
                .setAuthor(
                    message.author.username,
                    message.author.displayAvatarURL({ dynamic: true })
                )
                .setColor("RANDOM")
                .setTitle(task)
                .setDescription(`I will remind you after ${time}`)
                .setTimestamp();
            message.delete()
            message.channel.send(taskEmbed);

            setTimeout(function() {
                message.channel.send(
                    `${message.author}, **TIME FOR YOUR TASK: ${task}**`
                );
            }, ms(time));
        } else {
            message.channel.send(`${message.author}, I think you missed **_** for your task. Eg. **'a_task' or 'task'**`)
        }
    }

    //h#spam
    if (message.content.startsWith('h#spam')) {

        let spamMessageArr = message.content.split(' ')
        if (spamMessageArr.length < 3) {
            message.reply('you missed something !')
        } else {
            let data = spamMessageArr.splice(0, 2)
            let spamMessageData = spamMessageArr
            let spamMessage = spamMessageData.join(' ')

            data.splice(0, 1)
            let spamCount = data

            if (spamCount <= 5) {
                message.delete()
                for (let i = 0; i < spamCount; i++) {
                    message.channel.send(spamMessage)
                }
            } else {
                message.channel.send(`${message.author}, you can spam atmost 5 times !`)
            }
        }
    }

    //h#warn
    if (message.content.startsWith('h#warn ')) {
        let warn = message.content.split(' ')
        warn.splice(0, 2)

        let warnReason = warn.join(' ')
        let warnAuthor = message.author
        let warnTarget = message.mentions.users.first()

        message.delete()

        if (warnReason == null || warnReason == "" || warnReason == " " || warnReason == "** **" || warnReason == "* *" || warnReason == "|| ||") {
            message.reply('Please provide a valid reason !')
        } else {
            message.channel.send(`${warnTarget}, you have been **WARNED** by ${warnAuthor} \n\nReason: **${warnReason}**`)
        }
    }

    //h#nick
    if (message.content.startsWith('h#nick ')) {
        let prevname = message.content.split(' ').splice(0, 2).join()
        let messageArr = message.content.split(' ')
        if (messageArr.length > 2) {
            messageArr.splice(0, 2)
            let nick = messageArr.join(' ')
            let target = message.mentions.users.first()
            let member = message.guild.members.cache.get(target.id)

            if (message.member.guild.me.hasPermission('MANAGE_NICKNAMES')) {
                if (target == message.author) {
                    const embedNick = new Discord.MessageEmbed()
                        .setDescription('❗ Use ***h#selfnick*** instead !')
                        .setColor('RANDOM')
                    message.reply(embedNick)
                } else {

                    if (nick.split('').length > 32) {
                        message.reply('Length of the nickname must be shorter than or equal to 32')
                    } else {
                        member.setNickname(nick)
                        const embedNick = new Discord.MessageEmbed()
                            .setDescription(`*${target.username}*` + "'s nickname changed, " + `*${prevname}*` + " -> " + `***${nick}***`)
                            .setColor('RANDOM')
                        message.channel.send(embedNick)
                    }

                }

            } else {
                const embedNick = new Discord.MessageEmbed()
                    .setDescription('❌ You dont have the required permissions')
                    .setColor('RANDOM')
                message.channel.send(embedNick)
            }
        } else {
            const embedNick = new Discord.MessageEmbed()
                .setDescription('❌ Your command is wrong')
                .setColor('RANDOM')
            message.channel.send(embedNick)
        }
    }

    //h#selfnick
    if (message.content.startsWith('h#selfnick ')) {
        let messageArr = message.content.split(' ')
        if (messageArr.length > 1) {
            if (message.member.guild.me.hasPermission('CHANGE_NICKNAME')) {
                messageArr.shift()
                let selfnick = messageArr.join(' ')
                let target = message.author
                let member = message.guild.members.cache.get(target.id)
                if (selfnick.split('').length > 32) {
                    message.reply('Length of the nickname must be shorter than or equal to 32')
                } else {
                    member.setNickname(selfnick)
                    const embedNick = new Discord.MessageEmbed()
                        .setDescription(`*${target.username}*` + "'s nickname changed to -> " + `**${selfnick}**`)
                        .setColor('RANDOM')
                    message.channel.send(embedNick)
                }
            }
        } else {
            const embedNick = new Discord.MessageEmbed()
                .setDescription('❌ Your command is wrong')
                .setColor('RANDOM')
            message.channel.send(embedNick)
        }
    }

    //h#cal
    if (message.content.startsWith('h#cal ')) {
        let messageArr = message.content.split(' ')
        messageArr.shift()
        if (message.content.split(' ').length == 2) {
            let remove = parseInt(messageArr.join()).toString().split('').length
            let data = messageArr.join().split('')
            data.splice(0, remove)

            let operator = data.splice(0, 1).join()
            let number1 = parseInt(messageArr.join())
            let number2 = parseInt(data.join(''))

            if (number1 !== "" || number2 !== "" || number1 !== NaN || number2 !== NaN || number1 !== " " || number2 !== " ") {
                let operations = {
                    '+': number1 + number2,
                    '-': number1 - number2,
                    '*': number1 * number2,
                    '/': number1 / number2,
                    '%': number1 % number2,
                    '^': Math.pow(number1, number2)
                }
                let answer = operations[operator]

                const embedCal = new Discord.MessageEmbed()
                    .setDescription(`${number1} ${operator} ${number2} = ${answer}`)
                    .setColor('RANDOM')
                message.channel.send(embedCal)
            } else {
                const embedCal = new Discord.MessageEmbed()
                    .setDescription('❌ Values undefined !')
                    .setColor('RANDOM')
                message.channel.send(embedCal)
            }
        } else {
            const embedCal = new Discord.MessageEmbed()
                .setDescription('❌ Use the command properly, example, **a+b** not **a + b** !')
                .setColor('RANDOM')
            message.channel.send(embedCal)
        }
    }

    //ping
    if (message.content.startsWith('h#ping')) {
        message.channel.send('*Calculating...*').then((pingCalc) => {
            const ping = pingCalc.createdTimestamp - message.createdTimestamp
            pingCalc.edit(`${message.author}, Meri Aukaat: ${ping}ms`)
        })
    }

    //try
    if (message.content.startsWith("h#try")) {
        message.channel.send("```bot is offline```")
    }

})

client.login("ODI0OTc2NzUxNDMxNTE2MTcz.YF3NeA.fYC_LMmTXjIVM_NKpnT_8TOhGPs");
