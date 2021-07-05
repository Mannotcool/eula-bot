const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
// ================= START BOT CODE ===================
const Discord = require('discord.js');
const client = new Discord.Client();

const talkedRecently = new Set();


client.on('message', message => {
  if (talkedRecently.has(message.author.id)) {
      message.author.send("Wait 10 years before getting typing this again. (Set by OP) - " + message.author );
      return
  } else {
      if (message.channel.type === 'dm' && message.content === 'I agree to not take any in game drama into real life. I also agree that if Mannotcool (as the behalf of the Server Owner) bans me, I will not be upset, as I most defiantly broke a rule.') {
      message.author.send('Thanks, you have been added to the **Whitelist**');
      client.users.cache.get("524413766058639361").send(`<@${message.author.id}> has accepted the EULA`); 

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 2147483647);
    } else {
    if (message.channel.type === 'dm') {
      message.author.send('You have failed to provide **exactly** what was required, please go back to the message telling you to send me this, and copy and paste the sentance(s)');
    }
  }

  }

})

client.login(process.env.DISCORD_TOKEN);
