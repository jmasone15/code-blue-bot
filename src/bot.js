require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

// Create client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Ready Listener
client.on("ready", () => {
    console.log("Code Blue Bot is Online!");

    client.user.setActivity("I'm watching you Wazowski, always watching.", {type: "WATCHING"})
});

// Message Listener
client.on("messageCreate", message => {
    try {
        if (message.author.bot) return;

        // message.channel.send("blah blah blah blah blah blah blah");
        message.reply("blah blah blah blah blah blah blah");

        console.log("Replied to message creation.")
    } catch (err) {
        console.error(err)
    }
});

// Login and Turn on Bot
client.login(process.env.DISCORD_BOT_TOKEN);