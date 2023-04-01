import Layout from "../../components/utils/layout";
import Dashboard from "../../components/dashboard";
import DataBokingHistory from "../../components/table/databokinghistory";
export default function DashboardPage(){
    return(
        <Layout>
            <Dashboard/>
            <DataBokingHistory />
        </Layout>
    )
}