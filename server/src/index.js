const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

//midle wares
app.use(express.json());
app.use(cors());

//all currencies
app.get("/getAllCurrencies", async(req, res)=>{
    const nameURL = "https://openexchangerates.org/api/currencies.json?app_id=23f3cc13db8e4e808a99c31260300f90";

    try{
        const namesResponce = await axios.get(nameURL);
        const nameData = namesResponce.data;

        return res.json(nameData);
    }catch(err){
        console.error(err);
    }

});

//get the target amount
app.get("/convert", async (req,res) => {
    const {date,
        sourceCurrency,
        targetCurrency,
        amountInSourceCurrency} = req.query;
        try{
            const dataUrl = `https://openexchangerates.org/api/historical/${date}.json?app_id=23f3cc13db8e4e808a99c31260300f90`;

            const dataResponce = await axios.get(dataUrl);
            const rates = dataResponce.data.rates;

            //rates
            const sourceRate = rates[sourceCurrency];
            const targetRate = rates[targetCurrency];

            //final target val
            const targetAmount = (targetRate/sourceRate)* amountInSourceCurrency;

            //calculate the target currency
            return res.json(targetAmount.toFixed(2)); 


        }catch(err){
            console.error(err);
        }
});

//listen to a port
app.listen(5000,()=>{
    console.log("SERVER STARTED");
});