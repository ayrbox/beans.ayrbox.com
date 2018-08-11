import React from "react";
import Link from "gatsby-link";

const SecondPage = () => (
  <div>
    <h1>About me</h1>
    <p>
      I am NodeJS Developer @{" "}
      <a href="https://appliedblockchain.com/">Applied Blockchain</a>
    </p>

    <h3 className="mb-3 mt-5">Personal Summary</h3>
    <p>
      I am self-motivated curious full stack developer and a technology
      enthusiast. I am strong believer of open source. Developers are lazy so am
      I, so I follow DRY approach. I believe there is always room for
      improvement so I continuously seek innovative ways of doing things.
      developer, I seek for better solution for every problem.
    </p>
    <Link to="/">Back</Link>
  </div>
);

export default SecondPage;
