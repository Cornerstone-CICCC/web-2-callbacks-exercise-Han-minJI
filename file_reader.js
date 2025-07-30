const fs = require("fs");
const { json } = require("stream/consumers");

fs.readFile("./firstname.txt", "utf-8", (err, data1) => {
  fs.readFile("./lastname.txt", "utf-8", (err, data2) => {
    fs.readFile("./age.txt", "utf-8", (err, data3) => {
      fs.readFile("./hobbies.txt", "utf-8", (err, data4) => {
        const hobbies = JSON.parse(data4);
        console.log(
          `${data1} ${data2} is ${data3} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`,
        );
      });
    });
  });
});
