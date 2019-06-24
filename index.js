const task = require('./task');

const { BASE_URL } = require('./config');

const firstChapterUrl = BASE_URL + '/204239.html';

task.crawl();

// task.processChapter(204242)