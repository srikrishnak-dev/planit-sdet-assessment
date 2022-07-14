const axios = require("axios");

async function getAvaliablePetCount() {
  try {
    const { data } = await axios.get(
      "https://petstore.swagger.io/v2/pet/findByStatus?status=available"
    );
    console.log(`The Number Of Avaliable Pets Are: ${data.length}`);
  } catch (error) {
    console.error(error);
  }
}

getAvaliablePetCount();
