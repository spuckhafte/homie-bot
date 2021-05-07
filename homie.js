const Discord = require("discord.js");
const client = new Discord.Client();
const fetch = require("node-fetch");
const ms = require("ms");
const api = require("imageapi.js");
const request = require('request')


const gaali = [
    "madarchod", "bhenchod", "bhosdika", "fuck off", "chutia", "ullu ki jhaat", "chutiye ka pattha", "haramzyada", "bc", "mc",
    "haram ka pilla", "jhaatu", "kamine ka pattha", "kutte ka goo", "fuck", "gaandu", "gandu", "lavde", "randi", "gaand", "lavda", "rande",
    "chod", "lawde", "gandu", "mc", "bc", "bisi", "jhatu", "madarchod", "randi", "randwe", "loda", "bhen ka", "lode", "chutiye", "lund", "bsdk",
    "bhnchd", "bsdk", "m a d a r c h o d", "b h e n ch od", "Bhosdiwalo", "Fck", "B c", "M c", "B.   C", "B. C", "M.   C", "B.   C", "Madarchid", "F u c k", "chuda", "bhen", "madar", "fcuk", "Fkuck", "Beesee", "B‎C", "B.  C.", "bhsdk", "Bc", "bc", "Mc", "mc"
]

const pollReactions = (message) => {
    message.react("👍");

    setTimeout(() => {
        message.react("👎");
    }, 100);
};

client.on("ready", async() => {
    console.log("Connected as " + client.user.tag);

    client.user.setActivity("the мσση for 'h#help (caseSensitive)'", { type: "WATCHING" });

    client.guilds.cache.forEach((guild) => {
        console.log(guild.name);
        guild.channels.cache.forEach((channel) => {});
    });

    //automeme
    const memeChannel = client.channels.cache.get('834641898122903613');
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
                name: '`h#kick @someone`',
                value: 'Kicks the mentioned user !'
            }, {
                name: '** **',
                value: '** **'
            }, {
                name: '`h#addrole Role @someone`',
                value: 'Adds a certain Role for mentioned used !'
            }, {
                name: '** **',
                value: '** **'
            }, {
                name: '`h#remrole Role @someone`',
                value: 'Removes a certain Role for mentioned used !'
            }, {
                name: '** **',
                value: '** **'
            }, {
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
                name: '`h#tmute @someone Xs/m/h/days/y`',
                value: "Mutes @someone for 'X' seconds/minutes/hours/days/years !"
            }, {
                name: '** **',
                value: '** **'
            }, {
                name: "`h#warn @someone Reason`",
                value: "Warns @someone for a specific 'Reason'"
            }, {
                name: '** **',
                value: '** **'
            }, {
                name: "`h#nick @someone NickName`",
                value: "Changes the nickname of @someone to 'NickName' !"
            }, {
                name: '** **',
                value: '** **'
            }, {
                name: "`h#selfnick NickName`",
                value: "Changes the nickname of the author to 'NickName' !"
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
                name: "`h#cal num(operation)num`",
                value: "Performs operations on number (add,sub,pro,div,remainder, toThePower)' !"
            }, {
                name: '** **',
                value: '** **'
            }, {
                name: "`h#mean word`",
                value: "Output the meaning of the 'word'"
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
                name: "`h#pq category(if you need to filter questions)`",
                value: "Gives you a True/False question\nCategories: ***maths, science, gk, computer, gadget, music, sport, anime & cartoon***!"
            }, {
                name: '** **',
                value: '** **'
            }, {
                name: "`h#meme`",
                value: "Delivers you a meme from 'r/memes'"
            }, {
                name: '** **',
                value: '** **'
            }, {
                name: "`h#meme i`",
                value: "Delivers you a sort of indian meme from 'r/indianmemer'",
            }, {
                name: '** **',
                value: '** **'
            }, {
                name: "`h#pics`",
                value: "Delivers you a random pic from 'r/pics'"
            }, {
                name: '** **',
                value: '** **'
            }, {
                name: "`h#pics space`",
                value: "Delivers you a space related pic from 'r/SpacePorn'",
            }, {
                name: '** **',
                value: '** **'
            }, {
                name: "`h#spam spam_count(eg.10) spam_message(any message)`",
                value: "Spams **'any message'** **'10'** times!"
            }, {
                name: '** **',
                value: '** **'
            }, {
                name: "`h#insult @someone`",
                value: "Insults 'someone' with a punch-line!"
            })
            .setImage(
                "https://i.imgur.com/wSTFkRMhttps://cdn.discordapp.com/attachments/774279357576511509/825041729353678878/Screenshot_2021-03-26_at_3.40.56_PM.png.png"
            )
            .setTimestamp();
        message.channel.send(helpCommand);
    }


    //Moderaton Commands
    if (message.content.startsWith('h#kick')) {
        if (message.content.split(' ').length !== 1) {
            if (message.author !== message.mentions.users.first()) {
                if (message.member.guild.me.hasPermission('KICK_MEMBERS')) {
                    if (message.mentions.members.first().hasPermission('ADMINISTRATOR')) {
                        const embedKick = new Discord.MessageEmbed()
                            .setDescription(`❌ ${message.author.toString()}, you do not have the authority to Kick ${message.mentions.users.first().toString()}`)
                            .setColor('RANDOM')
                        message.channel.send(embedKick)
                    } else {
                        if (message.content.split(' ').length == 2) {
                            message.mentions.members.first().kick()
                            const embedKick = new Discord.MessageEmbed()
                                .setDescription(`✅  ${message.author.toString()}, Kicked ${message.mentions.users.first().toString()} \n**Reason: **not provided !`)
                                .setColor('RANDOM')
                            message.channel.send(embedKick)
                        } else if (message.content.split(' ').length >= 3) {
                            message.mentions.members.first().kick()
                            let arr = message.content.split(' ')
                            arr.splice(0, 2)
                            const embedKick = new Discord.MessageEmbed()
                                .setDescription(`✅  ${message.author.toString()}, Kicked ${message.mentions.users.first().toString()} \n**Reason:** ${arr.join()}!`)
                                .setColor('RANDOM')
                            message.channel.send(embedKick)
                        } else {
                            const embedKick = new Discord.MessageEmbed()
                                .setDescription(`❌ ${message.author.toString()}, your command is wrong !`)
                                .setColor('RANDOM')
                            message.channel.send(embedKick)
                        }
                    }
                } else {
                    const embedBan = new Discord.MessageEmbed()
                        .setDescription(`❌ ${message.author.toString()}, you do not have permission to Kick anyone`)
                        .setColor('RANDOM')
                    message.channel.send(embedBan)
                }
            } else {
                const embedBan = new Discord.MessageEmbed()
                    .setDescription(`❌ ${message.author.toString()}, you can't Kick yourself !`)
                    .setColor('RANDOM')
                message.channel.send(embedBan)
            }
        } else {
            const embedBan = new Discord.MessageEmbed()
                .setDescription(`❌ ${message.author.toString()}, your command is wrong !`)
                .setColor('RANDOM')
            message.channel.send(embedBan)
        }
    }

    if (message.content.startsWith('h#addrole')) {
        if (message.content.split(' ').length >= 3) {
            let arrr = message.content.split(' ')
            arrr.splice(0, 2)
            let newArrr = arrr.join()
            let newestArrr = newArrr.split('')
            newestArrr.splice(0, 3)
            newestArrr.pop()
            let check = newestArrr.join('')
            if (message.mentions.members.first().roles.cache.has(`${check}`)) {
                const embedRole = new Discord.MessageEmbed()
                    .setDescription(`❌ ${message.mentions.users.first().toString()}, already have this role !*`)
                    .setColor('RANDOM')
                message.channel.send(embedRole)
            } else {
                if (message.mentions.members.first().roles.cache.has('834439463038877733')) {
                    const embedRole = new Discord.MessageEmbed()
                        .setDescription('❌ You do not have permission to manage *' + message.mentions.users.first().toString() + '*')
                        .setColor('RANDOM')
                    message.channel.send(embedRole)
                } else {
                    if (!message.member.guild.me.hasPermission('MANAGE_ROLES')) {
                        const embedRole = new Discord.MessageEmbed()
                            .setDescription(`❌ ${message.author.toString()}, you do not have permission to manage roles !`)
                            .setColor('RANDOM')
                        message.channel.send(embedRole)
                    } else {
                        let arr = message.content.split(' ')
                        arr.splice(0, 2)
                        let newArr = arr.join()
                        let newestArr = newArr.split('')
                        newestArr.splice(0, 3)
                        newestArr.pop()
                        let newRole = newestArr.join('')

                        if (newRole == '835054935619534870' || newRole == '835055243909791764' || newRole == '832879649821294602' || newRole == '834441315760340992' || message.member.guild.me.hasPermission('ADMINISTRATOR')) {
                            let addRole = message.guild.roles.cache.find(
                                (role) => role.id = newRole
                            );
                            message.guild.members.cache.get(message.mentions.users.first().id).roles.add(addRole)
                            const embedRole = new Discord.MessageEmbed()
                                .setDescription(`✅ Role added for ${message.mentions.users.first().toString()} !`)
                                .setColor('RANDOM')
                            message.channel.send(embedRole)
                        } else {
                            const embedRole = new Discord.MessageEmbed()
                                .setDescription(`❌ ${message.author.toString()}, you can't add this role !`)
                                .setColor('RANDOM')
                            message.channel.send(embedRole)
                        }
                    }
                }
            }
        } else {
            const embedRole = new Discord.MessageEmbed()
                .setDescription(`❌  ${message.author.toString()}, your command is wrong !`)
                .setColor('RANDOM')
            message.channel.send(embedRole)
        }
    }

    if (message.content.startsWith('h#remrole')) {
        if (message.content.split(' ').length >= 3) {
            let arrr = message.content.split(' ')
            arrr.splice(0, 2)
            let newArrr = arrr.join()
            let newestArrr = newArrr.split('')
            newestArrr.splice(0, 3)
            newestArrr.pop()
            let check = newestArrr.join('')
            if (!message.mentions.members.first().roles.cache.has(`${check}`)) {
                const embedRole = new Discord.MessageEmbed()
                    .setDescription(`❌ ${message.mentions.users.first().toString()}, already does not have this role !*`)
                    .setColor('RANDOM')
                message.channel.send(embedRole)
            } else {
                if (message.mentions.members.first().roles.cache.has('834439463038877733')) {
                    const embedRole = new Discord.MessageEmbed()
                        .setDescription('❌ You do not have permission to manage *' + message.mentions.users.first().toString() + '*')
                        .setColor('RANDOM')
                    message.channel.send(embedRole)
                } else {
                    if (!message.member.guild.me.hasPermission('MANAGE_ROLES')) {
                        const embedRole = new Discord.MessageEmbed()
                            .setDescription(`❌ ${message.author.toString()}, you do not have permission to manage roles !`)
                            .setColor('RANDOM')
                        message.channel.send(embedRole)
                    } else {
                        let arr = message.content.split(' ')
                        arr.splice(0, 2)
                        let newArr = arr.join()
                        let newestArr = newArr.split('')
                        newestArr.splice(0, 3)
                        newestArr.pop()
                        let newRole = newestArr.join('')

                        if (newRole == '835054935619534870' || newRole == '835055243909791764' || newRole == '832879649821294602' || newRole == '834441315760340992' || message.member.guild.me.hasPermission('ADMINISTRATOR')) {
                            let addRole = message.guild.roles.cache.find(
                                (role) => role.id = newRole
                            );
                            message.guild.members.cache.get(message.mentions.users.first().id).roles.remove(addRole)
                            const embedRole = new Discord.MessageEmbed()
                                .setDescription(`✅ Role removed for ${message.mentions.users.first().toString()} !`)
                                .setColor('RANDOM')
                            message.channel.send(embedRole)
                        } else {
                            const embedRole = new Discord.MessageEmbed()
                                .setDescription(`❌ ${message.author.toString()}, you can't remove this role !`)
                                .setColor('RANDOM')
                            message.channel.send(embedRole)
                        }
                    }
                }
            }
        } else {
            const embedRole = new Discord.MessageEmbed()
                .setDescription(`❌  ${message.author.toString()}, your command is wrong !`)
                .setColor('RANDOM')
            message.channel.send(embedRole)
        }
    }

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

    if (message.content.startsWith("h#tmute")) {
        if (!message.mentions.members.first().hasPermission('ADMINISTRATOR')) {
            if (!message.mentions.members.first().roles.cache.some(role => role.name == 'Muted')) {
                const target = message.mentions.users.first()
                let slice = target.id.split("").length + 13
                let time = message.content.slice(slice)

                if (target) {
                    if (message.author == target) { message.channel.send(`${message.author}, you cant mute yourself !`) } else {
                        let muteRole = message.guild.roles.cache.find(role => role.name == "Muted")
                        let memberTarget = message.guild.members.cache.get(target.id)

                        memberTarget.roles.add(muteRole.id)
                        message.channel.send(`<@${memberTarget.user.id}> has been muted for ${time} !`)

                        setTimeout(function() {
                            memberTarget.roles.remove(muteRole.id)
                        }, ms(time))
                    }
                } else {
                    const tmuteErr = new Discord.MessageEmbed()
                        .setDescription('❌ Your command is wrong')
                        .setColor('RANDOM')
                    message.channel.send(tmuteErr)
                }
            } else {
                const target = message.mentions.users.first()
                let slice = target.id.split("").length + 13
                let time = message.content.slice(slice)
                const tmuteErr = new Discord.MessageEmbed()
                    .setDescription('✅   *' + message.mentions.users.first().toString() + '* is already Muted for ' + time)
                    .setColor('RANDOM')
                message.channel.send(tmuteErr)
            }
        } else {
            const tmuteErr = new Discord.MessageEmbed()
                .setDescription('❌ You do not have permission to mute *' + message.mentions.users.first().toString() + '*')
                .setColor('RANDOM')
            message.channel.send(tmuteErr)
        }
    }

    if (message.content.startsWith('h#warn ')) {
        if (message.mentions.users.first().id == message.author.id || !message.mentions.users.first() || message.mentions.users.first().id == '824976751431516173') {
            const embedWarn = new Discord.MessageEmbed()
                .setDescription(`❌ ${message.author.toString()}, please check the user you are mentioning !`)
                .setColor('RANDOM')
            message.channel.send(embedWarn)
        } else {
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
    }

    if (message.content.startsWith('h#nick ')) {
        let prevname = message.content.split(' ').splice(0, 2).join()
        let messageArr = message.content.split(' ')
        if (messageArr.length > 2) {
            if (message.mentions.members.first().roles.cache.has('834439463038877733')) {
                const embedNick = new Discord.MessageEmbed()
                    .setDescription('❌ You do not have permission to manage *' + message.mentions.users.first().toString() + '*')
                    .setColor('RANDOM')
                message.channel.send(embedNick)
            } else {
                messageArr.splice(0, 2)
                let nick = messageArr.join(' ')
                let target = message.mentions.users.first()
                let member = message.guild.members.cache.get(target.id)

                if (message.member.guild.me.hasPermission('MANAGE_NICKNAMES')) {
                    if (target == message.author) {
                        const embedNick = new Discord.MessageEmbed()
                            .setDescription('❗ Use `h#selfnick` instead !')
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
            }
        } else {
            const embedNick = new Discord.MessageEmbed()
                .setDescription('❌ Your command is wrong')
                .setColor('RANDOM')
            message.channel.send(embedNick)
        }
    }

    if (message.content.startsWith('h#selfnick ')) {
        let messageArr = message.content.split(' ')
        if (messageArr.length > 1) {
            if (message.author.id == '570540271008350231') {
                const embedNick = new Discord.MessageEmbed()
                    .setDescription(`❌ ${message.author.toString()}, I can't manage you, kindly do it yourself ! *`)
                    .setColor('RANDOM')
                message.channel.send(embedNick)
            } else {
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
            }
        } else {
            const embedNick = new Discord.MessageEmbed()
                .setDescription('❌ Your command is wrong')
                .setColor('RANDOM')
            message.channel.send(embedNick)
        }
    }

    //Utility Commands
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

    if (message.channel.id == "825667205689507881" || message.channel.id == "812678703649521735") {
        pollReactions(message);
    }
    if (message.content.startsWith("h#poll")) {
        message.delete();
        const fetched = await message.channel.messages.fetch({ limit: 1 });
        if (fetched && fetched.first()) {
            pollReactions(fetched.first());
        }
    }

    if (message.content.startsWith('h#avatar')) {
        if (message.content.split(' ').length == 2) {
            if (message.mentions.users.first()) {
                let user = message.mentions.users.first()

            } else {
                //unmention exception
            }
        }
        if (message.content.split(' ').length == 1) {
            //code for displaying avatar of the authoe
        }
        if (message.content.split(' ').length !== 1 && message.content.split(' ').length !== 2) {
            //wrong commmand
        }
    }

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
                const operations = {
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
                .setDescription('❌ Use the command properly !')
                .setColor('RANDOM')
            message.channel.send(embedCal)
        }
    }

    if (message.content.startsWith('h#mean')) {
        if (message.content.split(' ').length == 2) {
            let wordArr = message.content.split(' ')
            wordArr.shift()
            let word = wordArr.join()
            const fetch = require('node-fetch');
            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`, {
                    "method": "GET",
                    "mode": "cors"
                })
                .then(res => res.json())
                .then(res => {
                    let definition = res[0].meanings[0].definitions[0].definition
                    let example = res[0].meanings[0].definitions[0].example

                    if (definition !== undefined && example !== undefined) {
                        const embedMean = new Discord.MessageEmbed()
                            .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
                            .setTitle(word)
                            .setColor('RANDOM')
                            .setDescription(`Definition: ${definition} \nExample: ${example}`)
                        message.channel.send(embedMean)
                    } else if (definition !== undefined && example == undefined) {
                        const embedMean = new Discord.MessageEmbed()
                            .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
                            .setTitle(word)
                            .setColor('RANDOM')
                            .setDescription(`Definition: ${definition}`)
                        message.channel.send(embedMean)
                    } else if (definition == undefined && example !== undefined) {
                        const embedMean = new Discord.MessageEmbed()
                            .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
                            .setTitle(word)
                            .setColor('RANDOM')
                            .setDescription(`Example: ${example}`)
                        message.channel.send(embedMean)
                    } else {
                        const embedMean = new Discord.MessageEmbed()
                            .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
                            .setTitle(word)
                            .setColor('RANDOM')
                            .setDescription(`Sorry pal can't get you the meaning ${word}`)
                        message.channel.send(embedMean)
                    }
                })
        } else {
            const wordErr = new Discord.MessageEmbed()
                .setDescription("❌ Either your commands is wrong or I can't find your word !")
                .setColor('RANDOM')
            message.channel.send(wordErr)
        }
    }

    if (message.content.startsWith("h#s ")) {
        console.log(message.content.split(' '))
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
    mention = message.mentions.users.first();
    if (message.author == client.user) {
        return;
    }
    if (message.content.startsWith("h#g")) {
        if (
            message.channel.id == "834641815256039434"
        ) {
            if (mention == null) {
                const embedGaali = new Discord.MessageEmbed()
                    .setDescription(`❌ ${message.author.toString()}, Your command is wrong!`)
                    .setColor('RANDOM')
                message.channel.send(embedGaali)
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
            let embedGaali = new Discord.MessageEmbed()
                .setDescription(`❌ *${message.author.username}*, you can use that command only in \n<#834641815256039434>`)
                .setColor('RANDOM')
            message.delete();
            (await message.channel.send(embedGaali)).delete({ timeout: 5000 })
        }
    }

    if (message.author.bot) return;
    if (message.content.startsWith("h#pq")) {
        if (message.content.split(' ').length == 2) {
            let arr = message.content.split(' ')
            arr.splice(0, 1)
            let parameter = arr.join()
            console.log(parameter)
            const category = {
                'maths': '19',
                'science': '17',
                'gk': '9',
                'computer': '18',
                'gadget': '30',
                'music': '12',
                'sport': '21',
                'anime': '31',
                'cartoon': '32',
            }
            if (parameter !== 'maths' && parameter !== 'science' && parameter !== 'gk' && parameter !== 'computer' && parameter !== 'gadget' &&
                parameter !== 'music' && parameter !== 'sport' && parameter !== 'anime' && parameter !== 'cartoon') {
                const embedQuiz = new Discord.MessageEmbed()
                    .setDescription(`❌ *${message.author.username}*, either your selected category is wrong or that's a typo.\nAvailable Categories: ***maths, science, gk, computer, gadget, music, sport, anime & cartoon*** !`)
                    .setColor('RANDOM')
                message.channel.send(embedQuiz)
            } else {
                let quizCategory = category[parameter]
                const response = await fetch(
                    `https://opentdb.com/api.php?amount=1&category=${quizCategory}&type=boolean`
                );
                const data = await response.json();
                var length = data.results.length;
                var randomNumber = Math.floor(Math.random() * length);
                var randomQuestion = data.results[randomNumber];
                var question = randomQuestion.question;
                var correctAnswer = randomQuestion.correct_answer;

                const quizCommand = new Discord.MessageEmbed()
                    .setColor("#0008ff")
                    .setTitle(`${parameter.toUpperCase()} Quiz:`)
                    .setAuthor(
                        "Homie",
                        "https://cdn.discordapp.com/attachments/774279357576511509/825041729353678878/Screenshot_2021-03-26_at_3.40.56_PM.png"
                    )
                    .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 128 }))
                    .addFields({ name: "Instruction: ", value: "Answer - True or False" }, { name: "** **", value: "** **" }, { name: "**Question **", value: `${question}` })
                    .setFooter("You Have 1 minute")
                    .setImage(
                        "https://i.imgur.com/wSTFkRMhttps://cdn.discordapp.com/attachments/774279357576511509/825041729353678878/Screenshot_2021-03-26_at_3.40.56_PM.png.png"
                    );
                message.channel.send(quizCommand).then(async(quiz) => {
                    const filter = (m) => m.author.id === message.author.id;
                    const answer = await message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 60000,
                        errors: ["time", "max"],
                    });
                    const ans = answer.first();

                    if (ans.content.toLowerCase() === correctAnswer.toLowerCase()) {
                        const embedQuiz = new Discord.MessageEmbed()
                            .setDescription(`✅ *${message.author.username}*, that's **Correct**`)
                            .setColor('RANDOM')
                        quiz.edit(embedQuiz)
                    } else {
                        const embedQuiz = new Discord.MessageEmbed()
                            .setDescription(`❌ *${message.author.username}*, that's **Incorrect** !`)
                            .setColor('RANDOM')
                        quiz.edit(embedQuiz)
                    }

                    setTimeout(() => {
                        quiz.edit(embedQuizEdit)
                    }, 60000)
                })
            }
        } else if (message.content.split(' ').length == 1) {
            {
                const response = await fetch(
                    `https://opentdb.com/api.php?amount=50&difficulty=medium&type=boolean`
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
                    .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 128 }))
                    .addFields({ name: "Instruction: ", value: "Answer - True or False" }, { name: "** **", value: "** **" }, { name: "** Question **", value: `${question}` })
                    .setFooter("You Have 1 minute")
                    .setImage(
                        "https://i.imgur.com/wSTFkRMhttps://cdn.discordapp.com/attachments/774279357576511509/825041729353678878/Screenshot_2021-03-26_at_3.40.56_PM.png.png"
                    );
                const embedQuizEdit = new Discord.MessageEmbed()
                    .setDescription(`**Question TimeOut!**`)
                    .setColor('RANDOM')

                message.channel.send(quizCommand).then(async(quiz) => {
                    const filter = (m) => m.author.id === message.author.id;
                    const answer = await message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 60000,
                        errors: ["time", "max"],
                    });
                    const ans = answer.first();

                    if (ans.content.toLowerCase() === correctAnswer.toLowerCase()) {
                        const embedQuiz = new Discord.MessageEmbed()
                            .setDescription(`✅ *${message.author.username}*, that's **Correct**`)
                            .setColor('RANDOM')
                        quiz.edit(embedQuiz)
                    } else {
                        const embedQuiz = new Discord.MessageEmbed()
                            .setDescription(`❌ *${message.author.username}*, that's **Incorrect** !`)
                            .setColor('RANDOM')
                        quiz.edit(embedQuiz)
                    }

                    setTimeout(() => {
                        quiz.edit(embedQuizEdit)
                    }, 60000)
                })

            }
        } else {
            const embedQuiz = new Discord.MessageEmbed()
                .setDescription('❌ Use the command properly')
                .setColor('RANDOM')
            message.channel.send(embedQuiz)
        }
    }

    if (message.content.startsWith("h#meme")) {
        if (message.content.endsWith(" i")) {
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

    if (message.content.startsWith('h#insult')) {
        if (message.mentions.users.first()) {
            let insultSubject = message.mentions.users.first().toString()
            fetch('https://insult.mattbas.org/api/insult.json').then(response => {
                return response.json()
            }).then(data => {
                let insult = data.insult
                const embedInslt = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`${insultSubject}, ${insult}`)
                    .setColor('RANDOM')
                    .setThumbnail(message.mentions.users.first().displayAvatarURL({ dynamic: true, size: 128 }))
                message.channel.send(embedInslt)
            })
        } else {
            const embedInslt = new Discord.MessageEmbed()
                .setDescription('❌ Use the command properly')
                .setColor('RANDOM')
            message.channel.send(embedInslt)
        }
    }


    //bad words
    if (message.channel.id == "834641815256039434") {
        return;
    } else {
        let foundInText = false;
        for (var i in gaali) {
            if (message.content.toLowerCase().includes(gaali[i]))
                foundInText = true;
        }
        if (foundInText) {
            let embedBad = new Discord.MessageEmbed()
                .setDescription(`❌ *${message.author.username}*, you can only talk toxic in channel \n<#834641815256039434>`)
                .setColor('RANDOM')
            message.delete();
            (await message.channel.send(embedBad)).delete({ timeout: 5000 })
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

})


client.login(TOKEN);
