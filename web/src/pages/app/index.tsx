import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useMeQuery } from "../../graphql/generated/graphql";
import { ssrGetProducts } from "../../graphql/generated/page";
import { withApollo } from "../../lib/withApollo";


function Home({data}) {
    const { user } = useUser()
    const {data: me} = useMeQuery()
    // const {data, error, loading} = useQuery(PRODUCT_QUERY)

    return (
        <div className="text-violet-500">
            <h1>Hello World</h1>
            <pre>
                OK: {JSON.stringify(me, null, 2)}
            </pre>
            <pre>
                {/* {JSON.stringify(data.products, null, 2)} */}
            </pre>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>

        </div>
    )
}

export const getServerSideProps = withPageAuthRequired({
    getServerSideProps: async (ctx) => {
        // return getServerPageGetProducts({}, ctx)
        return {
            props: {}
        }
    }
})

export default withApollo(
    ssrGetProducts.withPage()(Home)
)