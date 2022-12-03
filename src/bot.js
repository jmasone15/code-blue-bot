require("dotenv").config();
const { Client, GatewayIntentBits, hideLinkEmbed } = require("discord.js");

// Create client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const prefix = "$";
let replyFlag = false;

// Ready Listener
client.on("ready", () => {
    console.log("Code Blue Bot is Online!");
    client.user.setActivity("I'm watching you Wazowski, always watching.", { type: "WATCHING" })
});

// Message Listener
client.on("messageCreate", async message => {
    // Ignore messages from bots
    if (message.author.bot) return;

    // Command messages for server owner
    if (message.content.startsWith(prefix) && message.guild.ownerId === message.author.id) {
        const command = message.content.slice(prefix.length).toUpperCase();

        try {

            if (command === "REPLYFLAG") {
                replyFlag = !replyFlag;
                message.reply(`Reply flag turned ${replyFlag ? "on" : "off"}`)
            } else {
                message.reply("Unkown command.")
            }

        } catch (err) {
            message.reply("An error has occurred, please contact server admin.")
            console.error(err);
        }

    } else {
        // Ignore messages from server owner
        if (message.guild.ownerId === message.author.id || !replyFlag) return;
        try {

            // message.channel.send("blah blah blah blah blah blah blah");
            message.reply("blah blah blah blah blah blah blah");   
            console.log("Replied to message creation.")

        } catch (err) {
            message.reply("An error has occurred, please contact server admin.")
            console.error(err);
        }
    }
});

// Login and Turn on Bot
client.login(process.env.DISCORD_BOT_TOKEN);