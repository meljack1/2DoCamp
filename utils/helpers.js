const { format, formatDistanceToNow, toDate } = require("date-fns");



module.exports = {
  format_date: (date) => {
    return format(new Date(date), "MM/dd/yyyy");
  },
  days_to_completion: (date) => {
    return formatDistanceToNow(new Date(date), { addSuffix: true });
  },

  generateQuote: () => {
    const quoteArr = [
        "Daniel White: I may not be there yet, but i'm closer than i was yesterday- Daniel White",
        "Viktorija: When the going gets tough, the tough get going! - Viktorija",
        "David Clegg: If you can fill the unforgiving minute; With sixty seconds’ worth of distance run, Yours is the Earth and everything that’s in it,And—which is more—you’ll be a Man, my son! -Rudyard Kipling",
        "Thomas Buckley: If you need inspiring words, don’t do it - Elon Musk",
        "Mohammad Zafar: Talk is cheap, show me the code. – Linus Torvalds",
        "Rahma: Progress not Perfection- Rahma",
        "Satpal: I’ve learned that you shouldn’t ‘go through life with a catcher’s mitt on both hands, you need to be able to throw something back! -Maya Angelou ",
        "Abdifatah: In order to succeed, we must first believe that we can.",
        "Mel: The world ends with you. If you want to enjoy life, expand your world. You gotta push your horizons out as far as they'll go. -The world ends with you",
        "Mustafa: Compare Yourself To Who You Were Yesterday, Not To Who Someone Else Is Today -Mustafa",
        "Paul: 1.The past cannot be changed,2.Opinions don’t define your reality,3.Everyone’s Journey is different,4.Things always get better with time,5.Judgements are a confession of character,6.Overthinking will lead to sadness,7.Happiness is found within,8.Positive thoughts creative positive things 9.You only fail if you quit",
        "Kevin:: no matter how difficult it may be, keep pushing through it, you’ll all make it. -Kevin",
      ];
        var randomIndex = Math.floor(Math.random() * quoteArr.length);
    return quoteArr[randomIndex];
    }
};
