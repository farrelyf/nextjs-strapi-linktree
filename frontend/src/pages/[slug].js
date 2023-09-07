import { Inter } from "next/font/google";
import { getAllAccount, getSelectedAccount } from "@/api/services";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function SlugPage({ data }) {
  console.log(data);

  return (
    <main className={`flex min-h-screen max-w-2xl m-auto flex-col items-center p-4 pt-24 ${inter.className}`}>
      <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden mb-4">
        <Image className="relative" layout="fill" objectFit="cover" src={`${process.env.NEXT_PUBLIC_ASSET_URL}${data.attributes.photo.data.attributes.url}`} alt={data.attributes.fullname} />
      </div>
      <div className="flex flex-col items-center gap-2 w-full mb-12">
        <h3 className="font-bold text-2xl">{data.attributes.fullname}</h3>
        <p className="text-xl">{data.attributes.bio}</p>
      </div>
      <div className="flex flex-col items-center gap-8 w-full">
        {data.attributes.links.data.map((value, index) => {
          return (
            <a
              key={index}
              className="p-5 h-full w-full bg-gray-300 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100/30 hover:scale-105 transition-all ease-in-out cursor-pointer"
              href={value.attributes.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {value.attributes.title}
            </a>
          );
        })}
      </div>
    </main>
  );
}

export async function getStaticPaths() {
  const accounts = await getAllAccount();
  const dataAccounts = await accounts.data.data;

  const paths = dataAccounts.map((value) => {
    return {
      params: { slug: value.attributes.slug },
    };
  });

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const selectedAccount = await getSelectedAccount(params.slug);

  return {
    props: {
      data: selectedAccount.data.data[0],
    },
    revalidate: 10,
  };
}
