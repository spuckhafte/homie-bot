const Discord = require("discord.js");
const ms = require("ms");

const client = new Discord.Client({ disableEveryone: true });

let strict_mode = false

const gaali = [
    // slangs
]

// argon spuckhafte ids:
let imp_ids = ['597718103442456576', '856184519442694154']

const deleteChannelId = '973246784853905498'

const pollReactions = (message) => {
    message.react("👍");

    setTimeout(() => {
        message.react("👎");
    }, 100);
};

client.on("ready", async () => {
    console.log("Connected as " + client.user.tag);

    client.user.setActivity("h#help (caseSensitive)", { type: "WATCHING" });
});

client.on("message", async (message) => {
    try {

        //help commands
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
                    name: "`h#h`",
                    value: "Outputs the 'Help Command' !"
                }, {
                    name: '** **',
                    value: '** **'
                }, {
                    name: "`#hmod`",
                    value: "Outputs the 'Moderator Help Command' !"
                }, {
                    name: '** **',
                    value: '** **'
                }, {
                    name: "`#hutil`",
                    value: "Outputs the 'Utility Help Command' !"
                }, {
                    name: '** **',
                    value: '** **'
                }, {
                    name: "`#hfun`",
                    value: "Outputs the 'Fun Help Command' !"
                })
                .setImage(
                    "https://i.imgur.com/wSTFkRMhttps://cdn.discordapp.com/attachments/774279357576511509/825041729353678878/Screenshot_2021-03-26_at_3.40.56_PM.png.png"
                )
                .setTimestamp();
            message.channel.send(helpCommand);
        }
        if (message.content.startsWith("#hmod")) {
            const helpCommand = new Discord.MessageEmbed()
                .setColor("#0008ff")
                .setTitle("Moderation Help Command:")
                .setAuthor(
                    "Homie",
                    "https://cdn.discordapp.com/attachments/774279357576511509/825041729353678878/Screenshot_2021-03-26_at_3.40.56_PM.png"
                )
                .setThumbnail(
                    "https://cdn.discordapp.com/attachments/774279357576511509/825041729353678878/Screenshot_2021-03-26_at_3.40.56_PM.png"
                )
                .addFields({
                    name: "`h#mute @someone`",
                    value: "Mutes @someone !"
                }, {
                    name: '** **',
                    value: '** **'
                }, {
                    name: "`h#unmute @someone`",
                    value: "Unmutes @someone !"
                }, {
                    name: '** **',
                    value: '** **'
                }, {
                    name: "`h#warn @someone Reason`",
                    value: "Warns @someone for a specific 'Reason'"
                }, {
                    name: '** **',
                    value: '** **'
                })
                .setImage(
                    "https://i.imgur.com/wSTFkRMhttps://cdn.discordapp.com/attachments/774279357576511509/825041729353678878/Screenshot_2021-03-26_at_3.40.56_PM.png.png"
                )
                .setTimestamp();
            message.channel.send(helpCommand);
        }
        if (message.content.startsWith("#hutil")) {
            const helpCommand = new Discord.MessageEmbed()
                .setColor("#0008ff")
                .setTitle("Utility Help Command:")
                .setAuthor(
                    "Homie",
                    "https://cdn.discordapp.com/attachments/774279357576511509/825041729353678878/Screenshot_2021-03-26_at_3.40.56_PM.png"
                )
                .setThumbnail(
                    "https://cdn.discordapp.com/attachments/774279357576511509/825041729353678878/Screenshot_2021-03-26_at_3.40.56_PM.png"
                )
                .addFields({
                    name: "`h#e something`",
                    value: "Sends an embed of your message while your command gets deleted !",
                }, {
                    name: "`h#cal equation`",
                    value: "Calculates the equation and gives the answer!\n`Operations : a+b, a-b, a*b, a/b, a^b, a%b\nFuncs: ln(num), log10(num), log(base, num), e(num), pi(num)\nTrigno: sin/cos/tan(rad), asin/acos/atan(num)\nTrigno-Conversions: degToRad(degree), radToDeg(radian)`",
                }, {
                    name: '** **',
                    value: '** **'
                }, {
                    name: "`h#rtsk any_task Xs/m/h/days/y`",
                    value: "Reminds you for your **Any_Task** after 'X' seconds/minutes/hours/days/years !",
                }, {
                    name: '** **',
                    value: '** **'
                }, {
                    name: "`h#poll`",
                    value: "Creates a poll with ```Thumbs Up and Thumbs Down Reactions``` for last sent message !",
                }, {
                    name: '** **',
                    value: '** **'
                }, {
                    name: "`h#s @MentionAnyUser something`",
                    value: "Sends 'something' to the mentioned user privately !",
                })
                .setImage(
                    "https://i.imgur.com/wSTFkRMhttps://cdn.discordapp.com/attachments/774279357576511509/825041729353678878/Screenshot_2021-03-26_at_3.40.56_PM.png.png"
                )
                .setTimestamp();
            message.channel.send(helpCommand);
        }
        if (message.content.startsWith("#hfun")) {
            const helpCommand = new Discord.MessageEmbed()
                .setColor("#0008ff")
                .setTitle("Fun Help Command:")
                .setAuthor(
                    "Homie",
                    "https://cdn.discordapp.com/attachments/774279357576511509/825041729353678878/Screenshot_2021-03-26_at_3.40.56_PM.png"
                )
                .setThumbnail(
                    "https://cdn.discordapp.com/attachments/774279357576511509/825041729353678878/Screenshot_2021-03-26_at_3.40.56_PM.png"
                )
                .addFields({
                    name: "`h#g @MentionAnyUser`",
                    value: "Delivers Gaali to mentioned user !"
                }, {
                    name: '** **',
                    value: '** **'
                }, {
                    name: "`h#g @MentionAnyUser del`",
                    value: "Delivers Gaali to mentioned user ; Your message will be deleted !"
                }, {
                    name: '** **',
                    value: '** **'
                }, {
                    name: "`h#spam spam_count(eg.10) spam_message(any message)`",
                    value: "Spams **'any message'** **'10'** times!"
                }, {
                    name: '** **',
                    value: '** **'
                })
                .setImage(
                    "https://i.imgur.com/wSTFkRMhttps://cdn.discordapp.com/attachments/774279357576511509/825041729353678878/Screenshot_2021-03-26_at_3.40.56_PM.png.png"
                )
                .setTimestamp();
            message.channel.send(helpCommand);
        }


        //Moderaton Commands
        if (message.content.startsWith("h#mute")) {
            if (!message.mentions.members.first().hasPermission('ADMINISTRATOR')) {
                if (!message.mentions.members.first().roles.cache.some(role => role.name == 'Muted')) {
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
                        const muteErr = new Discord.MessageEmbed()
                            .setDescription('❌ Your command is wrong')
                            .setColor('RANDOM')
                        message.channel.send(muteErr)
                    }
                } else {
                    const muteErr = new Discord.MessageEmbed()
                        .setDescription('✅   *' + message.mentions.users.first().toString() + '* is already Muted')
                        .setColor('RANDOM')
                    message.channel.send(muteErr)
                }
            } else {
                const muteErr = new Discord.MessageEmbed()
                    .setDescription('❌ You do not have permission to mute/unmute *' + message.mentions.users.first().toString() + '*')
                    .setColor('RANDOM')
                message.channel.send(muteErr)
            }
        }

        if (message.content.startsWith("h#unmute")) {
            if (message.mentions.members.first().roles.cache.some(role => role.name == 'Muted')) {
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
            } else {
                const muteErr = new Discord.MessageEmbed()
                    .setDescription('✅   *' + message.mentions.users.first().toString() + '* is already Unmuted')
                    .setColor('RANDOM')
                message.channel.send(muteErr)
            }
        }

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

        if (message.content.startsWith('h#purge ')) {
            if (!imp_ids.includes(message.author.id)) {
                message.reply('Gaand Mara, **Lwde**');
                return
            }
            let purge = message.content.split(' ')
            let purgeAmount = purge[1]
            if (!isNaN(purgeAmount) && purgeAmount !== '' && !purgeAmount.startsWith(' ') && parseInt(purgeAmount) > 0 && parseInt(purgeAmount) <= 10) {
                purgeAmount = parseInt(purgeAmount) + 1;
                message.channel.bulkDelete(purgeAmount)
            } else {
                if (parseInt(purgeAmount) > 5) message.channel.send('You can only purge up to 10 messages !')
            }
        }

        if (message.content.trim() === 'h#strict') {
            if (imp_ids[1] !== message.author.id) return
            strict_mode = !strict_mode
        }

        if (message.content.trim() === 'h#strict?') message.channel.send(strict_mode ? 'Its **ON**' : 'Its **OFF**')

        //Utility Commands
        if (message.content.startsWith('h#e')) {
            let body = message.content.slice(3)
            const randomEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 128 }))
                .setDescription(`From: <@${message.author.id}>`)
                .addFields({ name: '** **', value: `** ${body}**` },)
            message.delete()
            message.channel.send(randomEmbed)
        }

        if (message.content.startsWith('h#cal')) {
            let equation = message.content.split(' ');
            equation.shift();
            equation = equation.join(' ');

            let [answer, unit] = Maths(equation);

            message.channel.send(`\`${equation}\ = ${answer}${unit ? unit : ''}\``);
        }

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

                setTimeout(function () {
                    message.channel.send(
                        `${message.author}, **TIME FOR YOUR TASK: ${task}**`
                    );
                }, ms(time));
            } else {
                message.channel.send(`${message.author}, I think you missed **_** for your task. Eg. **'a_task' or 'task'**`)
            }
        }

        if (message.content.startsWith("h#poll")) {
            message.delete();
            const fetched = await message.channel.messages.fetch({ limit: 1 });
            if (fetched && fetched.first()) {
                pollReactions(fetched.first());
            }
        }

        if (message.content.startsWith("h#s ")) {
            if (message.content.split(' ').length < 3) {
                const embedSend = new Discord.MessageEmbed()
                    .setDescription('❌ Your command is wrong')
                    .setColor('RANDOM')
                message.channel.send(embedSend)
            } else {
                if (!message.mentions.users.first()) {
                    const embedSend = new Discord.MessageEmbed()
                        .setDescription('❌ No mention!')
                        .setColor('RANDOM')
                    message.channel.send(embedSend)
                } else {
                    let mentionArr = message.content.split(' ')
                    mentionArr.splice(0, 2)
                    message.mentions.users.first().send(`From:${message.author}\nMessage: **${mentionArr.join(' ')}**`);
                    message.delete()
                    const embedSend = new Discord.MessageEmbed()
                        .setDescription(`✅ Message sent to *${message.mentions.users.first().username}*!`)
                        .setColor('RANDOM')
                    message.channel.send(embedSend)
                }
            }
        }




        //Fun Commands
        const random = Math.floor(Math.random() * gaali.length);
        if (message.author == client.user) {
            return;
        }
        if (message.content.startsWith("h#g")) {
            let mention;
            if (message.mentions.users.first().id === imp_ids[1] && strict_mode && message.author.id !== imp_ids[1]) mention = message.author;
            else mention = message.mentions.users.first();
            
            if (mention == null) {
                const embedGaali = new Discord.MessageEmbed()
                    .setDescription(`❌ ${message.author.toString()}, Your command is wrong!`)
                    .setColor('RANDOM')
                message.channel.send(embedGaali)
            }
            if (mention.id == '971422575978749992') {
                message.channel.send(
                    `**Meri Shakal Mai Chutia Likha Hai ${message.author} ??**`
                );
            } else {
                if (message.content.includes("del")) {
                    message.channel.send(`**${gaali[random]}** ${mention}`);
                    message.delete();
                } else message.channel.send(`**${gaali[random]}** ${mention}`);
            }

        }

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
                    for (let i = 0; i < spamCount; i++) {
                        message.channel.send(spamMessage)
                    }
                } else {
                    message.channel.send(`${message.author}, you can spam atmost 5 times !`)
                }
            }
        }

        //ping
        if (message.content.startsWith('h#ping')) {
            message.channel.send('*Calculating...*').then((pingCalc) => {
                const ping = pingCalc.createdTimestamp - message.createdTimestamp
                pingCalc.edit(`${message.author}, Bot Latency: ${ping}ms`)
            })
        }


        //try
        if (message.content.startsWith("h#try")) {
            message.channel.send("```bot is online```")
        }
    } catch (e) {
        console.log(e)
    }
})


client.on('messageDelete', msg => {
    try {
        if (msg.channel.id === deleteChannelId) return
        const deletedMsg = msg.content;
        const deletedMsgChannel = client.channels.cache.find(channel => channel.id === deleteChannelId);
        let val = msg.attachments.values().next().value
        let img = val ? val.url : undefined;
        const embedGaali = new Discord.MessageEmbed()
            .setDescription(`❌ **Message sent by** ${msg.author.toString()} **got deleted in ${msg.channel.toString()}**`)
            .addFields({ name: `${img ? 'Attachement' : 'Message'} was:`, value: img ? img.toString() : `${deletedMsg}` })
            .setColor('RANDOM')
        deletedMsgChannel.send(embedGaali)
    } catch (e) {
        console.log(e)
    }
})

client.on('messageDeleteBulk', async messages => {
    try {
        if (messages.first().channel.id === deleteChannelId) return
        const length = messages.array().length;
        const channel = messages.first().channel.name;
        let keys = messages.map(m => m.id);
        const embed = new Discord.MessageEmbed()
            .setTitle(`${length} Messages purged in #${channel}`)
            .setDescription(messages.map((message, key) => {
                if (key !== keys[0]) return `[${message.author.tag.toString()}]: '${message.content}'`
            }))
            .setFooter(`${length - 1} messages deleted`)
            .setColor('RANDOM')
            .setTimestamp();

        (await client.channels.fetch(deleteChannelId)).send(embed);
    } catch (e) {
        console.log(e);
    }
})

client.on('messageUpdate', (oldMessage, newMessage) => {
    try {
        if (oldMessage.channel.id === deleteChannelId) return
        const deletedMsgChannel = client.channels.cache.find(channel => channel.id === deleteChannelId);
        const embedGaali = new Discord.MessageEmbed()
            .setDescription(`:warning: **Message sent by** ${oldMessage.author.toString()} **got updated in ${oldMessage.channel.toString()}**`)
            .addFields({ name: `Old Message:`, value: `${oldMessage.content}` })
            .addFields({ name: `New Message:`, value: `${newMessage.content}` })
            .setColor('RANDOM')
        deletedMsgChannel.send(embedGaali);
    } catch (e) {
        console.log(e)
    }
})


client.login('OTcxNDIyNTc1OTc4NzQ5OTky.YnKRxg.zMvJrP6yxRqSLf6SinX_KPDKkTg');


function Maths(equation) {

    const operators = {
        '+': (a, b) => [a + b],
        '-': (a, b) => [a - b],
        '*': (a, b) => [a * b],
        '/': (a, b) => [a / b],
        '^': (a, b) => [a ** b],
        '%': (a, b) => [a % b],
        'sin': (a) => [Math.round(Math.sin(a) * 1000) / 1000],
        'cos': (a) => [Math.round(Math.cos(a) * 1000) / 1000],
        'tan': (a) => [Math.round(Math.tan(a) * 1000) / 1000],
        'cosec': (a) => [Math.round(1 / Math.sin(a) * 1000) / 1000],
        'sec': (a) => [Math.round(1 / Math.cos(a) * 1000) / 1000],
        'cot': (a) => [Math.round(1 / Math.tan(a) * 1000) / 1000],
        'asin': (a) => [Math.round(Math.asin(a) * 1000) / 1000, 'rad'],
        'acos': (a) => [Math.round(Math.acos(a) * 1000) / 1000, 'rad'],
        'atan': (a) => [Math.round(Math.atan(a) * 1000) / 1000, 'rad'],
        'ln': (a) => [Math.round(Math.log(a) * 1000) / 1000],
        'log': (a, b) => [Math.round((Math.log(b) / Math.log(a)) * 1000) / 1000],
        'log10': (a) => [Math.round(Math.log10(a) * 1000) / 1000],
        'e': (a) => [Math.round(Math.exp(a) * 1000) / 1000],
        'pi': (a) => {
            let factor = a / Math.PI
            factor = Math.round(factor * 100) / 100
            return [`π*${factor}`]
        },
        'degToRad': (a) => {
            let radian = a * Math.PI / 180
            return [`${Math.round(radian * 100) / 100}, ${operators['pi'](radian)}`, 'rad']
        },
        'radToDeg': (a) => {
            let degree = a * 180 / Math.PI
            return [`${Math.round(degree)}`, 'deg']
        }
    }

    let equationArray = equation.split(/([\+\-\*\/\^\%\|\&\~\!\(\)\[\]\{\}])/);
    let equationArrayLength = equationArray.length;

    const toNum = num => {
        if (num.includes('m')) return -Number(num.replace('m', ''))
        else return Number(num)
    }

    try {
        if (equationArrayLength == 3) {
            let operator = equationArray[1];
            let a = toNum(equationArray[0]);
            let b = toNum(equationArray[2]);
            let ans = operators[operator](a, b);
            return Number.isNaN(ans[0]) ? ['Invalid Equation'] : ans;
        } else {
            let operator = equationArray[0];
            let num = equationArray[2];
            if (num.split(',').length == 2) {
                let a = toNum(num.split(',')[0]);
                let b = toNum(num.split(',')[1]);
                let ans = operators[operator](a, b);
                return Number.isNaN(ans[0]) ? ['Invalid Equation'] : ans;

            } else {
                let a = toNum(num);
                let ans = operators[operator](a);
                return Number.isNaN(ans[0]) ? ['Invalid Equation'] : ans;
            }
        }
    } catch (e) {
        return ['Invalid equation!']
    }

}
