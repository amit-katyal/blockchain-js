// Blockchain Constructor
function Blockchain() {
  this.chain = []; // All the blocks that we create will be stored in this array
  this.newTransactions = []; // All the new transactions that are being created will be stored in this array
}

// Create a new block prototype
Blockchain.prototype.createNewBlock = function (
  nonce, // Random number generated that is used to prove that a block was created in a legitimate way using proofOfWork method
  previousBlockHash, // Hash of the previous block
  hash // Hash of the current block
) {
  // Create a new block object
  const newBlock = {
    index: this.chain.length + 1, // Index of the block
    timestamp: Date.now(), // Get the current time
    transactions: this.newTransactions, // All the new transactions that are being created will be stored in this array
    nonce: nonce, // Proof of work number
    hash: hash, // Hash of the current block (data from the new transactions)
    previousBlockHash: previousBlockHash, // Hash of the previous block
  };
  this.newTransactions = []; // Reset the newTransactions array to an empty array
  this.chain.push(newBlock); // Push the new block into the chain array (the new block is the last block in the chain)
  return newBlock; // Return the new block
};

module.exports = Blockchain; // Export the Blockchain constructor function so that we can use it in other files
