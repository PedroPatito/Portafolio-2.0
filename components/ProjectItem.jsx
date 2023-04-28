import Image from "next/image";
import Link from "next/link";
import React from "react";

import ClientOnly from "./ClientOnly";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const ProjectItem = ({ title, backgroundImage, tecnologies, description, demo, code, disabled }) => {


  return (
    <ClientOnly>
          <Card className="flex flex-col items-center w-96">
      <CardHeader color="blue" className="relative h-50 ">
        <Image
          src={backgroundImage}
          alt="img-blur-shadow"
          className="h-full w-full "
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2 dark:text-white">
        {title}
        </Typography>
        <Typography
                color="blue-gray"
                className="dark:text-white"
              >
                {tecnologies}
              </Typography>
        <Typography className="dark:text-white">
        {description}
        </Typography>
      </CardBody>
      <CardFooter divider className="flex flex-row items-center justify-between py-3">
        <Typography variant="small">
        <Link href={demo} target="_blank">
          <button disabled={disabled} className="px-8 py-2 mt4 mr-8  dark:shadow-gray-700">Demo</button>
          </Link>
          <Link href={code} target="_blank">
          <button className="px-8 py-2 mt4 dark:shadow-gray-700">Code</button>
          </Link>
        </Typography>
        
      </CardFooter>
    </Card>
    </ClientOnly>
  );
};

export default ProjectItem;
