import Layout from '../components/Layout'
import axios from 'redaxios'
import {CSVLink} from "react-csv";
import React from "react";

const headers = [
    {label: "Month", key: "monthName"},
    {label: "Date salary payment", key: "salaryPaymentDate"},
];



const IndexPage = ({data}) => {

    console.log(data)

    return (
        <Layout title="Home">
            <CSVLink
                headers={headers}
                data={data}
                filename={"payroll.csv"}
                className="btn btn-primary"
            >
                Download
            </CSVLink>
        </Layout>
    )
}

export default IndexPage;

export async function getServerSideProps(context) {
    let data;

    await axios.get(`http://localhost:3000/api/payments/remaining-payments`, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        data = response.data
    })

    return {
        props: {
            data: data.dates
        },
    };
}
