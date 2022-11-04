import {NextApiRequest, NextApiResponse} from 'next'
import {PayrollService} from "../../../services/payroll.service";

const payrollService = new PayrollService();

const handler = (_req: NextApiRequest, res: NextApiResponse) => {

    const salaryDates = payrollService.getPaymentDatesSalaries();
    const bonusDates = payrollService.getPaymentDatesBonuses();

    res.status(200).send({dates: salaryDates});
}

export default handler
