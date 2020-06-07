let handleWebHelloWorld = (req, res) => {
  return res.send("Hello SHAMU");  
};
let handleWebTestApi = (req, res) => {
    return res.json({
        message: "success",
        data: "hello shamuu"
    })
};
module.exports = {
    handleWebHelloWorld: handleWebHelloWorld,
    handleWebTestApi: handleWebTestApi
};