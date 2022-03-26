"use strict"
// const mongoose = require('mongoose');
// const { MONGO_URI } = require('./config/index')
const axios = require('axios').default;
const cheerio = require('cheerio')
const cron = require('node-cron')
const Mongo = require('./database')

Mongo.connect()

// mongoose.connect(MONGO_URI, {useNewUrlParser: true});
const { BreakingNew } = require('./models')
//  se ejecura cada 4 hs la sacamos de crontab.guru
cron.schedule("* * * * * * ", async ()=> {

    const html = await axios.get("https://cnnespanol.cnn.com/");
    console.log('cron job executed');
    const $ = cheerio.load(html.data)
    const titles = $(".news__title")
    titles.each((index, element) => {
        const breakingNew = {
            title: $(element)
            .text()
            .toString(),
            link:$(element)
            .children()
            .attr("href")
        };

        BreakingNew.create([breakingNew]);
        console.log([breakingNew]);

    });
});






