import { test, expect } from "@playwright/test";
import data__order__ from "@data/__project__(kebabCase)/__name__/test_data__order__.json";
import { allure } from "allure-playwright";
import getHeader from "@helpers/header-handler.js";
import * as dotenv from "dotenv";

test("[-] __case__(noCase)", async ({ request }) => {
    dotenv.config();

    allure.severity("__severity__");
    allure.feature("__feature__(titleCase)");
    allure.story("Negative");

    var header = new getHeader();

    const response = await request.post(`${process.env.__env__(constantCase)}__url__(noCase)`, {
        //change the getHeader parameter to match your API credential requirements (either using email or username to login)
        headers: await header.getHeader("username/email"),
        data: data__order__
    });

    // convert response to become more useable for assertion
    const bodyResponse = (await response.body()).toString();
    const bodyResponseToJson = JSON.parse(bodyResponse);

    //remove the console log if the test is already success (for debugging purposes)
    console.log(bodyResponseToJson);

    // assertion or expected result (you can customize the status and response expectation)
    expect(response.status()).toBe(400);
    // expect(bodyResponseToJson.status).toBe("fail");
});