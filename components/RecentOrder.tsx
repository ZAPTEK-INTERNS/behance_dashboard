"use client"

import { Table } from "@mantine/core"
import Link from "next/link"

import { ordersTableData } from "@/lib/data"

export default function RecentOrder() {
  return (
    <section className="basis-[70%] rounded-md bg-white mb-5 shadow p-3">
      <div className="flex flex-row items-center justify-between border-b pb-1
      text-[#818891]">
        <h1>Recent Orders</h1>
        <Link href="orders/" className="cursor-pointer hover:text-[#5F6979]">See all</Link>
      </div>
      <section>
        <Table highlightOnHover className="w-full h-full">
          <Table.Thead>
            <Table.Tr className="bg-[#007AFF] text-white">
              <Table.Th>#Order No.</Table.Th>
              <Table.Th>Date</Table.Th>
              <Table.Th>Customer Name</Table.Th>
              <Table.Th>Price</Table.Th>
              <Table.Th>Status</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody mt="md">
            {ordersTableData.map(data => (
              <Table.Tr key={data.id}>
                <Table.Td>{data.orderNo}</Table.Td>
                <Table.Td>{data.date}</Table.Td>
                <Table.Td>{data.name}</Table.Td>
                <Table.Td>{data.price}</Table.Td>
                <Table.Td>
                  <span>{data.status}</span>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </section>
    </section>
  )
}