import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="bg-black h-[150px] border-b border-gray-700 flex items-center justify-center">
      <div className="flex items-center space-x-4">
        <button onClick={() => router.push('/create-token')}>
          <Image
            alt="image"
            src="https://aws-star-wars.s3.ap-southeast-2.amazonaws.com/solana.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAVWQLNPZNW3LWTL4V%2F20251027%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T180407Z&X-Amz-Expires=360000&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkgwRgIhAN9ndcd6HKbgle%2F2wZGCLzvzrVFjYEFGLCnskMnbuWhkAiEA0Z8wNfdFlyUUz9Q7InoJ2wI6GiYuP0AKFwRew0IuFn0q6QIIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwzOTE5Mzk3MTg3NDciDPwAOseqlSqKsW9n4Cq9AvH2UHN02u1XamA5ndhnsFbhbycVKD45cXrHskRXsc0pzp%2F17abyGEbVJ7IZiP%2Bz540xPB35Ym9OEdL4CH%2BE9PTmH7NNrBpwufutVtZQZWjxKUJvFzO5QXqCHWNBh2nA1abBAVvm8MOsKhf9SRRz88mw7dpMp%2BjFvcaAsxMdxGZ%2BzUW3p6bq6pkXSm1mRWELxMGgAU87FM5YbziB98I%2BIDgLVT89c9%2BCOwlIMxeZqPcjSqFE3wU7gWqAH3D1Tg9zFf4j9yxGufK%2FNyUb5LJTtJ2hLm3z7ot6njVAhFpwtMrxqyHi2hGmK7zNHKC%2F81fMIdfrQpIl2KLmR997xJVLxsvY94MgeLUbzJM5x%2BCSEiqZ1ccBi6KvGzXc3scGwHmKkR54M1WlA45%2BIPR2j9JxPsxYP5Ms13LK4XauGEoCMPnG%2FccGOqwCNn6Mj%2FHeSxx2IzhVeWm7sNOJR47mbl%2F1tlqbTjGj%2BZTrgw5aJk60gB6jfvV7%2BPN0MdZ1U2HEDfHBnVD%2BfXrzCT6rcWlZBChHGf7s4l3M1RzEIPYP1afDTiQgz%2Bcqv0mjChDthecRd91aNCK8o%2FRi9hnQuBgYGJ5piEawoBnKCVipFZWSAVX1iM2zF2EqveMPXVwvOLOejJNHKBs9E5v7PTrKWrFGEAPooqRAGnS3P1KUGw7qGvXVQ68n7rzPcZ5y3QgnycY8zicwGAFG50liUF2TAW8njP6KA2ZKFOQbA30%2Fr8jn31McreG1BSwMStDfy16r9%2BWx59f2CbmYl2cjKiVICCUSIKaP7AV0IS32VI8QxvVleX70efQ2UGEYsx8dC4MiXhFKc7QtZYXn&X-Amz-Signature=2040662adc504e7a4e75ca189127e3a0e960a4b79f432ec94c07608ab2f69361"
            className="h-10"
            width={250}
            height={40}
          />
        </button>

        <Image
          alt=""
          className="pt-2"
          src="https://aws-star-wars.s3.ap-southeast-2.amazonaws.com/x.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAVWQLNPZN7BX22XKE%2F20251027%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T180439Z&X-Amz-Expires=360000&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkcwRQIgP%2FkxlVMyloqN7a%2F3nJoEd3GNnwOzXkquSzfksop3F%2FACIQDYfjk0uN%2FltoxRP%2Fp9Vo%2BN1GBNTUt7NWZjKQU5ZAaT4SrpAgir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDM5MTkzOTcxODc0NyIM1qX5hEVPaUUCWpm4Kr0C5NbFQ8onp5idqdh%2F%2F8XEbCKUhGILhv70JrmIK%2BqDuezsCHECxmh8as7BYvdXaPdcCHa7h8GyjIj4C%2FhLMz%2BfXgDp6MIPGrjqAfLJIrlxOBMPUO1G9D7Ne4EdgRDfzXjE88%2FKWZiJ84r4jHRDe%2F%2B6r9EcRVLnJ0jEDcxK0MjKEpKb9uIp6EPDkRH2tBXf%2BJGI8vgUbxi8dId4C7m%2F3uXiLpg9PvhC2Q3%2BOoWTTEFUrcd5pa9Pb3vWZ%2BzIiPM9NQi%2FS3BCeVf6Fc57GcfVxc1MLTI6bxCdk%2FnyJPX9e%2FjvWdFoZhtz1gu1agbfEHWxrMQnwzq3nuV%2Bcie3Q%2BilStz2d7YkghoWb%2BlTeOZWW8kkFEEuH7rYKp5cA%2F%2B%2FWoehLwLR57xnenmP2o0I9EcvIUyeTUTWmx9cNhdXri4sHxQw%2Bcb9xwY6rQKJZuuZ1RXAwn9v73WB5raUvBla5CcQDyGh0PMfjVrW2w9NPXsKy7CYJN%2F0Gb1FXlODfiaavfi2v2IMW5oegvDFWBdPqb3Q5GRFawe4y%2FeMYim3b2HL1HSh%2B5yD6cDSuHwmaeq0nXxmJPFR86ofC04FWJbxfbQVwyZwkunT1OalyIzs8ez4FBH3OqA4AXhmOxKHMRxMT4NdQ0yyhgshwfRvwcjJxFdV%2FHXjiSkbc%2FuLDyprm2PR1ym6Fb2XdBQIHedHtBddIPZxZ0QW5tSsAW8TXgappv4nPDeD9KeB7Vo8RcrBbLwwX1JdXo7e7fZCzp8IGNNyXdcXOCxEsqRM1oTzZoM3akvIv%2BVs%2FaeLU9ibqKNtlt8Y0h32jxsZfHjtjqpEdfWVXs5xTTtl2FXa&X-Amz-Signature=6fb3dfee245667bc37b532f98e929ee79706a13f6f94b5a1ac0f7c2169e9bdbe"
          height={250}
          width={40}
        />

        <Image
          alt=""
          className="pt-2"
          src="https://aws-star-wars.s3.ap-southeast-2.amazonaws.com/star.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAVWQLNPZN5QQ2Y5WZ%2F20251027%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T175459Z&X-Amz-Expires=360000&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkYwRAIgCvqaejL9413ccjRz7SfcjfvFewq66CGajZpUKes8wwoCIE%2FiYlktdNRcFKvIVCKgGgUwAem80hHDZRPnJbRYdYJoKukCCKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMzkxOTM5NzE4NzQ3IgyWa0GEUKMbm60hQzcqvQIYQ8Y3ekP9SJ19FA%2BgOkSS7JMCfEOly1M%2F0Ij2WbUATiA8JPOpKCXjm8AZcmtVbm8A8Kz%2Bvo%2Bnouu6f8iytebfnlX19ucQDbRKr86RpvE9j4hpWUCWU%2BpTPP8CNLJ9%2F9L5lq7hZyWlgAnZav6RtfejnJ5BG%2B0VvTdzG945x%2F8lus2QioVvyTel%2FDojEdjU6Z3mT6%2Bs41rjaxh3lqDCxg1%2BEm5kV2KtIc9yScdECNR3RmTK8oQBr23SU3yeifOxGmKj1xJyInpd%2BcBTOi7jIfmxD6QT9GCF6DNA2O8VbRpsxv2Z03ym9%2BdU%2B59CH%2BUHKveWLXBzQlwHsBZqzae8qwNx3PcVqfs44wfUvAkmH9iBmWAXFVsF80POptG%2B5lZ2QzECQqcvqJr732dPKZ0l09q2Ya2LiNd0ASrKHfc7zjD5xv3HBjquAnPZMbYNt6N0iazFNg9k4CeDeyHNF0EokfqHKLq5zgR4pd1CxVorlRI4JXhjeDZjmNvi6cQb79GgF10yababpz3Twlq7zLCQl3Mwk2UkVHH3oZMNxpOj7t2k4sAMQWPvm2rbLrRLf15wrH3rUE8gvGQGU81yteHO90EhrM%2BA7nLZ7w0pSu1RDuquYwUVvaWEab7mgm16iffE2gwZPvhG37ZWIOKgdXXIqwqge0tfTPF5E2DtMFJUZlirOr0M2WYzo1cejmDhmH9DPRFW4XUzgqupwg4LnpKtQbmw6pGFQQAMUv5E%2FPHBSwglULAWLHmiyJrWPwh1XnOPRgcvap33amLSGBZ6uYw%2Be74MbJLXmXxtND3yFg70cJA2AuRJXzLY%2F3aRhh%2BZWH%2BmKJaZWJqd&X-Amz-Signature=ee18a02da1739f956366e0942d814d37f10e6d2df594accfc88afd1dffa64ecf"
          height={200}
          width={200}
        />

        <Image
          alt=""
          className="pt-2"
          src="https://aws-star-wars.s3.ap-southeast-2.amazonaws.com/wars.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAVWQLNPZN5QQ2Y5WZ%2F20251027%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T175438Z&X-Amz-Expires=360000&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkYwRAIgCvqaejL9413ccjRz7SfcjfvFewq66CGajZpUKes8wwoCIE%2FiYlktdNRcFKvIVCKgGgUwAem80hHDZRPnJbRYdYJoKukCCKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMzkxOTM5NzE4NzQ3IgyWa0GEUKMbm60hQzcqvQIYQ8Y3ekP9SJ19FA%2BgOkSS7JMCfEOly1M%2F0Ij2WbUATiA8JPOpKCXjm8AZcmtVbm8A8Kz%2Bvo%2Bnouu6f8iytebfnlX19ucQDbRKr86RpvE9j4hpWUCWU%2BpTPP8CNLJ9%2F9L5lq7hZyWlgAnZav6RtfejnJ5BG%2B0VvTdzG945x%2F8lus2QioVvyTel%2FDojEdjU6Z3mT6%2Bs41rjaxh3lqDCxg1%2BEm5kV2KtIc9yScdECNR3RmTK8oQBr23SU3yeifOxGmKj1xJyInpd%2BcBTOi7jIfmxD6QT9GCF6DNA2O8VbRpsxv2Z03ym9%2BdU%2B59CH%2BUHKveWLXBzQlwHsBZqzae8qwNx3PcVqfs44wfUvAkmH9iBmWAXFVsF80POptG%2B5lZ2QzECQqcvqJr732dPKZ0l09q2Ya2LiNd0ASrKHfc7zjD5xv3HBjquAnPZMbYNt6N0iazFNg9k4CeDeyHNF0EokfqHKLq5zgR4pd1CxVorlRI4JXhjeDZjmNvi6cQb79GgF10yababpz3Twlq7zLCQl3Mwk2UkVHH3oZMNxpOj7t2k4sAMQWPvm2rbLrRLf15wrH3rUE8gvGQGU81yteHO90EhrM%2BA7nLZ7w0pSu1RDuquYwUVvaWEab7mgm16iffE2gwZPvhG37ZWIOKgdXXIqwqge0tfTPF5E2DtMFJUZlirOr0M2WYzo1cejmDhmH9DPRFW4XUzgqupwg4LnpKtQbmw6pGFQQAMUv5E%2FPHBSwglULAWLHmiyJrWPwh1XnOPRgcvap33amLSGBZ6uYw%2Be74MbJLXmXxtND3yFg70cJA2AuRJXzLY%2F3aRhh%2BZWH%2BmKJaZWJqd&X-Amz-Signature=9a368699e198c731264300af112147a79de57b5faa6bd4c3d52fa7a24f529bf1"
          height={250}
          width={200}
        />
      </div>
    </nav>
  );
};

export default Navbar;