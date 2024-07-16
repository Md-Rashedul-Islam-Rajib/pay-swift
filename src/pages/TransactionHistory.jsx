import React from 'react';

const TransactionHistory = () => {
    return (
        <section>
            <div>
            <h1 className="font-bold text-2xl md:text-5xl text-center">Transaction History</h1>
            </div>
            <div>
            <table className="w-full table-auto">
      <thead className="bg-gray-200">
        <tr>
          <th className="px-4 py-2">DATE & TIME</th>
          <th className="px-4 py-2">INVOICE NO.</th>
          <th className="px-4 py-2">TYPE</th>
          <th className="px-4 py-2">STATUS</th>
          <th className="px-4 py-2">AMOUNT</th>
        </tr>
      </thead>
      <tbody className='text-center'>
        <tr>
          <td className="border px-4 py-2">12 Mar, 2021 21:12</td>
          <td className="border px-4 py-2">21031200001</td>
          <td className="border px-4 py-2">Escrow</td>
          <td className="border px-4 py-2 text-green-500 font-bold">Paid</td>
          <td className="border px-4 py-2">1.5 DAG</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">11 Mar, 2021 12:18</td>
          <td className="border px-4 py-2">21031100001</td>
          <td className="border px-4 py-2">Escrow</td>
          <td className="border px-4 py-2 text-green-500 font-bold">Paid</td>
          <td className="border px-4 py-2">1 DAG</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">28 Jan, 2021 14:56</td>
          <td className="border px-4 py-2">21012800001</td>
          <td className="border px-4 py-2">POS</td>
          <td className="border px-4 py-2 text-red-500 font-bold">Expired</td>
          <td className="border px-4 py-2">1.304347 DAG<br/>0.9 EUR</td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
            </div>
        </section>
    );
};

export default TransactionHistory;