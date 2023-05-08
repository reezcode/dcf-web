import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "../../../../lib/config/withSession";

export default withSessionRoute(async (req: NextApiRequest, res: NextApiResponse) => {
    const user = req.session.user;
    if(user) {
        res.json({
            isLoggedIn: true,
            ...user,
        });
    } else {
        res.json({
            isLoggedIn: false,
        })
    }
});
