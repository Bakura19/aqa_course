const axios = require("axios");
const Ajv = require("ajv");
const userSchema = require("../schemas/userSchema");
const errorSchema = require("../schemas/errorSchema");

const ajv = new Ajv()

// Test for GET request /api/v1/Users
describe("API test", () => {
  test("To check the following points in get request Users: status code 200, response body (data types), header (Content-type)", async () => {
    const response = await axios.get("https://fakerestapi.azurewebsites.net/api/v1/Users")
    expect(response.status).toBe(200)
    expect(response.headers).toHaveProperty("content-type")
    response.data.forEach(user => {
        expect(typeof user.id).toBe("number")
        expect(typeof user.userName).toBe("string")
        expect(typeof user.password).toBe("string")
        const validate = ajv.compile(userSchema);
        const valid = validate(user)
        expect(valid).toBe(true)
    });
  });
});
// Tests for POST requests /api/v1/Users

test("The positive test. To check response body, headers, status code", async () => {
  const response = await axios.post("https://fakerestapi.azurewebsites.net/api/v1/Users", {
  id:0,
  userName:"string",
  password:"string"
}, {
  headers: {
    "Content-Type": "application/json"
  }
})
  expect(response.status).toBe(200)
  expect(response.headers).toHaveProperty("content-type")
  expect(typeof response.data.id).toBe("number")
  expect(typeof response.data.userName).toBe("string")
  expect(typeof response.data.password).toBe("string")
  const validate = ajv.compile(userSchema)
  const valid = validate(response.data)
  expect(valid).toBe(true)
});

test("The negative test. To check 4** status code sending empty request body", async () => {
  try {
    await axios.post("https://fakerestapi.azurewebsites.net/api/v1/Users")
  } catch (error) {
    expect(error.response.status).toBe(415)
    expect(error.response.headers).toHaveProperty("content-type")
  }
});

test("The negative test. To check 4** status code sending incorrect data types in test data", async () => {
  try {
    await axios.post("https://fakerestapi.azurewebsites.net/api/v1/Users", {
      id: "A",
      userName: 2,
      password: 3
    })
  } catch (error) {
    expect(error.response).toBeDefined()
    expect(error.response.status).toBe(400)
    expect(error.response.headers).toHaveProperty("content-type")
  }
});

// Test for GET request /api/v1/Users/{id}

test("The positive test. To check response body, headers, status code", async () => {
  const response = await axios.get("https://fakerestapi.azurewebsites.net/api/v1/Users/1", {
  id:1,
  userName: "User1",
  password: "Password1"
}, {
  headers: {
    "Content-Type": "application/json"
  }
})
  expect(response.status).toBe(200)
  expect(response.headers).toHaveProperty("content-type")
  expect(response.data.id).toEqual(1)
  expect(response.data.userName).toEqual("User 1")
  expect(response.data.password).toEqual("Password1")
});

// Test for PUT request /api/v1/Users/{id}

test("The positive test. To update user info", async () => {
  const response = await axios.put("https://fakerestapi.azurewebsites.net/api/v1/Users/2", {
  id:4,
  userName: "testUserName",
  password: "testPassword"
}, {
  headers: {
    "Content-Type": "application/json"
  }
})
  expect(response.status).toBe(200);
  expect(response.headers).toHaveProperty("content-type")
  expect(response.data.id).toEqual(4);
  expect(response.data.userName).toEqual("testUserName");
  expect(response.data.password).toEqual("testPassword");
})


test("The negative test. To check 4** status code using unavailable method for this reqeust", async () => {
  try {
    await axios.post("https://fakerestapi.azurewebsites.net/api/v1/Users/2", {
      id: "test",
      userName: 111,
      password: 222
    })
  } catch (error) {
    expect(error.response.status).toBe(405)
  }
});

test("The negative test. To check 4** status code using incorrect data types for test data", async () => {
  try {
    await axios.put("https://fakerestapi.azurewebsites.net/api/v1/Users/2", {
      id: "test",
      userName: 111,
      password: 222
    })
  } catch (error) {
    expect(error.response.status).toBe(400)
  }
});


// Test for DELETE request /api/v1/Users/{id}

test("The positive test. To update user info", async () => {
  const response = await axios.delete("https://fakerestapi.azurewebsites.net/api/v1/Users/2", {
  id:11
})
  expect(response.status).toBe(200)
  expect(response.headers["content-length"]).toBe("0")
});