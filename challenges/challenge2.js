function maxChar(string) {
  string = string.toLowerCase();
  const charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of string) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return { char: maxChar, count: charMap[maxChar] };
}

const { stdin, stdout } = process;

function prompt(question) {
  return new Promise((resolve, reject) => {
    stdin.resume();
    stdout.write(question);

    stdin.on("data", (data) => resolve(data.toString().trim()));
    stdin.on("error", (err) => reject(err));
  });
}

async function main() {
  try {
    const name = await prompt(
      "Please Enter The String You Want To to find the character that has the highest number of occurrences? "
    );
    const { char, count } = maxChar(name);
    console.log(
      `In The String '${name}' That Has The Highest Number Of Occurrences is : ${char}`
    );
    console.log(`The Character '${char}' Occurred ${count} Times`);
    stdin.pause();
  } catch (error) {
    console.log("There's an error!");
    console.log(error);
  }
  process.exit();
}

main();
