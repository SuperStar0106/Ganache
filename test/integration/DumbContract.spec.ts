import { expect } from "chai";
import { deployContract } from "./utils/web3Contracts";
import { BigNumber } from "bignumber.js";

import { DumbContract } from "./abis/DumbContract";
import { web3, accounts, GAS_LIMIT_STANDARD, createNewBlockchain } from "./web3";
import { rewrapBigNumbers, createBigNumberWrapper } from "../bigNumberUtils";

describe("DumbContract", () => {
  let contractAddress: string;

  beforeEach(async () => {
    contractAddress = (await deployContract("DumbContract")).address;
  });

  it("should allow for calling all methods", async () => {
    const dumbContract = await DumbContract.createAndValidate(web3, contractAddress);

    await dumbContract.countupTx(1).send({ from: accounts[0], gas: GAS_LIMIT_STANDARD });
    dumbContract.countupTx(1).getData();

    expect((await dumbContract.counter).toNumber()).to.be.eq(1);
    expect((await dumbContract.counterWithOffset(new BigNumber(2))).toNumber()).to.be.eq(3);
    expect(await dumbContract.SOME_VALUE).to.be.eq(true);

    await dumbContract.countupTx(2).send({ from: accounts[0], gas: GAS_LIMIT_STANDARD });
    expect((await dumbContract.counterArray(0)).toNumber()).to.be.eq(1);
    expect((await dumbContract.counterArray(1)).toNumber()).to.be.eq(3);

    expect(await dumbContract.someAddress).to.be.eq(accounts[0]);
  });

  it("should allow for calling payable methods", async () => {
    const dumbContract = await DumbContract.createAndValidate(web3, contractAddress);

    await dumbContract
      .countupForEtherTx()
      .send({ from: accounts[0], gas: GAS_LIMIT_STANDARD, value: 10 });

    expect((await dumbContract.counterArray(0)).toNumber()).to.be.eq(10);
  });

  it("should support sending tx via custom web3", async () => {
    const newBlockchain = await createNewBlockchain();
    const dumbContract = await DumbContract.createAndValidate(web3, contractAddress);

    await dumbContract
      .countupForEtherTx()
      .send(
        { from: newBlockchain.accounts[0], gas: GAS_LIMIT_STANDARD, value: 10 },
        newBlockchain.web3,
      );

    // this should reject because tx wasn't properly mined (contract doesn't exist on different chain)
    return expect(dumbContract.counterArray(0)).to.be.rejected;
  });

  it("should serialize numeric arguments", async () => {
    const dumbContract = await DumbContract.createAndValidate(web3, contractAddress);

    // this relies on internal web3 behavior introduced in 0.20
    expect((await dumbContract.counterWithOffset(5)).toString()).to.be.eq("5");
    expect((await dumbContract.counterWithOffset(new BigNumber(5))).toString()).to.be.eq("5");
  });

  it("should fail for not deployed contracts", () => {
    const wrongAddress = "0xbe84036c11964e9743f056f4e780a99d302a77c3";
    return expect(DumbContract.createAndValidate(web3, wrongAddress)).to.be.rejectedWith(
      Error,
      `Contract at ${wrongAddress} doesn't exist!`,
    );
  });

  describe.only("events", () => {
    it("should wait for event", async () => {
      const expectedAccount = accounts[0];
      const expectedValue = 10;

      const dumbContract = await DumbContract.createAndValidate(web3, contractAddress);
      await dumbContract
        .countupForEtherTx()
        .send({ from: expectedAccount, gas: GAS_LIMIT_STANDARD, value: expectedValue });

      const res = await dumbContract.onDeposit().watchFirst();

      expect(rewrapBigNumbers(res.args)).to.be.deep.eq({
        from: expectedAccount,
        value: createBigNumberWrapper(expectedValue),
      });
    });
  });
});

