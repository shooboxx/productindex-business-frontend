import * as cookie from 'cookie'

export default function Home() {

  return (
    <>Hi</>
  );
}


export async function getServerSideProps(context) {
  const cookies = cookie.parse(context.req.headers.cookie);
  if (cookies['isLoggedIn']) {
      return {
        redirect: {
          destination: '/my-businesses',
          permanent: false,
        },
      }
  }
return {props: {}}
  // Pass data to the page via props
}