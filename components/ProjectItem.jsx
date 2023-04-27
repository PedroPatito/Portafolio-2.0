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
    // <div className=" flex flex-col items-center justify-center h-fit w-fit shadow-xl shadow-gray-400 rounded-xl p-4 group  dark:shadow-gray-700">
    <ClientOnly>
          <Card className="flex flex-col items-center w-96">
      <CardHeader color="blue" className="relative h-50">
        <Image
          src={backgroundImage}
          alt="img-blur-shadow"
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
        <h5 className="dark:text-white">{title}</h5>
        </Typography>
        <Typography
                color="blue-gray"
              >
                <p className="dark:text-white">{tecnologies}</p>
              </Typography>
        <Typography>
         <p className="dark:text-white">{description}</p> 
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
    // </div>
  );
};

export default ProjectItem;



//   function Example() {
//   return (
//     <Card className="w-96">
//       <CardHeader color="blue" className="relative h-56">
//         <img
//           src={backgroundImage}
//           alt="img-blur-shadow"
//           className="h-full w-full"
//         />
//       </CardHeader>
//       <CardBody className="text-center">
//         <Typography variant="h5" className="mb-2">
//         <h3>{title}</h3>
//         </Typography>
//         <Typography
//                 variant="h6"
//                 color="blue-gray"
//                 className="mb-2 flex items-center gap-2 font-medium"
//               >
//                 <p>{tecnologies}</p>
//               </Typography>
//         <Typography>
//           The place is close to Barceloneta Beach and bus stop just 2 min by
//           walk and near to where you can enjoy the main night life in
//           Barcelona.
//         </Typography>
//       </CardBody>
//       <CardFooter divider className="flex items-center justify-between py-3">
//         <Typography variant="small">$899/night</Typography>
//         <Typography variant="small" color="gray" className="flex gap-1">
//           <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
//           Barcelona, Spain
//         </Typography>
//       </CardFooter>
//     </Card>
//   );
// }

{/* <Image
        className="rounded-xl"
        src={backgroundImage}
        alt="project 1"
        width={450}
        height={450}
      />
      <div className=" flex flex-col items-center justify-center">
        <div className="inline-flex">
          <Popover open={openPopover} handler={setOpenPopover}>
            <PopoverHandler {...triggers}>
              <Button variant="text">More info</Button>
            </PopoverHandler>
            <PopoverContent {...triggers} className="max-w-[24rem]">
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 flex items-center gap-2 font-medium"
              >
                <h3>{title}</h3>
              </Typography>
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-2 flex items-center gap-2 font-medium"
              >
                <p>{tecnologies}</p>
              </Typography>

              <Typography variant="small" color="gray" className="font-normal">
                Frontend Developer • Major interest in Web Development:
                motivated to achieve measurable results, to deepen my knowledge
                and improve my skills.
              </Typography>
            </PopoverContent>
          </Popover>
        </div>
      </div> */}