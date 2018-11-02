// const { toUnit } = require('../../utils/testUtils');

// const BalanceGiftr = artifacts.require('BalanceGiftr');
// contract('BalanceGiftr', async function(accounts) {
//   let havven, nomin, depot, balanceGiftr;

//   beforeEach(async function() {
//     // balanceGiftr = await BalanceGiftr.deployed();
//   });

//   const [deployerAccount, owner, address1, address2] = accounts;

//   it('should allow BalanceGiftr to set Depot Hav balance', async function() {
//     console.log(balanceGiftr.address);
//     // const balance = toUnit('1000000');
//     // const initialDepotBalance = await havven.balanceOf(depot.address);
//     // const initialAssociatedContract = await havvenTokenState.associatedContract();
//     // // Initial Depot balance should be 0
//     // assert.bnEqual(initialDepotBalance, 0);
//     // // Initial associated contract should be havven
//     // assert.equal(initialAssociatedContract, havven.address);
//     // // We unhook the TokenState contract from Havven, and replace it with BalanceGiftr
//     // await havvenTokenState.setAssociatedContract(balanceGiftr.address, {
//     //   from: owner,
//     // });
//     // // New associated contract should be balanceGiftr
//     // const associatedContract = await havvenTokenState.associatedContract();
//     // assert.equal(associatedContract, balanceGiftr.address);
//     // // We now set the Hav Depot balance
//     // await balanceGiftr.setHavBalance(depot.address, balance);
//     // // Final Depot balance should be equal to the amount we set
//     // const finalDepotBalance = await havven.balanceOf(depot.address);
//     // assert.bnEqual(finalDepotBalance, web3.utils.toBN(balance));
//   });

//   // it('should allow BalanceGiftr to set Depot Nomin balance', async function() {
//   // 	const balance = toUnit('5000000');
//   // 	const initialDepotBalance = await havven.balanceOf(depot.address);
//   // 	const initialAssociatedContract = await havvenTokenState.associatedContract();

//   // 	// Initial Depot balance should be 0
//   // 	assert.bnEqual(initialDepotBalance, 0);

//   // 	// Initial associated contract should be havven
//   // 	assert.equal(initialAssociatedContract, havven.address);

//   // 	// We unhook the TokenState contract from Havven, and replace it with BalanceGiftr
//   // 	await havvenTokenState.setAssociatedContract(balanceGiftr.address, { from: owner });

//   // 	// New associated contract should be balanceGiftr
//   // 	const associatedContract = await havvenTokenState.associatedContract();
//   // 	assert.equal(associatedContract, balanceGiftr.address);

//   // 	// We now set the Hav Depot balance
//   // 	await balanceGiftr.setHavBalance(depot.address, balance);

//   // 	// Final Depot balance should be equal to the amount we set
//   // 	const finalDepotBalance = await havven.balanceOf(depot.address);
//   // 	assert.bnEqual(finalDepotBalance, web3.utils.toBN(balance));
//   // });
// });
