import {auth, signIn, signOut} from "@/auth";
import {applyNextWorkerFixture} from "next/dist/experimental/testmode/playwright/next-worker-fixture";

const Page = async () => {
    const session = await auth();
    return (
        <div>
            {
                session ?
                    <div>
                        <div>{JSON.stringify(session)}</div>
                        <form action={async () => {
                            "use server";
                            await signOut();
                        }}>
                            <button type="submit">Sign Out</button>
                        </form>
                    </div>
                    :
                    <form action={async () => {
                        "use server";
                        await signIn();
                    }}>
                        <button type="submit">Login</button>
                    </form>
            }

        </div>
    )
}

export default Page;