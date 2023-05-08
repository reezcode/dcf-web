import { GetServerSideProps } from "next";
import prisma from "../../../../lib/prisma";
import { withSessionRoute } from "../../../../lib/config/withSession";


const getServerSideProps: GetServerSideProps = withSessionRoute(async ({ req }: { req: any; res: any; session: any }) => {
    const user = req.session.get('user');
    if (!user) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }
  
    const existingUser = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });
  
    if (!existingUser) {
      req.session.destroy();
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }
  
    return {
      props: {
        user: {
          id: existingUser.id,
          email: existingUser.email,
        },
      },
    };
});

export default getServerSideProps;