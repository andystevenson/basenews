const url = "http://127.0.0.1:4000/graphql";

const request = {
  method: "POST",
  body: JSON.stringify({
    query: `query PostCollection { 
              postCollection(first: 3) { 
                edges { 
                  node { 
                    title 
                    id 
                  } 
                } 
              } 
            }`,
  }),
  headers: {
    "content-type": "application/json",
    "x-api-key": "aaaa",
  },
};

const response = await fetch(url, request);
const data = await response.json();
console.log(data);
