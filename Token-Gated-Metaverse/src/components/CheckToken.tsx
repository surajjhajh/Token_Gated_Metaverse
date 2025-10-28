import { useWallet } from '@solana/wallet-adapter-react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import NewComponent from './TokenAirdrop';
import TokenNotFound from './TokenNotFound';

const CheckToken = () => {
    const [tokenExists, setTokenExists] = useState<boolean>(false);
    const [showAirdropModel, setShowAirdropModel] = useState<boolean>(false);
    const [showErrorPopup, setShowErrorPopup] = useState<boolean>(false);
    const [checkingToken, setCheckingToken] = useState<boolean>(false);

    const [showMetverseCheck, setShowMetaverseCheck] = useState<boolean>(false);

    const router = useRouter();

    const {publicKey} = useWallet();

    const exists = 'yes';

    const apiURL = process.env.NEXT_PUBLIC_API_URL || '';
    const tokenMint = process.env.NEXT_PUBLIC_TOKEN_MINT || '';

    const checkUserToken = async () => {
        const formData = {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "getTokenAccountsByOwner",
            "params": [
            publicKey,
              {
                "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
              },
              {
                "encoding": "jsonParsed"
              }
            ]
          }
    
          try {
              const savedUserResponse = await fetch(apiURL, {
                method: "POST",
                body: JSON.stringify(formData)
            });

            const response = await savedUserResponse.json();

            let tokenFound = false;

            response.result.value.forEach((item: any) => {
                if(item.account.data.parsed.info.mint === tokenMint) {
                  tokenFound = true;
                    setTokenExists(true)
                    console.log("The Token Exists")

                    setCheckingToken(false);

                    setTimeout(() => {
                      setShowMetaverseCheck(true);

                      setTimeout(() => {
                        router.push('/metaverse')
                        localStorage.setItem('userToken', exists);
                      }, 2000);
                    });
                }
            });

            if(!tokenFound) {
              setShowErrorPopup(true)
              setCheckingToken(false)
            }

            
          }
          catch(error) {
            console.log('Error: ', error)
          }
        }

  return (
      <div>
        <div>
          <section className="relative overflow-hidden sm:grid sm:grid-cols-2">
            <div className="flex items-center p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="bg-black mx-auto max-w-xl text-center sm:text-left">
                <h1 className="bg-black text-4xl font-bold text-white md:text-4xl">
                  Welcome To the Star Wars Metaverse
                </h1>

                <h3 className="bg-black hidden text-white text-2xl md:mt-4 md:block">
                  <p className="text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-600 p-2 rounded-lg shadow-lg text-base">
                    Get exclusive access to the Metaverse for Star Wars fans
                  </p>
                  <br />
                  {checkingToken ? (<p>Checking Your Token</p>) : (<p>Check Your Token Now</p>)}
                </h3>

                <div className='mt-4 md:mt-8'>

                    {
                      checkingToken ? (
                        <div className='w-full'>
                          <div className='h-1.5 w-full bg-pink-100 overflow-hidden'>
                            <div className='animate-progress w-full h-full bg-pink-500 origin-left-right'></div>
                          </div>
                        </div>
                      ) : showMetverseCheck ? (
                        <div className='text-white'>
                          <Image
                            alt=''
                            src={"https://aws-star-wars.s3.ap-southeast-2.amazonaws.com/checkGIF.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAVWQLNPZN5QQ2Y5WZ%2F20251027%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T175813Z&X-Amz-Expires=360000&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkYwRAIgCvqaejL9413ccjRz7SfcjfvFewq66CGajZpUKes8wwoCIE%2FiYlktdNRcFKvIVCKgGgUwAem80hHDZRPnJbRYdYJoKukCCKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMzkxOTM5NzE4NzQ3IgyWa0GEUKMbm60hQzcqvQIYQ8Y3ekP9SJ19FA%2BgOkSS7JMCfEOly1M%2F0Ij2WbUATiA8JPOpKCXjm8AZcmtVbm8A8Kz%2Bvo%2Bnouu6f8iytebfnlX19ucQDbRKr86RpvE9j4hpWUCWU%2BpTPP8CNLJ9%2F9L5lq7hZyWlgAnZav6RtfejnJ5BG%2B0VvTdzG945x%2F8lus2QioVvyTel%2FDojEdjU6Z3mT6%2Bs41rjaxh3lqDCxg1%2BEm5kV2KtIc9yScdECNR3RmTK8oQBr23SU3yeifOxGmKj1xJyInpd%2BcBTOi7jIfmxD6QT9GCF6DNA2O8VbRpsxv2Z03ym9%2BdU%2B59CH%2BUHKveWLXBzQlwHsBZqzae8qwNx3PcVqfs44wfUvAkmH9iBmWAXFVsF80POptG%2B5lZ2QzECQqcvqJr732dPKZ0l09q2Ya2LiNd0ASrKHfc7zjD5xv3HBjquAnPZMbYNt6N0iazFNg9k4CeDeyHNF0EokfqHKLq5zgR4pd1CxVorlRI4JXhjeDZjmNvi6cQb79GgF10yababpz3Twlq7zLCQl3Mwk2UkVHH3oZMNxpOj7t2k4sAMQWPvm2rbLrRLf15wrH3rUE8gvGQGU81yteHO90EhrM%2BA7nLZ7w0pSu1RDuquYwUVvaWEab7mgm16iffE2gwZPvhG37ZWIOKgdXXIqwqge0tfTPF5E2DtMFJUZlirOr0M2WYzo1cejmDhmH9DPRFW4XUzgqupwg4LnpKtQbmw6pGFQQAMUv5E%2FPHBSwglULAWLHmiyJrWPwh1XnOPRgcvap33amLSGBZ6uYw%2Be74MbJLXmXxtND3yFg70cJA2AuRJXzLY%2F3aRhh%2BZWH%2BmKJaZWJqd&X-Amz-Signature=d7517b6f46084b4d793ee2ad250bb302db4d8432c9c4e5a11e1550b8a0f8dfe8"}
                            height={200}
                            width={200}
                          />
                        </div>
                      ) : (
                        <button
                          className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 font-bold text-xl"
                          onClick={() => {
                            setCheckingToken(true);
                            checkUserToken();
                          }}
                        >
                          Check Token Holding
                        </button>
                      )
                    }

                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                alt=""
                src="https://aws-star-wars.s3.ap-southeast-2.amazonaws.com/r2d2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAVWQLNPZNW3LWTL4V%2F20251027%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T180301Z&X-Amz-Expires=360000&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkgwRgIhAN9ndcd6HKbgle%2F2wZGCLzvzrVFjYEFGLCnskMnbuWhkAiEA0Z8wNfdFlyUUz9Q7InoJ2wI6GiYuP0AKFwRew0IuFn0q6QIIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwzOTE5Mzk3MTg3NDciDPwAOseqlSqKsW9n4Cq9AvH2UHN02u1XamA5ndhnsFbhbycVKD45cXrHskRXsc0pzp%2F17abyGEbVJ7IZiP%2Bz540xPB35Ym9OEdL4CH%2BE9PTmH7NNrBpwufutVtZQZWjxKUJvFzO5QXqCHWNBh2nA1abBAVvm8MOsKhf9SRRz88mw7dpMp%2BjFvcaAsxMdxGZ%2BzUW3p6bq6pkXSm1mRWELxMGgAU87FM5YbziB98I%2BIDgLVT89c9%2BCOwlIMxeZqPcjSqFE3wU7gWqAH3D1Tg9zFf4j9yxGufK%2FNyUb5LJTtJ2hLm3z7ot6njVAhFpwtMrxqyHi2hGmK7zNHKC%2F81fMIdfrQpIl2KLmR997xJVLxsvY94MgeLUbzJM5x%2BCSEiqZ1ccBi6KvGzXc3scGwHmKkR54M1WlA45%2BIPR2j9JxPsxYP5Ms13LK4XauGEoCMPnG%2FccGOqwCNn6Mj%2FHeSxx2IzhVeWm7sNOJR47mbl%2F1tlqbTjGj%2BZTrgw5aJk60gB6jfvV7%2BPN0MdZ1U2HEDfHBnVD%2BfXrzCT6rcWlZBChHGf7s4l3M1RzEIPYP1afDTiQgz%2Bcqv0mjChDthecRd91aNCK8o%2FRi9hnQuBgYGJ5piEawoBnKCVipFZWSAVX1iM2zF2EqveMPXVwvOLOejJNHKBs9E5v7PTrKWrFGEAPooqRAGnS3P1KUGw7qGvXVQ68n7rzPcZ5y3QgnycY8zicwGAFG50liUF2TAW8njP6KA2ZKFOQbA30%2Fr8jn31McreG1BSwMStDfy16r9%2BWx59f2CbmYl2cjKiVICCUSIKaP7AV0IS32VI8QxvVleX70efQ2UGEYsx8dC4MiXhFKc7QtZYXn&X-Amz-Signature=2e240fa56e945e69de5029218815ad0818d44f98564e3c71f09709c07cddf085"
                className="mx-auto"
                width={500}
                height={200}
              />
              <button
                className="bg-blue-700 px-3 py-1 absolute top-4 left-4 text-white font-bold text-xl font-[Orbitron] tracking-widest drop-shadow-md"
                onClick={() => setShowAirdropModel(true)}
              >
                Airdrop Baby Yoda Tokens
              </button>
            </div>
          </section>

          {showAirdropModel && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="relative bg-slate-700 p-4 rounded-lg shadow-lg max-w-md w-full">
                <button
                  className="absolute top-2 right-2 text-white text-4xl"
                  onClick={() => setShowAirdropModel(false)}
                >
                  X
                </button>
                <NewComponent />
              </div>
            </div>
          )}

          {showErrorPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="relative bg-slate-700 p-4 rounded-lg shadow-lg max-w-md w-full">
                <button
                  className="absolute top-2 right-2 text-white text-4xl"
                  onClick={() => setShowErrorPopup(false)}
                >
                  X
                </button>
                <TokenNotFound />
              </div>
            </div>
          )}


        </div>
      </div>
  )
}

export default CheckToken