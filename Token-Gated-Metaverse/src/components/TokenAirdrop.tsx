import React, { useState } from 'react'
import { Connection, PublicKey, VersionedTransaction, TransactionMessage, Keypair } from '@solana/web3.js';
import { createTransferInstruction, getAssociatedTokenAddress, createAssociatedTokenAccountInstruction } from '@solana/spl-token';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import Image from 'next/image';

const NewComponent = () => {
    const {publicKey} = useWallet();
    
    const [processing, setProcessing] = useState<boolean>(false);
    const [airdropDone, setAirdropDone] = useState<boolean>(false);

    
const TOKEN_MINT_ADDRESS = process.env.NEXT_PUBLIC_TOKEN_MINT || '';
const AIRDROP_AMOUNT = 10_000_00; 
const RECIPIENT_PUBLIC_KEY = publicKey?.toBase58() || '';


const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
const base58PrivateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY || '';
const senderKeypair = Keypair.fromSecretKey(bs58.decode(base58PrivateKey));

async function getOrCreateAssociatedTokenAccount(mint: any, owner: any, payer: any) {
    const ata = await getAssociatedTokenAddress(mint, owner);


    const accountInfo = await connection.getAccountInfo(ata);
    if (accountInfo === null) {
        const createATAInstruction = createAssociatedTokenAccountInstruction(
            payer,
            ata,
            owner,
            mint
        );
        return { ata, createATAInstruction };
    }
    return { ata };
}

async function handleAirdrop() {
    setProcessing(true)
    try {
        const fromWallet = senderKeypair.publicKey;
        const mintPublicKey = new PublicKey(TOKEN_MINT_ADDRESS);
        const recipientPublicKey = new PublicKey(RECIPIENT_PUBLIC_KEY);

        const { ata: senderATA } = await getOrCreateAssociatedTokenAccount(mintPublicKey, fromWallet, fromWallet);

        const { ata: recipientATA, createATAInstruction } = await getOrCreateAssociatedTokenAccount(mintPublicKey, recipientPublicKey, fromWallet);

        const instructions = [];

        if (createATAInstruction) {
            instructions.push(createATAInstruction);
        }

        const transferInstruction = createTransferInstruction(
            senderATA,
            recipientATA, 
            fromWallet, 
            AIRDROP_AMOUNT, 
        );

        instructions.push(transferInstruction);

        const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();

        const messageV0 = new TransactionMessage({
            payerKey: fromWallet,
            recentBlockhash: blockhash,
            instructions,
        }).compileToV0Message();

        const transaction = new VersionedTransaction(messageV0);


        transaction.sign([senderKeypair]);

        const signature = await connection.sendTransaction(transaction);
        console.log('Airdrop transaction sent with signature:', signature);

        const confirmationStrategy = {
            signature,
            blockhash,
            lastValidBlockHeight,
        };

        await connection.confirmTransaction(confirmationStrategy, 'confirmed');
        console.log('Airdrop successful!');
        setAirdropDone(true);
    } catch (error) {
        console.error('Airdrop failed:', error);
    }
}

  return (
    <div>
            <div className="bg-gray-800 text-white p-8 rounded-lg shadow-md max-w-xl mx-auto mt-8">
                <h2 className="text-3xl font-bold mb-6 text-center border-b-2 border-blue-500 pb-2">Get Free Baby Yoda Token Airdrop</h2>
                <div className="flex justify-center">
                    {processing ? (

                        !airdropDone ? (
                            <div className='w-full'>
                                <div className='h-1.5 w-full bg-pink-100 overflow-hidden'>
                                    <div className='animate-progress w-full h-full bg-pink-500 origin-left-right'></div>
                                </div>
                            </div>) : (<div><p className='font-bold text-2xl'>Airdrop Successfull</p></div>)

                    ) : (
                    <div>
                        <Image
                            alt=''
                            src="https://aws-star-wars.s3.ap-southeast-2.amazonaws.com/tokenImageBabyYoda.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAVWQLNPZN7BX22XKE%2F20251027%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T180617Z&X-Amz-Expires=360000&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkcwRQIgP%2FkxlVMyloqN7a%2F3nJoEd3GNnwOzXkquSzfksop3F%2FACIQDYfjk0uN%2FltoxRP%2Fp9Vo%2BN1GBNTUt7NWZjKQU5ZAaT4SrpAgir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDM5MTkzOTcxODc0NyIM1qX5hEVPaUUCWpm4Kr0C5NbFQ8onp5idqdh%2F%2F8XEbCKUhGILhv70JrmIK%2BqDuezsCHECxmh8as7BYvdXaPdcCHa7h8GyjIj4C%2FhLMz%2BfXgDp6MIPGrjqAfLJIrlxOBMPUO1G9D7Ne4EdgRDfzXjE88%2FKWZiJ84r4jHRDe%2F%2B6r9EcRVLnJ0jEDcxK0MjKEpKb9uIp6EPDkRH2tBXf%2BJGI8vgUbxi8dId4C7m%2F3uXiLpg9PvhC2Q3%2BOoWTTEFUrcd5pa9Pb3vWZ%2BzIiPM9NQi%2FS3BCeVf6Fc57GcfVxc1MLTI6bxCdk%2FnyJPX9e%2FjvWdFoZhtz1gu1agbfEHWxrMQnwzq3nuV%2Bcie3Q%2BilStz2d7YkghoWb%2BlTeOZWW8kkFEEuH7rYKp5cA%2F%2B%2FWoehLwLR57xnenmP2o0I9EcvIUyeTUTWmx9cNhdXri4sHxQw%2Bcb9xwY6rQKJZuuZ1RXAwn9v73WB5raUvBla5CcQDyGh0PMfjVrW2w9NPXsKy7CYJN%2F0Gb1FXlODfiaavfi2v2IMW5oegvDFWBdPqb3Q5GRFawe4y%2FeMYim3b2HL1HSh%2B5yD6cDSuHwmaeq0nXxmJPFR86ofC04FWJbxfbQVwyZwkunT1OalyIzs8ez4FBH3OqA4AXhmOxKHMRxMT4NdQ0yyhgshwfRvwcjJxFdV%2FHXjiSkbc%2FuLDyprm2PR1ym6Fb2XdBQIHedHtBddIPZxZ0QW5tSsAW8TXgappv4nPDeD9KeB7Vo8RcrBbLwwX1JdXo7e7fZCzp8IGNNyXdcXOCxEsqRM1oTzZoM3akvIv%2BVs%2FaeLU9ibqKNtlt8Y0h32jxsZfHjtjqpEdfWVXs5xTTtl2FXa&X-Amz-Signature=bd72581b0c2b2f514013984caec786c9aec10be007d09986f4103d40fb386717"
                            height={150}
                            width={150}
                            className='rounded-full border-4 border-gray-300 shadow-lg'
                        />
                        <br></br>

                    <button className='bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300' onClick={() => handleAirdrop()}>
                        <p className='text-white font-bold text-2xl'>Airdrop</p>
                    </button>
                    </div>)}
                </div>
            </div>
    </div>
  )
}

export default NewComponent