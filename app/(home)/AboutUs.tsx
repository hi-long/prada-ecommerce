import Image from "next/image";
import React from "react";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <>
      <h3 className="text-3xl mb-3">About Us</h3>
      <div className="grid grid-cols-[repeat(2,1fr)]">
        <div className="">
          <h5 className="font-semibold text-xl mb-1">Business Name</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            optio ratione facere voluptates suscipit alias laborum ipsum porro
            earum obcaecati aliquam perspiciatis quo maiores corporis aut eius!
            Ut optio omnis recusandae totam quis! Doloribus velit illum quaerat,
            nemo vitae distinctio ratione fugit iure optio officiis dolores,
            molestiae voluptatum minima suscipit in exercitationem excepturi! Ex
            a nostrum non sequi error quos nemo, rem, consectetur magni at, fuga
            ad suscipit iusto. Fugiat illo, tempora corporis soluta eveniet
            recusandae. Ipsam, impedit, reiciendis enim repudiandae deserunt,
            debitis exercitationem ducimus aliquam architecto sequi modi hic
            recusandae reprehenderit inventore facilis ad voluptates. Similique
            temporibus alias nemo.
          </p>
          <h5 className="font-semibold text-lg mt-2">Contact Information</h5>
          <p>+00 999812344</p>
          <p>someemail@somedomain.com</p>
        </div>
        <div className="relative rounded-md overflow-hidden">
          <Image src={"https://random.imagecdn.app/720/720"} alt="Shop" fill />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
