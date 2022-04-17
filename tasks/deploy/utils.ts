import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { ContractTransaction } from 'ethers';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

export const deploy = async <T>(
  hre: HardhatRuntimeEnvironment,
  contractName: string,
  signer: SignerWithAddress,
): Promise<T> => {
  const contractFactory = await hre.ethers.getContractFactory(
    contractName,
    signer,
  );
  console.log(`Deploying ${contractName}...`);
  const contract = await contractFactory.deploy();
  console.log(`tx: ${contract.deployTransaction.hash}`);
  await contract.deployed();
  console.log(`${contractName} deployed to: ${contract.address}`);
  return contract as unknown as T;
};

interface LogTransactionOptions {
  gas?: boolean;
}

const LogTransactionDefaults = {
  gas: true,
};

export const logTransaction = async (
  txnFunc: () => Promise<ContractTransaction>,
  options: LogTransactionOptions = {},
) => {
  const { gas } = { ...LogTransactionDefaults, ...options };

  const tx = await txnFunc();
  console.log(`\ntransaction pending...  ${tx.hash}`);

  const res = await tx.wait();

  console.log(`success!${gas ? ` gas used: ${res.gasUsed.toString()}` : ''}`);

  return res;
};

export const logBalance = async (
  hre: HardhatRuntimeEnvironment,
  address: string,
  message = 'balance',
) => {
  console.log(
    `${message}: ${hre.ethers.utils.formatEther(
      await hre.ethers.provider.getBalance(address),
    )}`,
  );
};
